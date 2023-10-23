/*!
 * generate-feed.ts v1.0.0
 *
 * https://github.com/equk/
 *
 * Copyright (c) 2023 B.Walden. All rights reserved.
 *
 * Licensed under the MIT License
 *
 * (LICENSE file should be included with script)
 */
import type { FeedOptions, Item } from "feed";
import { Feed } from "feed";
import { postsCollection } from "~/content";
import { SITE } from "~/config.mjs";
import { getPermalink, getCanonical } from "~/permalink";

const year = +new Date().getFullYear();

/*
 * Build Feed From Posts
 */

export function getStaticPaths() {
  return [
    { params: { locale: "de", slug: "rss" } },
    { params: { locale: "en", slug: "rss" } },
    { params: { locale: "de", slug: "feed" } },
    { params: { locale: "en", slug: "feed" } },
  ];
}

export const get = async ({ params }) => {
  /*
   * Main Feed Options
   */
  const options: FeedOptions = {
    title: SITE.title,
    description: SITE.description,
    id: `${SITE.origin}/${params.locale}/blog`,
    link: `${SITE.origin}/${params.locale}/blog`,
    language: `${params.locale}-CH`,
    copyright: `copyright ${year} eCamp Core Team`,
    author: {
      name: "eCamp Core Team",
      link: "https://ecamp3.ch/",
    },
    favicon: SITE.origin + "/favicon.ico",
    image: SITE.origin + "/social.png",
    feedLinks: {
      atom: `${SITE.origin}/${params.locale}/feed.xml`,
      rss: `${SITE.origin}/${params.locale}/rss.xml`,
    },
  };

  // Map over array of blog post files
  const posts: any[] = await Promise.all(
    postsCollection
      .filter(({ params: postParams }) => params.locale === postParams.locale)
      .map(({ params, props }) => {
        const date = new Date(props.data.pubDate);
        // Generate excerpt from content
        // Return data + add extra fields
        return {
          title: props.data.title,
          date: new Date(props.data.pubDate),
          link: getCanonical(getPermalink(params.path, "post", params.locale)).toString(),
          description: props.data.description,
        };
      }),
  );
  // Sort posts
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  // Generate feed
  const feed = new Feed(options);
  // Add post items
  posts.forEach((item: Item) => feed.addItem(item));
  // Check output directory exists

  return { body: params.slug == "feed" ? feed.atom1() : feed.rss2() };
};
