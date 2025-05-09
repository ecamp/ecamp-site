import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import { SITE } from "./src/config.mjs";
import mdx from "@astrojs/mdx";
import remarkAttributes from "remark-attributes";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import playformInline from "@playform/inline";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const options = process.env.NODE_ENV === "development" ? { redirects: { "/": "/de" } } : {};

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.origin,
  base: SITE.basePathname,
  output: "static",
  integrations: [
    {
      // workaround for netlify redirects
      name: "custom-hooks",
      hooks: {
        "astro:config:setup": ({ injectRoute }) => {
          injectRoute({
            pattern: "/_redirects",
            entrypoint: "src/pages/_redirects.ts",
            prerender: true,
          });
        },
      },
    },
    mdx({
      remarkPlugins: [[remarkAttributes, { mdx: true }]],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { ariaHidden: "true", class: "anchor" },
            content: fromHtmlIsomorphic("<span>🔗</span>"),
          },
        ],
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    playformCompress({
      CSS: false,
      Image: false,
    }),
    playformInline(),
  ],
  markdown: {
    remarkPlugins: [remarkAttributes],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: { ariaHidden: "true", class: "anchor" },
          content: fromHtmlIsomorphic("<span>🔗</span>"),
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
  image: {
    domains: ["astro.build"],
  },
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
  ...options,
});
