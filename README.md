# macsmith21.github.io

Personal site for Mac Smith, built with [Astro](https://astro.build). Live at https://macsmith21.github.io.

## Editing content

All content lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, tagline, location, email, photo path, and the five profile links (Letterboxd, Spotify, Apple Music, LinkedIn, Instagram). An empty link hides its icon on the live site; in `npm run dev` it shows as a faded dashed placeholder. |
| `resume.ts` | Experience, projects, education, grouped skills, community, and the PDF path. Drives both the resume on the home page and `/resume`. |
| `work.ts` | Relevant Work cards. Each needs a title, role, blurb, link, and a screenshot in `public/images/work/`. |
| `coursework.ts` | The six CSCE 242 highlights and the link to the full coursework index. |

## Photos

The portrait is `public/images/portrait.jpg`, a square image (640 x 640 works well). With no file there, the page shows initials instead. Strip location metadata before adding any phone photo, for example:

```sh
magick input.HEIC -auto-orient -resize 640x640^ -gravity center -extent 640x640 -strip public/images/portrait.jpg
```

## Resume PDF

`/resume` is a print-ready version of the resume. After editing `resume.ts`, regenerate the PDF with the dev server running:

```sh
npm run dev
npm run resume:pdf
```

This uses your installed Google Chrome to print `/resume` to `public/resume.pdf`. Commit the new PDF.

## Running locally

Requires Node 22.23 or newer (Node 24 recommended).

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev` serves at http://localhost:4321 with live reload. `npm run build` type-checks and writes the static site to `dist/`.

## Old files

`public/CSCE242/` is the original coursework, so `/CSCE242/index.html` keeps working. The previous hand-written site is preserved at the `v1-legacy` tag.

## Deploying (one-time cutover)

The site deploys with GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main` and on demand. GitHub Pages must be switched from "Deploy from a branch" to "GitHub Actions" first, otherwise Pages keeps serving the raw repo files.

1. Switch the Pages source, either in the browser (Settings, Pages, Build and deployment, Source: **GitHub Actions**) or from the terminal:

   ```sh
   gh api -X PUT repos/Macsmith21/Macsmith21.github.io/pages -f build_type=workflow
   ```

2. Merge the `astro-rebuild` pull request into `main`. The workflow builds and deploys automatically.

To roll back: set the Pages source back to "Deploy from a branch" (`main`, `/`) and reset `main` to the `v1-legacy` tag.
