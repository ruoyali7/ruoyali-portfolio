# Portfolio Revision Recommendations After DramaClips Repository Review

**Purpose:** Update the current portfolio implementation direction using verified engineering evidence from the real DramaClips codebase.

**Priority:** Job-search effectiveness first. This document does **not** change DramaClips into a portfolio-only project. DramaClips remains a revenue-generating affiliate/CPS product; the portfolio should selectively expose the engineering decisions behind it without exposing sensitive business data.

---

## 1. Executive recommendation

The current portfolio positioning — **Software Engineer & Creative Technologist** — is still correct and should remain the primary identity.

However, after reviewing the actual DramaClips repository, the portfolio currently **undersells the software-engineering depth** of the project.

DramaClips should no longer be presented mainly as:

> an AI-assisted short-form content workflow / creative operations project

It should instead be presented as:

> a production content-distribution and attribution platform with asynchronous media processing, object storage, worker leasing, idempotent jobs, encrypted affiliate destinations, publishing workflows, and event-level analytics.

The creative/AI angle should remain visible, but the portfolio should make it obvious that the core value is a real software system supporting a real operational and revenue workflow.

### Desired recruiter takeaway

Within 30–60 seconds, a recruiter should understand:

1. Ruoya can build production-oriented full-stack/backend systems.
2. She has shipped a real product used in an actual affiliate/commission workflow.
3. She understands asynchronous processing, job queues, storage, tracking, security, and analytics — not just UI and API calls.
4. Her previous architecture/3D background adds domain range, rather than defining her as an architecture candidate.
5. Applied AI is one capability inside a broader engineering toolkit, not the entire identity.

---

# 2. Change the portfolio emphasis hierarchy

## Current risk

The existing portfolio direction is broad: software + AI + 3D + visualization + computational design + fabrication.

That breadth is useful for hybrid roles, but if every discipline gets similar visual weight, an SDE recruiter may struggle to identify the strongest technical signal.

## Recommended hierarchy

### Tier A — Primary evidence

1. **DramaClips — Production Software / Backend / Full Stack**
2. **AI Interview Copilot — Applied AI / Retrieval System**

### Tier B — Differentiating domain evidence

3. **Computational Design / Design Automation**
4. **3D Visualization / Immersive Work**
5. **Digital Fabrication**

The homepage may still show 3D/design work visually, but the copy hierarchy should communicate:

> Software engineering first; creative technology and 3D domain depth second.

This is especially important for SDE, product engineering, creative tooling, design technology, 3D software, AEC software, and applied-AI roles.

---

# 3. Homepage changes

## 3.1 Hero copy

Current positioning is directionally good, but avoid making the first sentence sound like an AI/creative generalist portfolio.

### Recommended structure

**Title**

> Software Engineer & Creative Technologist

**Primary sentence**

> I build production software, AI-assisted workflows, and tools for media, design, and 3D applications.

**Supporting sentence**

> My background spans software engineering, computational design, visualization, and digital fabrication.

This ordering makes software engineering the first signal while retaining the differentiated background.

---

## 3.2 First-screen evidence

Do not use a decorative hero as the main proof of ability.

Immediately below the hero, expose 3–4 concise engineering facts such as:

- Production full-stack systems
- Async media workflows
- Applied AI / RAG
- 3D + computational design domain experience

Avoid a generic technology-logo wall.

Each capability should link to project evidence.

---

## 3.3 Selected work order

Recommended homepage order:

1. **DramaClips — Content Distribution & Attribution Platform**
2. **AI Interview Copilot — RAG-Based Interview System**
3. **Computational Design Automation**
4. **Selected 3D / Fabrication Work**

If applying specifically to a Creative Technologist role, cards 2 and 3 can be reordered, but DramaClips should remain first.

---

# 4. DramaClips case study — major rewrite

This is the highest-priority portfolio change.

The current PRD already proposes a DramaClips case study, but the actual repository supports a much stronger engineering narrative.

## 4.1 Recommended title

Use one of:

> **DramaClips — Content Distribution & Attribution Platform**

or

> **DramaClips — AI-Assisted Media Operations Platform**

For general SDE applications, prefer the first.

