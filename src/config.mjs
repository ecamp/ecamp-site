export const SITE = {
  name: "eCamp",

  origin: "https://www.ecamp3.ch",
  basePathname: "/",

  title: "eCamp v3",
  description: "⛺Web-based app for camp and course planning. The application is specialised for camps and courses of youth associations and for Y+S offers in the sport of camp sports/trekking.",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "jPf2WRTi0mTa3OrM_YlBsATcXYDiaGh0NmOODPSwdZ4",
  locales: ['en', 'de'],
};

export const BLOG = {
  disabled: false,
  slug: "blog",
  
  postsWithoutBlogSlug: false,
  postsPerPage: 6,
  
  category: {
    disabled: false,
    slug: "category", // set empty to change from /category/some-slug to /some-slug
  },
  
  tag: {
    disabled: false,
    slug: "tag",
  },
  locales: ['en', 'de'],
};
