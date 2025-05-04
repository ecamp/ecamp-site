import { i18nStaticPaths } from "~/i18n/staticPaths.ts";
import { getCollection } from "astro:content";

export { i18nStaticPaths } from "./staticPaths.ts";

export function joinPath(...paths: Array<string | number | undefined>) {
  return paths.filter(Boolean).join("/");
}

export function resolvePath(...paths: Array<string | number | undefined>) {
  return `/${joinPath(...paths)}`;
}

const map = new Map<string,Record<string, string>>();
map.set('blog', {
  de: '/de/blog',
  en: '/en/blog',
})
i18nStaticPaths(await getCollection("posts"), "[...locale]/blog/[...path]").forEach(({props}) => {
  map.set(props.data.translationId, props.translations);
})
i18nStaticPaths(await getCollection("pages"), "[...locale]/[...path]").forEach(({props}) => {
  map.set(props.data.translationId, props.translations);
})

export function url(
  path: string,
  locale: string = "de",
) {
  const translations = map.get(path);
  if (translations) {
    if (locale in translations) {
      return translations[locale];
    } else {
      return translations[0];
    }
  } else {
    throw new Error(`No translation found for path: ${path}`);
  }
}
