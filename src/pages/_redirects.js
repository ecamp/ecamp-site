export const get = () => ({
    body: `
/blog/* /en/:splat 302 Language=en
/blog/* /de/:splat 302 Language=de
/blog/* /fr/:splat 302 Language=fr

/* /en/:splat 302 Language=en
/* /de/:splat 302 Language=de
/* /fr/:splat 302 Language=fr
/ /de/
`
});