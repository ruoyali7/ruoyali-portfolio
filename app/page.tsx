import Image from "next/image";
import type { StaticImageData } from "next/image";
import { DemoShell } from "../components/demo-shell";
import { ProceduralObject } from "../components/procedural-object";
import hookStudio from "../assets/dramaclips/screens/Screenshot_20260830_at_35552PM.jpg";
import hookCandidate from "../assets/dramaclips/screens/Screenshot_20260830_at_35634PM.jpg";
import publishCenter from "../assets/dramaclips/screens/Screenshot_20260830_at_35735PM.jpg";
import publishingHistory from "../assets/dramaclips/screens/Screenshot_20260830_at_35739PM.jpg";

const workflow = [
  ["01", "Source media", "Episodes and reusable assets enter one shared library."],
  ["02", "Understand", "Transcription and scene analysis create structured evidence."],
  ["03", "Generate", "AI proposes hook candidates from creative direction."],
  ["04", "Review", "Scoring supports — never replaces — human judgment."],
  ["05", "Publish", "Approved assets move into coordinated distribution."],
  ["06", "Learn", "Attribution and performance signals inform the next iteration."],
];

const contributions = [
  ["Workflow design", "Mapped the path from source media through generation, review, publishing, and measurement; designed explicit human decision points."],
  ["AI systems", "Integrated LLM-assisted generation with structured outputs, candidate evaluation, transcription, and repeatable creative direction."],
  ["Product engineering", "Built full-stack operational workflows across APIs, data, object storage, deployment, and production iteration."],
  ["Media automation", "Connected Faster-Whisper, FFmpeg, Cloudflare R2, and publishing integrations into a usable operator experience."],
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
      <header className="intro-nav"><span className="intro-logo">RL<span>.</span></span><span>CREATIVE TECHNOLOGIST · SOFTWARE ENGINEER</span><a href="#drama">Work</a><a href="#background">Background</a><a href="#about">About</a><a href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a><a href="https://github.com/ruoyali7" target="_blank" rel="noreferrer">GitHub ↗</a></header>
      <div className="intro-hero"><div><p className="eyebrow">Creative Technologist · Software Engineer</p><h1>Building AI-powered tools<br/><em>for creative workflows.</em></h1><p className="hero-support">I design and build systems that connect AI, media, data, and human creative judgment — from working prototypes to production workflows.</p><div className="hero-actions"><a className="demo-cta" href="#drama">Explore DramaClips <span>↓</span></a><a className="hero-text-link" href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div><ProceduralObject /></div>
    </section>

    <main>
      <section id="drama" className="case-intro"><div><p className="eyebrow">Featured case study / 01</p><h2>DramaClips<br/><em>DramoraAI</em></h2></div><div><p className="case-kicker">AI-assisted creative operations platform for short-form video distribution.</p><p>Instead of treating AI as an isolated copy generator, I designed a connected system that moves source media through content understanding, hook generation, human review, publishing, attribution, and iteration.</p><div className="case-meta"><span>ROLE<br/><b>Product Engineer / Creative Technologist</b></span><span>STACK<br/><b>Next.js · TypeScript · Python · Supabase · R2 · Railway</b></span></div></div></section>

      <section className="problem-section"><p className="eyebrow">The problem</p><h2>Creative work was fragmented across files, prompts, browser tabs, storage, and publishing tools.</h2><p>The challenge was not simply “generate content with AI.” It was deciding where AI adds speed, where creative judgment stays essential, and how every decision becomes a reusable part of the workflow.</p></section>

      <section className="workflow-section"><div className="section-heading"><p className="eyebrow">The system</p><h2>One connected workflow<br/><em>instead of isolated AI tools.</em></h2></div><div className="workflow-map">{workflow.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="judgment-section"><div><p className="eyebrow">Human in the loop</p><h2>AI proposes.<br/><em>Creative judgment decides.</em></h2></div><div className="judgment-flow"><span>Generate candidates</span><i>→</i><span>Inspect evidence</span><i>→</i><span>Compare scores</span><i>→</i><span className="selected-step">Human approval</span><i>→</i><span>Publish + learn</span></div><p>The system uses structured evaluation to make recommendations explainable, while a person keeps control over selection, editing, and downstream publishing.</p></section>

      <section id="interactive-demo" className="demo-section"><div className="demo-section-intro"><div><p className="eyebrow">Interactive product walkthrough</p><h2>Follow the decision,<br/><em>not just the output.</em></h2></div><div><p>Select a prepared source, generate candidates, inspect why one is recommended, approve it, and move it downstream.</p><small>Prototype mirrors the decision flow used in the production system.</small></div></div><DemoShell /></section>

      <section className="contribution-section"><div className="section-heading"><p className="eyebrow">What I built</p><h2>From ambiguous workflow<br/><em>to usable system.</em></h2></div><div className="contribution-grid">{contributions.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="impact-strip"><div><small>BEFORE</small><p>Files + spreadsheets + prompts + browser tabs + manual publishing</p></div><span>→</span><div><small>AFTER</small><p>Shared asset library + AI generation + human review + publish workflow</p></div></div></section>

      <section className="evidence-section"><div className="section-heading"><p className="eyebrow">Real product evidence</p><h2>A workflow built<br/><em>for operators.</em></h2></div><div className="evidence-grid">{evidence.map(([image, title, copy]) => <figure key={String(title)}><Image src={image} alt={`${title} interface in DramaClips`} sizes="(max-width: 800px) 100vw, 50vw"/><figcaption><b>{title}</b><span>{copy}</span></figcaption></figure>)}</div></section>

      <section id="background" className="background-section"><div><p className="eyebrow">Design & computational background</p><h2>Technical systems,<br/><em>with a visual point of view.</em></h2><p>Before focusing on software, I worked across architecture, computational design, digital fabrication, and visual production. That background still shapes how I prototype, communicate systems, and collaborate with creative teams.</p><div className="background-tags"><span>Computational design</span><span>Grasshopper</span><span>KUKA robotics</span><span>CNC</span><span>3D printing</span><span>Visual production</span></div><a className="outline-cta" href="/ruoya-portfolio.pdf" target="_blank" rel="noreferrer">Open portfolio PDF ↗</a></div><div className="pdf-frame"><iframe src="/ruoya-portfolio.pdf#page=1&view=FitH" title="Ruoya Li design and computational portfolio" /></div></section>

      <section id="about" className="about-section"><div><p className="eyebrow">About</p><h2>Design systems → computational design → automation → AI-enabled creative workflows.</h2></div><div><p>I started in architecture and computational design, working across visual systems, geometry, fabrication, and physical production. I later moved deeper into software engineering and AI.</p><p>That combination lets me move between designers, content teams, and engineers — translating an ambiguous creative problem into a working prototype and then into a usable system.</p></div></section>

      <section className="contact-section"><p className="eyebrow">Let&apos;s connect</p><h2>Building the next<br/><em>creative system?</em></h2><div><a href="mailto:hello@ruoyali.com">hello@ruoyali.com ↗</a><a href="https://www.linkedin.com/in/ruoya-li/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/ruoyali7" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/ruoya-li-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a><a href="/ruoya-portfolio.pdf" target="_blank" rel="noreferrer">Portfolio PDF ↗</a></div></section>
    </main>
    <footer className="site-footer"><span>© 2026 Ruoya Li</span><span>Sunnyvale, California</span><a href="#drama">Back to work ↑</a></footer>
  </>;
}
