# Artem Klymenko Portfolio

Static portfolio website built with HTML, CSS, and vanilla JavaScript.

## Stack

- Static HTML pages
- Vanilla JavaScript
- CSS embedded per page
- No package manager or build step required

## Pages

- `/` - homepage
- `/casestudy?id=derictorii` - dynamic case study page powered by `cases.js`
- `/portfolio-specs` - internal design specification page, marked `noindex`

## Deploying to Vercel

Import this repository into Vercel as a static site.

- Framework preset: `Other`
- Build command: leave empty
- Output directory: leave empty
- Install command: leave empty

Vercel will serve the files from the project root. Routing and cache headers are configured in `vercel.json`.

## Before Publishing

- Replace relative canonical and Open Graph URLs with the final production domain.
- Add a production sitemap once the final domain is known.
- Consider converting large JPG/PNG assets to WebP or AVIF for faster loading.
