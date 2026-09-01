import Image from "next/image";
import Script from "next/script";
import type { StaticImageData } from "next/image";
import { DemoShell } from "../components/demo-shell";
import hookStudio from "../assets/dramaclips/screens/Screenshot_20260830_at_35552PM.jpg";
import hookCandidate from "../assets/dramaclips/screens/Screenshot_20260830_at_35634PM.jpg";
import publishCenter from "../assets/dramaclips/screens/Screenshot_20260830_at_35735PM.jpg";
import publishingHistory from "../assets/dramaclips/screens/Screenshot_20260830_at_35739PM.jpg";

const businessWorkflow = [
  ["01", "Add drama", "Create the content record and connect the source material."],
  ["02", "Upload episodes", "Store source episodes as durable media assets."],
  ["03", "Generate hooks", "Create short-form candidates from selected episodes and creative direction."],
  ["04", "Review clips", "Inspect evidence, compare candidates, and approve the strongest clip."],
  ["05", "Publish", "Prepare captions and distribute across four social platforms."],
  ["06", "DramaClips landing", "Give viewers a public preview, referral code, and clear next action."],
  ["07", "RS affiliate", "Route eligible viewers to the affiliate destination and record the redirect outcome."],
];

const architectureNodes = [
  ["Web application", "Next.js operator UI and API routes", "sync"],
  ["PostgreSQL control plane", "Jobs, leases, state, review records, and tracking events", "data"],
  ["Cloudflare R2", "Persistent source media, drafts, and approved assets", "storage"],
  ["Railway worker", "Python analysis, transcription, ranking, and FFmpeg rendering", "async"],
  ["Publishing workflow", "Validation, scheduling, delivery, and outcome reconciliation", "external"],
  ["Public + redirect layer", "Landing flow, referral code, encrypted destinations, and routing", "public"],
];

const architectureHighlights = [
  ["Async media processing", "Long-running video jobs keep persistent state, worker leases, visible progress, and retry handling."],
  ["Cloud media pipeline", "Cloudflare R2 stores source and generated media while PostgreSQL keeps workflow state and references."],
  ["Reliable execution", "Idempotency and PostgreSQL leasing prevent duplicate work and recover abandoned jobs; workers claim work with FOR UPDATE SKIP LOCKED."],
];

const evidence: Array<[StaticImageData, string, string]> = [
  [hookStudio, "Hook Studio", "Organizes source dramas and episode coverage before generation begins."],
  [hookCandidate, "Human review", "Turns generated assets into reviewable candidates with clear status and downstream actions."],
  [publishCenter, "Publish Center", "Connects approved assets to account selection, scheduling, and multi-platform delivery."],
  [publishingHistory, "Operational feedback", "Makes publishing outcomes visible so the team can inspect and iterate."],
];

