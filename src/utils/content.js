import { BASE_PATHNAME,createPath } from "./permalinks";

export const slugMap = new Map();

const getNormalizedPost = (post) => {
  const { frontmatter, compiledContent, file } = post;
  const ID = file.split("/").pop().split(".").shift();

  return {
    id: ID,

    pubDate: frontmatter.pubDate,
    draft: frontmatter.draft,

    canonical: frontmatter.canonical,
    i18nSlug: frontmatter.slug,

    title: frontmatter.title,
    description: frontmatter.description,
    body: compiledContent(),
    image: frontmatter.image,

    excerpt: frontmatter.excerpt,
    authors: frontmatter.authors,
    category: frontmatter.category,
    tags: frontmatter.tags,
  };
};

let slugs = {
  'blog': {
    de: 'blog',
    en: 'blog'
  }
};

const load = async function () {
  const posts = import.meta.glob("~/data/posts/**/*.md", {
    eager: true,
  });

  const regex =
    /\/src\/data\/posts\/(?<slug>.*?)(?:\.(?<locale>[a-z]{2}))?\.mdx?/;
  const normalizedPosts = Object.entries(posts)
    .filter(([key]) => {
      return !!key.match(regex)?.groups?.slug;
    })
    .map(async ([key, promisedPost]) => {
      const pathMeta = key.match(regex);
      const locale = pathMeta?.groups?.locale ?? "en";
      const slug = pathMeta?.groups?.slug ?? "/";
      const post = await promisedPost;

      return {
        params: {
          locale,
          slug,
        },
        props: {
          post: {
            ...getNormalizedPost(post),
            slug,
          },
        },
      };
    });

  const promisedPosts = await Promise.all(normalizedPosts);

  promisedPosts.forEach((post) => {
    if (Object.keys(slugs).includes(post.props.post.slug)) {
      slugs[post.props.post.slug][post.params.locale] =
        post.props.post.i18nSlug ?? true;
    } else {
      slugs[post.props.post.slug] = {
        [post.params.locale]: post.props.post.i18nSlug ?? true,
      };
    }
  });

  return promisedPosts
    .map(({ params, props }) => ({
      params,
      props: {
        ...props,
        i18nLinks: Object.fromEntries(
          Object.entries(slugs[props.post.slug]).filter(
            ([locale]) => locale !== params.locale
          )
        ),
      },
    }))
    .sort(
      (a, b) =>
        new Date(b.props.post.pubDate).valueOf() -
        new Date(a.props.post.pubDate).valueOf()
    )
    .filter((post) => !post.props.post.draft);
};

let _posts;

/** */
export const fetchPosts = async () => {
  _posts = _posts || (await load());

  return _posts;
};

