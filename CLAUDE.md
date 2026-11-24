# Luminous AI Visibility Content

Content engine for Luminous (luminousdigitalvisions.com), run by Samuel Godfrey, CEO. It produces social posts that teach local service businesses and SMB owners how to stay visible as AI assistants and Google AI Overviews decide who gets recommended. The posts generate leads for Luminous and build an audience for the open-source AI Overview tracker, referred to as [App Name] until its name goes public.

The full strategy lives in `docs/content-plan.md`. Read it before writing or editing any post. This repo is now the source of truth; the original claude.ai doc is no longer kept in sync.

## Folder layout

- `docs/content-plan.md` — strategy, series, rubric, cadence, funnel
- `posts/` — one file per post: `posts/YYYY-MM-DD-series<N>-<slug>.md`
- `images/` — one folder per post with the same slug: source (HTML or SVG) plus exported PNGs per platform
- `results/results-log.csv` — live hook test results, one row per post per platform

## Every post file contains

1. Series and post number
2. Hooks A, B and C
3. The master post (LinkedIn length)
4. Platform versions: X thread, Instagram carousel slides, Facebook caption, TikTok script
5. CTA with its comment keyword
6. Image brief, plus the path to the finished image
7. Virality score: each of the six criteria from 1 to 5, the total out of 30, and one line on the weakest criterion

A post scoring under 22/30 gets rewritten before it is marked ready. Score honestly; don't inflate.

## Images

Every post needs an image. Build images as HTML or SVG and render them to PNG with Playwright, at these sizes:

- LinkedIn and Facebook: 1200 x 1200
- Instagram carousel: 1080 x 1350 per slide
- X: 1600 x 900
- TikTok cover: 1080 x 1920

Keep one shared template per recurring format (teardown scorecard, checklist, review card) so new posts reuse it.

## Rules

- Never invent statistics. Use real numbers from Visibility Checks or cite a source. Figures of speech must not look like data.
- Never recommend buying, faking, incentivizing or gating reviews (Google policy and the FTC's 2024 fake reviews rule).
- Never name and shame a real business. Name a business only as a good example, or with its permission in a teardown.
- Keep [App Name] as the placeholder until Samuel says the name can go public.
- Plain, direct voice. Short sentences. No emoji walls, no hype words.

## Open decisions

- Posting cadence: five posts a week is the current plan; confirm it's realistic for the team.
- App name: public now or hidden until launch.
- Visibility Check turnaround: 48 hours is the current plan; confirm the team can deliver it.
