import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { i18nStaticPaths } from "~/i18n";

const collectionMap = new Map<string, Record<string, string>>();
const pages = i18nStaticPaths(
  await getCollection("pages"),
  "[...locale]/[...path]",
);
pages.forEach(({ props }) => {
  collectionMap.set(props.data.translationId, props.translations);
});

let redirects = `### NETLIFY REDIRECTS
/coc /en/code-of-conduct 302 Language=en
/coc /de/verhaltenskodex 302 Language=de
/coc /de/verhaltenskodex 301

/closed-beta /en/blog/beta-version 302 Language=en
/closed-beta /de/blog/beta-version 302 Language=de

/blog /en/blog 302 Language=en
/blog /de/blog 302 Language=de
/blog /de/blog 301

### GENERATED REDIRECTS
[REPLACE]
### END OF GENERATED REDIRECTS

/blog/* /en/:splat 302 Language=en
/blog/* /de/:splat 302 Language=de

/*/tos /en/tos 302

/* /en/:splat 302 Language=en
/* /de/:splat 302 Language=de
`;

redirects = redirects.replace(/\[REPLACE]/g, () =>
  [
    ...collectionMap.entries().map(([url, newUrls]) =>
      ("de" in newUrls
        ? [
            ...Object.entries(newUrls)
              .filter(([locale]) => locale !== "de")
              .map(
                ([locale, newUrl]) => `${url} ${newUrl} 302 Language=${locale}`,
              ),
            `${url} ${newUrls.de} 302`,
          ]
        : Object.entries(newUrls).map(
            ([locale, newUrl]) => `${url} ${newUrl} 302 Language=${locale}`,
          )
      ).join("\n"),
    ),
  ].join("\n\n"),
);

export const GET: APIRoute = ({ params, request }) => {
  return new Response(redirects);
};
