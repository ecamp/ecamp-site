import { glob, type Loader, type LoaderContext } from "astro/loaders";

type GlobOptions = Parameters<typeof glob>[0];

const createLocalePattern = (pathLocale: string) =>
  new RegExp(`(?<=[./])${pathLocale}(?=[./])`, "i");
const createPathIdPattern = (pathLocale: string) =>
  new RegExp(`(?=.+)\.${pathLocale}\.mdx?`, "gi");

function createSlug(props, locale: string) {
  return props.data.path ?? props.id.replace(createPathIdPattern(locale), "");
}

export const parseLocale = (
  path: string,
  locales: string[],
  defaultLocale: string,
) => {
  const localePattern = createLocalePattern(`(${locales.join("|")})`);
  const locale = path.match(localePattern)?.[0];

  return locale ? locale : defaultLocale;
};

export function i18nLoader(options: GlobOptions): Loader {
  const globLoader = glob(options);
  return {
    name: "i18n-loader",
    load: async (context: LoaderContext) => {
      const locales = ["en", "de"];
      const defaultLocale = "de";

      const parseData = context.parseData;
      const parseDataProxy: typeof parseData = (props) => {
        const locale = parseLocale(props.id, locales, defaultLocale);
        const translationId =
          (context.collection === "posts" ? "blog/" : "") +
          props.id.replace(createPathIdPattern(locale), "");
        return parseData({
          ...props,
          data: {
            ...props.data,
            locale,
            translationId,
            path: createSlug(props, locale),
          },
        });
      };
      context.parseData = parseDataProxy;
      await globLoader.load(context);
    },
  };
}
