# Codex Brief — Final Snowflake Portfolio PDF

## Goal

Create the **final application-ready PDF portfolio** for:

**Snowflake — Creative Technologist, Brand AI**

This PDF must be able to stand alone inside an application system where only a portfolio file can be uploaded.

It should not assume the reviewer will open the personal website.

Use the existing portfolio website, DramaClips production screenshots/assets, and the existing design/computational portfolio PDF as source material.

The final deliverable should feel like a polished creative-technology case study deck, not a resume PDF and not an architecture portfolio.

---

# Primary positioning

**Ruoya Li**  
**Creative Technologist · Software Engineer**

Core message:

> Building AI-powered tools for creative workflows.

Supporting idea:

> I design and build systems that connect AI, media, data, and human creative judgment — from working prototypes to production workflows.

---

# Main story

DramaClips / DramoraAI is Ruoya's own **0→1 product** built to support a real CPS/affiliate short-drama promotion workflow using ReelShort content.

It is not a speculative portfolio concept.

The real workflow includes:

- source media onboarding
- asset library
- transcription / media understanding
- AI-assisted hook generation
- structured candidate evaluation
- human review and approval
- object storage and reusable assets
- multi-platform publishing workflow
- analytics / attribution
- affiliate conversion tracking
- real commission earned

Promotional content is distributed through a workflow spanning four social platforms:

**TikTok · Instagram · YouTube · Facebook**

The product has generated **real affiliate commission**.

Do not invent any revenue, conversion-rate, audience, or efficiency number.

---

# Deliverable

Create:

`Ruoya_Li_Snowflake_Creative_Technologist_Portfolio_FINAL.pdf`

Also keep the editable source used to generate it inside the repo, preferably under:

`portfolio-pdf/`

Recommended options:

- HTML/CSS + Playwright/Puppeteer print-to-PDF
- React/Next static print page
- another reproducible code-based layout

Prefer a reproducible code-based workflow rather than manually edited binary design files.

The PDF should be landscape or portrait depending on which produces the stronger layout, but it must be readable on a laptop without zooming excessively.

Target length: **10–12 pages maximum**.

Do not make it longer simply because more content exists.

---

# Visual direction

Use the existing personal website as the visual starting point:

- dark / near-black or neutral background
- editorial typography
- strong whitespace
- subtle technical grid / system-diagram language
- restrained accent
- high-quality screenshots
- minimal decorative effects

The presentation should feel like:

**creative technology × product case study × engineering system**

Avoid:

- generic corporate PowerPoint styling
- AI purple gradients
- giant skill-logo walls
- architecture-school board density
- tiny unreadable screenshots
- excessive animations translated badly into PDF
- stock imagery

Use large screenshots, concise captions, and clear hierarchy.

---

# Page plan

## Page 1 — Cover

Ruoya Li

**CREATIVE TECHNOLOGIST · SOFTWARE ENGINEER**

Large headline:

**Building AI-powered tools for creative workflows.**

Supporting line:

> AI · Creative Systems · Product Engineering · Computational Design

Include minimal contact information:

- Personal website: [dramaclips-portfolio.vercel.app](https://dramaclips-portfolio.vercel.app/)
- LinkedIn
- GitHub
- email

Do not overload the cover.

---

## Page 2 — Why me / multidisciplinary positioning

Goal: explain the unusual combination in 15 seconds.

Use a simple three-part structure:

### Creative

Architecture · visual production · computational design

### Technical

Software engineering · APIs · production systems · data/storage

### AI workflow

Generative AI · media processing · automation · human-in-the-loop systems

Suggested narrative:

> My background spans architecture, computational design, software engineering, and applied AI. That lets me move between creative teams and technical systems — turning an ambiguous creative problem into a prototype, then into a usable production workflow.

Keep this page visually simple.

---

## Page 3 — DramaClips: the real problem

Title:

**DramaClips / DramoraAI**

Subtitle:

**AI-assisted creative operations platform for short-form video distribution**

Make ownership explicit:

**Creator · Product Engineer**

Narrative:

> I built DramaClips as a 0→1 product to run my own short-form affiliate content workflow. Running the process manually meant moving between source files, prompts, editing tools, storage, publishing surfaces, tracking links, and performance data.

Main problem statement:

> The challenge was not simply generating content with AI. It was connecting the entire creative and distribution loop while keeping human judgment in control.

Use one strong real product screenshot or an elegant before/after visual.

Before:

`Files + prompts + editing tools + browser tabs + manual publishing + disconnected analytics`

After:

`Shared asset library + AI generation + human review + publishing + attribution`

---

## Page 4 — End-to-end workflow

This should be one of the strongest visual pages.

Create a clean system/workflow diagram:

**Source media → Understand → Generate → Review → Distribute → Learn**

Detailed labels:

1. Source media  
   Episodes and reusable assets enter one shared library.

2. Understand  
   Transcription and scene/content analysis create structured evidence.

3. Generate  
   AI proposes short-form hook candidates from creative direction.

4. Review  
   Structured evaluation supports — never replaces — human judgment.

5. Distribute  
   Approved assets enter the publishing workflow across four social platforms.

6. Learn  
   Publishing, audience, attribution, and affiliate signals inform the next iteration.

Include a smaller loop underneath:

**Create → Review → Publish → Measure → Learn → Create**

---

## Page 5 — AI proposes. Creative judgment decides.

Use this exact headline:

**AI proposes. Creative judgment decides.**

This page should use the Hook Studio / candidate review screenshot(s).

Show:

- source episode selection
- creative direction input
- candidate generation
- candidate comparison
- transcript / scene evidence
- scoring / ranking
- explicit human approval

Use concise annotations, not paragraphs.

Suggested annotations:

- `AI-assisted candidate generation`
- `Structured evidence, not black-box output`
- `Human approval before downstream use`
- `Approved creative becomes a reusable asset`

If demo scoring numbers are illustrative rather than production metrics, label them clearly:

**Illustrative evaluation data**

Do not misrepresent demo values as production metrics.

---

## Page 6 — Creative + media system

Goal: show technical depth without turning this into a system-design interview.

Use a simple architecture/system layer diagram.

Possible structure:

### Experience layer

Next.js · React · operator workspace

### AI / media layer

LLM APIs · Faster-Whisper · PySceneDetect · FFmpeg · Vizard

### Data / asset layer

Supabase · Cloudflare R2 · signed media flows

### Operations / distribution

Railway · publishing integrations · tracking / attribution

Then one line:

> The system treats AI and media providers as workflow components rather than the product itself.

Also mention production judgment briefly:

- reusable shared asset model
- server-side secrets
- object storage for large media
- long-running media processing where needed

Do not overfocus on security or infrastructure.

---

## Page 7 — From approved creative to four-platform distribution

Use real Publish Center / publishing-history screenshots.

Headline:

**One approved asset, one coordinated distribution workflow.**

Explicitly show:

**TikTok · Instagram · YouTube · Facebook**

Suggested copy:

> Approved creative moves from the shared asset library into publishing operations, where distribution state, scheduling, and history remain visible in one place.

Do not claim fully autonomous API publishing unless the code truly supports that exact platform behavior.

Use conservative language:

- publishing workflow
- distribution workflow
- coordinated publishing

Good annotations:

- exact reusable asset selection
- destination/account selection
- scheduling / publishing state
- history / operational feedback

---

## Page 8 — From audience signal to business outcome

This page is essential.

Headline:

**Performance becomes input for the next creative decision.**

Show real or sanitized Analytics UI if possible.

Mention tracked signals such as:

- visits
- preview behavior
- code copies
- redirects
- publishing outcomes
- traffic source
- content/drama performance

Then add a distinct validation block:

### REAL-WORLD VALIDATION

- **4 social platforms** — real distribution workflow
- **Audience + attribution signals** — tracked downstream behavior
- **Real commission earned** — affiliate conversions validated the end-to-end loop

Suggested narrative:

> DramaClips moved beyond prototype use into my real content operation. Promotional creative was distributed across four social platforms, downstream audience actions were measured, and affiliate conversions generated real commission.

Do not invent a dollar amount.

If there is a safe commission screenshot in available assets, use a sanitized crop only if no sensitive account information appears.

If not, use typographic proof points rather than fabricating a visual.

---

## Page 9 — What I built / 0→1 product thinking

Title:

**From an operating problem to a usable system.**

Use four compact areas:

### Workflow design

Mapped source → generation → review → publishing → measurement and created explicit human decision points.

### AI systems

Integrated generative AI, structured outputs, transcription/content understanding, candidate evaluation, and repeatable creative direction.

### Product engineering

Built full-stack workflows across UI, APIs, data, object storage, deployment, and operational state.

### Media + automation

Connected media processing, reusable assets, provider integrations, and publishing operations into a single operator experience.

Add one small 0→1 iteration callout:

> I built the product around problems I encountered while operating the workflow myself — fragmented assets, repeated manual steps, disconnected generation/publishing state, and weak feedback from distribution back into creative decisions.

---

## Page 10 — Design & computational background

Now introduce the older portfolio.

Do not paste multiple full architecture boards.

Select **2–4 strongest visuals only** from the existing `ruoya-portfolio.pdf` that demonstrate:

- computational design
- geometry / procedural thinking
- KUKA robotics
- CNC / fabrication
- 3D printing
- strong visual communication

Headline:

**Technical systems, with a visual point of view.**

Narrative:

> Before focusing on software, I worked across architecture, computational design, digital fabrication, and visual production. That background still shapes how I prototype, communicate systems, and collaborate with creative teams.

Use captions that translate the work into Creative Technologist language.

Avoid architecture jargon unless necessary.

For example:

Instead of:

`Architectural fabrication study`

Prefer:

`Computational geometry translated into robotic / physical fabrication.`

---

## Page 11 — Background / About

Keep concise.

Suggested narrative:

> I started in architecture and computational design, working across visual systems, geometry, fabrication, and physical production. I later moved deeper into software engineering and applied AI.

> Today I work at the intersection of creative problem solving and production engineering — connecting designers, content workflows, AI systems, and software into tools people can actually use.

Optional simple timeline:

**Design systems → Computational design → Software engineering → AI-enabled creative workflows**

Do not frame this as a career-change apology.

---

## Page 12 — Close / contact

Large line:

**Creative systems should be usable, measurable, and still leave room for human judgment.**

Then:

Ruoya Li  
Creative Technologist · Software Engineer

Include clickable links:

- Portfolio website
- LinkedIn
- GitHub
- Resume
- Email

Optionally include a QR code to the live interactive portfolio.

The PDF must remain useful even if the QR code is never scanned.

---

# Source material to inspect

Use the current branch:

`codex/snowflake-personal-website`

Inspect:

- `app/page.tsx`
- `components/demo-shell.tsx`
- `assets/dramaclips/screens/`
- existing portfolio PDF under public/assets if present
- current resume PDF if present
- `docs/CODEX_PORTFOLIO_SNOWFLAKE_V2.md`

Also inspect the source DramaClips repo when needed:

`ruoyali7/dramaclips`

Use production screenshots and code evidence to verify claims.

---

# Content hierarchy

The approximate visual/content weighting should be:

- **65–70% DramaClips / AI creative workflow**
- **20–25% design + computational background**
- **10% positioning / about / contact**

This is intentional.

Do not create an equal-weight project gallery.

---

# Accuracy rules

Very important:

- Do not fabricate metrics.
- Do not invent commission totals.
- Do not claim partnership, employment, sponsorship, or official endorsement by ReelShort.
- Do not claim all four platforms are fully API-automated unless code proves it.
- Clearly distinguish interactive demo data from real product evidence.
- Do not reveal secrets, private account IDs, tokens, dashboard identifiers, or sensitive affiliate data.
- Do not present illustrative scoring values as production measurements.
- Do not overclaim AI research or model development.
- Do not overclaim deep graphics engineering.

---

# PDF quality requirements

Before finalizing:

1. Check every page visually.
2. No clipped text.
3. No broken images.
4. No tiny screenshots that require zooming.
5. All screenshots should be cropped intentionally.
6. Maintain consistent margins and typography.
7. Ensure URLs are clickable where PDF tooling allows.
8. Keep file size reasonable for application upload.
9. Verify embedded fonts render correctly.
10. Test final PDF locally after export.

If PDF generation introduces visual differences from the HTML/source, fix the print stylesheet rather than accepting broken layout.

---

# Final output paths

Create at minimum:

`portfolio-pdf/Ruoya_Li_Snowflake_Creative_Technologist_Portfolio_FINAL.pdf`

and the editable/reproducible source in:

`portfolio-pdf/`

Also optionally copy the final PDF into `public/` so the personal site can link to the same application portfolio later.

---

# Definition of done

The final PDF should make a Snowflake reviewer understand, without opening the website:

1. Ruoya is a Creative Technologist with strong software-engineering execution.
2. DramaClips is her own 0→1 real product, not a portfolio-only demo.
3. She can integrate AI into a complete creative workflow rather than just call a model API.
4. She understands human-in-the-loop creative decision making.
5. She can connect AI/media systems with publishing and measurement.
6. The system has been used across four social platforms.
7. The workflow generated real affiliate commission.
8. She has visual/computational design depth beyond conventional software engineering.
9. She can communicate technical systems clearly and visually.
10. The presentation feels specifically relevant to **Creative Technologist, Brand AI**.

Do not stop at a content outline. Produce the actual final PDF and source files.