For Creative Technologist / Brand AI / AI workflow roles, prefer the second.

The underlying case study should be shared; role-targeted landing pages can alter title/order later.

---

## 4.2 Opening summary

Recommended direction:

> I built and operate DramaClips as part of a real short-form drama affiliate workflow. The platform handles media ingestion, cloud asset storage, AI-assisted hook generation, asynchronous processing, publishing workflows, tracking redirects, and analytics used to understand which content drives downstream engagement and commission.

Important:
- Make clear that this is a real operating product.
- Do not publish private commission amounts unless explicitly desired.
- Do not imply ReelShort provides APIs or conversion data that are not actually available.

---

## 4.3 Architecture diagram

The case study should prominently include a clean architecture/workflow diagram:

```text
Source Media
    ↓
Admin / Ingestion UI
    ↓
Signed Upload / Asset Pipeline
    ↓
Cloudflare R2
    ↓
Hook Generation Job Queue
    ↓
Worker: AI Analysis + FFmpeg Processing
    ↓
Hook Candidates
    ↓
Human Review
    ↓
Publishing Workflow
    ↓
TikTok / Instagram / Other Channels
    ↓
DramaClips Landing / Redirect Layer
    ↓
Event Tracking + Attribution
    ↓
Affiliate Destination / Commission Workflow
```

The portfolio should visually distinguish:

- synchronous web request flow
- asynchronous worker flow
- storage
- database
- external platforms
- analytics / attribution

This diagram will communicate more technical depth than several paragraphs of prose.

---

# 5. Engineering details that should be surfaced

The following details are supported by the implementation and are strong interview signals.

## 5.1 Idempotent asynchronous jobs

Explain that hook-generation jobs use an idempotency key derived from job inputs and pipeline version so duplicate submissions do not accidentally create duplicate work.

Portfolio wording:

> Designed idempotent media-processing jobs so repeated requests resolve to the same logical job unless an explicit rerun is requested.

Do not expose implementation hashes unless useful in an expandable technical section.

---

## 5.2 Worker leasing and concurrency

This is one of the strongest backend elements in the project and should be prominently shown.

The database-backed worker queue uses PostgreSQL row locking / `FOR UPDATE SKIP LOCKED`, worker leases, heartbeats, retry state, and expired-lease recovery.

Portfolio wording:

> Implemented database-backed worker leasing with PostgreSQL `FOR UPDATE SKIP LOCKED`, heartbeats, retries, and lease expiration to safely coordinate asynchronous media jobs across workers.

This is stronger than simply saying "built asynchronous workflows."

---

## 5.3 Pipeline lifecycle

Show a simplified state machine:

```text
queued
→ downloading
→ transcribing
→ analyzing
→ rendering
→ review_ready
→ completed/published

failure paths:
failed / canceled / retry
```

If the exact current terminal-state naming differs, Codex should use the current repository as source of truth when implementing the diagram.

This makes reliability engineering visible.

---

## 5.4 Cloud storage architecture

Highlight direct/object-storage-oriented media handling rather than treating R2 as a simple database attachment store.

Recommended wording:

> Used Cloudflare R2 for persistent media assets and designed upload/processing flows that avoid routing large video payloads through the application server where possible.

If signed/direct upload behavior changes during future optimization, keep portfolio copy synchronized with production behavior.

---

## 5.5 Affiliate destination security

DramaClips stores sensitive CPS destination URLs using authenticated encryption.

Recommended wording:

> Protected sensitive affiliate destinations with server-side AES-256-GCM authenticated encryption and restricted redirect validation.

This is a useful security signal, but do not expose keys, environment variable names, encrypted payload examples, or destination details.

---

## 5.6 Deterministic weighted routing

The redirect system supports priority filtering plus deterministic weighted destination selection based on session identity.

Recommended wording:

> Built deterministic weighted traffic routing so users receive stable destination assignments while allowing configurable distribution across eligible campaigns.

This can later become the foundation for experiment routing and should connect visually to the analytics section.

---

## 5.7 Event-level analytics

Current tracking already captures platform/campaign/content/session metadata and funnel events.

Portfolio wording:

