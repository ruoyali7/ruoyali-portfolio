# DramaClips Built-in Hook Generation Demo — Mini PRD

## 1. Objective

Build a recruiter-facing, local interactive case-study demo that makes the **Built-in Hook Generator** the clearest proof of Ruoya's product and engineering judgment.

The demo should let a reviewer complete one believable workflow:

`Add drama → select episodes → describe the signal → Generate → review ranked candidates → save to R2 → publish`

The experience is intentionally a deterministic simulation. It explains the real DramaClips architecture without calling production services or exposing credentials.

## 2. Audience and success criteria

**Audience:** Snowflake recruiters and engineers evaluating product thinking, systems understanding, data flow, and ability to make complex workflows legible.

**Success means a reviewer can:**

- understand why Built-in generation exists and when Vizard is optional;
- complete the end-to-end flow without leaving the portfolio page;
- inspect a candidate's score components and rationale;
- connect each visible step to a real implementation technology;
- distinguish demo output from production data.

## 3. Scope

### In scope

- A local DramaClips admin-style demo inside the case-study page.
- A lightweight Add Drama step using representative sample metadata.
- Episode selection and a creative-direction input.
- Processing states: Queued, Transcribing, Analyzing scenes, Ranking candidates, Rendering, Review ready.
- Multiple generated candidate cards with score breakdown, rationale, risk, and review state.
- Save-to-R2 and Publish Center transitions represented as local state changes.
- Explanatory popups for Vizard, Logs, R2/Supabase, and other non-interactive controls.
- A technical explanation tied to the actual pipeline: Faster-Whisper, PySceneDetect, signal/visual ranking, FFmpeg, and R2.

### Out of scope

- Production authentication, uploads, worker execution, or social publishing.
- Live mutation of DramaClips data.
- Real CPS URLs, referral codes, account information, or provider secrets.
- Recreating every admin route or every analytics metric.

## 4. Primary interaction

1. **Add drama** — click Add drama, confirm a safe sample drama, and see it appear in the library.
2. **Choose episodes** — open Hook Studio and select one or more episodes.
3. **Describe the target** — enter a direction such as conflict, reversal, or relationship tension.
4. **Generate** — run a short deterministic processing timeline.
5. **Review** — inspect ranked candidates, score components, rationale, cover frame, and risk level.
6. **Save** — approve one candidate and simulate saving the asset to R2.
7. **Publish** — move the approved asset into Publish Center and simulate a publish confirmation.

The demo should make the current step and the next available action obvious at all times.

## 5. Information architecture

- **Library:** entry point and Add Drama action.
- **Hook Studio:** primary screen; episode selection, creative direction, generation timeline, ranked candidates, technical explanation.
- **Publish Center:** approved asset, platform selection, publish simulation, publishing history.
- **Analytics:** clearly labeled representative aggregate data; not required for the primary flow.
- **Info popups:** Vizard, Logs, R2/Supabase, and other infrastructure links explain their purpose without pretending to be clickable production integrations.

## 6. Technical narrative

The visible interaction maps to the real worker pipeline:

- **Transcribe:** Faster-Whisper produces timestamped dialogue with VAD.
- **Segment:** PySceneDetect identifies scene boundaries.
- **Rank:** dialogue, conflict, reversal, tension, danger, identity, cliffhanger, context, and visual-quality signals are combined; duplicate candidates are removed.
- **Render:** FFmpeg creates a vertical clip with a cover frame, subtitles, and ending hold.
- **Persist:** the review-ready asset is stored in R2 before it becomes available to Publish Center.

The demo uses representative values and explicitly labels them as simulated output.

## 7. Acceptance criteria

- A fresh local session can complete Add Drama → Generate → Save → Publish.
- Generate visibly moves through all processing stages before showing candidates.
- At least two candidates can be compared, and one exposes a readable score breakdown.
- Publish is unavailable until a candidate is approved/saved.
- The Built-in tab is visually primary; Vizard is secondary and explanatory.
- No production credentials, private URLs, or real account details appear in the demo.
- `npm run typecheck`, `npm run build`, and `git diff --check` pass.
