# AI visibility tracker: changes

Repo: `/Users/sam/Desktop/projects/seo/ai-overview-tracker` (GitHub `brainzcode/ai-overview-tracker-a`). Sources are bookmark numbers in [the bookmarks analysis](../twitter-bookmarks-analysis.md).

## Where it stands (checked Nov 24 from the code and the database)

It already does more than its name says: Google AI Overviews (status, text, citations), organic results, the map pack (name, position, rating, review count), and ChatGPT and Claude answers with every business named, in order, plus their sources. Page analysis, SES report emails and an unattended server scheduler are built.

Freshly Folded is the only business, with 50 keywords. Latest result per keyword:

| Surface | Result |
| --- | --- |
| Google, keywords with a valid result | 18 of 50 |
| AI Overview shown | 14 of those 18 |
| Freshly Folded cited in the AI Overview | 9 of 14 |
| Freshly Folded in the map pack | 0 of 18 |
| Freshly Folded in organic top 10 | most, positions 2 to 9 |
| ChatGPT names Freshly Folded | 10 of 18 answered |
| Claude names Freshly Folded | 10 of 17 answered |

- **Two loose ends.** The Nov 22 run (`f5ad330c…`) is still marked running with 54 searches, and no tracker process is alive. A full 50-keyword baseline has never finished.
- **Local searches do show AI Overviews.** Ahrefs reports AI Overviews are rare on local searches [#450]. For Freshly Folded they appeared on 14 of 18. Measure each client; don't assume.

## Phase 0: a clean baseline (this week, about 3 hours, mostly waiting)

1. **Close the stale run.** Open the dashboard. Per the README, the run whose process has gone is marked Interrupted when its business opens.
2. **Run all 50 keywords** on Google, ChatGPT and Claude.
   - Done when every keyword has a valid Google result or a recorded failure reason.
3. **Save it.** Run `make backup`. Copy the headline numbers into a dated note (`reports/baseline-2026-11.md` or similar).
   - This is the "before" for the Freshly Folded report and for the Luminous case study.

## Phase 1: numbers you can defend (weeks 1 to 2)

### 1.1 Repeat each assistant question
The README already says "An answer is one observation". Reports need "named in 2 of 3", not one roll of the dice [#68] [#162].
- Add a `samples` setting per run (default 1, use 3 for reports), and `searches.sample integer NOT NULL DEFAULT 1`.
- Each answer is its own row.
- The dashboard and the reports show the share named and the average position.
- Cost: 50 keywords × 2 assistants × 3 samples × ~30 s is about 2.5 hours. Mark a "report" subset of keywords for sampling.
- Done when the AI assistants card shows "k of n" per keyword.

### 1.2 Store the exact prompt and model
- Add `prompt text` and `model text` to `searches` for assistant rows [#162].
- Without these, a report can't say what was asked, and the study in the Luminous plan can't publish its method.

### 1.3 Missing is never zero
- Check every count on the dashboard and in report emails. `error`, `blocked` and `unavailable` rows must drop out of the denominator and show as "not checked", never as "not named" [#162].
- Add a test that fails if they're counted.

### 1.4 Change notes
- New table `annotations (id, business_id, happened_on date, note text, url text)`, with a "Log a change" button in Settings.
- Show the notes on the run-history chart.
- In report emails, list changes since the last report beside the keywords that moved.
- This is the "make one change, rerun, keep what moved" loop [#58], and it's what lets a client report show cause rather than coincidence.

### 1.5 Intent and topic on every keyword
- Add `keywords.intent`. Values: `near_me`, `city`, `best`, `price`, `how_to`, `commercial`, `comparison`.
- Add `keywords.topic` (free text, for example "towel service").
- Report the share of each topic, and "AI Overview shown in k of n checks" per keyword [#68].
- This answers, client by client, whether AI Overviews matter for their searches [#450].

## Phase 2: the features that sell (weeks 3 to 5)

### 2.1 Who gets recommended instead
- For every business seen across `mentions`, `places` and `citations`, count:
  - ChatGPT named k/n
  - Claude named k/n
  - AI Overview cited k/n
  - map pack k/n
  - average position
- Group by domain when there is one, otherwise by normalized name.
- Add a small alias table so "DropMint" and `ilovedropmint.com` count as one business.
- Freshly Folded data already shows the answer:
  - Claude names Poplin, Laundryheap and HappyNest on 16 or 17 of 17 keywords.
  - In the map pack, Bolt, 4th Ave Cleaners, DropMint and Fresh & Clean hold most spots, with 110 to 545 reviews each.

### 2.2 Source triage: own, claim, earn, contest
This becomes the client's to-do list [#58] [#257].
- **Classify domains.** New table `source_domains (domain primary key, category, kind, note)`.
  - `category`: own, claim, earn, contest, competitor, other.
  - `kind`: directory, review site, listicle, forum, national brand, news.
  - Classify a domain once and reuse it across businesses.
- **Check each cited page.** Fetch it once per run with the page-analysis fetcher, which already has public-address checks and size limits. Record whether it names the business: `citation_checks (url, fetched_at, names_business boolean)`.
- **Report.** "Pages AI cites that name competitors but not you", grouped by claim and earn.
- **Freshly Folded example**, latest assistant citations:
  - Yelp 25
  - MapQuest 29 (two domains)
  - ThreeBestRated 13
  - San Diego Lineup 10
- **AI Overviews** cite DropMint's site 14 times, Reddit 8 and Thumbtack 5.

### 2.3 The Visibility Check report
One page generated from a run, in HTML and PDF. It serves as the free 48-hour Visibility Check and as the monthly client report.
1. Four headline numbers:
   - named by ChatGPT
   - named by Claude
   - cited in AI Overviews
   - in the map pack
2. Who's named instead (2.1).
3. Sources to claim and earn (2.2).
4. Five fixes, from page analysis.
5. Method box: prompts, dates, engines, samples, and a line saying "not checked" isn't "not named".

### 2.4 Map pack from several points
- New table `search_points (business_id, label, latitude, longitude)`. A map-pack check runs chosen keywords from each point.
- Freshly Folded is absent from the pack from the one San Diego point the tracker uses, and its hidden address is in La Mesa.
- Suggested points: La Mesa, Mission Valley, North Park, Pacific Beach, Chula Vista.
- Each point adds Google searches and CAPTCHA load. Start with 5 keywords × 5 points, weekly.

### 2.5 Rating and review count over time
- Search the business name plus city. Read the rating and review count from the knowledge panel and store them in `business_snapshots (business_id, collected_at, rating, reviews)`.
- Chart them against the map-pack competitors already in `places`.
- This tracks Freshly Folded's review plan (141 now, about 581 by October 2027) and gives the reviews post series real numbers.

## Phase 3: wider coverage (after launch)

1. **Record the searches each assistant runs [#212].** Claude Code's `--output-format stream-json` output includes tool calls. Check that the web search queries appear there, and whether Codex's JSON event stream exposes them too. Store them in `assistant_queries (search_id, ordinal, query)`; they're content targets.
2. **Google AI Mode.** Ahrefs found AI Mode and AI Overviews agree 86% of the time but share only 13.7% of citations [#450]. It needs a new extractor in the browser collector, so it's the biggest item here.
3. **Gemini and Perplexity.** The provider calls already exist in the Luminous site checker (`luminous_html/api/ai-visibility.js`). Reuse them with search grounding on.
4. **API-key mode for the hosted offer.** The README says a version other people use should call the Claude API with its own key. Before Luminous sells hosted monitoring, client checks have to run on API keys, not your personal ChatGPT and Claude sign-ins. Read each provider's terms.
5. **A read-only MCP server**, so Claude can read results when writing briefs and posts [#257]. Nice to have.
6. **Questions with no location.** Today every assistant question is asked "as a customer in the business's area". For apps such as LightShot and LumaTake, or for Luminous's own agency questions, add a per-keyword option to ask with no location, and let a business have no map point.
7. **Map pack in the SerpApi collector.** `src/providers/serpapi.ts` reads organic results and the AI Overview but not the local pack. Parse SerpApi's local results into `places` before using it for client runs (see "Google searches and CAPTCHAs" below).

## Google searches and CAPTCHAs

Claude's web search can't stand in for the Google collector, and neither can an MCP server.

- **Claude's web search answers a different question.** Claude Code and the API give Claude a list of pages from Anthropic's own search tool. That's what the tracker's Claude check already measures. It doesn't return Google's results page, so it has no AI Overview, no map pack and no Google positions.
- **Google search MCP servers don't solve CAPTCHAs.** They're wrappers around paid SERP APIs (SerpApi, DataForSEO and similar), and the CAPTCHA handling happens at that company. MCP is how an AI agent calls a tool. The tracker is a program, so it calls the API directly, and it already has a SerpApi collector (`npm run check -- --provider serpapi`).
- **Your `google-serp-scraper-skill` won't help either.** It drives a Playwright browser too, so it meets the same CAPTCHAs.

Ways to cut CAPTCHAs, in order:

1. **Search less.** Run the full 50 keywords weekly, and only a short priority list daily. Use the scheduler's `retryPasses` rather than immediate retries.
2. **Use what's built.** The Decodo mobile proxy, a signed-in Chrome profile on your own computer, and a server in the business's region with map coordinates set.
3. **Use a SERP API for client runs.**
   - It moves the scraping and CAPTCHA work off your machines and accounts. Each search, and each AI Overview follow-up, is a billed request.
   - Add map-pack parsing first (Phase 3, item 7 above).
   - DataForSEO, the provider in the law-firm pipeline [#208], is the alternative if you want a second collector.
4. **Know the risk underneath.** Automated Google searching goes against Google's terms, whoever does it.
   - Google sued SerpApi in December 2025 over scraping its results.
   - The court has dismissed Google's claims twice, most recently in November 2026, but it hasn't ruled the scraping lawful, and Google has been given time to amend again.
   - Before Luminous sells hosted monitoring, decide which collector client runs use, and support two so one vendor's trouble doesn't stop reports.

## Phase 4: open-source launch

1. **Pick the name.** Still an open decision in CLAUDE.md.
2. **Pre-publish checks.**
   - Git history: checked Nov 24. No `.env`, `.settings`, `.sessions` or backup dumps are tracked.
   - Still to do:
     - The README's `make ses-setup` example uses `lightshot.pro`, LightShot's domain and your SES sender. Swap it for `example.com` in the public copy. Your own server keeps sending from lightshot.pro.
     - Check `fixtures/` for client data.
     - Run a security scan [#83] [#85].
3. **Reposition the README.** Lead with "see which local businesses Google, ChatGPT and Claude recommend for your customers' questions". The tool now covers the map pack and assistants, not only AI Overviews. Rename the repo to match.
4. **Launch day** [#157] [#262] [#347]:
   - Show HN, Product Hunt, AlternativeTo (listed against paid AI visibility trackers) and SaaSHub.
   - A comparison page on the Luminous site.
   - Series 4 posts.
   - The installation service page goes live the same day.
