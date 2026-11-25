# Have You Tried Turning It Off? — entry notes

Competition: `u-motasimfuad-have-you-tried-turning-it-off-154a938b` ($10 pool,
top 3 $3.10 / $2.16 / $1.51; closes 26 Nov 2026 05:25 WITA;
round-1 cutoff 25 Nov 2026 21:43 WITA).

## Winning line

> I’ve just spoken to the engineers and they said your issue is a ‘known
> problem’, which in our language means nobody knows how to fix it — but we
> all agree it exists.

- Characters: **165** (gate: 1–199) — JS `String.length`, all BMP chars.
- Bytes: 173 (UTF-8; curly quotes + em dash are multi-byte).
- Output sha256: `829334abb1b4ac1726d14c19eb4945af5ce0d0881c01368a69e4951eabe61540`
- `main.ts` writes exactly this line to `/output/entry.txt` (no trailing
  newline), with a self-check that throws if the length ever leaves 1–199.

## Determinism check

`node main.ts` run twice (Node v24.22.1, temp `OUTPUT_DIR`), `cmp` on the
two outputs: **byte-identical**, same sha256 both runs. Output is a constant
string; no randomness, no time, no network.

## Candidates considered (all 148–187 chars) and why the winner beat them

| # | Candidate (short) | Verdict |
|---|---|---|
| A | "…your issue is a ‘known problem’, which in our language means nobody knows how to fix it — but we all agree it exists." (165) | **WINNER** |
| B | "…top of the queue — …alphabetical and your surname starts with Z, but spiritually, you’re first." (162) | Invents a fact about the customer (surname Z); reads as mocking them, not the system. |
| C | "…restarted the whole internet from my side — …I’ll stare at the loading screen with you until one of us gives up." (187) | Biggest single laugh, but "restarted the internet" is a recognisable meme gag — less fresh than A; leans on the classic reboot. |
| D | "The system says your ticket is ‘in progress’… possibly me, so you’re basically already being helped." (174) | Punchline ("basically already being helped") is soft and wordy vs A's paradox closer. |
| E | "…I whispered to it — and honestly, it flinched, so we’re making progress." (168) | "It flinched" is a great image, but the unplug/plug-back/whisper list is a familiar three-beat structure; A is tighter and fresher. |
| F | "…your computer is absolutely fine — it’s the part where it needs to work that’s the problem, and that’s above my pay grade." (175) | "Above my pay grade" is a stock phrase — fails criterion 5 (fresh). |
| G | "Your file is safe… trapped inside a folder inside a folder… I’ve sent a search party: they’re the two interns." (179) | Good, but assumes a lost-file scenario (narrower subject fit) and the second joke dilutes the first. |
| H | "…written your name on a sticky note and stuck it to my monitor, so it couldn’t be in safer hands." (155) | One-beat joke; thin next to A's two-part twist. |
| I | "…rebooted it from my end three times, and the third one felt so right I actually got goosebumps…" (148) | Charming, but the classic reboot line without a strong twist; thinnest of the reboot family. |
| J | "…your issue is officially the weirdest one I’ve seen all week…" (163) | "Weirdest issue" makes the customer's problem the butt; punchline ("told me to tell you to wait") is a shrug. |

## Why A wins, head-to-head against the kit's criteria

1. **On-subject:** a support agent reporting back from the engineers on the
   customer's issue — clearly a reply to a desperate customer.
2. **Lands the joke:** the twist is a redefinition — "known problem" turns
   out to mean "nobody knows how to fix it". The humour is the agent's
   cheerful uselessness (he proudly delivers this as progress); the
   customer is never the butt.
3. **Real voice:** sounds exactly like an agent relaying engineer-speak;
   the customer's desperation is felt (escalated to engineers, still
   broken) rather than explained.
4. **Tight:** 165 chars, every word earns its place; the em-dash pivot
   ("but we all agree it exists") is a clean paradox punchline.
5. **Fresh:** twists support jargon instead of the classic reboot line —
   no verbatim "turn it off and on again", no stock closer.

## Build history (rule 11)

- `main.ts` written first (constant line + write to `/output/entry.txt`).
- Revised in the same session: added the 1–199 char gate self-check
  (throws instead of shipping an invalid entry) before running.
- Verified by running twice; see Determinism check above.

## Not done here (parent session)

- No GitHub repo created, no bundle, no submission — parent does
  repo + bundle + submit.
- Nothing signed, nothing spent.