> Implemented event-level attribution across traffic source, campaign, content, session, and downstream redirect behavior to evaluate which creative workflows produce engagement.

Avoid claiming full purchase-level attribution until it actually exists.

---

# 6. Show the system, not the admin UI

A key portfolio risk is using too many admin-dashboard screenshots.

Admin UI screenshots can make the project look like a CRUD application even when the backend is substantially deeper.

Recommended visual ratio for the DramaClips case study:

- 25% product/interface screenshots
- 30% architecture/workflow diagrams
- 20% pipeline/job-state visualization
- 15% analytics/experiment visualization
- 10% selected code/technical detail

Do not display large walls of source code.

Use tiny, intentional technical callouts where the implementation itself communicates an important design decision.

Examples:

- `FOR UPDATE SKIP LOCKED`
- idempotency concept
- lease / heartbeat flow
- redirect filtering/routing logic

---

# 7. Separate business workflow from technical architecture

The case study should have two diagrams.

## Business workflow

```text
Discover/select drama
→ prepare clips
→ generate/test hooks
→ publish
→ drive viewer traffic
→ affiliate destination
→ commission
```

## Technical system

```text
Web app
→ storage
→ queue
→ worker
→ database
→ publishing
→ tracking
```

This separation is important because the project is genuinely used for revenue generation, but recruiters should not have to understand the entire short-drama affiliate industry before they understand the engineering.

---

# 8. Product metrics and outcome section

The portfolio currently needs a better policy for metrics.

Use three categories.

## Safe operational metrics

Examples, when real data is available:

- number of dramas managed
- clips processed
- generated hook candidates
- publishing jobs
- platforms supported
- tracked events
- reduction in manual steps
- processing time

## Business metrics

Optional and only if comfortable publishing:

- affiliate conversions
- commission
- revenue per content item

These are not required for the portfolio to be credible.

## Engineering reliability metrics

After the optimization roadmap is implemented, preferentially expose:

- job success rate
- average processing latency
- retry recovery rate
- queue throughput
- publishing success rate

These are excellent SDE signals and less commercially sensitive than revenue.

---

# 9. AI positioning — reduce generic AI language

Avoid phrases such as:

- AI-powered everything
- intelligent platform
- advanced generative AI

Instead specify the actual role of AI.

For DramaClips:

> AI-assisted hook generation and candidate ranking inside a human-reviewed media workflow.

For AI Interview Copilot:

> Retrieval-augmented question generation and answer evaluation using embeddings, vector retrieval, reranking, and LLM generation.

The portfolio should communicate that AI is a component in engineered systems.

---

# 10. AI Interview Copilot changes

This should become the second strongest software project for general SDE / applied-AI applications.

Recommended compact architecture:

```text
User profile / interview context
→ embeddings
→ vector retrieval
→ CrossEncoder reranking
→ prompt/context assembly
→ LLM generation / evaluation
```

Highlight:

- FastAPI
- retrieval pipeline
- SentenceTransformers embeddings
- vector database
- CrossEncoder reranking
- structured application workflow

Avoid letting it look like a generic OpenAI API wrapper.

---

# 11. 3D / architecture work — curate more aggressively

The 3D/design background is a differentiator, but it should not visually dominate the engineering portfolio.

## Recommended strategy

Keep only work that demonstrates at least one of:

- procedural/computational thinking
- automation
- complex digital workflows
- technical visualization
- fabrication pipeline
- high visual quality relevant to creative-tech roles

Avoid publishing many conventional architectural project spreads.

The portfolio should not accidentally read as:

> architect who recently learned programming

It should read as:

> software engineer with unusually deep spatial/design/3D domain experience.

---

# 12. Computational design case study

This project should bridge the previous design career and current software career.

Focus on:

```text
Design constraint
→ parameterization
→ algorithm / geometry logic
→ generated alternatives
→ evaluation / iteration
→ output
```

Show Grasshopper/Rhino/RhinoCommon/C# only where actually supported.

Highlight programming and system thinking rather than architectural aesthetics alone.

---

# 13. Digital fabrication case study

Use this as supporting evidence for physical/digital systems thinking.

Good story:

