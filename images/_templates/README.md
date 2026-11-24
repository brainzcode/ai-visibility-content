# Image templates

Shared pieces for every post image. Each post gets one folder in `images/` named after its post file, holding an `index.html` source and the exported PNGs.

## Render

From the repo root:

```
/Users/sam/miniconda3/bin/python images/_templates/render.py images/<post-slug>/index.html
```

Every `<section class="frame ..." data-out="name">` in the source becomes `name.png` next to it. The script stops if a font fails to load or a PNG comes out at the wrong size. Open `index.html` in a browser to see all frames on one contact sheet.

## Frame sizes

| Class | Size | Use |
| --- | --- | --- |
| `frame--square` | 1200 x 1200 | LinkedIn and Facebook |
| `frame--x` | 1600 x 900 | X |
| `frame--ig` | 1080 x 1350 | Instagram carousel slide |
| `frame--tiktok` | 1080 x 1920 | TikTok cover. Keep key content between y 240 and 1680, the profile-grid crop. |

File names follow `linkedin-facebook-1200x1200`, `x-1600x900`, `instagram-slide-NN-1080x1350`, `tiktok-cover-1080x1920`.

## Files

- `luminous-social.css`: brand tokens from luminousdigitalvisions.com, frame sizes, and the shared components below.
- `frames.js`: copies `<template>` blocks into `data-use` slots, positions phone callouts and their leader lines, and signals the renderer when the page is ready.
- `render.py`: the Playwright exporter.
- `fonts/`: Inter and Space Grotesk, the site's own files.
- `luminous-logo.svg`: the site logo. It needs the lifted `--bg`; it disappears on pure `--ink`.

## Components

- **Carousel slide** (`.slide`): top bar with series kicker and counter, centered body, footer with brand and a swipe/save hint.
- **Annotated AI answer** (`.ann-slot` > `.ann`): the Series 1 cover format. A phone showing a recreated AI answer with numbered callouts. Mark anchors with `data-anchor="x"` and callouts with `data-for="x"`; scale with `--k`. Always hide business names with `.redact` bars and add the "Recreated from a real AI search" note.
- **Checklist** (`.checklist`): numbered (`.num`) or tick-box (`.box`) rows.
- **Prompt box** (`.prompt`): the query a customer types, with `.token` for fill-in-the-blank parts.

The teardown scorecard (Post 1.3) and review card (Series 2) should be added here as they are built, so each new post reuses them.
