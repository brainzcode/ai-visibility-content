# X bookmarks analysis

Nov 24, 2026. Source: `docs/twitter.md` (499 bookmarks). Bookmark numbers below match that file and link to the original post.

## What's in the file

- About half (roughly 260 of 499) has nothing to use: Nigerian news and politics, memes, personal posts, AI-industry gossip, and empty teasers whose content sat in an image or a link the export stripped.
- Around 25 bookmarks are specific enough to act on this month. Another 60 or so are minor tips.
- The export kept only the x.com post links. Tool URLs, repos, images and most "link in bio" resources are gone, so several items need the original post opened.
- Treat every income, MRR, ROAS and "X views in Y days" figure as unverified. Most of them come from posts selling a course, a tool or an agency service. The tactic can be worth taking; the numbers can't be quoted.

## The finding that changes strategy

**Ahrefs' summary of 14 studies [#450](https://x.com/timsoulo/status/2061796432534003866)** (figures checked against the bookmark text; verify against the Ahrefs posts before quoting publicly):

- 99.9% of AI Overviews appear on informational queries. Local, transactional and navigational searches are "almost entirely AIO-free".
- Adding schema had no measurable effect on AI citations (AIO -4.6%, AI Mode +2.4%, ChatGPT +2.2%).
- AI Overviews change every 2.15 days on average, with 70% of the content different between observations.
- YouTube mentions had the highest correlation with AI brand visibility (0.737), above backlinks and DR.
- "Best X" listicles are 43.8% of the page types ChatGPT cites. 28.3% of ChatGPT's most-cited pages have no Google organic visibility.
- AI Mode and AI Overviews agree 86% of the time but share only 13.7% of citations.

**Correction from your own data (added Nov 24).** The tracker's latest Freshly Folded results contradict the first point for this niche. Google showed an AI Overview on 14 of the 18 San Diego laundry keywords with a valid result, and Freshly Folded is cited in 9 of them. Ahrefs' figure is an average across all searches; it doesn't hold for every local category. Measure each client rather than assuming.

What it means for Luminous:

