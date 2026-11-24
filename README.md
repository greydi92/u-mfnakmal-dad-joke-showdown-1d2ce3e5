# Dad Joke Showdown — "High Tea"

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

A single dad joke, written by a program for the
[Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
bounty on make.fun. One joke, at most 200 characters, is the whole entry —
a judge model reads entries two at a time and picks the one that lands the
bigger groan.

> My son asked why I keep a ladder in the kitchen. I said, 'For high tea.'

72 characters. Classic dad Q&A at the dinner table; the pun ("high tea")
lands on the first read with no explanation; the setup is a fresh one only
a dad would build, and the punchline arrives at the very end.

## How it works

`main.ts` (Node 22, stdlib only, no network, no secrets) writes the joke to
`$MAKEFUN_OUTPUT_DIR/entry.txt` — the grader mounts that directory at
`/output`. The program is deterministic: same joke on every run.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Why this joke

Brainstormed 10+ original candidates and scored them against the judge
brief in the kit's `RULES.txt` (pun first, then freshness, tightness, aloud
rhythm). The shortlist:

- Ladder in the kitchen → "For high tea." — **picked**: cleanest pun,
  freshest setup, tightest line.
- Car in the oven → "I wanted a hot rod." — strong, but "hot rod" is a
  slightly narrower phrase.
- Shocked by the electrician's bill → "That's the current rate." — clean,
  but electrician puns are well-worn dad territory.
- Air fryer → "We're both full of hot air." — modern, but "hot air" is a
  common idiom.
- Podcast about stairs → "A step in the right direction." — clean, but
  the idiom does half the work.
- Carry a pencil → "In case I need to draw the line." — tight, but thin.

No recycled classics: no "Hi hungry, I'm Dad", no scarecrow, no fog, no
graveyard, no belt made of watches.

## Iterate round 1 (2026-11-24)

Play-tested as the judge would: 9 fresh candidates scored against the
brief (pun first, freshness, tightness, aloud rhythm). Best challengers:

- Sourdough starter → "It's the yeast I can do." — freshest setup, but
  "yeast/least" is a sound-alike swap, not a true double meaning, and 90
  chars vs 72. Tie at best; not clearly stronger.
- Mismatched socks → "I'm on a sole-searching mission." — clean, but
  again a sound-alike swap; "high tea" ends punchier. Current by a hair.
- Calendar page → "I needed a date." — clean double meaning, but
  calendar/date wordplay is well-trodden; freshness loses to the ladder.
- Ghost therapy ("unresolved issues"), clouds ("rain check"), fish tank
  ("sole source of calm"), kneaded space ("crusty"), batteries
  ("negative side"), oranges in the shower ("zest I can do") — each fails
  one criterion: weak or split pun, muddled setup, or flat punchline.

Verdict: **KEEP** the ladder joke. "High tea" is a genuine double-meaning
phrase (afternoon tea / tea up high), not a phonetic swap, the ladder-in-
the-kitchen setup is original, and at 72 chars it is the tightest line
with the punchline landing last. None of the 9 beat it clearly.

## Iterate round 2 — FINAL (2026-11-24)

Play-tested as the judge would: 8 NEW candidates (none from round 1),
scored against the brief (pun first, freshness, tightness, aloud rhythm).
Best challengers, pairwise vs the current entry:

- Crush grapes → "I'm just trying to wine down." (77 chars) — closest
  challenger: clean homophone pun, tight, punchline last. Loses by a hair:
  "wine down" is a sound-alike swap ("wind down") with slightly strained
  grammar, while "high tea" is a true double-meaning phrase where both
  readings are literal — and the ladder setup is more absurdly dad-like
  than crushing grapes.
- Scissors by the bed → "In case I need to cut my sleep short." (101
  chars) — "cut short" is a real double meaning, but it is a stock idiom
  and the setup (scissors by the bed) is slightly off-putting; longer too.
- Gym → "I need to work on my heavy issues." (85 chars) — "heavy" lands,
  but the pun format is well-trodden; freshness loses to the ladder.
- Paint the walls twice → "I like a second coat of arms." (84 chars) —
  clever, but needs a beat to parse; fails criterion 2 (first-read
  clarity). Bank teller → "earn some interest" (108 chars) — clean but
  well-worn and the longest. Space bar → "I just need some space."
  (88 chars) — setup logic fuzzy, idiom does the work. Lift →
  "I'm just not on that level yet." (82 chars) — common phrase, fuzzy
  logic. Trains → "on the right track" (79 chars) — stock idiom.

Verdict: **KEEP** the ladder joke. Two iterate rounds, 17 fresh
candidates total, none clearly stronger than "high tea". The entry is
final: 72 characters, local check re-run and valid.

## Bounty

- Competition: `u-mfnakmal-dad-joke-showdown-1d2ce3e5` — Dad Joke Showdown
- Reward: $5 total (1st $2, 2nd $2, 3rd $1)
- Deadline: 2026-11-26 03:25 WIB
- Entrant: @greydi92

## License

MIT — see [LICENSE](LICENSE).
