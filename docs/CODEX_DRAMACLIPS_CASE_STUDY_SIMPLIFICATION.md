# Codex Task — Simplify DramaClips Portfolio Case Study

## Goal

Simplify the DramaClips case study on the portfolio without changing the underlying project story or inventing new content.

The current DramaClips case study is too fragmented and reads like a technical defense/whitepaper. The goal is to make it immediately understandable to recruiters while preserving the strongest engineering evidence.

**Do not redesign the entire portfolio.** This task is specifically about consolidating the DramaClips case-study sections.

---

## Current structure

The current DramaClips navigation contains nine sections:

1. Overview
2. Context
3. Workflow
4. Architecture
5. Async jobs
6. Decisions
7. Attribution
8. Results
9. Next

These are all sections of the same DramaClips case study, not separate projects.

The structure is currently too long and makes the case study feel like an engineering whitepaper.

---

## Target structure

Reduce the case study to five sections:

1. **Overview**
2. **Workflow**
3. **Architecture**
4. **Attribution**
5. **Results**

Navigation should therefore become:

`Overview · Workflow · Architecture · Attribution · Results`

---

# 1. Overview

## Merge

Merge the existing **Context** section into **Overview**.

## Purpose

This section should answer four questions quickly:

- What is DramaClips?
- Why did Ruoya build it?
- What did she build?
- Is it actually being used?

## Core story

DramaClips is a real software product Ruoya built and operates for short-drama affiliate promotion.

The original workflow was fragmented across video files, clipping/AI tools, cloud storage, publishing tools, affiliate links, and performance data.

DramaClips connects those pieces into one operational system.

It is a live product used in a real affiliate workflow and has generated real commission.

Keep the existing Live Product link and concise stack/role information.

Do not turn this section into a long technical explanation.

---

# 2. Workflow

## Keep as a standalone section

This is one of the most important sections because a non-technical recruiter should be able to understand what the product actually does.

Prefer a simple real-world flow such as:

```text
Add Drama
    ↓
Upload Episodes
    ↓
Generate Hooks
    ↓
Review Clips
    ↓
Publish
    ↓
DramaClips Landing
    ↓
RS Affiliate
```

The exact labels may follow the real current product terminology, but do not invent additional workflow stages.

Use the existing real DramaClips screenshots where useful.

The goal is that someone unfamiliar with the code understands:

> Ruoya built a system that helps prepare promotional short-drama clips, publish them to social platforms, route viewers through DramaClips, and support an affiliate business workflow.

---

# 3. Architecture

## Merge

Combine the existing:

- Architecture
- Async jobs
- Engineering Decisions

into one **Architecture** section.

## Purpose

Show enough engineering depth for an engineer/recruiter without making the visitor read a system-design document.

A simplified architecture can communicate:

```text
Next.js
   │
   ├── Supabase / PostgreSQL
   │
   ├── Cloudflare R2
   │
   └── Persistent Jobs
          ↓
     Railway Worker
          ↓
   AI / Whisper / FFmpeg
```

Keep only a few strong engineering highlights below the diagram.

Recommended highlights:

### Async media processing

Long-running video jobs use persistent job state, worker leasing, progress tracking, and retry handling.

### Cloud media pipeline

Source and generated media assets are stored in Cloudflare R2 while application/workflow state remains in PostgreSQL.

### Reliable job execution

Idempotency and PostgreSQL leasing help prevent duplicate processing and recover abandoned work.

It is fine to mention `FOR UPDATE SKIP LOCKED` once as concrete technical evidence.

Do **not** keep a separate long Async Jobs section explaining every state, heartbeat, lease-expiration path, etc.

Do **not** keep four large Engineering Decision cards as a standalone section. Important decisions should be summarized inside Architecture.

---

# 4. Attribution

## Keep as a standalone section

This differentiates DramaClips from a generic AI-video demo.

The section should make the business/engineering connection obvious.

A simple conceptual flow is:

```text
Social Clip
    ↓
DramaClips
    ↓
Tracking
    ↓
RS Affiliate
    ↓
Commission
```

Explain that DramaClips can retain useful attribution context such as:

- Drama
- Clip
- Platform/source
- Campaign
- Session/event behavior
- Redirect outcome

Preserve the current factual boundary: do not claim provider-supplied purchase-level conversion data if it is not available.

The point is to show that this is software built around a real business objective, not merely an AI API demo.

---

# 5. Results

## Keep, but simplify

This should close the case study with real-world validation rather than more architecture explanation.

Emphasize only factual, defensible outcomes such as:

- Live product
- Actively operated workflow
- Four social platforms
- Real affiliate traffic
- Real commission-generating activity

Keep a clear **Visit Live Product** CTA.

Do not invent revenue numbers, conversion rates, user counts, or other metrics that are not explicitly supported by real data.

---

# Remove as standalone sections

## Context

Remove the standalone section and merge its useful explanation into Overview.

## Async Jobs

Remove the standalone section and move only the strongest engineering evidence into Architecture.

## Decisions

Remove the standalone section. Summarize the important engineering decisions as Architecture highlights.

## Next

Remove the standalone **Next** section.

The portfolio is presenting what has actually been built and operated. It does not need a product roadmap at the end of the case study.

---

# Important constraints

1. **Do not redesign the whole portfolio.**
2. **Do not change the DramaClips product itself.** This task modifies only the portfolio presentation.
3. **Do not invent projects, features, responsibilities, metrics, or outcomes.**
4. Prefer plain language over phrases that sound like an engineering whitepaper.
5. Preserve real technical evidence where it adds credibility.
6. Preserve real screenshots and the live DramaClips link.
7. Keep Software Engineering as the primary signal.
8. The case study should be understandable to both a recruiter and a software engineer.
9. Do not add a new interactive simulation or additional portfolio-only demo behavior as part of this task.

---

# Desired reader experience

After the change, the five sections should answer five simple questions:

| Section | Question answered |
| --- | --- |
| Overview | What is this and why did Ruoya build it? |
| Workflow | How is the product actually used? |
| Architecture | How did Ruoya engineer it? |
| Attribution | How does it connect software to the affiliate business? |
| Results | Is it real and actually operating? |

The case study should feel like a concise presentation of a real product Ruoya built, not a technical defense of the project.
