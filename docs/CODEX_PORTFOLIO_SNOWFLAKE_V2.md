# Portfolio V2 — Snowflake Creative Technologist, Brand AI

## Purpose

This file is an implementation brief for Codex. Modify the current portfolio with a **small, application-focused pass**. Do not redesign the site and do not expand scope beyond the items below.

Primary target: **Creative Technologist, Brand AI — Snowflake**.

DramaClips / DramoraAI is Ruoya's own 0→1 product. It was built to support a real CPS/affiliate short-drama promotion workflow using ReelShort content. The product is not a speculative portfolio concept: it has been used in a real operating workflow, distributes promotional content across four social platforms, tracks downstream behavior, and has generated real affiliate commission.

The goal of this pass is to make that reality obvious without turning the portfolio into a sales dashboard or exposing private/sensitive business data.

---

## Core narrative

The strongest story is no longer simply:

> I built an AI-assisted creative workflow demo.

It should be:

> I identified a real content-distribution problem in my own affiliate operation, built an AI-assisted creative operations system to solve it, used it to create and distribute content across four social platforms, measured downstream behavior, and earned real commission from the workflow.

This is important because it demonstrates the full Creative Technologist loop:

**real problem → prototype → connected system → creative production → distribution → measurement → business outcome → iteration**

Keep the current positioning:

**CREATIVE TECHNOLOGIST · SOFTWARE ENGINEER**

and keep the current hero direction:

**Building AI-powered tools for creative workflows.**

---

# P0 — Implement before application

## 1. Make ownership and 0→1 nature explicit

Current case-study role should change from:

`Product Engineer / Creative Technologist`

To something like:

`Creator · Product Engineer`

Add one concise sentence near the DramaClips introduction:

> I built DramaClips as a 0→1 product to run my own short-form affiliate content workflow — from source media and AI-assisted hook creation through multi-platform publishing, attribution, and iteration.

Do not imply this was client work or a team product unless explicitly stated elsewhere.

---

## 2. Add a real-world outcome / validation block

Add a compact section after the workflow or after `What I built`.

Suggested eyebrow:

`REAL-WORLD VALIDATION`

Suggested heading:

`Built for a real workflow, not a portfolio prompt.`

Suggested copy:

> DramaClips supports my real CPS/affiliate promotion workflow for short-form drama content. I use the system to prepare and distribute promotional creative across four social platforms, track downstream audience actions, and connect content performance back to affiliate outcomes.

Then show 3 compact proof points:

- **4 social platforms** — coordinated distribution workflow
- **Real audience signals** — visits, code copies, redirects, publishing outcomes
- **Commission earned** — affiliate conversions validated the end-to-end loop

### Important accuracy rule

Do **not** invent a dollar amount, conversion rate, revenue number, audience count, or efficiency percentage.

If an exact commission figure is later intentionally supplied, it can be added. For this version, `Real commission earned` / `Commission-generating workflow` is enough.

Do not show personal account information or sensitive affiliate dashboard details.

---

## 3. Change the system loop to include business outcome

The current six-step workflow is good. Preserve it, but make the final step more concrete.

Recommended conceptual flow:

1. **Source media** — episodes and reusable assets enter the shared library
2. **Understand** — transcription + scene/content analysis structure the source
3. **Generate** — AI proposes short-form hook candidates from creative direction
4. **Review** — human judgment evaluates and approves the creative
5. **Distribute** — approved assets move to four social platforms
6. **Learn** — publishing, audience, attribution, and affiliate signals inform the next iteration

The page should visually communicate the closed loop:

`Create → Review → Publish → Measure → Learn → Create`

Add one short sentence near Analytics:

> Performance is not the end of the workflow — it becomes input for the next creative decision.

---

## 4. Clarify the four-platform publishing story

The current interactive demo already shows TikTok, Instagram, YouTube, and Facebook.

Keep those four explicit.

Outside the demo, add a compact distribution label or proof point so the capability is visible even if the recruiter does not interact with the demo:

`TikTok · Instagram · YouTube · Facebook`

Suggested copy:

> One approved creative asset can move through a coordinated publishing workflow across TikTok, Instagram, YouTube, and Facebook.

Do not claim fully autonomous publishing for a platform unless the production system actually supports it. Use `publishing workflow`, `distribution workflow`, or `coordinated distribution` where appropriate.

---

## 5. Strengthen the feedback-loop story

Analytics should not read as a generic dashboard feature.

Frame it as a creative decision system.

Suggested mini-section / caption:

### From performance back to creative

> The system tracks signals such as publishing outcomes, visits, promotion-code actions, and redirects so I can compare what was distributed with what audiences actually did next.

Then:

> Those signals inform the next hook, source selection, and publishing decision.

This is more important for this application than adding more dashboard widgets.

---

## 6. Add a compact `Creative + Media System` strip

Do not add a giant skills wall.

Under `What I built`, add a compact strip such as:

**Creative + media system**

`LLM APIs · Faster-Whisper · PySceneDetect · FFmpeg · Cloudflare R2 · Supabase · Vizard · Publishing integrations`

Only retain technologies that are actually present in the production project.

Keep the existing main stack separately if desired:

`Next.js · TypeScript · Python · Supabase · R2 · Railway`

The purpose is to show that Ruoya can connect multiple AI/media services into one usable workflow rather than merely call a single model API.

---

## 7. Add one short 0→1 product-thinking block

This can be part of `What I built` rather than a new large section.

Suggested title:

`0→1 product iteration`

