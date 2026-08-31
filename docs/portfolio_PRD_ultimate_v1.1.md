# Ruoya Li — Creative Technology Portfolio Website

**Document:** Ultimate Product Requirements Document v1.1  
**Status:** Ready for phased implementation  
**Owner:** Ruoya Li  
**Source:** Original Portfolio PRD v1.0 + Supplement v1.1  

> This document consolidates the original PRD and its supplement. Where they differ, v1.1 takes priority. This is the implementation source of truth.

## 1. Product thesis

Build a high-quality personal portfolio positioning Ruoya Li as a **Software Engineer & Creative Technologist** working across software engineering, applied AI, professional 3D/design, computational design, digital fabrication, and creative workflows.

Supporting positioning:

> Software engineering + applied AI + professional 3D/design domain experience.

The site must support two connected job-search tracks: software engineering and 3D/design/AI/creative technology. It should feel like a technically credible, calm creative-technology lab—not a traditional architecture portfolio, generic developer portfolio, or AI-art gallery.

### Immediate application mode: Snowflake

The first shippable version is optimized for the Snowflake **Creative Technologist, Brand AI** application. It should make this conclusion easy: Ruoya understands creative teams, can identify valuable AI opportunities, build functional prototypes and connected workflows, and communicate technical possibilities in practical creative language. This is a focused slice of the larger portfolio, not a separate identity.

Career story:

```text
Architecture / Design
        ↓
3D + Visualization + Digital Fabrication
        ↓
Computational Design + Automation
        ↓
Software Engineering
        ↓
Applied AI + Creative Workflow Systems
```

## 2. Positioning boundaries

Use the primary title **Software Engineer & Creative Technologist**. Describe AI as applied AI, AI integration, LLM/API usage, workflow development, RAG, embeddings, structured outputs, and creative-system integration. Do not imply ML research or model training.

Describe 3D experience at the application, design, visualization, computational-design, and fabrication-workflow level. Do not imply low-level graphics-engineering, shader, GPU, C++ rendering, robotics-controls, or ROS expertise unless future evidence supports those claims.

## 3. Target roles

### Tier 1 — Primary

Creative Technologist; AI Creative Technologist; Design Technologist; Computational Designer; Computational Design Engineer; Design Technology Developer/Specialist; Design Automation Engineer; AEC Software Engineer; BIM Software Engineer/Developer; Creative Tools Engineer; Creative Developer; Prototyping Engineer; AI Workflow Engineer; Creative AI Engineer; Generative Media Engineer; application/workflow-focused AI Pipeline Engineer; Full-Stack/Product Engineer for 3D, AEC, spatial, or creative products; Applied AI Engineer.

### Tier 2 — Selective

Tools/pipeline-focused Technical Artist; AI Technical Artist; 3D Pipeline Engineer; CG Experimental Artist; AI Video Artist/Filmmaker; Visualization Technology Specialist; XR/AR/VR Developer; Digital Twin Engineer; CAD Computational Design Engineer; Geometry/Parametric Automation Engineer; software- or computational-design-focused Digital Fabrication roles.

### Do not optimize around in v1

Low-level graphics/rendering roles, shader-heavy technical art, engine-heavy Unreal/Unity roles, ML research, robotics controls/ROS, and senior Technical Director/Pipeline TD roles.

## 4. Information architecture

Primary navigation: Work, Experiments, About, Resume, Contact. The name/logo returns home.

Required routes:

```text
/
├── /work
├── /work/dramaclips
├── /work/computational-design
├── /work/visualization-immersive
├── /work/digital-fabrication
├── /work/ai-interview-copilot
├── /experiments
├── /about
└── /resume
```

Post-launch role-targeted routes should reuse project data rather than duplicate case studies:
`/creative-technology`, `/software-engineering`, `/design-technology`, and later `/applied-ai`, `/3d-visualization`.

## 5. Homepage requirements

Hero copy:

**Ruoya Li**  
**Software Engineer & Creative Technologist**

> I build AI-powered creative tools, 3D experiences, and software systems at the intersection of technology, design, and media.

The hero includes View Work and View Resume CTAs. Any interactive visual must be lightweight and must not block meaningful content.

Homepage featured work at launch, in this order:

1. DramaClips — AI-Assisted Creative Operations
2. Computational Design Automation
3. 3D Visualization & Immersive Design
4. Digital Fabrication & Robotic Prototyping

For the Snowflake application slice, the homepage may launch with three evidence-led cards instead: DramaClips, Applied AI / Creative Workflow Experiments, and Computational Design / Visual Systems. Do not create a fourth card just to fill a grid.

Do not feature unfinished AI × 3D work as completed work. Once a genuine, visually strong project exists, it may replace one card.

Capability groups:

- **Software Engineering:** Python, Java, JavaScript/TypeScript, React/Next.js, APIs, backend systems
- **Applied AI:** LLM APIs, RAG, embeddings, vector retrieval, structured outputs, workflow integration
- **3D / Visualization:** Maya, ZBrush, Rhino, V-Ray, rendering, animation, VR—only where supported by evidence
- **Computational Design:** Grasshopper, RhinoCommon, C#, parametric design, BIM/design automation
- **Digital Fabrication:** CNC, KUKA robotic fabrication, 3D printing, physical prototyping

Capabilities must link to evidence and projects, not appear as an ungrounded logo wall.