```text
Digital geometry
→ fabrication preparation
→ CNC / KUKA / 3D printing workflow
→ physical prototype
```

Avoid describing this as robotics engineering unless low-level control work can be demonstrated.

A short, visually strong section is better than a long academic case study.

---

# 14. Experience timeline changes

The timeline should communicate the transition without making it look like a disconnected career reset.

Recommended narrative:

```text
Architecture / Design Practice
↓
Computational Design + Visualization
↓
Computer Science / Software Engineering
↓
Production Software + Applied AI
```

Do not over-explain the transition.

Each stage should show what capability carried forward into the next stage.

Examples:

- design systems → structured problem solving
- computational geometry → programming
- visualization workflows → tool building / media systems
- software engineering → production systems
- applied AI → automation inside domain workflows

---

# 15. Resume page changes

The portfolio `/resume` route should not merely embed/download a PDF.

Recommended layout:

1. prominent PDF download
2. LinkedIn
3. GitHub
4. selected live products
5. compact skills
6. current focus

DramaClips live site should appear before its GitHub repository if the public product is stronger evidence than the repository landing page.

---

# 16. UI / UX direction for the portfolio

## 16.1 Overall visual identity

Keep the existing "calm technical creative lab" direction.

Avoid:

- terminal-style developer portfolio clichés
- heavy neon gradients
- excessive WebGL
- floating technology logos
- generic AI-generated hero imagery
- large architecture-style image grids with little explanation

Aim for:

- editorial typography
- strong whitespace
- technical diagrams
- restrained motion
- large selected media
- highly scannable engineering callouts

---

## 16.2 Case-study navigation

Add a sticky or compact section navigator on long project pages:

- Overview
- Architecture
- Workflow
- Engineering
- Results
- Next

Recruiters often scan instead of reading linearly.

---

## 16.3 Evidence chips

At the top of each case study include a small evidence block:

```text
ROLE
Independent Product / Software Engineer

SYSTEM
Full Stack · Async Media · Attribution

STACK
Next.js · TypeScript · Supabase · PostgreSQL · R2 · Railway

STATUS
Live / Actively Operated
```

Do not overload this area with every dependency.

---

## 16.4 Progressive technical depth

Use three levels of information:

### Level 1 — recruiter scan

One sentence + diagram + outcomes.

### Level 2 — engineering detail

Architecture, state machine, reliability, security, attribution.

### Level 3 — optional deep dive

Expandable implementation notes / selected code / design tradeoffs.

This allows both recruiters and engineers to use the same site.

---

# 17. Add "Engineering Decisions" sections

For DramaClips and AI Interview Copilot, add a short section titled:

> Engineering Decisions

Each card should follow:

```text
Problem
Decision
Why
Tradeoff
```

Possible DramaClips examples:

### Database-backed worker queue

**Problem:** media processing cannot safely run inside ordinary web requests.

**Decision:** use persistent jobs plus PostgreSQL-backed worker leasing.

**Why:** supports retries, recoverability, observable state, and multiple workers.

**Tradeoff:** adds queue/state-management complexity compared with fire-and-forget server execution.

### Object storage

**Problem:** large video assets do not belong in the application/database layer.

**Decision:** persist media in Cloudflare R2 and keep metadata/state in the application database.

### Encrypted affiliate destinations

**Problem:** affiliate/CPS destinations may contain sensitive operational details.

**Decision:** encrypt stored destinations and validate outbound hosts before redirects.

These decision cards are strong interview preparation because they naturally generate system-design discussion.

---

# 18. Add "What I would improve next" carefully

Do not make the project look unfinished.

Instead show 2–3 mature next steps such as:

- closed-loop hook experimentation using real performance data
- stronger commission/revenue attribution
- queue observability and reliability metrics
- role-based admin sessions if the tool becomes multi-user

This demonstrates engineering judgment.

Avoid huge public TODO lists.

---

# 19. Portfolio-specific code quality

The portfolio repository itself should feel polished because recruiters may inspect it.

Required:

- Prettier
- ESLint
- typecheck
- production build check
- clear component structure
- semantic HTML
- responsive design
- accessible focus states
- reduced-motion support
- optimized images/videos

Prefer a small number of strong reusable components over elaborate visual abstractions.

