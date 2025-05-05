import {BLOG, SITE} from "~/config.mjs";

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

const trim = (str: string, ch?: string) => {
  let start = 0,
    end = str.length;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

export const trimSlash = (s) => trim(trim(s, "/"));
export const createPath = (...params: string[]) =>
  "/" +
  params
    .filter((el) => !!el)
    .map((el) => el.replace(/^\/|\/$/g, ""))
    .join("/");

export const BASE_PATHNAME = trimSlash(SITE.basePathname);

export const cleanSlug = (text) => text;

export const BLOG_BASE = cleanSlug(BLOG.slug);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.slug);
export const TAG_BASE = cleanSlug(BLOG?.tag?.slug);
