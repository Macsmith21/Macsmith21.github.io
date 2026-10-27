# macsmith21.github.io

Personal site for Mac Smith, built with [Astro](https://astro.build). Live at https://macsmith21.github.io.

## Editing content

Everything you will want to change lives in one file: `src/data/profile.ts`.

- **Bio, one-liner, "now" line, facts, skills**: plain strings and lists near the top. Keep it short.
- **Links**: the `links` object. Paste a full URL to show a link, leave it as `""` to hide it. Empty links never render, and a section with nothing in it disappears entirely (including its nav item).
  - `linkedin`, `github`, `resume`, and your email show in the **Work** section.
  - `goodreads`, `strava`, `instagram` show in **More**.
  - `spotify` and `appleMusic` (profile URLs) show under **Music** if you have picks, otherwise in **More**.
  - `letterboxd` is optional; if blank, the profile link is built from `letterboxdUsername`.
- **Music picks**: add entries to `music`, newest first:

  ```ts
  music: [
    { title: "Song or album", artist: "Artist", spotify: "https://open.spotify.com/track/..." },
    { title: "Another one", artist: "Someone", appleMusic: "https://music.apple.com/us/album/...?i=..." },
  ] as MusicPick[],
  ```

  A Spotify link (track, album, or playlist) becomes an embedded player. An Apple Music link is used if there is no Spotify link. A pick with neither link still shows as a title and artist card. Leave the list empty to hide the section.

## Photos

Put images in `public/images/`.

| What | Path in `profile.ts` | File to add | Recommended size |
| --- | --- | --- | --- |
| Hero portrait | `photos.portrait` (default `/images/portrait.jpg`) | `public/images/portrait.jpg` | 4:5 portrait, about 1200 x 1500, JPG under 400 KB |
| Gallery | `photos.gallery` | e.g. `public/images/gallery-1.jpg` | any ratio, about 1600 px on the long edge |

Gallery entries look like `{ src: "/images/gallery-1.jpg", alt: "Short description of the photo" }`. Every listed file is checked at build time: if the file is missing, it simply does not render. With no portrait file, the hero shows an "MS" monogram instead. With no valid gallery photos, the Photos section is hidden. Update `portraitAlt` once a real photo is in.

## Letterboxd

Set `letterboxdUsername` in `profile.ts` (just the username, e.g. `"yourname"`). At build time the site fetches `https://letterboxd.com/<username>/rss/` and shows the 8 most recent diary entries with poster, rating, and watch date. If the username is blank, the profile is private, or the fetch fails or times out (8 seconds), the build still succeeds and the Film section is hidden.

The deploy workflow rebuilds once a day, so the diary refreshes daily without a commit. To preview with a username without editing the file:

```sh
LETTERBOXD_USERNAME=yourname npm run build
```

## Running locally

Requires Node 22.23 or newer (Node 24 recommended).

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev` serves at http://localhost:4321 with live reload. `npm run build` type-checks and writes the static site to `dist/`. `npm run preview` serves `dist/` so you can check the production build.

## Old files

`public/resume.pdf` and `public/CSCE242/` are copied as-is, so `/resume.pdf` and `/CSCE242/index.html` keep working. The previous hand-written site is preserved at the `v1-legacy` tag.

## Deploying (one-time cutover)

The site deploys with GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`, on a daily schedule, and on demand. GitHub Pages must be switched from "Deploy from a branch" to "GitHub Actions" first, otherwise Pages keeps serving the raw repo files.

1. Switch the Pages source, either in the browser (Settings, Pages, Build and deployment, Source: **GitHub Actions**) or from the terminal:

   ```sh
   gh api -X PUT repos/Macsmith21/Macsmith21.github.io/pages -f build_type=workflow
   ```

2. Merge the `astro-rebuild` pull request into `main`. The workflow builds and deploys automatically. Watch it under the Actions tab.

To roll back: set the Pages source back to "Deploy from a branch" (`main`, `/`) and reset `main` to the `v1-legacy` tag.
