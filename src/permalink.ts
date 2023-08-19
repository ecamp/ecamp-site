import { BASE_PATHNAME, createPath } from "~/utils/permalinks";
import { i18nLinks } from "~/content";

export interface i18nLink {
  [key: string]: {
    [key: string]: string;
  };
}

export function getI18nLinksById(type, id) {
  if (id in i18nLinks[type]) {
    return i18nLinks[type][id];
  } else {
    return null;
  }
}

export function getI18nPermalink(i18nLinks, locale, fallbackLocale = "en") {
  if (!i18nLinks) {
    return createPath(BASE_PATHNAME, locale);
  } else if (locale in i18nLinks) {
    return createPath(BASE_PATHNAME, locale, i18nLinks[locale]);
  } else if (fallbackLocale in i18nLinks) {
    return createPath(BASE_PATHNAME, fallbackLocale, i18nLinks[fallbackLocale]);
  } else {
    return createPath(BASE_PATHNAME, locale);
  }
}

export function getLink(id, locale, type: "pages" | "posts" = "pages") {
  return getI18nPermalink(getI18nLinksById(type, id), locale);
}
