# Portfolio implementation roadmap

This roadmap implements [the consolidated v1.1 PRD](portfolio_PRD_ultimate_v1.1.md). Each phase should end with a working, reviewable state. The supplement changes the launch strategy: use existing verified evidence first; the new AI × 3D project is post-launch.

## Priority track — Snowflake application slice

The first deliverable is a focused branch for the Snowflake Creative Technologist, Brand AI application. It takes priority over the full portfolio roadmap.

### Snowflake S0 — Application evidence audit

- Extract evidence themes: creative-team partnership, AI prototyping, connected workflows, practical adoption, communication, experimentation, and responsible use.
- Inventory real evidence from DramaClips, AI Interview Copilot, design/visual work, and workflow automation.
- Create `snowflake-content-map.md` mapping each claim to an artifact or explicit gap.

**Exit criteria:** every Snowflake-facing claim has evidence or is omitted.

### Snowflake S1 — Application-ready site

- Build a polished homepage and put DramaClips first as a creative operations/workflow system.
- Add one compact Applied AI/workflow case study, selected visual/computational evidence, About, Resume, Contact, and working links.
- Use editorial layout, strong media, workflow diagrams, interface fragments, and restrained motion.
- Do not block on WebGL, a new AI × 3D project, role filters, or a large experiments section.

**Exit criteria:** the live URL communicates creative judgment, systems thinking, hands-on building, applied AI, and cross-functional communication within the first screen and first two case studies.

### Snowflake S2 — Application review

- Review against the Snowflake posting and remove unsupported claims.
- Verify resume, GitHub, LinkedIn, demos, screenshots, and contact links.
- Prepare a short project narrative for application and interview follow-up.

**Exit criteria:** the portfolio is ready to submit to Snowflake.

## Phase 0 — Content audit and evidence inventory

**Goal:** establish what can truthfully be published.

- Inspect the repository and all available portfolio assets.
- Create `content-inventory.md` with asset, project, ownership, role, tool, and publication evidence.
- Create `content-gaps.md` with explicit questions for SCI-Arc, Gensler, Steinberg Hart, DramaClips, and AI Interview Copilot.
- Classify every project by `professional`, `independent`, `academic`, or `experiment`.
- Assign `published`, `draft`, `planned`, or `hidden` status.
- Confirm dates, roles, technologies, ownership, confidentiality, and real metrics; never invent missing evidence.

**Exit criteria:** both content documents exist, every planned case study has evidence/status, and unsupported or confidential material is excluded.

## Phase 1 — Technical and visual foundation

**Goal:** create the site shell without committing to speculative content.

- Choose the simplest maintainable stack already supported by the workspace.
- Establish typography, color tokens, spacing/grid, responsive layout, navigation, metadata, and accessibility defaults.
- Add lightweight motion primitives; keep the first meaningful content independent of any hero animation or WebGL.
- Create typed project/content data structures with role families, skills, evidence level, and project status.

**Exit criteria:** the shell runs locally, primary navigation works, mobile layout is usable, and an empty project model can render consistently.

## Phase 2 — Homepage and curated Work index

**Goal:** communicate the positioning quickly and route visitors to evidence.

- Build hero with the approved title, positioning sentence, and View Work/View Resume CTAs.
- Add four selected-work cards: DramaClips, computational design, visualization/immersive design, and digital fabrication.
- Add capability groups, experience timeline, education strip, and footer links.
- Add `/work` as a curated index; filters remain optional and should not delay the core page.

**Exit criteria:** a recruiter can identify what Ruoya builds, see role-relevant work, and reach resume/contact links within a short scan.

## Phase 3 — DramaClips flagship case study

**Goal:** present DramaClips as an end-to-end AI-assisted creative production workflow.

