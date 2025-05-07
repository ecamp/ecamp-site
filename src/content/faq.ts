import { getCollection, render } from "astro:content";

const entries = await getCollection("faq");

export const faqEntries = async (locale: string) =>
  await Promise.all(entries
    .filter((entry) => entry.data.locale === locale)
    .map(async (entry) => ({
      Content: (await render(entry)).Content,
      data: entry.data,
    })));
