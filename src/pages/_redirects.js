export const get = () => ({
    body: `
/coc /en/code-of-conduct 302 Language=en
/coc /de/verhaltenskodex 302 Language=de

/closed-beta /en/blog/beta-version 302 Language=en
/closed-beta /de/blog/beta-version 302 Language=de

/blog /en/blog 302 Language=en
/blog /de/blog 302 Language=de

/blog/* /en/:splat 302 Language=en
/blog/* /de/:splat 302 Language=de

/*/tos /en/tos 302

/* /en/:splat 302 Language=en
/* /de/:splat 302 Language=de

/ /de/
`
});
