import Image from "next/image";
import Script from "next/script";
import type { StaticImageData } from "next/image";
import { DemoShell } from "../components/demo-shell";
import { ProceduralObject } from "../components/procedural-object";
import hookStudio from "../assets/dramaclips/screens/Screenshot_20260830_at_35552PM.jpg";
import hookCandidate from "../assets/dramaclips/screens/Screenshot_20260830_at_35634PM.jpg";
import publishCenter from "../assets/dramaclips/screens/Screenshot_20260830_at_35735PM.jpg";
import publishingHistory from "../assets/dramaclips/screens/Screenshot_20260830_at_35739PM.jpg";

const businessWorkflow = [
  ["01", "Select source", "Choose a drama and the episodes worth testing."],
  ["02", "Prepare creative", "Generate hook candidates from source media and creative direction."],
  ["03", "Review", "Inspect evidence, compare candidates, and approve a clip."],
  ["04", "Publish", "Prepare captions and distribute across four social platforms."],
  ["05", "Route audience", "Move viewers through the public experience toward an eligible affiliate destination."],
  ["06", "Learn", "Use visits, code copies, redirects, and publishing outcomes to guide the next iteration."],
];

const architectureNodes = [
  ["Web application", "Next.js operator UI and API routes", "sync"],
  ["PostgreSQL control plane", "Jobs, leases, state, review records, and tracking events", "data"],
  ["Cloudflare R2", "Persistent source media, drafts, and approved assets", "storage"],
  ["Railway worker", "Python analysis, transcription, ranking, and FFmpeg rendering", "async"],
  ["Publishing workflow", "Validation, scheduling, delivery, and outcome reconciliation", "external"],
  ["Public + redirect layer", "Landing flow, referral code, encrypted destinations, and routing", "public"],
];

const jobStates = ["queued", "downloading", "transcribing", "analyzing", "rendering", "review_ready"];

