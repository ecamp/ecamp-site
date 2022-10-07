export const get = () => ({
    body: `
/blog/* /en/:splat Language=en
/blog/* /de/:splat Language=de
/blog/* /fr/:splat Language=fr

/* /en/:splat Language=en
/* /de/:splat Language=de
/* /fr/:splat Language=fr
/ /de/
`
});