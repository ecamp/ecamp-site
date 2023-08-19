import { getImage } from "astro:assets";
import type {
  ImageQuality,
  ImageOutputFormat,
  ImageInputFormat,
  GetImageResult,
} from "astro";
import type { HTMLAttributes } from "astro/types";

export type FallbackImage = Pick<
  HTMLAttributes<"img">,
  "src" | "srcset" | "width" | "height" | "sizes"
>;

interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: ImageInputFormat;
}

export type SourceConfig = SourceConfigResolution | SourceConfigWidth;

interface BaseSourceConfig {
  media?: string;
  formats: string[];
}

interface SourceConfigResolution extends BaseSourceConfig {
  sourceType: "resolution";
  width: number;
  resolutions: number[];
}

interface SourceConfigWidth extends BaseSourceConfig {
  sourceType: "width";
  widths: number[];
  sizes: string;
  retina?: boolean;
  resolutions?: number[];
}

export interface PictureTransform {
  src: ImageMetadata;
  config: SourceConfig[];
  sizes?: string;
  quality?: ImageQuality | undefined;
  formats?: ImageOutputFormat[] | undefined;
  fallbackFormat?: ImageOutputFormat;
  imgOptions?: Record<any, any>;
}

interface PictureTransformResult {
  fallbackImage: FallbackImage;
  sources: HTMLAttributes<"source">[];
}

function getCacheKey(
  format: string,
  width: number,
  resolution: number = 1,
): string {
  return `${format}-${resolution * width}${resolution > 1 ? "l" : ""}`;
}

function getCacheResult(
  cache: { key: string; image: GetImageResult }[],
  format: string,
  width: number,
  resolution: number = 1,
): GetImageResult | undefined {
  return cache.find(({ key }) => key === getCacheKey(format, width, resolution))
    ?.image;
}

export async function getPicture({
  src,
  config,
  sizes,
  quality = "mid",
  fallbackFormat = "jpg",
  imgOptions = {},
}: PictureTransform): Promise<PictureTransformResult> {
  const fallbackImage: FallbackImage = {
    ...src
  };

  const genMap: Map<
    string,
    { format: string; width: number; quality?: string }
  > = new Map();
  config.forEach((conf) => {
    conf.formats.forEach((format) => {
      if (conf.sourceType === "resolution") {
        conf.resolutions.forEach((resolution) => {
          genMap.set(getCacheKey(format, conf.width, resolution), {
            format,
            width: resolution * conf.width,
            quality: "mid",
          });
        });
      }
      if (conf.sourceType === "width") {
        conf.widths.forEach((width) => {
          genMap.set(getCacheKey(format, width), { format, width });
          if (conf.retina) {
            conf.resolutions = [2]
          }
          if (conf.resolutions) {
            conf.resolutions
              .filter((r) => r !== 1)
              .forEach((resolution) => {
                genMap.set(getCacheKey(format, width * resolution), {
                  format,
                  width: width * resolution,
                  quality: resolution > 2 ? "low" :"mid",
                });
              });
          }
        });
      }
    });
  });
  const genImages: Promise<{ key: string; image: GetImageResult }>[] = [];
  debugger

  genMap.forEach((conf, key) => {
    genImages.push(
      (async () => ({
        key,
        image: await getImage({
          src,
          width: conf.width,
          format: conf.format,
          quality: conf.quality || "high",
          ...imgOptions,
        }),
      }))(),
    );
  });

  const genResults = await Promise.all(genImages);

  const sources: HTMLAttributes<"source">[] = [];

  for (const sourceConfig of config) {
    for (const format of sourceConfig.formats) {
      const source: HTMLAttributes<"source"> = {};

      if (sourceConfig.media) {
        source.media = sourceConfig.media;
      }
      source.type = `image/${format}`;

      if (sourceConfig.sourceType === "resolution") {
        for (const resolution of sourceConfig.resolutions) {
          const transformResult = getCacheResult(
            genResults,
            format,
            sourceConfig.width,
            resolution,
          );

          if (source.srcset === undefined) {
            source.srcset = "";
          } else {
            source.srcset += ",";
          }

          if (transformResult) {
            source.srcset += `${transformResult.src} ${resolution}x`;
          }
        }
      }

      if (sourceConfig.sourceType === "width") {
        const widths = sourceConfig.widths.map((w) => ({
          width: w,
          src: getCacheResult(genResults, format, w)?.src,
        }));
        if (sourceConfig.resolutions) {
          const resolutionsArr: any[] = [];
          sourceConfig.resolutions
            .filter((r) => r !== 1)
            .forEach((resolution) => {
              resolutionsArr.push(
                sourceConfig.widths.map((w) => ({
                  width: w * resolution,
                  src: getCacheResult(genResults, format, w * resolution)?.src,
                })),
              );
            });
          source.srcset = [...widths, ...resolutionsArr.flat()]
            .sort()
            .map(({ src, width }) => `${src} ${width}w`)
            .join(", ");
        } else if(sourceConfig.retina) {
          sourceConfig.resolutions = [2];
          const resolutionsArr: any[] = [];
          sourceConfig.resolutions
              .forEach((resolution) => {
                resolutionsArr.push(
                    sourceConfig.widths.map((w) => ({
                      width: w * resolution,
                      src: getCacheResult(genResults, format, w * resolution)?.src,
                    })),
                );
              });
          source.srcset = [...widths, ...resolutionsArr.flat()]
              .sort()
              .map(({ src, width }) => `${src} ${width}w`)
              .join(", ");
        } else {
          source.srcset = [...widths]
            .sort()
            .map(({ src, width }) => `${src} ${width}w`)
            .join(", ");
        }
        source.sizes = sourceConfig.sizes;
      }

      sources.push(source);
    }
  }

  return {
    fallbackImage,
    sources,
  };
}
