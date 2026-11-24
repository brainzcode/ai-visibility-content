# Other apps: plan

Sources are bookmark numbers in [the bookmarks analysis](../twitter-bookmarks-analysis.md). The AI visibility tracker has [its own plan](2-ai-visibility-tracker.md).

## pindrop

Order: 1 and 2 support the RankMyFirm pilot in the Luminous plan, so do them first.

1. **Evidence-led law firm outreach** [#208].
   - Keep firms at map-pack positions 4 to 10.
   - Record each firm's measured organic position and the firms ranking above it.
   - Draft emails from that evidence.
   - Add a deterministic checker: word count, no em dashes, locked opener and CTA, evidence present. Allow three retries, feeding the specific failures back each time.
2. **Prospect scoring** [#358]. Add columns for fit, timing and reachability, each 1 to 5 with a reason, plus the source URL behind the score.
3. **Compliance fields** [#115].
   - Every draft carries an unsubscribe line and a postal address.
   - Each UK prospect gets a corporate or individual flag for PECR. Drafts to individuals are held back until there's consent.
4. **Dead-website filter** [#11]. Flag businesses whose website is missing or broken. For those, the pitch is a site built in advance and shown, not described.

## LightShot (lightshot.pro)

The iPhone teleprompter that follows your voice, live on the App Store. It has an AI editor built on Claude, captions, and posting to social networks through its Go backend. The website has 80 pages of features, guides and comparisons.

5. **App Store listing** [#43] [#408] [#410].
   - Title: 30 characters, keyword first ("LightShot: Teleprompter" is 23).
   - Subtitle: 30 characters, on the outcome (for example, eyes on the lens without memorizing).
   - Keyword field: 100 characters, single words, no repeats of title words. Favor keywords with difficulty under 20 where the top 10 apps don't use the exact word in their title.
   - The first three screenshots show results:
     - the script sitting under the lens
     - a redo mid-take
     - a captioned clip ready to post
6. **Apple Search Ads** (set-up in step 31) [#405].
   - Start with exact-match "teleprompter" terms, Search Match off, and the $100 new-account credit.
   - Judge keywords on subscriptions, not installs.
   - If taps are low, the icon or title is off. If installs are low, the product page is. If trials are low, onboarding is.
7. **Ask "where did you hear about us?" in onboarding** [#261].
   - LightShot has accounts, so one question at sign-up attributes every channel, including "ChatGPT or another AI assistant".
   - Pair it with App Store campaign links for each creator or post.
8. **Creators and content** [#261] [#56].
   - LightShot's users are people filming themselves, so every promo video should be recorded in LightShot.
   - Pay a few small creators (under about 5,000 followers) a small fee plus a bonus.
   - When one video takes off, have other creators make their own version.
   - Hook with text, picture and voice in the first three seconds.
   - Keep accounts and posts original; no copies across fake accounts.
9. **Get named when people ask AI for a teleprompter app** [#262] [#97] [#155].
   - The comparison pages already exist. Make sure each one answers the question in its first 100 words with a recommendation, and keep prices and facts in the page HTML.
   - Add an llms.txt and a key-facts block on the About page.
   - Add LightShot to the tracker with questions such as "best teleprompter app for iPhone" and "teleprompter that follows your voice". This needs Phase 3, item 6 of the [tracker plan](2-ai-visibility-tracker.md) (questions with no location).
10. **Handle the speech model download** [#322]. SpeechAnalyzer's model downloads once after install, and Slate's users found a weak connection leaves it half-finished.
    - Show that state in onboarding.
    - Let the prompter fall back to manual scrolling until the download is done.
11. **Attack the backend before the next release** [#85].
    - Run the three-account attack prompt against the Go backend, with these checks:
      - one account reading another's scripts, takes or posts
      - AI credits spent twice by parallel requests
      - App Store receipts replayed
      - social publishing tokens leaking
    - Check the server's kernel advisory, since the backend is Go (step 21) [#45].
12. **Ratings.** Use Apple's own review prompt only, with no "enjoying it? 5 stars?" screen first [#41].

## LumaTake

The on-device video studio for Mac (it grew out of the original Mac version of LightShot). Paid, App Store first, with the sandbox migration under way. Its content map targets "screen recorder for mac" (14,800 a month).

13. **App Review notes for the first Mac App Store submission** [#30]. Use the seven-part template (step 30), and spell out three things:
    - the Screen Recording and microphone permission steps
    - that recordings and transcripts never leave the Mac
    - how to reach the paywall
14. **Store listing** [#43] [#410].
    - "LumaTake: Screen Recorder" is 25 characters.
    - Make each of the first screenshots sell one outcome, such as a captioned clip or a click-zoom.
15. **Get named when people ask AI for a Mac screen recorder** [#262] [#176].
    - Add "alternative" and "vs" pages, and use-case pages for course creators, product demos and reaction videos.
    - Fit them into the content map's one-URL-per-intent rule.
    - Track it with location-free questions, like LightShot.
16. **Launch directories** [#157]: Product Hunt, AlternativeTo, SaaSHub, Peerlist and BetaList. Skip bulk submission services.
17. **Speaker labels** for interviews and reactions. Look at Nemotron with FluidAudio [#60].
18. **Apple Search Ads.** Check whether it covers Mac apps before planning on it.

## Security, before any app goes public

19. **Run a security scan** [#83]. The bookmark gives `/plugin install claude-security@claude-plugins-official`, then `/claude-security scan the whole repo at high`.
   - Check that it's listed in the official marketplace before installing.
20. **For apps with accounts, run the three-account attack prompt** [#85]:
   - IDOR and role escalation
   - anonymous access with the public key
   - race conditions on credits
   - SSRF and open redirects
   - prompt injection in uploads
21. **Linux kernel advisory** [#45]. Second-hand report of a TCP flaw affecting multipath TCP listeners, which Go 1.24+ opens by default. If any Go service runs on Ubuntu or RHEL, check the kernel advisory for that host.

## premium-reels

22. **Add two checks to delivery** [#104]:
   - Measure loudness on the exported MP4, not the WAV. The bookmark uses about -16 LUFS with peaks below -4 dBFS.
   - Plot the low-frequency waveform against the beat grid to catch off-beat cuts.
23. **Free sound effects** [#87]. Add Openverse's API (no key needed) as a source of CC-licensed audio. Skip NC licenses, and anything needing attribution in client work.
24. **Storyboard per scene and give feedback by timestamp** [#144], for example "at 00:03, hold the screen longer".

## Firmdation

25. **Compare highlight scoring** with the 0 to 100 emotional-peak scoring in "short-video-generator-AI" [#191]. Keep whichever picks better clips on your own test videos.
26. **Positioning.** YouTube is reportedly cutting reach for re-uploads and template content [#127]. Market Firmdation for cutting shorts from a creator's own long videos.
27. **On-device speaker labels.** Look at Nemotron transcription through FluidAudio [#60].

## Thread Hunter

28. **Reposition it as "repurpose your own threads".** X's head of product says recycled content is hurting the platform [#373]. A tool marketed for reposting other people's threads will age badly.

## All App Store apps (LightShot, LumaTake and the rest)

29. **App Store fields** [#43]:
    - 30-character title with the keyword first
    - 30-character subtitle
    - 100-character keyword field: single words, no repeats of title words
    - The first three screenshots show in search, so make them sell the outcome.
30. **App Review notes** [#30]. Use the seven-part template on every submission:
    1. one-sentence summary
    2. numbered steps from first launch
    3. test data
    4. account details
    5. data that leaves the phone
    6. what the app is not
    7. what changed
31. **Apple Search Ads** [#405].
    - One country per campaign, one intent per ad group.
    - Exact match only, Search Match off, manual bids.
    - Judge keywords on return, not cost per install.
    - New accounts get $100 credit.
