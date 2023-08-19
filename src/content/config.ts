// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const pageCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({image}) => z.object({
        title: z.string(),
        path: z.string().optional(),
        variant: z.string().optional(),
        image: image().optional(),
    }),
});

// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({image}) => z.object({
        title: z.string(),
        path: z.string().optional(),
        pubDate: z.date(),
        description: z.string(),
        image: image(),
        imageAlt: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'pages': pageCollection,
    'posts': postCollection,
};

export const languages = {
    de: {
        name: 'de',
        lang: 'de-CH',
        label: 'Deutsch',
    },
    en: {
        name: 'en',
        lang: 'en-US',
        label: 'English',
    }
}