const engineeringDecisions = [
  {
    title: "Idempotent media jobs",
    problem: "Repeated generation requests can create duplicate work and conflicting results.",
    decision: "Derive a stable idempotency key from the drama, episode set, creative direction, render settings, and pipeline version.",
    why: "Equivalent requests resolve to the same logical job unless an explicit rerun is requested.",
    tradeoff: "Pipeline versioning and job inputs must remain deliberate and observable.",
  },
  {
    title: "PostgreSQL worker leasing",
    problem: "Long-running media work cannot safely execute inside a normal web request.",
    decision: "Lease persistent jobs with FOR UPDATE SKIP LOCKED, a worker owner, heartbeat, retry count, and lease expiration.",
    why: "Multiple workers can coordinate without processing the same job, while expired work can be recovered.",
    tradeoff: "The queue gains explicit state-management and recovery complexity.",
  },
  {
    title: "Object storage for media",
    problem: "Large video files do not belong in the application or relational database layer.",
    decision: "Keep media assets in Cloudflare R2 and persist only references, metadata, and workflow state in PostgreSQL.",
    why: "The web app and worker can exchange durable asset references without coupling storage to request lifetimes.",
    tradeoff: "Cleanup, access control, and object lifecycle require their own operational rules.",
  },
  {
    title: "Protected affiliate routing",
    problem: "Affiliate destinations are operationally sensitive and traffic may need stable distribution.",
    decision: "Encrypt destinations with AES-256-GCM, validate allowed hosts, and select eligible routes deterministically from session identity.",
    why: "Destinations stay out of public data while each viewer receives a stable assignment.",
    tradeoff: "Routing changes require careful compatibility and attribution checks.",
  },
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
      <div className="intro-hero"><div><p className="eyebrow">Software Engineer &amp; Creative Technologist</p><h1>Production software<br/><em>for creative systems.</em></h1><p className="hero-support">I build production software, AI-assisted workflows, and tools for media, design, and 3D applications. My background spans software engineering, computational design, visualization, and digital fabrication.</p><div className="hero-actions"><a className="demo-cta" href="#drama">Explore flagship project <span>↓</span></a><a className="hero-text-link" href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div><ProceduralObject /></div>
      <nav className="capability-strip" aria-label="Engineering capabilities"><a href="#architecture"><small>01</small><b>Production full-stack systems</b></a><a href="#async-processing"><small>02</small><b>Async media workflows</b></a><a href="#interactive-demo"><small>03</small><b>Applied AI + human review</b></a><a href="#background"><small>04</small><b>3D + computational design</b></a></nav>
    </section>

    <main>
      <section id="drama" className="case-intro"><div><p className="eyebrow">Flagship case study / 01</p><h2>DramaClips<br/><em>Distribution &amp; Attribution Platform</em></h2></div><div><p className="case-kicker">A production software system for asynchronous media processing, publishing operations, and event-level attribution.</p><p>I built and operate DramaClips inside a real short-form drama affiliate workflow. It connects media ingestion, cloud asset storage, AI-assisted hook generation, worker-based processing, human review, publishing, redirect routing, and analytics.</p><p>AI is one component inside the system. The engineering challenge is making the complete workflow persistent, recoverable, observable, and safe to operate.</p><div className="case-actions"><a className="live-product-cta" href="https://dramaclips.vercel.app/" target="_blank" rel="noreferrer"><small>LIVE · ACTIVELY OPERATED</small><span>Visit DramaClips ↗</span></a><a className="walkthrough-link" href="#architecture">Explore the architecture ↓</a></div><div className="case-evidence"><span>ROLE<b>Independent Product · Software Engineer</b></span><span>SYSTEM<b>Full Stack · Async Media · Attribution</b></span><span>STACK<b>Next.js · TypeScript · PostgreSQL · Python · R2</b></span><span>STATUS<b>Live · Actively Operated</b></span></div></div></section>

      <nav className="case-nav" aria-label="DramaClips case study sections"><a href="#drama">Overview</a><a href="#context">Context</a><a href="#business-workflow">Workflow</a><a href="#architecture">Architecture</a><a href="#async-processing">Async jobs</a><a href="#engineering-decisions">Decisions</a><a href="#attribution">Attribution</a><a href="#results">Results</a><a href="#next">Next</a></nav>

      <section id="context" className="problem-section"><p className="eyebrow">Real-world context</p><h2>A revenue workflow was fragmented across media files, prompts, storage, publishing tools, links, and performance data.</h2><div><p>Running the workflow manually meant repeatedly moving assets and state between disconnected systems. A generated clip was only useful if it could be reviewed, published, traced back to its source, and connected to downstream audience behavior.</p><p>DramaClips became the operating layer for that full loop — not a portfolio-only prototype and not a generic AI wrapper.</p></div></section>

      <section id="business-workflow" className="workflow-section"><div className="section-heading"><p className="eyebrow">Business workflow</p><h2>From source selection<br/><em>to measurable audience action.</em></h2></div><p className="section-lede">This is the operator&apos;s view of the business process. The technical system below exists to make each handoff durable and inspectable.</p><div className="workflow-map">{businessWorkflow.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="closed-loop"><b>Create → Review → Publish → Measure → Learn → Create</b><p>Performance is not the end of the workflow — it becomes input for the next creative decision.</p></div></section>

      <section id="architecture" className="architecture-section"><div className="architecture-heading"><div><p className="eyebrow">Technical system</p><h2>A web control plane<br/><em>around durable media work.</em></h2></div><p>Short requests coordinate state; object storage holds media; leased workers perform long-running processing; public routes and events close the audience loop.</p></div><div className="architecture-map"><div className="architecture-flow">{architectureNodes.map(([title, copy, kind], index) => <article className={`architecture-node node-${kind}`} key={title}><small>{String(index + 1).padStart(2, "0")} · {kind}</small><h3>{title}</h3><p>{copy}</p>{index < architectureNodes.length - 1 && <span aria-hidden="true">→</span>}</article>)}</div><div className="architecture-legend"><span><i className="legend-sync"/>Synchronous web flow</span><span><i className="legend-async"/>Asynchronous worker flow</span><span><i className="legend-storage"/>Persistent storage + state</span><span><i className="legend-public"/>External/public boundary</span></div></div></section>

      <section id="async-processing" className="async-section"><div className="section-heading"><div><p className="eyebrow">Async processing architecture</p><h2>Persistent jobs,<br/><em>leased work, visible state.</em></h2></div><p className="section-note">PostgreSQL coordinates ownership while the Railway worker renews its lease and reports progress.</p></div><div className="state-machine">{jobStates.map((state, index) => <div className="state-step" key={state}><small>{String(index + 1).padStart(2, "0")}</small><b>{state}</b>{index < jobStates.length - 1 && <span aria-hidden="true">→</span>}</div>)}</div><div className="reliability-rail"><div><small>CLAIM</small><code>FOR UPDATE SKIP LOCKED</code><p>One available job is leased without blocking other workers.</p></div><div><small>KEEP ALIVE</small><b>owner + heartbeat + lease expiry</b><p>Ownership stays explicit and abandoned work becomes recoverable.</p></div><div><small>FAILURE PATHS</small><b>retry · failed · canceled · no_result</b><p>Terminal and retry states stay visible instead of disappearing inside a request.</p></div></div></section>

      <section className="judgment-section"><div><p className="eyebrow">Human in the loop</p><h2>AI proposes.<br/><em>Creative judgment decides.</em></h2></div><div className="judgment-flow"><span>Generate candidates</span><i>→</i><span>Inspect evidence</span><i>→</i><span>Compare scores</span><i>→</i><span className="selected-step">Human approval</span><i>→</i><span>Publish + learn</span></div><p>The system uses structured evaluation to make recommendations explainable, while a person keeps control over selection, editing, and downstream publishing.</p></section>

      <section id="interactive-demo" className="demo-section"><div className="demo-section-intro"><div><p className="eyebrow">Interactive walkthrough · portfolio simulation</p><h2>Follow the decision,<br/><em>not just the output.</em></h2></div><div><p>Select a prepared source, generate candidates, inspect why one is recommended, approve it, and move it downstream.</p><small>Prepared walkthrough · no production writes · illustrative evaluation data. The decision flow mirrors the production system.</small></div></div><DemoShell /></section>

      <section id="engineering-decisions" className="decisions-section"><div className="section-heading"><div><p className="eyebrow">Engineering decisions</p><h2>Reliability comes from<br/><em>explicit tradeoffs.</em></h2></div><p className="section-note">Each decision responds to a failure mode in the real operating workflow.</p></div><div className="decision-grid">{engineeringDecisions.map((decision, index) => <article key={decision.title}><small>{String(index + 1).padStart(2, "0")}</small><h3>{decision.title}</h3><dl><div><dt>Problem</dt><dd>{decision.problem}</dd></div><div><dt>Decision</dt><dd>{decision.decision}</dd></div><div><dt>Why</dt><dd>{decision.why}</dd></div><div><dt>Tradeoff</dt><dd>{decision.tradeoff}</dd></div></dl></article>)}</div><div className="system-strip"><small>IMPLEMENTED SYSTEM BOUNDARIES</small><p>Next.js · TypeScript · Supabase/PostgreSQL · Python worker · Faster-Whisper · FFmpeg · Cloudflare R2 · Railway · publishing integrations</p></div></section>

      <section id="attribution" className="attribution-section"><div className="section-heading"><div><p className="eyebrow">Tracking &amp; attribution</p><h2>Follow the content,<br/><em>not the private destination.</em></h2></div><p className="section-note">Sensitive affiliate URLs remain encrypted and server-side. Public events retain the dimensions needed to understand audience movement.</p></div><div className="attribution-flow"><article><small>ENTRY CONTEXT</small><b>source · account · campaign · clip</b><p>Traffic arrives with content and distribution context.</p></article><span aria-hidden="true">→</span><article><small>PUBLIC EXPERIENCE</small><b>visit · preview · code copy</b><p>Session-level behavior records meaningful funnel actions.</p></article><span aria-hidden="true">→</span><article><small>ROUTING</small><b>eligible routes · stable assignment</b><p>Allowed destinations are filtered and selected deterministically.</p></article><span aria-hidden="true">→</span><article><small>OUTCOME EVENT</small><b>redirect_success</b><p>The redirect result is recorded without exposing the destination.</p></article></div><div className="attribution-boundary"><b>What this proves</b><p>Event-level attribution across traffic source, campaign, content, session, and redirect behavior.</p><b>What it does not claim</b><p>DramaClips does not claim provider-supplied purchase-level conversion data.</p></div></section>

      <section id="results" className="validation-section"><div><p className="eyebrow">Results · real-world validation</p><h2>Built for a real workflow,<br/><em>not a portfolio prompt.</em></h2><p>DramaClips supports my active CPS/affiliate promotion workflow. The product moved the work from disconnected files and browser tabs into one inspectable system spanning creative preparation, delivery, and audience signals.</p><p className="platform-label">TikTok · Instagram · YouTube · Facebook</p></div><div className="validation-points"><article><b>4</b><span>social platforms</span><p>One coordinated publishing workflow</p></article><article><b>Real</b><span>operational signals</span><p>Job state, publishing outcomes, visits, code copies, and redirects</p></article><article><b>Live</b><span>affiliate workflow</span><p>The end-to-end system supports real commission-generating activity</p></article></div><div className="feedback-loop"><small>FROM PERFORMANCE BACK TO CREATIVE</small><p>The system connects what was distributed with what audiences did next. Those signals inform the next hook, source selection, and publishing decision.</p></div></section>

      <section className="evidence-section"><div className="section-heading"><div><p className="eyebrow">Real product evidence</p><h2>A workflow built<br/><em>for operators.</em></h2></div><p className="evidence-note">Screenshots from the actual DramaClips system, distinct from the prepared interactive walkthrough above.</p></div><div className="evidence-grid">{evidence.map(([image, title, copy]) => <figure key={String(title)}><Image src={image} alt={`${title} interface in DramaClips`} sizes="(max-width: 800px) 100vw, 50vw"/><figcaption><b>{title}</b><span>{copy}</span></figcaption></figure>)}</div></section>

      <section id="next" className="next-section"><div><p className="eyebrow">What I would improve next</p><h2>Strengthen the feedback loop,<br/><em>without hiding the tradeoffs.</em></h2></div><div className="next-grid"><article><small>01</small><h3>Experiment routing</h3><p>Connect hook variants and stable traffic assignments to stronger comparative performance views.</p></article><article><small>02</small><h3>Attribution depth</h3><p>Add more reliable revenue-side reconciliation only when trustworthy provider evidence is available.</p></article><article><small>03</small><h3>Queue observability</h3><p>Expose processing latency, success rate, retry recovery, and publishing reliability as operational metrics.</p></article></div></section>

      <section id="background" className="background-section"><div><p className="eyebrow">Differentiating domain experience</p><h2>Software engineering,<br/><em>informed by spatial systems.</em></h2><p>Before focusing on production software, I worked across architecture, computational design, digital fabrication, and visualization. That experience gives me unusually deep context for tools involving geometry, media, visual systems, and creative operators.</p><div className="background-tags"><span>Computational design</span><span>Grasshopper</span><span>KUKA workflows</span><span>CNC</span><span>3D printing</span><span>Visualization</span></div><a className="outline-cta" href="/ruoya-portfolio.pdf" target="_blank" rel="noreferrer">Open selected design work ↗</a></div><div className="pdf-frame"><iframe src="/ruoya-portfolio.pdf#page=1&view=FitH" title="Ruoya Li design and computational portfolio" /></div></section>

      <section id="about" className="about-section"><div><p className="eyebrow">About</p><h2>A software engineer with deep design, 3D, and creative-workflow domain knowledge.</h2></div><div><p>I build real systems that connect those domains with production software and applied AI. My path moved from design systems and computational geometry into automation, computer science, and full-stack engineering.</p><p>That combination lets me translate an ambiguous creative problem into a working prototype, define the system boundaries behind it, and carry it into an operable product.</p></div></section>

      <section className="contact-section"><div className="contact-copy"><p className="eyebrow">Let&apos;s connect</p><h2>Building the next<br/><em>creative system?</em></h2><div className="contact-links"><a href="mailto:hello@ruoyali.com">hello@ruoyali.com ↗</a><a href="https://github.com/ruoyali7" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a><a href="/ruoya-portfolio.pdf" target="_blank" rel="noreferrer">Portfolio PDF ↗</a></div></div><aside className="linkedin-profile"><p className="eyebrow">Professional profile</p><div className="linkedin-badge"><div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="ruoya-li" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/ruoya-li?trk=profile-badge">Ruoya Li</a></div></div><a className="linkedin-fallback" href="https://www.linkedin.com/in/ruoya-li/" target="_blank" rel="noreferrer">View LinkedIn profile ↗</a></aside></section>
    </main>
    <footer className="site-footer"><span>© 2026 Ruoya Li</span><span>Sunnyvale, California</span><a href="#drama">Back to work ↑</a></footer>
    <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="afterInteractive" />
  </>;
}
