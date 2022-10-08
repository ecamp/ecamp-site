# eCamp Site

This repo is used for the landingpage on https://www.ecamp3.ch/. 

Based on **[AstroWind](https://github.com/onwidget/astrowind)**, a free and open-source template to make your website using **Astro + Tailwind CSS**.

## Features

- ✅ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)).
- ✅ Supports **Dark mode**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed** ([@astrojs/rss](https://docs.astro.build/en/guides/rss/)).
- ✅ **Image optimization** ([@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/)).
- ✅ Generation of **project sitemap** based on your routes ([@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- ✅ **Open Graph tags** for social media sharing
- ✅ **Fonts optimization** at build time ([subfont](https://www.npmjs.com/package/subfont)).
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports


<details open="open">
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

## Demo
[👉 ecamp-site.netlify.app](https://ecamp-site.netlify.app/)

## Getting started

### Project structure

Inside AstroWind template, you'll see the following folders and files:

```directory
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── data/
│   │   ├── pages/
|   |       ├── page-slug.md
|   |       └── ...
|   |   └── posts/
|   |       ├── post-slug-1.md
|   |       └── ...
│   ├── components/
│   │   ├── atoms/
│   │   ├── blog/
│   │   ├── core/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── [...blog]/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── [...locale]/
|   |   |   ├── [...slug].astro
|   |   |   └── [blog]/
|   |   |       ├── [slug].astro
|   |   |       └── [...page].astro
|   |   ├── 404.astro
|   |   ├── _redirects.js
|   |   └-- rss.xml.js
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

The eCamp Landingpage looks for `.md` or `.mdx` files in the `src/data/pages/` and `src/data/posts/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                                                     |
|:---------------|:---------------------------------------------------------------------------|
| `yarn`         | Installs dependencies                                                      |
| `yarn dev`     | Starts local dev server at [`localhost:3004/en`](http://localhost:3004/en) |
| `yarn build`   | Build your production site to `./dist/`                                    |
| `yarn preview` | Preview your build locally, before deploying                               |

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

## Contributing
[Code of conduct](https://www.ecamp3.ch/coc)
If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request on the AstroWind repository. 
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](https://github.com/onwidget/astrowind/blob/main/LICENSE.md) file for details.