---

# 20. Role-targeted views — post-launch but high value

Do not create separate duplicated portfolios.

Reuse the same content and reorder evidence.

## `/software-engineering`

Order:

1. DramaClips
2. AI Interview Copilot
3. Computational Design
4. selected technical 3D/fabrication evidence

Hero emphasis:

> Production software, backend systems, applied AI, and domain-specific tools.

## `/creative-technology`

Order:

1. DramaClips
2. Computational Design / visual systems
3. 3D / immersive
4. AI Interview Copilot

## `/design-technology`

Order:

1. Computational Design
2. DramaClips
3. Digital Fabrication
4. 3D visualization

Implement this only after the core portfolio is strong.

---

# 21. Recommended implementation priority for Codex

## P0 — Portfolio positioning correction

1. Keep **Software Engineer & Creative Technologist** title.
2. Change homepage copy so software engineering is the first signal.
3. Make DramaClips the undeniable flagship project.
4. Promote AI Interview Copilot for SDE / applied-AI evidence.
5. Reduce visual weight of conventional architecture work.

## P1 — DramaClips case-study rewrite

1. Create architecture diagram.
2. Create business workflow diagram.
3. Add async job / worker architecture.
4. Surface idempotency, lease/heartbeat/retry, R2 storage, encryption, routing, analytics.
5. Add Engineering Decisions section.
6. Add real outcome metrics where available.

## P2 — Recruiter scan UX

1. Evidence header/chips.
2. Sticky case-study navigation.
3. Stronger first-screen project cards.
4. Live Demo / Case Study / GitHub CTAs with deliberate priority.
5. Progressive technical detail.

## P3 — Supporting project refinement

1. AI Interview Copilot architecture.
2. Computational design as programming/system evidence.
3. Curate 3D work.
4. Compress fabrication into a strong technical visual story.

## P4 — Polish

1. performance
2. accessibility
3. responsive behavior
4. SEO
5. project metadata
6. role-targeted landing pages

---

# 22. Codex implementation guardrails

When implementing these recommendations:

1. **Do not invent metrics.**
2. **Do not invent technologies.**
3. Use the actual DramaClips repository as the source of truth for technical claims.
4. Never expose production secrets, environment variables, private affiliate URLs, tokens, commission-account data, or admin credentials.
5. Do not refactor the real DramaClips product merely to make portfolio screenshots easier.
6. Portfolio changes must not interfere with DramaClips' revenue workflow.
7. Prefer diagrams and concise technical explanations over copying large source-code blocks.
8. Preserve the public site's professional visual quality and mobile performance.

---

# 23. Recommended first Codex task

**Task: Reframe homepage + DramaClips case-study information architecture**

Before changing visual styling:

1. Inspect current homepage, work/project data model, and DramaClips case-study implementation.
2. Compare current content against this document.
3. Update the content hierarchy so Software Engineering is the first signal.
4. Keep the main identity `Software Engineer & Creative Technologist`.
5. Draft the new DramaClips case-study sections:
   - Overview
   - Real-world context
   - Business workflow
   - System architecture
   - Async processing architecture
   - Engineering decisions
   - Tracking & attribution
   - Results
   - Next improvements
6. Implement placeholder diagram components using clean HTML/SVG/CSS only; do not add heavy diagram libraries unless clearly necessary.
7. Do not invent metrics or expose private information.
8. Run lint/typecheck/build and report files changed.

**Acceptance criteria:**

- A recruiter can identify Ruoya primarily as a software engineer within the first screen.
- DramaClips visibly demonstrates backend/full-stack engineering rather than appearing to be primarily a content/AI dashboard.
- The architecture explains asynchronous processing, storage, worker coordination, tracking, and affiliate routing at a glance.
- 3D/design experience remains visible as differentiation, but does not dominate the software narrative.

---

## Final positioning statement

The strongest portfolio story is not:

> "I used to do architecture and now I also code and use AI."

It is:

> **"I am a software engineer who brings deep design, 3D, and creative-workflow domain knowledge — and I build real systems that connect those domains with software and applied AI."**

That should guide every content, layout, and project-ordering decision in the portfolio.
