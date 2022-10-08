import rss from "@astrojs/rss";

import { SITE, BLOG } from "~/config.mjs";
import { getContent, getLink } from "~/utils/content";

export const get = async () => {
  if (BLOG.disabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  const posts = await getContent('posts');

  return rss({
    title: `${SITE.name}’s Blog`,
    description: SITE.description,
    site: import.meta.env.SITE,

    items: posts.map(({params, props}) => ({
      link: getLink(props.id, params.locale),
      title: props.contents.frontmatter.title,
      description: props.contents.frontmatter.description,
      pubDate: props.contents.frontmatter.pubDate,
    })),
  });
}