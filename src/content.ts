import { getCollection } from "astro:content";
import type { i18nLink } from "~/permalink";

const languageSlug = /(?<id>.*?)(?:\.(?<locale>[a-z]{2}))?\.md(?<mdx>x)?/;

const allBlogPosts = await getCollection("posts");

const links = {
  posts: {} as i18nLink,
  pages: { blog: { de: "blog", en: "blog" } } as i18nLink,
};

export interface DocumentInfo {
  id: string;
  locale: string;
  path: string;
  type: "posts" | "pages";
}

export const postsCollection = allBlogPosts
  .map((post) => {
    const { locale, id } = post.id.match(languageSlug)?.groups as {
      locale: string;
      id: string;
      mdx?: string;
    };
    return {
      params: {
        locale,
        path: post.data.path,
      },
      props: {
        ...post,
        document: {
          type: "posts",
          id,
          locale,
          path: post.data.path,
        } as DocumentInfo,
      },
    };
  })
  .sort(
    ({ props: propsA }, { props: propsB }) =>
      new Date(propsB.data.pubDate).getTime() -
      new Date(propsA.data.pubDate).getTime(),
  );
postsCollection.forEach(({ props }) => {
  links.posts[props.document.id] ??= {};
  links.posts[props.document.id][props.document.locale] =
    "blog/" + props.document.path;
});

/**
 * Pages
 */
const allPages = await getCollection("pages");
export const pagesCollection = allPages.map((post) => {
  const { locale, id, mdx } = post.id.match(languageSlug)?.groups as {
    locale: string;
    id: string;
    mdx?: string;
  };
  return {
    params: {
      locale,
      path: post.data.path,
    },
    props: {
      ...post,
      document: {
        type: "pages",
        id,
        locale,
        mdx,
        path: post.data.path,
      } as DocumentInfo,
    },
  };
});

pagesCollection.forEach(({ props }) => {
  links.pages[props.document.id] ??= {};
  links.pages[props.document.id][props.document.locale] = props.document.path;
});

export const i18nLinks = links;
