import {BASE_PATHNAME, BLOG_BASE, CATEGORY_BASE, cleanSlug, createPath, TAG_BASE} from "~/utils/permalinks";
import { i18nLinks } from "~/content";
import {BLOG, SITE} from "~/config.mjs";

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


export const getPermalink = (slug = "", type = "page", locale = "de") => {
  const _slug = cleanSlug(slug);

  switch (type) {
    case "category":
      return createPath(BASE_PATHNAME, locale, CATEGORY_BASE, _slug);

    case "tag":
      return createPath(BASE_PATHNAME, locale, TAG_BASE, _slug);

    case "post":
      return createPath(
          BASE_PATHNAME,
          locale,
          BLOG.postsWithoutBlogSlug ? "" : BLOG_BASE,
          _slug
      );

    case "page":
    default:
      return createPath(BASE_PATHNAME, locale, _slug);
  }
};

export const getHomePermalink = () => {
  const permalink = getPermalink();
  return permalink !== "/" ? permalink + "/" : permalink;
};

export const getCanonical = (path = "") => new URL(path, SITE.origin);
