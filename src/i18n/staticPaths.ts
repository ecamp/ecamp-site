import { z } from "astro/zod";
import type { CollectionEntry, CollectionKey } from "astro:content";
import {
  checkI18nLoaderCollection,
  type DocumentInfo,
  type i18nLoaderSchema,
} from "~/i18n/schema.ts";
import {
  buildPath,
  parseRoutePattern,
  type Segments,
  type SegmentTranslations,
} from "~/i18n/utils.ts";

function getSegmentTranslations(
  data: z.infer<typeof i18nLoaderSchema> & Record<string, string | unknown>,
  segmentTranslations?: SegmentTranslations,
): Segments {
  const segments: Segments = {
    locale: data.locale as string,
  };
  if (data.path !== "index") {
    segments.path = data.path as string;
  }
  if (segmentTranslations && data.locale in segmentTranslations) {
    for (const key in segments) {
      segments[key] = data[key] as string;
    }
  }
  return segments;
}

type ExtendedCollectionEntry<T extends CollectionEntry<CollectionKey>> = T & {
  translations: Record<string, string>;
  translatedPath: string;
  document: DocumentInfo;
};

export function i18nStaticPaths<
  Item extends CollectionEntry<CollectionKey>,
  Collection extends Array<Item>,
>(
  collection: Collection,
  routePattern: string,
  segmentTranslations?: SegmentTranslations,
) {
  checkI18nLoaderCollection(collection);
  const route = parseRoutePattern(routePattern);

  route.forEach((segment, index) => {
    if (
      segment.param &&
      segment.value !== "locale" &&
      index !== route.length - 1
    ) {
      throw new Error(`No slugs found for route segment ${segment.value}`);
    }
  });

  return collection.map((entry) => {
    const { translationId } = entry.data;
    const entryTranslations = collection.filter(
      (e) => e.data.translationId === translationId,
    );
    const translations = entryTranslations.reduce(
      (previous, current) => {
        return {
          ...previous,
          [current.data.locale]: buildPath(
            route,
            getSegmentTranslations(current.data, segmentTranslations),
          ),
        };
      },
      {} as Record<string, string>,
    );

    const params = getSegmentTranslations(entry.data, segmentTranslations);
    const translatedPath = buildPath(route, params);

    return {
      params,
      props: {
        ...entry,
        translations,
        translatedPath,
        document: {
          id: entry.id,
          locale: params.locale,
          path: entry.data.path,
          type: entry.collection,
          translations,
        },
      } as ExtendedCollectionEntry<Item>,
    };
  });
}