export const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r, id) {
    posts.some(function (post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

const getNormalizedPage = async (post) => {
  const { frontmatter, compiledContent, file } = post;
  const ID = file.split("/").pop().split(".").shift();

  return {
    id: ID,
    variant: frontmatter.variant ?? "post",

    pubDate: frontmatter.pubDate,
    draft: frontmatter.draft,
    i18nSlug: frontmatter.slug,

    canonical: frontmatter.canonical,
    slug: frontmatter.slug || ID,

    title: frontmatter.title,
    description: frontmatter.description,
    body: compiledContent(),
    image: frontmatter.image,

    excerpt: frontmatter.excerpt,
    authors: frontmatter.authors,
    category: frontmatter.category,
    tags: frontmatter.tags,
  };
};

const getNormalizedMdx = async (post) => {
  const { frontmatter, file } = post;
  const ID = file.split("/").pop().split(".").shift();

  return {
    id: ID,
    variant: frontmatter.variant ?? "post",

    pubDate: frontmatter.pubDate,
    draft: frontmatter.draft,
    i18nSlug: frontmatter.slug,

    canonical: frontmatter.canonical,
    slug: frontmatter.slug || ID,

    title: frontmatter.title,
    description: frontmatter.description,
    body: post.default,
    image: frontmatter.image,

    excerpt: frontmatter.excerpt,
    authors: frontmatter.authors,
    category: frontmatter.category,
    tags: frontmatter.tags,
  };
};

const loadPages = async function () {
  const pages = await import.meta.glob("~/data/pages/**/*.{md,mdx}", {
    eager: true,
  });

  const regex =
    /\/src\/data\/pages\/(?<slug>.*?)(?:\.(?<locale>[a-z]{2}))?\.md(?<mdx>x)?/;
  const loadedPages = Object.entries(pages)
    .filter(([key]) => {
      return !!key.match(regex)?.groups?.slug;
    })
    .map(async ([key, promisedPost]) => {
      const pathMeta = key.match(regex);
      const locale = pathMeta?.groups?.locale ?? "en";
      let slug = pathMeta?.groups?.slug ?? "/";
      const slugParam = slug == "index" ? undefined : slug;
      const mdx = !!pathMeta?.groups?.mdx ?? false;
      const post = await promisedPost;

      return {
        params: {
          locale,
          slug: slugParam,
        },
        props: {
          post: {
            ...(await (!mdx
              ? getNormalizedPage(post)
              : getNormalizedMdx(post))),
            slug,
            mdx,
          },
        },
      };
    });

  const promisedPages = await Promise.all(loadedPages);

  promisedPages.forEach((post) => {
    if (Object.keys(slugs).includes(post.props.post.slug)) {
      slugs[post.props.post.slug][post.params.locale] =
        post.props.post.i18nSlug ?? true;
    } else {
      slugs[post.props.post.slug] = {
        [post.params.locale]: post.props.post.i18nSlug ?? true,
      };
    }
  });

  return promisedPages
    .map(({ params, props }) => ({
      params,
      props: {
        ...props,
        i18nLinks: Object.fromEntries(
          Object.entries(slugs[props.post.slug]).filter(
            ([locale]) => locale !== params.locale
          )
        ),
      },
    }))
    .sort(
      (a, b) =>
        new Date(b.props.post.pubDate).valueOf() -
        new Date(a.props.post.pubDate).valueOf()
    )
    .filter((post) => !post.props.post.slug || !post.props.post.draft);
};

let _pages;

/** */
export const fetchPages = async () => {
  _pages = _pages || (await loadPages());

  return _pages;
};

let _content;

/** */
export const getContent = async (type = "pages") => {
  _content = _content || loadContent();

  return (await _content).filter(({ props }) => props.type == type);
};

const loadContent = async function () {
  const content = await import.meta.glob("~/data/**/*.{md,mdx}", {
    eager: true,
  });

  const regex =
    /\/src\/data\/(?<type>pages|posts)\/(?<slug>.*?)(?:\.(?<locale>[a-z]{2}))?\.md(?<mdx>x)?/;

  const promisedContents = await Promise.all(
    Object.entries(content)
      .filter(([key]) => {
        return !!key.match(regex)?.groups?.slug;
      })
      .map(async ([key, promisedContent]) => {
        const pathMeta = key.match(regex);
        const {
          type,
          slug: id,
          locale,
          mdx,
        } = {
          type: "pages",
          slug: undefined,
          locale: "en",
          mdx: false,
          ...pathMeta.groups,
        };
        const rawPost = await promisedContent;
        const customSlug = getCustomSlug(rawPost.frontmatter?.slug, id);
        const slugParam = customSlug == "index" ? undefined : customSlug;

        generateI18nLinks(`${type == 'posts' ? 'blog/' : ''}${id}`, locale, getSlugForType(slugParam, type));

        return {
          params: {
            locale,
            slug: slugParam,
          },
          props: {
            contents: {
              frontmatter: rawPost.frontmatter,
              body: mdx ? rawPost.default : rawPost.compiledContent(),
              isMdx: mdx
            },
            type,
            id,
          },
        };
      })
  );

  return promisedContents
    .filter((content) => !content.props.draft)
    .map(({ params, props }) => {
      return {
        params,
        props: {
          ...props,
          i18nLinks: slugs[props.id],
        },
      };
    })
    .sort(({ props:a }, { props:b }) =>
      a.frontmatter?.pubDate && b.frontmatter?.pubDate
        ? new Date(b.frontmatter.pubDate).valueOf() -
          new Date(a.frontmatter.pubDate).valueOf()
        : 0
    );
};

function generateI18nLinks(id, locale, slug) {
  if (Object.keys(slugs).includes(id)) {
    slugs[id][locale] = slug;
  } else {
    slugs[id] = {
      [locale]: slug,
    };
  }
}

function getCustomSlug(frontmatterSlug, pathSlug) {
  if (frontmatterSlug?.startsWith("/")) {
    return frontmatterSlug;
  } else if (pathSlug.includes("/")) {
    return `${pathSlug.slice(0, pathSlug.lastIndexOf("/"))}/${frontmatterSlug}`;
  }
  return frontmatterSlug ?? pathSlug;
}

function getSlugForType(slug, type) {
  return type == "pages"
    ? slug == undefined
      ? undefined
      : `${slug}`
    : `/blog/${slug}`;
}

export function getLink(id, locale) {
  return getI18nPermalink(getI18nLinksById(id), locale);
}

export function getI18nPermalink(i18nLinks, locale, fallbackLocale = 'en') {
  if (!i18nLinks) {
    return createPath(BASE_PATHNAME, locale)
  } else if (locale in i18nLinks) {
    return createPath(BASE_PATHNAME, locale, i18nLinks[locale])
  } else if (fallbackLocale in i18nLinks) {
    return createPath(BASE_PATHNAME, fallbackLocale, i18nLinks[fallbackLocale])
  } else {
    return createPath(BASE_PATHNAME, locale)
  }
}

export function getI18nLinksById(id) {
  if (id in slugs) {
    return slugs[id];
  } else {
    return null;
  }
}