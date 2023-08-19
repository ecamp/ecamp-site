import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config.mjs";
import mdx from "@astrojs/mdx";
import remarkAttributes from "remark-attributes";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.origin,
  base: SITE.basePathname,
  output: "static",
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [
    {
      name: "netlify-redirects",
      hooks: {
        "astro:config:setup": ({ injectRoute }) => {
          injectRoute({
            pattern: "/_redirects",
            entryPoint: "./src/pages/_redirects.js",
          });
        },
      },
    },
    mdx({
      remarkPlugins: [[remarkAttributes,{ mdx: true }]],
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
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(), // partytown({
    //   config: { forward: ["dataLayer.push"] },
    // }),
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
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
