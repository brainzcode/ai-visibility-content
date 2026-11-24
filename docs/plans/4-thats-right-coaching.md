# That's Right Coaching: plan

Goal: turn clicks into qualified applications for From Stuck to Unstoppable. Step numbers in brackets like (4.1) refer to the existing playbook in `/Users/sam/Desktop/projects/seo/trc-ads/README.md`, which stays the source of truth; add these as rows there when you start them. Bookmark sources are in [the bookmarks analysis](../twitter-bookmarks-analysis.md).

## Where it stands

- **Live since Nov 3:** one ad set, $40 a day.
- **Week 1 (the only week logged):**
  - $260.55 spent, link CTR 14.6%, 390 page views.
  - 1 application: 0.26% of page views, against a plan of 2 to 5%.
  - The one applicant wanted free help.
- **The weak step is the apply page,** not the ads.
- **Nov 21:** the ads were republished opening with "a paid, 26-week program". Judge them on Dec 7.
- **Waiting on Liz:**
  - the lead filter (1.6)
  - the email fix (1.5)
  - her picks from the creative options (2.1)
- **Not done yet:**
  - the Meta API token (5.2)
  - Google Ads (6.1 to 6.3), in progress

What the bookmarks mostly do here is confirm the existing plan. The new items are measurement on the apply page, a fatigue alert, a persona test and a belief audit.

## This week

1. **Log weeks 2 and 3 (4.1).** About 30 minutes.
   - Add the Nov 9 to 15 and Nov 16 to 22 rows to `kpi-weekly.csv`.
   - Add two columns: CTR (all) and CPM.
   - The Dec 7 judgment needs these as its baseline.
2. **Read the click numbers the way #106 suggests.**
   - Weak CTR (all) means the hook or image is off.
   - Strong CTR (all) with weak link CTR means the message or offer is off.
   - Strong link CTR with weak page conversion means the page, or the click intent.
   - Week 1 is the third case. Keep changes on the page and the qualifying message.
3. **Skip #106's "pause each ad at 3,000 impressions" rule.** At your $69 cost per thousand impressions, that's about $207 per ad, five days of budget. Keep judging each ad at $60 to $100 of spend, as 4.1 says.
4. **Create the Meta token (5.2).** 20 to 30 minutes. This unlocks the daily check (5.3) that's already built.

## Weeks 1 to 2

5. **Find where the apply page loses people** [#169].
   - Turn on partial submissions in the GoHighLevel form if you haven't.
   - Add two kinds of event:
     - video progress, at 25, 50 and 75% of the VSL
     - one scroll-depth event
   - Send them to GA4, or to the pixel as custom events. They carry no health wording.
   - After a week you'll know which of these it is:
     - visitors leave before the video
     - they leave during the video
     - they start the form and stop
   - That picks the next test:
     - an Apply button above the video
     - a shorter first screen
     - fewer form steps
6. **Test the funnel as five different visitors** [#62]. About an hour with Claude Code. Visitors:
   - impatient
   - skeptical
   - on a 375px phone over slow 3G
   - non-native English speaker
   - trying to break it
   - Each one goes ad → /applynow → /apply-confirm → the Instagram CONFIRM step and screenshots every point of confusion.
   - Merge the findings into the 1.3 leftovers list.
7. **Add a fatigue alert to the daily check (5.3)** [#497].
   - Flag any ad whose last-3-day CTR has fallen well below its first-week CTR, or whose frequency keeps climbing.
   - Set the thresholds after two weeks of your own data, not from someone else's account.

## Weeks 3 to 4 (after the Dec 7 judgment)

8. **Belief audit for the next ad copy round (2.5)** [#169] [#15].
   - List every belief a woman with a plateaued business has to hold before paying $5,500. For example:
     - "coaching works for someone like me"
     - "I can give this 26 weeks"
     - "Liz has done this herself"
   - Order them by how hard they are to change.
   - Next to each, put the proof that changes it, using only claims cleared in 1.4.
   - For wording, read comments under popular videos about business plateaus and add the phrases to the audience map (0.4). Treat them as language research only. Tag each item as evidence or assumption.
9. **Pick one page test from step 5's data.**
   - If lead quality is fixed and volume still isn't, test a short article-style page ahead of /applynow [#169]. Build it from real applicant and DM wording, with permission and no names.
   - Change one block at a time, and log it in the change log (4.1).
10. **Video ads (2.2 and 2.4): set a hold-rate floor** [#186].
    - Record the three-second hold rate (three-second views ÷ impressions) in the tracker.
    - Pocket FM's floor is 55%, at a scale nothing like $40 a day. Set your own after two weeks.

## Google Ads (6.2 and 6.3)

11. Responsive search ads [#169]:
    - Headline 1 mirrors the search.
    - Up to 15 headlines under 30 characters.
    - 4 descriptions under 90 characters that promise an explanation, with no discount language.
    - Each of the three keyword-matched copies of /applynow opens with the same words as its ad group.

## Later

12. **Add That's Right Coaching to the AI visibility tracker** with questions such as:
    - "business coach for women entrepreneurs who've hit a plateau"
    - "coaching program for women business owners stuck at the same revenue"
    - It shows who ChatGPT and Claude recommend, and doubles as a Luminous case study if Liz agrees.

## Don't

- **Don't run AI actors or AI-made testimonials as clients** [#5] [#9] [#414]. 1.4 and Meta's rules already rule this out.
- **Don't buy data-broker lists or de-anonymize ad engagers** [#63]. The author of #63 admits parts of his method are illegal.
- **Don't copy competitors' ads.** Study long-running ads in the Ad Library for hook, emotion, pacing, story and call to action, then write your own [#299].
