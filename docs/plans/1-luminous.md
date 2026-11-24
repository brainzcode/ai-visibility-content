# Luminous: plan

Goal: turn the AI visibility content into booked Visibility Checks, strategy calls and tracker installs, and make Luminous the business AI assistants name for this work. Sources are bookmark numbers in [the bookmarks analysis](../twitter-bookmarks-analysis.md). Tracker steps are in [the tracker plan](2-ai-visibility-tracker.md).

## Where it stands (checked Nov 24)

- **Content.**
  - Two Series 1 posts are drafted: Nov 10, plus Nov 12 (ready to schedule).
  - LinkedIn went out by hand.
  - `results/results-log.csv` has no rows yet.
- **The site's free checker** (`/tools/ai-visibility-checker`, code in `luminous_html/api/ai-visibility.js`):
  - Claude, GPT and Gemini get the question without web search. Only Perplexity searches.
  - A real customer's ChatGPT searches the web before naming local businesses, so the checker will miss local businesses that ChatGPT would name.
  - Defaults are old models (`gpt-4o-mini`, `gemini-2.0-flash`).
- **No page sells the offer.** No service page covers AI visibility, the Visibility Check or tracker installation. `llms.txt` describes Luminous as AI systems and custom software, so an assistant asked "who can get my business recommended by ChatGPT?" has nothing from Luminous to quote.
- **Open decisions:** cadence (five posts a week), the app name, and the 48-hour Check turnaround.

## Week 1

1. **Fix the site checker.** Half a day.
   - Turn on web search for each provider: Anthropic's web search tool, OpenAI's web search in the Responses API, Gemini's Google Search grounding.
   - Update the default models.
   - Log every check (prompt, date, engine, model, business named or not). The study in step 9 uses that data.
   - Until this ships, don't send anyone a "not named" result from the checker.
2. **Build an "AI visibility for local businesses" service page.** About a day.
   - What the free Check covers, what monthly monitoring includes, and what tracker installation costs.
   - Link it from the homepage, the services index and `llms.txt`.
   - Open it with a one-line definition [#155]: "Luminous is a [category] that [does X] for [who]".
3. **Ask Liz and Steve whether Freshly Folded can be a named case study.** If yes, its tracker numbers become the first real example:
   - named by ChatGPT on 10 of 18 keywords and Claude on 10 of 17
   - cited in 9 of 14 AI Overviews
   - absent from every map pack checked
   - If no, write it as "a San Diego laundry pickup service".
4. **Log results for every post already out,** then schedule the Nov 12 post. A post's numbers stop meaning much after a week.
5. **Claim Luminous in ChatGPT Business Hub** [#27]. 15 minutes. Add it to the claim list for every client.

## Week 2

6. **Run the first five Visibility Checks by hand** [#487], using the tracker and a fixed template:
   1. headline numbers
   2. who's named instead
   3. sources to claim and earn
   4. five fixes
   5. method
   - Time each one. That tells you whether 48 hours is realistic before you promise it.
   - The tracker's report export (tracker plan 2.3) automates the template later.
7. **Track Luminous itself.** Add Luminous and RankMyFirm to the tracker with the questions your buyers ask:
   - "who can help my local business show up in ChatGPT"
   - "AI visibility agency for small businesses"
   - "SEO agency for solicitors in Manchester"
   - This week's run is the baseline.
8. **Tighten the About page** [#155] [#76].
   - Add a key-facts table (founded, founder, location, services, pricing model, real client counts) and an FAQ.
   - Check prices and key facts are in the page HTML, not loaded by script.
   - Refresh `llms.txt` to match the new service page.

## Weeks 3 to 4

9. **Publish an original study** [#167] [#150]. Needs tracker steps 1.1 and 1.2.
   - Pick one question, for example "How often do ChatGPT and Claude name the best-reviewed wash and fold service in 10 US cities?"
   - Run it with three samples each. Publish the method, dates, prompts and raw counts on a data page.
   - It's the only kind of statistic your rules let you state as your own, it feeds Series 1, and it's the page other sites link to.
10. **RankMyFirm outbound pilot** [#208]. Build it in pindrop.
    - **List:** one practice area across five UK cities, keeping firms at map-pack positions 4 to 10. About 50 firms.
    - **Emails:**
      - The first email, under 80 words, names the firms above them and their measured position.
      - Half get an SEO angle, half an AI search angle, with the same evidence.
      - A checker rejects any draft over length or missing the evidence.
    - **Compliance first:** under PECR, sole traders and some partnerships count as individuals and need consent. Check the ICO's guidance, and put an opt-out in every email.
    - Measure replies by angle.
11. **Package one add-on for local service clients** [#305] [#360].
    - Options: after-hours call answering that books jobs (you already have a voice AI service page), or a reply to every web form within 60 seconds.
    - Fixed price, piloted with one existing client before it's listed.

## Content engine, ongoing

12. **Check every claim before a post is marked ready.**
    - Every number traces to a named source or a tracker run.
    - A Claude Code workflow can check each claim in parallel [#447].
13. **Topics with real sources behind them:**
    - The Ahrefs data [#450], credited, against your own finding. Ahrefs says local searches rarely get AI Overviews, but 14 of 18 San Diego laundry searches showed one.
    - The AI site rebuild that cost Brad Smith his leads [#3].
    - Companies spamming Reddit to get into chatbot answers [#442], without naming them.
    - ChatGPT Business Hub [#27].
    - Google Maps "describe this business" [#231], only once Google confirms it.
14. **Hooks.** Put a written, a visual and a spoken hook in the first three seconds of video posts [#56]. Note each post's job (reach, trust or lead) in its file.
15. **Schema claims.** Sell schema as technical hygiene and rich results, not as a way to get cited by AI. Ahrefs measured no effect on AI citations [#450]. Search the site and the posts for wording that says otherwise.

## Your Claude Code setup

16. **Shrink the global CLAUDE.md** [#315].
    - Back it up, then run `/doctor`.
    - Move the long writing, audience-research and page-set sections into the `human-writing` and `audience-story` skills, which already exist. Keep only the gotchas in CLAUDE.md: the Python path, the never-install rules, design tokens.
    - Anthropic found conflicting rules across CLAUDE.md and skills made results worse.