Also include a compact experience timeline (DramaClips, GEICO, Gensler, Steinberg Hart), education (Johns Hopkins M.S. CS, SCI-Arc M.Arch, Kent State B.S. Architecture), and footer links for email, LinkedIn, GitHub, resume, and Sunnyvale, CA.

## 6. Work index and project model

The Work page is curated rather than chronological. Filters are optional and must not delay launch.

```ts
type RoleFamily =
  | "creative-technology" | "software-engineering" | "applied-ai"
  | "design-technology" | "computational-design" | "3d-visualization"
  | "digital-fabrication" | "aec-technology" | "technical-art";

type EvidenceLevel = "professional" | "independent" | "academic" | "experiment";
type ProjectStatus = "published" | "draft" | "planned" | "hidden";

type Project = {
  title: string; subtitle: string; year: string; role: string;
  tags: string[]; summary: string; roleFamilies: RoleFamily[];
  skills: string[]; evidenceLevel: EvidenceLevel; status: ProjectStatus;
};
```

Only `published` projects appear publicly. Known classifications: GEICO/Gensler/Steinberg Hart = professional; DramaClips = independent; SCI-Arc fabrication = academic; new AI × 3D = experiment/draft until mature.

## 7. Case-study standard

Every major case study uses: Hero, Context, Problem, My Role, System/Workflow, Process, Technical Details, Result, Impact/Outcome, and What I Learned/Next Step.

Heroes must include an evidence summary:

```text
ROLE / CONTEXT / FOCUS / TOOLS
```

Use real metrics only. If metrics are unavailable, state concrete outcomes such as reduced manual steps, improved consistency, enabled reuse, or faster iteration. Never invent project details, tools, assets, workflows, or impact.

## 8. Required case studies

### DramaClips — AI-Assisted Short-Form Video Production Platform

Frame this as an end-to-end creative operations workflow: source content → ingestion → cloud asset persistence → AI hook generation → asset organization → metadata → multi-platform publishing → attribution → analytics. Show truthful technologies such as Next.js, Supabase, Cloudflare R2, Railway, OpenAI API, async workflows, publishing, tracking, and analytics. Do not expose confidential data or claim unavailable provider conversions/revenue.

### Computational Design Automation

Show a supported real project through design parameters → Grasshopper → geometry logic → Rhino/RhinoCommon → alternatives → review/visualization. Emphasize system, logic, iteration, and personal contribution rather than a conventional architecture narrative.

### 3D Visualization & Immersive Design

Curate only the strongest 2–3 professional projects. Show available wireframe, clay/material/lighting tests, final render, animation, VR, or diagrams. Use only tools actually used.

### Computational Fabrication — From Digital Geometry to Physical Prototype

Publish only if evidence supports it. Potential evidence includes Rhino/modeling, fabrication setup, KUKA, CNC, powder/PLA/ABS printing, physical prototypes, and process video. Frame this as digital-to-physical fabrication workflow, not robotics engineering.

### AI Interview Copilot

Keep this compact and evidence-based. Show architecture, technologies, role, and a small technical explanation relevant to Software Engineer and Applied AI roles.

## 9. Strategic post-launch work

The new **Generative Worlds — AI × 3D Creative Pipeline** project is explicitly post-launch and must not block v1. Its eventual goal is applied AI integrated into an existing creative/3D workflow: structured prompting, APIs, automation, asset iteration, 3D judgment, and final output. A draft/hidden route is allowed; no fabricated screenshots or case study.

## 10. About, visual, and technical direction

Tell one continuous progression: spatial/visual design → computation/automation → digital-to-physical fabrication → production software → applied AI and creative systems. Use clean typography, a restrained grid, calm contemporary visuals, and subtle motion. Avoid excessive gradients, generic AI imagery, loading screens, heavy WebGL, and terminal aesthetics.

Use a maintainable web stack already supported by the repository. Keep content data-driven, responsive, accessible, SEO-ready, and performance-conscious. Optimize images/video; hero media must not block first meaningful content. Provide metadata, sitemap/robots behavior, structured data where appropriate, privacy-conscious analytics, keyboard navigation, contrast, alt text, focus states, and reduced-motion behavior.

## 11. v1 scope

### Must have

Home, Work, About, Resume, DramaClips, Computational Design, curated 3D Visualization/VR, SCI-Arc Digital Fabrication when assets support it, compact AI Interview Copilot, responsive design, accessibility, SEO/metadata, analytics, and deployment.

### Must not block launch

New AI × 3D project, WebGL hero, ComfyUI work, role filters, interactive 3D viewer, and role-targeted landing pages.

### Snowflake application slice — must ship first

Before the broader v1, ship a focused slice containing a polished homepage, DramaClips case study, one compact applied-AI/workflow case study, selected computational/visual evidence, About, Resume, Contact, and working external links. It must be usable as the portfolio URL in a Snowflake application.

## 12. Definition of done

A recruiter can accurately conclude:

> Ruoya has professional design/3D domain experience, understands computational and digital-fabrication workflows, can build production software, and applies software and AI to creative workflows.

The site must not cause recruiters to assume low-level graphics-engine, shader, ML-research, or robotics-controls expertise.

## 13. Implementation protocol

Work in the roadmap order. Phase 0 must inspect the repository and available assets, create `content-inventory.md` and `content-gaps.md`, classify evidence and project status, and ask for missing information rather than inventing it. Review each phase before continuing. The first implementation deliverable is content truth and readiness—not visual polish.