export default function Home() {
  return <>
    <section className="intro-page">
      <header className="intro-nav"><span className="intro-logo">RL<span>.</span></span><span>SOFTWARE ENGINEER · CREATIVE TECHNOLOGIST</span><a href="#drama">Work</a><a href="#background">Background</a><a href="#about">About</a><a href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a><a href="https://github.com/ruoyali7" target="_blank" rel="noreferrer">GitHub ↗</a></header>
      <div className="intro-hero"><div><p className="eyebrow">Software Engineer &amp; Creative Technologist</p><h1>Production software<br/><em>for creative systems.</em></h1><p className="hero-support">I build production software, AI-assisted workflows, and tools for media, design, and 3D applications. My background spans software engineering, computational design, visualization, and digital fabrication.</p><div className="hero-actions"><a className="demo-cta" href="#drama">Explore flagship project <span>↓</span></a><a className="hero-text-link" href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div></div>
      <nav className="capability-strip" aria-label="Engineering capabilities"><a href="#architecture"><small>01</small><b>Production full-stack systems</b></a><a href="#architecture"><small>02</small><b>Async media workflows</b></a><a href="#interactive-demo"><small>03</small><b>Applied AI + human review</b></a><a href="#background"><small>04</small><b>3D + computational design</b></a></nav>
    </section>

    <main>
      <section id="drama" className="case-intro"><div><p className="eyebrow">Flagship case study / 01</p><h2>DramaClips<br/><em>Distribution &amp; Attribution Platform</em></h2></div><div><p className="case-kicker">A live software product I built and operate for short-drama affiliate promotion.</p><p>The original workflow was fragmented across video files, AI and clipping tools, cloud storage, publishing tools, affiliate links, and performance data. DramaClips connects those pieces into one operational system.</p><p>It supports the real path from source media and AI-assisted hook generation through human review, publishing, audience routing, and attribution — and is used in commission-generating affiliate activity.</p><div className="case-actions"><a className="live-product-cta" href="https://dramaclips.vercel.app/" target="_blank" rel="noreferrer"><small>LIVE · ACTIVELY OPERATED</small><span>Visit DramaClips ↗</span></a><a className="walkthrough-link" href="#business-workflow">See how it works ↓</a></div><div className="case-evidence"><span>ROLE<b>Independent Product · Software Engineer</b></span><span>SYSTEM<b>Full Stack · Async Media · Attribution</b></span><span>STACK<b>Next.js · TypeScript · PostgreSQL · Python · R2</b></span><span>STATUS<b>Live · Actively Operated</b></span></div></div></section>

      <nav className="case-nav" aria-label="DramaClips case study sections"><a href="#drama">Overview</a><a href="#business-workflow">Workflow</a><a href="#architecture">Architecture</a><a href="#attribution">Attribution</a><a href="#results">Results</a></nav>

      <section id="business-workflow" className="workflow-section"><div className="section-heading"><p className="eyebrow">Business workflow</p><h2>From source selection<br/><em>to measurable audience action.</em></h2></div><p className="section-lede">This is the operator&apos;s view of the business process. The technical system below exists to make each handoff durable and inspectable.</p><div className="workflow-map">{businessWorkflow.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="closed-loop"><b>Create → Review → Publish → Measure → Learn → Create</b><p>Performance is not the end of the workflow — it becomes input for the next creative decision.</p></div></section>

      <section id="interactive-demo" className="demo-section"><div className="demo-section-intro"><div><p className="eyebrow">Interactive workflow · prepared walkthrough</p><h2>Follow the operator flow,<br/><em>from source to publish.</em></h2></div><div><p>Select a prepared source, generate candidates, inspect why one is recommended, approve it, and move it downstream.</p><small>Prepared walkthrough · no production writes · illustrative evaluation data. The decision flow mirrors the production system.</small></div></div><DemoShell /></section>

      <section className="evidence-section"><div className="section-heading"><div><p className="eyebrow">Real product evidence</p><h2>The workflow<br/><em>operators actually use.</em></h2></div><p className="evidence-note">Screenshots from the live DramaClips system, distinct from the prepared interactive walkthrough above.</p></div><div className="evidence-grid">{evidence.map(([image, title, copy]) => <figure key={String(title)}><Image src={image} alt={`${title} interface in DramaClips`} sizes="(max-width: 800px) 100vw, 50vw"/><figcaption><b>{title}</b><span>{copy}</span></figcaption></figure>)}</div></section>

      <section id="architecture" className="architecture-section"><div className="architecture-heading"><div><p className="eyebrow">Architecture</p><h2>A web control plane<br/><em>around durable media work.</em></h2></div><p>Next.js coordinates product state and operator actions. PostgreSQL and R2 keep jobs and media durable, while a Railway worker handles AI, transcription, and FFmpeg processing outside the request cycle.</p></div><div className="architecture-map"><div className="architecture-flow">{architectureNodes.map(([title, copy, kind], index) => <article className={`architecture-node node-${kind}`} key={title}><small>{String(index + 1).padStart(2, "0")} · {kind}</small><h3>{title}</h3><p>{copy}</p>{index < architectureNodes.length - 1 && <span aria-hidden="true">→</span>}</article>)}</div><div className="architecture-legend"><span><i className="legend-sync"/>Synchronous web flow</span><span><i className="legend-async"/>Asynchronous worker flow</span><span><i className="legend-storage"/>Persistent storage + state</span><span><i className="legend-public"/>External/public boundary</span></div></div><div className="architecture-highlights">{architectureHighlights.map(([title, copy], index) => <article key={title}><small>{String(index + 1).padStart(2, "0")}</small><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section id="attribution" className="attribution-section"><div className="section-heading"><div><p className="eyebrow">Attribution</p><h2>Connect each social clip<br/><em>to the affiliate journey.</em></h2></div><p className="section-note">DramaClips retains useful context as viewers move from a social post through the public product toward an eligible RS affiliate destination.</p></div><div className="attribution-flow"><article><small>SOCIAL CLIP</small><b>drama · clip · platform · campaign</b><p>Traffic arrives with content and distribution context.</p></article><span aria-hidden="true">→</span><article><small>DRAMACLIPS</small><b>visit · preview · code copy</b><p>Session-level behavior records meaningful funnel actions.</p></article><span aria-hidden="true">→</span><article><small>TRACKING + ROUTING</small><b>session · event · stable route</b><p>Eligible destinations are selected without exposing private affiliate URLs.</p></article><span aria-hidden="true">→</span><article><small>RS AFFILIATE</small><b>redirect outcome</b><p>The redirect result is recorded as part of the commission-supporting workflow.</p></article></div><div className="attribution-boundary"><b>What this proves</b><p>Event-level attribution across drama, clip, platform, campaign, session behavior, and redirect outcome.</p><b>Factual boundary</b><p>DramaClips does not claim provider-supplied purchase-level conversion data.</p></div></section>

      <section id="results" className="validation-section"><div><p className="eyebrow">Results · real-world validation</p><h2>Built for a real workflow,<br/><em>not a portfolio prompt.</em></h2><p>DramaClips is live and actively operated. It replaces a fragmented set of files and browser tools with one inspectable workflow for creative preparation, four-platform delivery, audience signals, and real affiliate activity.</p><p className="platform-label">TikTok · Instagram · YouTube · Facebook</p></div><div className="validation-points"><article><b>4</b><span>social platforms</span><p>One coordinated publishing workflow</p></article><article><b>Real</b><span>operational signals</span><p>Job state, publishing outcomes, visits, code copies, and redirects</p></article><article><b>Live</b><span>affiliate workflow</span><p>The end-to-end system supports real commission-generating activity</p></article></div><div className="feedback-loop"><small>FROM PERFORMANCE BACK TO CREATIVE</small><p>The system connects what was distributed with what audiences did next. Those signals inform the next hook, source selection, and publishing decision.</p></div><div className="results-action"><a className="live-product-cta" href="https://dramaclips.vercel.app/" target="_blank" rel="noreferrer"><small>LIVE PRODUCT</small><span>Visit DramaClips ↗</span></a></div></section>

      <section id="background" className="background-section"><div><p className="eyebrow">Differentiating domain experience</p><h2>Software engineering,<br/><em>informed by spatial systems.</em></h2><p>Before focusing on production software, I worked across architecture, computational design, digital fabrication, and visualization. That experience gives me unusually deep context for tools involving geometry, media, visual systems, and creative operators.</p><div className="background-tags"><span>Computational design</span><span>Grasshopper</span><span>KUKA workflows</span><span>CNC</span><span>3D printing</span><span>Visualization</span></div><a className="outline-cta" href="/ruoya-portfolio.pdf" target="_blank" rel="noreferrer">Open selected design work ↗</a></div><div className="pdf-frame"><iframe src="/ruoya-portfolio.pdf#page=1&view=FitH" title="Ruoya Li design and computational portfolio" /></div></section>

      <section id="about" className="about-section"><div><p className="eyebrow">About</p><h2>A software engineer with deep design, 3D, and creative-workflow domain knowledge.</h2></div><div><p>I build real systems that connect those domains with production software and applied AI. My path moved from design systems and computational geometry into automation, computer science, and full-stack engineering.</p><p>That combination lets me translate an ambiguous creative problem into a working prototype, define the system boundaries behind it, and carry it into an operable product.</p></div></section>

      <section className="contact-section"><div className="contact-copy"><p className="eyebrow">Let&apos;s connect</p><h2>Building the next<br/><em>creative system?</em></h2><div className="contact-links"><a href="mailto:hello@ruoyali.com">hello@ruoyali.com ↗</a><a href="https://github.com/ruoyali7" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a><a href="/ruoya-portfolio.pdf" target="_blank" rel="noreferrer">Portfolio PDF ↗</a></div></div><aside className="linkedin-profile"><p className="eyebrow">Professional profile</p><div className="linkedin-badge"><div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="ruoya-li" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/ruoya-li?trk=profile-badge">Ruoya Li</a></div></div><a className="linkedin-fallback" href="https://www.linkedin.com/in/ruoya-li/" target="_blank" rel="noreferrer">View LinkedIn profile ↗</a></aside></section>
    </main>
    <footer className="site-footer"><span>© 2026 Ruoya Li</span><span>Sunnyvale, California</span><a href="#drama">Back to work ↑</a></footer>
    <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="afterInteractive" />
  </>;
}
