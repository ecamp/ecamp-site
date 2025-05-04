// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { i18nLoader } from "~/i18n/loader";
import { extendI18nLoaderSchema } from "~/i18n/schema.ts";

// 2. Define a `type` and `schema` for each collection
const pages = defineCollection({
    loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/pages", generateId: ({entry}) => entry }),
    schema: ({image}) => extendI18nLoaderSchema(z.object({
        title: z.string(),
        path: z.string().optional(),
        fullwidth: z.boolean().optional(),
        description: z.string().optional(),
        image: image().optional(),
        imageAlt: z.string().optional(),
    })),
});

// 2. Define a `type` and `schema` for each collection
const posts = defineCollection({
    loader: i18nLoader({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts", generateId: ({entry}) => entry }),
    schema: ({image}) => extendI18nLoaderSchema(z.object({
        title: z.string(),
        path: z.string().optional(),
        pubDate: z.date(),
        description: z.string(),
        image: image(),
        imageAlt: z.string().optional(),
    })),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    pages,
    posts,
};