- Explain ingestion, asset persistence, AI hook generation, organization, metadata, publishing, attribution, and analytics.
- Show a polished workflow diagram and a short demo or screen recording.
- Expose truthful technology details: Next.js, Supabase, Cloudflare R2, Railway, OpenAI API, async workflows, publishing, tracking, and analytics.
- Use the standard case-study structure: context, problem, role, system, process, technical details, result, outcome, and next step.

**Exit criteria:** the case study demonstrates production software plus creative workflow integration without claiming unavailable metrics or confidential details.

## Phase 4 — Computational Design case study

**Goal:** convert professional computational-design experience into evidence relevant to design-technology, AEC software, automation, and creative-tool roles.

- Build the computational-design story around parameters, Grasshopper/Rhino/RhinoCommon/C#, geometry logic, iteration, and visual output.
- Curate only the strongest 2–3 visualization/immersive projects.
- Show process evidence such as wireframe, clay/material/lighting tests, final render, animation, VR image, or diagram.
- Emphasize system + logic + iteration + visual result rather than a traditional architecture narrative.

**Exit criteria:** the case study clearly states the problem, personal contribution, workflow, tools actually used, and final result.

## Phase 5 — 3D Visualization and Immersive case study

**Goal:** curate professional visualization/VR evidence without turning the site into a traditional architecture portfolio.

- Select only the strongest 2–3 projects.
- Show available wireframe, clay/material/lighting tests, final render, animation, VR image, or diagram.
- Use only tools and claims supported by the content audit.

**Exit criteria:** the page emphasizes system, process, visual result, and personal contribution.

## Phase 6 — SCI-Arc Digital Fabrication case study

**Goal:** establish digital-to-physical fabrication as a first-class capability.

- Publish only supported evidence for CNC, KUKA robotic fabrication, powder/PLA/ABS printing, physical prototyping, and the individual/team contribution.
- Show the pipeline from digital geometry to fabrication workflow to physical prototype.
- Frame the work as fabrication workflow and prototyping, not robotics engineering.

**Exit criteria:** the page is evidence-backed and clearly distinguishes academic work from professional work.

## Phase 7 — AI Interview Copilot

**Goal:** add compact evidence of applied AI/software breadth.

- Document the AI Interview Copilot architecture, technologies, and personal contribution concisely.
- Add an Experiments index with a reusable card model: title, question, medium, result, and link.
- Keep experiments secondary to flagship work; do not turn the site into an AI-art gallery.

**Exit criteria:** experiments expand the narrative without competing with the four primary project stories.

## Phase 8 — About and Resume refinement

**Goal:** tell the continuous career story and make recruiter links easy to use.

- Connect spatial design, computation, fabrication, production software, and applied AI.
- Verify resume, LinkedIn, GitHub, email, and location details.

## Phase 9 — Experiments infrastructure

**Goal:** add a compact, secondary place for smaller explorations.

- Add a reusable experiment card model.
- Keep experiments subordinate to flagship evidence.

## Phase 10 — Polish, performance, SEO, and launch QA

**Goal:** make the portfolio dependable in real recruiter use.

- Verify responsive behavior, keyboard navigation, contrast, alt text, focus states, and reduced-motion behavior.
- Optimize image/video formats and loading; hero media must not block meaningful content.
- Add page/project metadata, sitemap/robots behavior, and appropriate structured data.
- Add privacy-conscious analytics only after the event model is defined.
- Run production-like checks for links, resume download, media playback, and mobile performance.

**Exit criteria:** the site satisfies the PRD definition of done and is ready for deployment review.

## Post-launch — AI × 3D flagship and role-targeted pages

Create the Generative AI × 3D project only after launch and only with real output. Later add role-targeted landing pages by reordering shared project data.

## Recommended execution order

Snowflake S0 → Snowflake S1 → Snowflake S2 → Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7 → Phase 8 → Phase 9 → Phase 10 → Post-launch AI × 3D → Post-launch role pages

The first implementation task is Snowflake S0. The launch should use existing verified evidence and must not wait for the new AI × 3D project.