Suggested copy:

> I built the system around problems I encountered while operating the workflow myself: fragmented assets, repeated manual steps, disconnected generation and publishing states, and weak feedback between content creation and downstream performance.

Optionally mention these concrete product decisions in a compact list or visual:

- shared asset library across Hook Studio and Publish Center
- explicit human approval before downstream use
- multiple generation/provider paths inside one workflow
- operational publishing state/history
- attribution signals connected back to content

This is stronger than describing implementation modules individually.

---

## 8. Label demo vs production evidence clearly

The interactive walkthrough contains prepared/illustrative data and real prepared media assets.

Preserve the existing `DEMO DATA` treatment and add clarity near generated candidate metrics if needed:

`Illustrative evaluation data`

or

`Prepared walkthrough · no production writes`

The site must distinguish:

- interactive portfolio simulation;
- real DramaClips product screenshots;
- real operational/business validation.

Suggested framing:

**Interactive walkthrough** — lets a visitor experience the decision flow.

**Real product evidence** — screenshots from the actual system.

**Real-world validation** — the system has been used for Ruoya's own affiliate operation and has produced commission-generating conversions.

---

# P0 — Copy changes

## DramaClips intro

Recommended final direction:

### DramaClips / DramoraAI

**AI-assisted creative operations platform for short-form video distribution.**

> I built DramaClips as a 0→1 product to run my own short-form affiliate content workflow. It connects source media, AI-assisted content understanding, hook generation, human review, four-platform distribution, attribution, and iteration in one operating system.

Then retain a shorter version of the existing explanation about not treating AI as an isolated generator.

---

## Problem

Current problem framing is strong. Add the business context without overexplaining ReelShort/CPS mechanics:

> Running the workflow manually meant moving repeatedly between source media, prompts, editing tools, storage, publishing surfaces, tracking links, and performance data. The challenge was not simply generating content with AI; it was connecting the entire creative and distribution loop.

---

## Human in the loop

Keep:

> **AI proposes. Creative judgment decides.**

This is one of the strongest sections for the target role.

Do not replace it with an automation-first message.

---

## Outcome

Use restrained language:

> The system moved beyond prototype use into my real content operation: promotional creative was distributed across four social platforms, audience and attribution signals were tracked, and affiliate conversions generated real commission.

Avoid words such as `profitable`, `successful`, `scaled`, or `high-converting` unless supported by concrete data.

---

# P1 — Useful after the application is submitted

Do not delay the application for these items.

1. Add a sanitized affiliate-conversion screenshot if a visually clean version can be shown without private information.
2. Add a short 20–40 second screen recording of the production workflow.
3. Add a richer system diagram showing browser/UI, APIs, Supabase, R2, media worker, AI/media providers, publishing integrations, and attribution.
4. Add one concrete iteration story, e.g. why the shared asset library was introduced and what workflow problem it solved.
5. Add actual metrics only after choosing numbers that are meaningful, accurate, and safe to publish.
6. Add a dedicated DramaClips case-study route if the homepage becomes too long.

---

# P2 — Long-term portfolio

Do not implement now.

- full 3D/coding flagship project
- Three.js/R3F hero replacement
- detailed computational-design web case studies
- robotics/fabrication project pages
- broader SDE-oriented portfolio variant
- blog / CMS
- elaborate animation system

---

# Do not do

- Do not redesign the current visual system.
- Do not remove the current Creative Technologist positioning.
- Do not make architecture/3D the primary homepage story for this application.
- Do not turn the page into a technical architecture document.
- Do not expose affiliate credentials, tracking secrets, account IDs, private dashboards, tokens, or customer/user data.
- Do not fabricate business metrics.
- Do not imply ReelShort commissioned, sponsored, employed, or partnered with Ruoya unless that relationship is explicitly true.
- Do not describe affiliate promotion as a ReelShort product owned by Ruoya.
- Do not claim all four platforms are fully API-automated unless the production code supports that exact claim.
- Do not spend application time building new unrelated features.

---

# Acceptance criteria

The pass is complete when a recruiter can answer these questions from the page without opening GitHub:

1. **What did Ruoya build?**  
   A 0→1 AI-assisted creative operations platform.

2. **Why did she build it?**  
   To solve problems in her own real short-form affiliate content workflow.

3. **What does AI actually do?**  
   Helps understand source content and generate/evaluate creative candidates inside a human-controlled workflow.

4. **What did Ruoya engineer?**  
   The connected workflow across media processing, AI, data/storage, review, distribution, and attribution.

5. **Was it real or just a demo?**  
   The portfolio walkthrough is a safe demo, but the underlying product is real and has been used operationally.

6. **Did it reach an audience?**  
   Yes — promotional content is distributed through a workflow spanning four social platforms.

7. **Was there a real outcome?**  
   Yes — tracked affiliate conversions generated real commission.

8. **Why is this relevant to Creative Technologist / Brand AI?**  
   It demonstrates the ability to turn an ambiguous creative/business problem into an AI-enabled workflow, build the prototype and production system, keep human creative judgment in the loop, distribute the output, measure audience response, and iterate.

---

# Codex execution instruction

Implement **P0 only** in the existing portfolio on branch `codex/snowflake-personal-website`.

Reuse the current components and visual language wherever possible. Prefer copy/layout edits and small reusable components over structural rewrites. Preserve working interactive behavior. Verify responsive layout after changes.

Before adding any claim about production behavior, inspect the DramaClips source repository if needed and use conservative wording when implementation details are ambiguous.
