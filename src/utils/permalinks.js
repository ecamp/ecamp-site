import { SITE, BLOG } from "~/config.mjs";

const trim = (str, ch) => {
  let start = 0,
    end = str.length;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

export const trimSlash = (s) => trim(trim(s, "/"));
export const createPath = (...params) =>
  "/" +
  params
    .filter((el) => !!el)
    .map((el) => el.replace(/^\/|\/$/g, ""))
    .join("/");

export const BASE_PATHNAME = trimSlash(SITE.basePathname);

export const cleanSlug = (text) => text;
//export const cleanSlug = (text) => slugify(trimSlash(text));

export const BLOG_BASE = cleanSlug(BLOG.slug);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.slug);
export const TAG_BASE = cleanSlug(BLOG?.tag?.slug);
