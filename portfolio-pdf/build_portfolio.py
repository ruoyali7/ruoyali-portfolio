from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import landscape, A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output/pdf/Ruoya_Li_Snowflake_Creative_Technologist_Portfolio_FINAL.pdf"
ASSETS = ROOT / "assets/portfolio"
W, H = landscape(A4)
BG = colors.HexColor("#101111")
PAPER = colors.HexColor("#F3F1EA")
INK = colors.HexColor("#171918")
MUTED = colors.HexColor("#A7AAA3")
ACCENT = colors.HexColor("#D8FF54")
LINE = colors.HexColor("#343834")


def text(c, s, x, y, size=11, color=INK, font="Helvetica", leading=None):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, y, s)


def wrap(c, s, x, y, width, size=12, color=INK, font="Helvetica", leading=16):
    words, line = s.split(), ""
    for word in words:
        candidate = (line + " " + word).strip()
        if c.stringWidth(candidate, font, size) <= width:
            line = candidate
        else:
            text(c, line, x, y, size, color, font)
            y -= leading
            line = word
    if line:
        text(c, line, x, y, size, color, font)
        y -= leading
    return y


def title(c, kicker, heading, page, dark=True):
    fg, muted, rule = (PAPER, MUTED, LINE) if dark else (INK, colors.HexColor("#666A62"), colors.HexColor("#D6D4CC"))
    text(c, kicker.upper(), 42, H - 42, 8, ACCENT, "Helvetica-Bold")
    text(c, heading, 42, H - 88, 28, fg, "Helvetica-Bold")
    c.setStrokeColor(rule)
    c.line(42, H - 108, W - 42, H - 108)
    text(c, f"RUOYA LI  /  {page:02d}", W - 125, 24, 7, muted, "Helvetica-Bold")


def image(c, path, x, y, w, h):
    c.drawImage(ImageReader(str(path)), x, y, width=w, height=h, preserveAspectRatio=True, anchor="c", mask="auto")