1. **The tracker's pitch.** Lead with all four surfaces it already measures: AI Overviews, the map pack, ChatGPT and Claude. Report per client which ones actually show up for their searches.
2. **Repeat tracking is the product.** A 2.15-day churn rate is the best public argument against a one-off check. It supports the free Visibility Check as the entry point and paid monitoring as the follow-on.
3. **Schema messaging.** Keep selling schema as technical hygiene and for rich results. Stop implying it gets a business cited by AI. Two bookmarks claim it helps [#498](https://x.com/_toddanderson/status/2054643594032508995), but both are anecdotes; Ahrefs measured it.
4. **A content angle.** "Ahrefs says local searches rarely get AI Overviews; in San Diego laundry, 14 of 18 did" is a stronger post than either fact alone. Get Freshly Folded's permission first, or anonymize it.

Step-by-step plans built from this analysis are in [plans/](plans/README.md).

## Luminous

### Visibility Check and tracker: the method, assembled from five posts

These agree with each other and together give a report structure and a data model:

- **Prompts.** Build 30 to 50 buyer-decision prompts: category, "X vs Y", alternatives, use case, price, problem. Run the same set through ChatGPT, Claude, Gemini and Google AI Mode [#68](https://x.com/wespreadjam/status/2113392719448227994). Ask every new customer which prompt found you [#257](https://x.com/jakezward/status/2090060494858014873).
- **Logging.** Record the exact prompt, date, engine and mode. Keep mention, link/citation and recommendation as separate fields. Save the exact cited URL, not the domain. Mark an unavailable answer as missing, never zero. Rerun prompts before trusting a result [#162](https://x.com/borjafat/status/2100228509398335975) [#68](https://x.com/wespreadjam/status/2113392719448227994).
- **Diagnosis.** For each prompt a business loses, sort it: page missing, page weak, crawl or index problem, or AI quoting third-party sources [#58](https://x.com/wespreadjam/status/2115568290307469548).
- **Source triage.** Sort every source the AI cites as OWN (your pages), CLAIM (profiles you can take over: GBP, Yelp, Bing, Apple Maps, ChatGPT Business Hub), EARN (genuine reviews, editorial, communities) or CONTEST (wrong or outdated information) [#58](https://x.com/wespreadjam/status/2115568290307469548). This works as the skeleton of the Visibility Check report.
- **Snapshots.** Save one buying-intent AI Overview daily for 7+ days, then count which claims, entities and sources recur [#116](https://x.com/jakezward/status/2107453596107219294). The tracker can do this automatically and diff runs.
- **Loop.** Make one change, rerun the same prompts, keep what moved [#58](https://x.com/wespreadjam/status/2115568290307469548) [#10](https://x.com/irabukht/status/2123881815450812881).
- **Fast manual inputs:**
  - Search Console regex `^(\S+\s){6,}\S+$` shows 7+ word queries, the nearest thing in your data to how people ask AI [#112](https://x.com/denohawari/status/2107097725669867639).
  - ChatGPT's hidden background searches show in DevTools → Network → the request matching the chat id → Response → search "queries" [#212](https://x.com/mikestrives/status/2094480596617633973). Unofficial and fragile; don't build the tracker on it.
  - A post claims Search Console now has a "Generative AI features" report with AIO and AI Mode impressions [#162](https://x.com/borjafat/status/2100228509398335975). Check it exists before relying on it.

### Things to claim or add now

- **ChatGPT Business Hub [#27](https://x.com/OpenAI/status/2120216592395174382).** OpenAI's "Businesses in ChatGPT" beta lets businesses claim a listing, edit details and see mentions, clicks and topics. Claiming is open wherever ChatGPT is available; the Business Agent feature is for ecommerce and online-service businesses. Claim Luminous, and check whether Freshly Folded qualifies. Add it to the CLAIM list in every Visibility Check.
- **About page for AI [#155](https://x.com/RobHoffman_/status/2102476527200043250).** One-line definition ("[Company] is a [category] that [does X] for [who]"), a service per H3, what makes it different, who uses it, the team, how it works, a key-facts table (founded, HQ, pricing, services, customers served), then an FAQ. Use it as an AEO deliverable. Counts must be real.
- **Agent-readable site [#76](https://x.com/RobHoffman_/status/2112212215583658420) [#257](https://x.com/jakezward/status/2090060494858014873) [#97](https://x.com/irabukht/status/2110189752666440181).** Prices and key facts in raw HTML, not injected by JavaScript; labels on icon buttons and form fields; testimonials as selectable text; "as of" dates on facts; an llms.txt. #76 also names a `meta-webindexer` robots.txt token for Meta's AI; check Meta's crawler documentation before adding it.
- **Site migrations.** Brad Smith rebuilt a lead-producing site on Lovable and leads went from 30-50 a month to zero for four months; only the homepage was rendering, so Google saw about 100 pages become one [#3](https://x.com/bradsmith/status/2124863251032735918). His 378-item checklist is in the bookmark. Turn its migration and launch sections into a gate for every Luminous rebuild. It's also a strong story for a post (credit him).

### Getting clients

- **Law-firm outbound pipeline [#208](https://x.com/troyaitken_/status/2095489076191248584)**, a close fit for pindrop and RankMyFirm. Harvest Maps results for city × practice-area grids and keep only positions 4 to 10 (the top 3 are already winning). Drop poor fits with a cheap model, run live Maps and organic checks, measure the exact organic position, and estimate traffic lost from public CTR curves. Claude writes a sub-80-word first email naming the firms above them. A deterministic validator checks length, em dashes, the locked opener, the CTA and the evidence block, with three retries that feed the violations back in. Half the list gets an SEO angle, half an AEO angle, same evidence. Two cautions: label the loss figure an estimate, and check UK PECR before cold-emailing solicitors (sole traders and some partnerships count as individuals).
- **Pre-build for dead websites [#11](https://x.com/indexsy/status/2124152703458942978).** Find businesses on Maps with dead or missing sites, build the site first, open with it. Skip the rank-and-rent and expired-domain parts of that post.
- **Prospect scoring [#358](https://x.com/Kappaemmedev/status/2076637778734153857).** Score every prospect on fit, timing and reachability with a source URL and a personal opener. Worth copying into pindrop's output.
- **Add-on offers.** An AI lead responder (form fill → personal reply in 60 seconds → CRM), priced against what the task costs the client now, not by the hour [#360](https://x.com/zynexsol/status/2074441799423148491). An after-hours voice agent that books jobs, since local businesses miss calls after 5pm [#305](https://x.com/gregisenberg/status/2083175325098266931). The prices in #360 are unverified.
- **Niches** one poster says agencies charge $3-5k a month to run ads for: standby generators, fencing, pool equipment, spray-foam insulation, sump pumps [#465](https://x.com/yfly58/status/2058398421510427023). Unverified; candidates for a pindrop scrape, nothing more.

### Content engine

- **Publish an original study [#167](https://x.com/RobHoffman_/status/2099471978369556545) [#150](https://x.com/fba/status/2103147085562294683).** A dated, method-disclosed study from real Visibility Check results ("how many San Diego laundries does ChatGPT name for X") earns links and citations and is the only kind of statistic your rules allow you to state as your own.
- **Post topics with real sources behind them:**
  - The Ahrefs figures above [#450](https://x.com/timsoulo/status/2061796432534003866), credited.
  - The NYT v OpenAI filing and the Agarwal & Sen trial: organic clicks fell 39.8% when an AI Overview appeared [#159](https://x.com/natzir9/status/2101951637916954832). Pull both primary sources first.
  - Google Maps now lets users describe a business in their own words and feeds that into Ask Maps answers [#231](https://x.com/irentdumpsters/status/2091877652701343812). One account, rolling out slowly, and the poster sells GBP audits. Confirm with Google before posting.
  - Reddit moderators catching companies spamming subreddits to get into chatbot answers [#442](https://x.com/glenngabe/status/2062493216906092629). Good for a "legitimate vs manipulative AI visibility" post. Don't name the companies.
- **Writing quality [#138](https://x.com/jochenmadler/status/2103530162318901673).** A classifier separated AI from human B2B posts with 98% accuracy using structural questions (does it cite sources, quote a named person, push its own product). Rewording didn't fool it. Banned-word lists aren't enough; posts need sources, named people and varied shape.
- **Hooks [#56](https://x.com/queniferlungg/status/2115505145383702820).** Three hook layers in the first three seconds: written, visual, spoken.
- **Search Console as an idea source [#151](https://x.com/RobHoffman_/status/2103200798612373982) [#176](https://x.com/om_patel5/status/2099003320446616013).** Positions 4 to 20 for bottom-funnel queries, weekly. Your keyword-mining skill already covers most of it.

### Launching the open-source tracker

- Cal.com's reported route to being ChatGPT's top scheduler: 47 "X vs Y" posts, 23 niche directories, GitHub stars, Reddit mentions [#262](https://x.com/mal_shaik/status/2089120487481982981). Correlation only, but it's the right checklist.
- Postiz's open-source-to-$154k-MRR stages [#347](https://x.com/wickedguro/status/2076703406446858426). The tactics were in an image; open the post.
- Launch directories: Show HN, Product Hunt, AlternativeTo (list it as an alternative to paid AIO trackers), SaaSHub [#157](https://x.com/s_chiriac/status/2101959207180259591). Skip bulk submission.
- Claude's connector directory accepts submissions; one account reports approval in 12 hours [#241](https://x.com/irabukht/status/2090482928379744574).

## Freshly Folded

In order of effort against likely payoff:

1. **Link the Google Business Profile to GA4** [#429](https://x.com/googleanalytics/status/2065094180053852527). Official announcement: calls, bookings and direction clicks now show in Analytics. Do it now; it also feeds client reporting.
2. **Rewrite GBP services** [#235](https://x.com/DylanOlivaGrows/status/2091671837830959590). Edit Services, add any missing ones, then write each description under Google's 300-character limit with the service and city. Prompt: "write SEO optimized service descriptions, under 300 characters, with the service and city in each one, and interview me about my business first so we can make it human." Keep the city out of the service names themselves.
3. **Fill the profile completely** [#476](https://x.com/theseoguy_/status/2014716030539461047) [#231](https://x.com/irentdumpsters/status/2091877652701343812). Primary category matching the top three competitors, all 750 description characters, weekly photos and posts, a reply to every review. Hidden address (service-area business).
4. **One landing page per GBP** [#498](https://x.com/_toddanderson/status/2054643594032508995), not the homepage. If branded search volume is high in Search Console, the brand can be the H1.
5. **Citations with consistent name, address and phone**: Apple Maps, Bing Places, Yelp, BBB, Chamber of Commerce [#476](https://x.com/theseoguy_/status/2014716030539461047). The 724-site list in [#73](https://x.com/2whazzuup/status/2112291036315709828) has these plus a lot of junk; take only the recognised ones.
6. **Weekly internal-linking pass** [#35](https://x.com/asaio87/status/2118240964783267986) on the WordPress site. Feed Claude three months of Search Console data; for each post, the queries it ranks 1-10 for become its anchors; add 3 to 5 links per post in body text only; Claude shows a table and waits for approval, then edits and keeps a changelog.
7. **Ask "How did you hear about us?"** at signup in Cents [#261](https://x.com/rebryk/status/2089400988499398760). Cheap attribution, including "ChatGPT" as an option.
8. **Situation pages** for the people who use the service most (new parents, shift workers, rental managers) [#249](https://x.com/denohawari/status/2090881623214399605), held to your uniqueness test.
9. A **membership or subscription hook** is worth testing; one café anecdote [#307](https://x.com/CapitalLens_/status/2082806032041161196) is the only source and its numbers don't add up, so treat it as an idea.

Skip from #476: running "insane offers" to stack 20 reviews in a day (review incentives), renting a cheap office for an address, multiple profiles, and keyword-stuffed review replies.

## That's Right Coaching

1. **Creative testing that fits $40/day [#106](https://x.com/maxzrco/status/2101780635643707792).** Load 10+ creatives into one testing ad set. Pause each one manually around 3,000 impressions so budget moves to the next. Judge on CTR (all), CTR (link) and CPM, not cost per application yet. Weak CTR (all) means the hook or visual is off; strong CTR (all) with weak link CTR means the message or offer is off. Winners move to a scaling ad set.
2. **Give Meta a better signal [#63](https://x.com/shdu11546816/status/2114882910096408939) [#10](https://x.com/irabukht/status/2123881815450812881).** At this budget Meta won't see 50 applications a week. Send a "qualified application" event (business stage or revenue answer from the /applynow form) as the conversion, and send it through both the pixel and the Conversions API with the same event ID. Use only this idea from #63; the rest of that thread describes buying data-broker profiles and the author admits parts are illegal.
3. **Creative floor [#186](https://x.com/RohanNayak2/status/2098104784264065525).** Pocket FM gates creatives at 2.5% CTR and a 55% three-second hold. Those are their numbers at huge scale; use the idea of a written kill rule, set your own floor after two weeks of data.
4. **Research Liz's buyers' beliefs [#169](https://x.com/eCom_Amin/status/2099200132717928853) [#15](https://x.com/hookrate_/status/2123137192440594910).**
   - Pull comments from the top YouTube videos on women founders hitting a plateau and ask Claude for the ten most common beliefs.
   - Do a belief audit: every belief a woman must accept before paying $5,500, ordered by how hard it is to change, and the proof that would change it.
   - Three-star reviews of competing programmes are the best objection map.
   - Tag everything as evidence or assumption.
5. **Study long-running ads [#299](https://x.com/DalyDee___/status/2084705422725075027) [#65](https://x.com/boomerrbryan/status/2113688906776621164).** Meta Ad Library ads that have run 90+ days are probably profitable. Break each into hook, emotion, pacing, story and call to action, then write your own. Don't copy.
6. **Test a pre-sell page** ahead of /applynow [#169](https://x.com/eCom_Amin/status/2099200132717928853): an article-style page built from real applicant wording (with permission).
7. **QA the funnel on a phone [#62](https://x.com/RoundtableSpace/status/2111717667228770611).** Five simulated users (impatient, sceptic, 375px on slow 3G, non-native English, someone trying to break it) go through /applynow and the "CONFIRM" DM handoff and screenshot every confusion point.
8. **Automate the dull parts [#497](https://x.com/itsalexvacca/status/2054909238586323442).** A Meta creative-fatigue alert (falling CTR) and a spend-pacing check. The skill pack is behind a "comment ADS" gate; the skill names are enough of a spec to build your own.

Avoid: AI actors presented as real clients [#5](https://x.com/Mho_23/status/2124686998187245886) [#9](https://x.com/adriansolarzz/status/2124158004287209619) [#414](https://x.com/cesaralvarezll/status/2067570829399818626). Fake testimonials break FTC rules and Liz's credibility.

## Your apps

- **pindrop:** the law-firm pipeline [#208](https://x.com/troyaitken_/status/2095489076191248584), prospect scoring [#358](https://x.com/Kappaemmedev/status/2076637778734153857), dead-website prospecting [#11](https://x.com/indexsy/status/2124152703458942978), and an unsubscribe line plus postal address in every outreach draft [#115](https://x.com/suraj_sharma14/status/2107478486227071360).
- **Security before release:** the official Claude security plugin (`/plugin install claude-security@claude-plugins-official`, then `/claude-security scan the whole repo at high`) [#83](https://x.com/Voxyz_ai/status/2111200518379020292); a 14-attack prompt with three test accounts covering IDOR, role escalation, credit race conditions, SSRF and prompt injection [#85](https://x.com/Voxyz_ai/status/2111079716832886886); a pre-launch prompt covering security, duplicate submissions, offline states and WCAG 2.2 [#367](https://x.com/shugarDadddy/status/2075148611680149656). Vet any third-party plugin or `npx` package before running it.
- **Linux servers:** a post reports a critical TCP use-after-free that hits multipath TCP listeners, which Go 1.24+ opens by default, with Ubuntu and RHEL unpatched at the time [#45](https://x.com/IntCyberDigest/status/2116982861391917315) [#47](https://x.com/tobi/status/2116638054899208685). Second-hand. If any Go service runs on Ubuntu or RHEL, check the kernel advisory.
- **premium-reels:** measure loudness on the exported MP4, not the WAV (about -16 LUFS, peaks below -4 dBFS), and check the beat grid against the waveform [#104](https://x.com/Voxyz_ai/status/2109358372873183564); drive every style from `seek(t)` with closed-form springs and blend Playwright subframes for motion blur [#148](https://x.com/twoclipping/status/2103273003555402193); storyboard per scene and give timestamped feedback [#144](https://x.com/shannholmberg/status/2103173892831674715); Openverse has a free, keyless API for CC-licensed audio [#87](https://x.com/ElliotPadfield/status/2110764303087288788); ElevenLabs MCP for SFX and music [#17](https://x.com/ElevenCreative/status/2122060255718965547).
- **Firmdation:** compare its highlight scoring with the 0-100 emotional-peak scoring in "short-video-generator-AI" [#191](https://x.com/mybitstar/status/2097212792986030422); on-device diarized transcription with Nemotron via FluidAudio [#60](https://x.com/Alex_tra_memory/status/2115468824392704337); YouTube is reportedly cutting reach for re-uploads and template content [#127](https://x.com/MarioJoos/status/2105931751419789313), so pitch it for creators' own long-form.
- **Thread Hunter:** X's head of product says recycled content is hurting the platform and original creators have the advantage [#373](https://x.com/nikitabier/status/2074341886333157582). Position it around repurposing your own threads, not other people's.
- **iOS apps:** App Store fields (30-character title with the keyword first, 30-character subtitle, 100-character keyword field with no repeats; the first three screenshots show in search) [#43](https://x.com/tyd3n_/status/2117694233301725635); a seven-part App Review note that cut rejections [#30](https://x.com/vovalukashov/status/2119416685690069079); Apple Search Ads set-up and funnel diagnosis [#405](https://x.com/arthursbuilds/status/2068586140441956427). Don't copy the pre-review "5 stars?" screen in [#41](https://x.com/CristianRus4/status/2115308205358325936); it's close to review gating.

## Your Claude Code setup

- **Context engineering for Claude 5 models [#315](https://x.com/trq212/status/2080710971228918066)** (Anthropic). They cut over 80% of Claude Code's system prompt with no loss on their evaluations, and found conflicting rules across CLAUDE.md, skills and the system prompt made results worse. Advice: judgement over rules, a small CLAUDE.md that holds gotchas, long procedures moved into skills loaded when needed, and `/doctor` to right-size skills and CLAUDE.md. Your global CLAUDE.md carries the full writing, audience-research and page-set rules even though `human-writing` and `audience-story` exist as skills. It's worth running `/doctor` and moving those sections into the skills.
- **Dynamic workflows [#447](https://x.com/trq212/status/2061907337154367865) [#448](https://x.com/trq212/status/2061907538741006796).** Uses that fit your work: verify every factual claim in a post before it's marked ready; run the location-page uniqueness check as a fan-out; pit hooks A, B and C against each other. They cost more tokens, so keep them for batch work.
- **Task briefs for long runs [#356](https://x.com/muratcan/status/2076729116716392598).** State what "done" means, list what doesn't count (for content batches: synonym-spun Support sentences), add an independent reviewer, and set stop rules.

## Don't use

- Translating or re-uploading other creators' videos, cloning faceless channels, rebuilding someone's video one-to-one [#2](https://x.com/MethodByVid/status/2124872610219790660) [#7](https://x.com/MethodByVid/status/2124111584545161703) [#308](https://x.com/tryahdd/status/2082442366468714852) [#18](https://x.com/simonecanciello/status/2122063438222663798).
- AI "UGC" actors presented as real customers [#5](https://x.com/Mho_23/status/2124686998187245886) [#9](https://x.com/adriansolarzz/status/2124158004287209619) [#414](https://x.com/cesaralvarezll/status/2067570829399818626) [#301](https://x.com/StephanieInii/status/2084324752223527106).
- Review incentives, fake offices, multiple GBPs [#476](https://x.com/theseoguy_/status/2014716030539461047); pre-review rating screens [#41](https://x.com/CristianRus4/status/2115308205358325936).
- Data-broker targeting and de-anonymising ad engagers [#63](https://x.com/shdu11546816/status/2114882910096408939).
- Paid backlinks and tiered link building [#26](https://x.com/illyism/status/2120418039963509183) (the `linkdr` skill only) [#166](https://x.com/boringlocalseo/status/2099210806806372356) [#348](https://x.com/floriandarroman/status/2077179492410531948).
- Phone farms and student-email discount loopholes [#213](https://x.com/consumerxai/status/2094671763020132565) [#214](https://x.com/alannnfx/status/2094323059155190260).
- The claimed Anthropic text watermark [#284](https://x.com/M1Astra/status/2086898041882030353) [#275](https://x.com/dragosroua/status/2088444176522514578): check Anthropic's own announcement before repeating it.