def bullet(c, label, detail, x, y, width):
    c.setFillColor(ACCENT)
    c.circle(x + 3, y + 3, 3, fill=1, stroke=0)
    text(c, label, x + 16, y, 10, PAPER, "Helvetica-Bold")
    return wrap(c, detail, x + 16, y - 17, width - 16, 9, MUTED, "Helvetica", 12)


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=(W, H))
    c.setTitle("Ruoya Li - Snowflake Creative Technologist Portfolio")

    # 1 Cover
    c.setFillColor(BG); c.rect(0, 0, W, H, fill=1, stroke=0)
    for x in range(42, int(W), 48):
        c.setStrokeColor(colors.HexColor("#1A1D1A")); c.line(x, 0, x, H)
    text(c, "RUOYA LI", 42, H - 44, 11, PAPER, "Helvetica-Bold")
    text(c, "CREATIVE TECHNOLOGIST  ·  SOFTWARE ENGINEER", 42, H - 66, 8, ACCENT, "Helvetica-Bold")
    text(c, "Building AI-powered", 42, H - 225, 40, PAPER, "Helvetica-Bold")
    text(c, "tools for creative workflows.", 42, H - 270, 40, ACCENT, "Helvetica-Bold")
    wrap(c, "I design and build systems that connect AI, media, data, and human creative judgment - from working prototypes to usable production workflows.", 44, H - 320, 385, 13, MUTED, "Helvetica", 19)
    text(c, "AI  ·  CREATIVE SYSTEMS  ·  PRODUCT ENGINEERING  ·  COMPUTATIONAL DESIGN", 44, 66, 8, PAPER, "Helvetica-Bold")
    links = [("Website", "https://dramaclips-portfolio.vercel.app/"), ("LinkedIn", "https://www.linkedin.com/in/ruoya-li/"), ("GitHub", "https://github.com/ruoyali7"), ("Email", "mailto:hello@ruoyali.com")]
    x = W - 290
    for label, url in links:
        text(c, label, x, 66, 8, PAPER, "Helvetica-Bold")
        c.linkURL(url, (x, 62, x + 58, 76), relative=0)
        x += 67
    c.showPage()

    # 2 positioning
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "01 / positioning", "A bridge between creative intent and technical systems.", 2, False)
    wrap(c, "My background spans architecture, computational design, software engineering, and applied AI. That lets me move between creative teams and technical systems - turning an ambiguous creative problem into a prototype, then into a usable production workflow.", 42, H - 150, W - 84, 15, INK, "Helvetica", 22)
    cols = [("CREATIVE", "Architecture · visual production · computational design"), ("TECHNICAL", "Software engineering · APIs · production systems · data / storage"), ("AI WORKFLOW", "Generative AI · media processing · automation · human-in-the-loop systems")]
    x = 42
    for label, detail in cols:
        c.setStrokeColor(colors.HexColor("#D6D4CC")); c.line(x, 115, x + 205, 115)
        text(c, label, x, 93, 9, INK, "Helvetica-Bold")
        wrap(c, detail, x, 67, 185, 11, colors.HexColor("#555951"), "Helvetica", 15)
        x += 230
    c.showPage()

    # 3 problem
    c.setFillColor(BG); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "02 / case study", "DramaClips / DramoraAI", 3)
    text(c, "A real 0→1 product for a real affiliate workflow.", 42, H - 145, 20, PAPER, "Helvetica-Bold")
    wrap(c, "Short-drama promotion creates a deceptively complex production problem: media arrives in different forms, hooks need judgment, publishing spans multiple platforms, and the business outcome lives downstream in attribution and conversion.", 42, H - 190, 390, 12, MUTED, "Helvetica", 18)
    y = H - 315
    for label, detail in [("INPUT", "Source media and episode context"), ("JUDGMENT", "AI-assisted hooks plus human review"), ("OUTCOME", "Published content, attribution, commission")]:
        y = bullet(c, label, detail, 42, y, 400) - 13
    image(c, ASSETS / "campus-visual-system.jpg", 515, 115, 250, 300)
    text(c, "A system shaped around the work, not a speculative demo.", 515, 92, 8, MUTED, "Helvetica-Oblique")
    c.showPage()

    # 4 system
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "03 / system", "From raw media to measurable distribution.", 4, False)
    steps = [("01", "ONBOARD", "Source media, drama metadata, reusable assets"), ("02", "UNDERSTAND", "Transcription, media inspection, candidate hooks"), ("03", "REVIEW", "Structured evaluation and human approval"), ("04", "DISTRIBUTE", "TikTok · Instagram · YouTube · Facebook"), ("05", "LEARN", "Redirects, referral codes, attribution, commission")]
    x = 42
    for num, label, detail in steps:
        text(c, num, x, H - 170, 11, ACCENT if num in ("01", "05") else colors.HexColor("#73776E"), "Helvetica-Bold")
        text(c, label, x, H - 204, 11, INK, "Helvetica-Bold")
        wrap(c, detail, x, H - 235, 125, 10, colors.HexColor("#555951"), "Helvetica", 14)
        if x < 650:
            c.setStrokeColor(colors.HexColor("#C8C7BF")); c.line(x + 135, H - 205, x + 190, H - 205)
        x += 155
    c.setStrokeColor(colors.HexColor("#D6D4CC")); c.line(42, 130, W - 42, 130)
    text(c, "DESIGN PRINCIPLE", 42, 105, 8, colors.HexColor("#73776E"), "Helvetica-Bold")
    wrap(c, "Keep AI inside a legible workflow: show candidates, preserve human approval, and carry the data needed to understand what happened after publishing.", 170, 105, 500, 13, INK, "Helvetica-Bold", 18)
    c.showPage()

    # 5 AI workflow
    c.setFillColor(BG); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "04 / applied AI", "AI as a collaborator in the editing loop.", 5)
    image(c, ASSETS / "carlysle-mixed-use.jpg", 42, 105, 310, 300)
    text(c, "The point is not a magic button.", 42, 82, 9, ACCENT, "Helvetica-Bold")
    wrap(c, "The product uses AI to expand the set of possibilities - transcribing media, proposing hook candidates, and organizing signals for review - while keeping the final creative decision visible and human.", 410, H - 155, 330, 14, PAPER, "Helvetica", 21)
    y = H - 305
    for label, detail in [("GENERATE", "Create several candidate directions from the same source"), ("COMPARE", "Make tradeoffs legible through structured fields"), ("APPROVE", "Let a person decide what is ready to publish")]:
        y = bullet(c, label, detail, 410, y, 330) - 15
    c.showPage()

    # 6 engineering
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "05 / engineering", "The creative workflow is also a production system.", 6, False)
    text(c, "I care about the seams where prototypes become dependable tools.", 42, H - 150, 20, INK, "Helvetica-Bold")
    rows = [("MEDIA", "Transcription and clip preparation", "Turn long-form source material into inspectable, reusable candidates."), ("STORAGE", "Object storage and asset reuse", "Keep outputs available across review, publishing, and later analysis."), ("INTEGRATION", "Platform publishing workflow", "Coordinate multiple destinations while preserving status and failure context."), ("MEASUREMENT", "Redirect and attribution paths", "Connect the creative artifact to what happens after a click.")]
    y = H - 220
    for area, label, detail in rows:
        c.setStrokeColor(colors.HexColor("#D6D4CC")); c.line(42, y - 12, W - 42, y - 12)
        text(c, area, 42, y - 2, 8, colors.HexColor("#73776E"), "Helvetica-Bold")
        text(c, label, 150, y - 2, 12, INK, "Helvetica-Bold")
        wrap(c, detail, 415, y - 2, 320, 10, colors.HexColor("#555951"), "Helvetica", 14)
        y -= 62
    c.showPage()

    # 7 evidence
    c.setFillColor(BG); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "06 / evidence", "A portfolio built from shipped work and tested claims.", 7)
    wrap(c, "DramaClips is grounded in a real CPS / affiliate workflow using ReelShort content. The product has generated real affiliate commission. I do not claim unsupported revenue, conversion-rate, audience, or efficiency numbers.", 42, H - 155, 425, 15, PAPER, "Helvetica-Bold", 22)
    image(c, ASSETS / "san-jose-career-education.jpg", 540, 125, 220, 290)
    text(c, "Evidence discipline matters in applied AI.", 540, 102, 8, ACCENT, "Helvetica-Bold")
    text(c, "Selected adjacent work", 42, 165, 9, ACCENT, "Helvetica-Bold")
    wrap(c, "Computational design and visual systems work show the earlier side of the same practice: translating spatial, visual, and organizational complexity into clear rules and artifacts.", 42, 140, 425, 12, MUTED, "Helvetica", 18)
    c.showPage()

    # 8 fit
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "07 / fit", "Why Snowflake, why this role.", 8, False)
    wrap(c, "Snowflake's Creative Technologist, Brand AI role sits at the intersection I have been building toward: creative partnership, AI prototyping, connected systems, and adoption.", 42, H - 150, 690, 18, INK, "Helvetica-Bold", 26)
    fit = [("PARTNER", "Translate creative intent into technical possibilities."), ("PROTOTYPE", "Make an idea tangible quickly enough to learn from it."), ("CONNECT", "Design the workflow around people, data, and tools."), ("ADOPT", "Explain the system so teams can actually use it.")]
    x = 42
    for label, detail in fit:
        c.setFillColor(BG); c.roundRect(x, 115, 155, 160, 8, fill=1, stroke=0)
        text(c, label, x + 16, 242, 10, ACCENT, "Helvetica-Bold")
        wrap(c, detail, x + 16, 210, 123, 11, PAPER, "Helvetica", 16)
        x += 174
    c.showPage()

    # 9 about/contact
    c.setFillColor(BG); c.rect(0, 0, W, H, fill=1, stroke=0)
    title(c, "08 / contact", "Let's make the next version.", 9)
    text(c, "Ruoya Li", 42, H - 170, 32, PAPER, "Helvetica-Bold")
    text(c, "Creative Technologist · Software Engineer", 42, H - 205, 13, ACCENT, "Helvetica-Bold")
    wrap(c, "I build applied AI and workflow systems that turn complex operations into clear product experiences.", 42, H - 260, 430, 14, MUTED, "Helvetica", 21)
    c.setStrokeColor(LINE); c.line(42, 125, W - 42, 125)
    text(c, "PERSONAL WEBSITE", 42, 94, 8, ACCENT, "Helvetica-Bold")
    text(c, "dramaclips-portfolio.vercel.app", 42, 66, 15, PAPER, "Helvetica-Bold")
    c.linkURL("https://dramaclips-portfolio.vercel.app/", (42, 62, 260, 82), relative=0)
    text(c, "hello@ruoyali.com", 350, 66, 12, PAPER, "Helvetica-Bold")
    c.linkURL("mailto:hello@ruoyali.com", (350, 62, 490, 82), relative=0)
    text(c, "linkedin.com/in/ruoya-li", 560, 66, 12, PAPER, "Helvetica-Bold")
    c.linkURL("https://www.linkedin.com/in/ruoya-li/", (560, 62, 710, 82), relative=0)
    c.save()


if __name__ == "__main__":
    build()
