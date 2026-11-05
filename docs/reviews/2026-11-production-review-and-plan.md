# Production review and improvement plan

**Marcio Herlein career website · 5 November 2026**

Reviewed application revision: `07d447fb6be01a616f26c90a1241a6ed50aca390`. GitHub `main` matched that revision at the start of the review. This report proposes changes; no redesign or application fix is included in this review commit.

## Verdict

The local production build works, and the projects give credible reasons to start a conversation. The website is **not yet finished to the standard of a strong professional career and project-inquiry site**. Its biggest weakness is the way evidence, professional positioning, and the visitor's next decision are organized. More sliders, screenshots, and technical text will not resolve that on their own.

The current role is clear. The business problems are broadly clear. What someone can hire Marcio to deliver, the completed output of each project, and the operating status of some capabilities are less clear. A structural redesign and evidence edit should precede active promotion of the site as a finished showcase. Concrete accessibility and mobile-contact findings also need correction.

## How this was reviewed

Three independent agents inspected the actual rendered production build in Chromium:

- [Prospective hiring manager](2026-11-production-hiring-review.md): enterprise software hiring for customer-facing technical and applied-AI implementation work.
- [Prospective project buyer](2026-11-production-client-review.md): finance/risk or operations lead considering an internal application or AI workflow project.
- [Design reviewer](2026-11-production-design-review.md): professional positioning, visual hierarchy, artifact presentation, readability, and responsive behavior.

The two visitor agents began without project knowledge and did not read the application source or project handoff. Their judgments are **simulated persona evaluations**, not real customer research or evidence of actual hiring/purchase intent. Their interaction checks are actual browser observations. Desktop, tablet/laptop, and phone sizes were inspected across the review; design captures cover 1440, 1280, 390 and 320px widths.

The primary agent separately reran the build, 8 unit tests, 12 browser checks, a default-state axe accessibility audit at 1440 and 390px, a 320px layout check, and a fresh-load mobile contact reproduction. It also inspected HTML, deployment configuration, asset size, and code organization.

This was a **local production-build review**, not verification of the deployed Cloudflare site. No confirmed live portfolio URL was supplied. External product visits were blocked by the environment's network policy; that does not show that Insic or GlobalShipping is unavailable. Real-device behavior, delivered-email operation, production HTTP headers/cache/TLS, and live product journeys remain unverified. No forms, messages, posts, or emails were sent.

## Independent visitor outcomes

| Visitor | What was understood | What prevented a stronger decision |
| --- | --- | --- |
| Hiring manager | Current SAP role, finance/risk experience, explicit ownership, application building, and thoughtful AI/calculation boundaries. Would consider an exploratory technical conversation for a domain-heavy implementation role. | Target contribution appears late; no complete discovery-to-rollout case; implementation ownership, support, feedback, and operational scope still need an interview. |
| Project buyer | The problems are relevant and the landed-cost interaction produces a meaningful comparison. Enough reason to consider an exploratory discussion. | No concise definition of accepted paid work or the first engagement's deliverables; incomplete output evidence; unclear readiness for GlobalShipping and separate automations. |
| Design reviewer | Restrained hero, readable primary typography, real identity, functional controls. | Excessive homepage length, repetitive galleries, competing surfaces, weak primary artifacts, tiny metadata, and poor desktop-image reading on phones. |

These judgments do not say the underlying work is amateur. They say the current presentation does not consistently let a visitor assess it.

## What is clear about each project

| Project | Business case understood | Deliverable that should lead the case | Evidence gap |
| --- | --- | --- | --- |
| ERM Intelligence | Risk managers need to find related risks, responses, context, and evidence instead of asking around fragmented systems. | A reviewed risk workspace/assessment and its usable report or stakeholder review output. | Primary image is a heavily redacted derived visual; the next shows an entry card. Neither follows an example through to its finished result. |
| Insic | A company researcher can inspect valuation assumptions, preserve reasoning, and revisit it as evidence changes. | A saved research case with assumptions and review history. Separate automation proof: a sourced briefing or prepared post and its validation/queue state. | Stock screenshots are from an earlier interface. The bot/agent story is described but no completed briefing, post, or execution trace is shown. |
| GlobalShipping | An importer needs to establish the goods and commercial facts, clarify classification, and compare landed cost before buying. | A dated purchase quote/decision view with cost comparison, sources, and outstanding validation. | Gallery shows the landing page and empty intake. The local cost engine works, but full classification/clarification/saved-quote flow is not demonstrated. Overall product status is not concise. |

Use those deliverables as evidence targets, not promises of what is already publicly verified. Do not add adoption, savings, revenue, customer, investment-performance, or legal-certification claims without evidence.

## Why the design feels assembled

1. **The overview has become three long product tours.** Fully loaded height is 10,428px at 1440px and 14,077px at 390px. About starts around 8,992px desktop and 12,195px phone. The page asks visitors to investigate implementation details before learning enough about the person and what a conversation could produce.
2. **Repeated presentation frames displace evidence.** The three gallery blocks consume about 3,334px on desktop. Every gallery starts with the same generic title while the strength of the selected artifact varies substantially.
3. **The flagship visual can resemble a loading state.** Gray redaction bars dominate the ERM image. The caption is honest about AI editing, but the visual cannot establish the quality of the actual analysis. See [current gallery](evidence/erm-primary-gallery.png).
4. **A full-screen image is often the wrong unit of evidence.** Desktop screenshots shrink into unreadable phone miniatures. The enlarged dialog still fits the entire desktop capture to phone width. Compare [desktop capture enlarged on a phone](evidence/mobile-desktop-capture-enlarged.png) with [native mobile capture](evidence/mobile-native-capture-enlarged.png).
5. **Several surface systems compete.** The green flagship, tinted gallery frames, navy automation panel, blue classifier, and olive calculator each demand emphasis. A secondary automation section can outweigh the career narrative.
6. **Small text undermines the large-type opening.** Many metadata labels are 9–11px; narrative body text often falls to 14px. More whitespace around tiny text does not make the evidence easy to read.
7. **Provenance and caveats occupy the foreground.** Accuracy must stay visible, but repeated source-method explanations should not crowd out the user's task and completed deliverable. Keep a truthful short label and an inspectable provenance disclosure.

## Demo assessment and replacement brief

Both interactions execute actual bounded application logic. Their scope is labeled. The problem is what a visitor is expected to learn and whether that learning justifies the space and effort.

**Product identity:** choosing between scooter, battery, and charger shows an important distinction, but is only one helper stage. A three-choice selector can look predetermined beside claims about a sophisticated classifier. The full selected sentence is also clipped in the 320px native select. Use a readable input-to-evidence comparison, then offer the small experiment as optional technical depth. State that it does not run catalog retrieval, AI reranking, or assign a tariff.

**Landed cost:** this is the strongest functional evidence, but the initial courier option is unavailable and the mobile results require scrolling between cards to compare modes. Lead with one task: “See how packaging changes the transport comparison.” Show an explicit before/after, the changed chargeable weight and modeled freight, and one concise comparison table. Keep detailed taxes and assumptions expandable. Preserve visible example-data labeling and validation limits.

Candidate guided sequence, to validate against the actual engine during implementation:

1. Start with 100 standard-packed units and identify the lowest modeled total.
2. Change quantity to 25 while keeping packaging fixed; explain the resulting transport comparison.
3. Make those 25 units compact; show which chargeable-weight constraint changed and whether the selected mode changed.

A visitor should leave knowing the business and engineering lesson, not just that a number moved. Put the experiment on the GlobalShipping case page and preview its lesson on the homepage. Keep no more than one primary experiment per case. Do not add a new demonstration simply to create symmetry across projects.

## Proposed information architecture

The homepage should provide a professional overview with short project evidence. Full galleries, code/method details, and optional experiments belong in dedicated studies.

```text
Home
  Current role + practical contribution + contact action
  Brief career credibility and scope
  ERM flagship: problem, ownership, status, one selected artifact
  Insic and GlobalShipping: concise, distinctive supporting studies
  Work with me / team opportunities
  About, education, contact

Case studies
  /work/enterprise-risk
  /work/insic
  /work/globalshipping

Each study
  Who uses it → what goes in → what comes out
  My contribution → selected complete workflow → decisions/tradeoffs
  Current status → optional gallery/demo → relevant contact link
```

Preserve Enterprise Risk Manager at SAP as the primary identity, as requested. Improve the secondary copy rather than renaming Marcio a full-time software engineer or forcing one permanent job title.

Possible secondary copy to refine:

> I combine enterprise risk and finance experience with hands-on application development to build decision tools, reporting workflows, and AI-assisted business processes.

Then make the purpose of contact explicit: a team role, an implementation project, or an exploratory discussion. Use proposed capabilities supported by the cases: internal risk/workflow tools; financial analysis and reporting applications; evidence-based AI and classification workflows. Avoid a technology-logo wall or an unbounded “I can build anything” offer.

For paid work, a possible first engagement is one process taken from discovery to a working prototype, with documented inputs/outputs, review rules, acceptance checks and handover. This is **proposed service scope**, not an established service or guaranteed timeline. Deployment, integrations, data access and ongoing support must be scoped honestly. Do not publish fees, response times or availability that have not been confirmed.

## Case-specific evidence direction

**ERM — lead with the enterprise decision.** Obtain an authorized, appropriately redacted original capture or run a permitted real workflow on clearly labeled demonstration data. Show source/context → assessment or review → report excerpt. Preserve confidentiality. Use one purposeful flow diagram for relationships that cannot be shown publicly. Do not use a generated reconstruction as the primary proof of shipped software, and do not manufacture internal financial or risk results.

**Insic — make research persistence and agent output visible.** Prefer current authorized stock interface captures. Show an assumption change and saved research reference/review decision, not only a verdict chart. Separately show a real permitted Morning Brief excerpt with citations, or a prepared post plus validation/held/retry evidence. Clearly distinguish the tool-using research agent from deterministic publishing routines and API acceptance from confirmed publication. Keep reach/growth claims out unless verified.

**GlobalShipping — show the completed purchase decision.** Use the real application with a clearly labeled example transaction. Show the missing product fact, a clarification and its effect, then the quote/transport comparison and dated saved output. Keep confirmed facts, assumptions and unresolved information separate. Landing and intake screens may support the story, but should not be its primary proof. Obtain a plain whole-product status statement before publishing one.

The actual existing galleries should be retained as optional case-study depth. The latest request for desktop/mobile sliders can be satisfied without making three large galleries dominate the homepage.

## Proposed visual system

The direction is a **professional editorial casebook**. Keep the warm neutral paper, dark ink, restrained olive accent, name treatment, and successful headline character. Use product brand colors inside evidence and small identity marks. Select one intentional dark portfolio section, preferably for flagship emphasis.

- One shared heading/metadata/artifact/contact system, with project-specific composition rather than identical cards.
- Body 16–18px, useful captions around 14px, minor metadata no smaller than 12px. These are design targets, not WCAG font-size requirements.
- One display treatment, a clear reading scale, comfortable line heights, and restrained uppercase labels.
- Approximately 1,120–1,200px content width, consistent alignment, and responsive margins around 24px on phones. Use a small spacing scale instead of per-section overrides.
- Show evidence beside the claim it supports. Crop for a decision-relevant detail, preserve access to the unmodified original, and label provenance. Do not rearrange a product screenshot into an invented interface.
- Use mobile-native or readable detail evidence by default on phones. A “full image” view needs a genuinely useful original-resolution/zoom/pan path, with accessible controls.
- Keep navigation and contact reachable on phones. Use visibly consistent buttons, links, focus indicators and interactive areas.
- Reserve image space before loading. Keep reduced-motion behavior and manual, user-controlled galleries.
- Refactor repeated CSS overrides and separate content, layout, galleries and demonstrations so subsequent edits preserve the design system. A framework rewrite is not a prerequisite.

## Verified technical findings

| Check | Observed result | Interpretation |
| --- | --- | --- |
| Build | Passed | Local production bundle generated successfully. |
| Unit tests | 8 passed, 2 files | Both numerical and product-identity helpers exercised. |
| Browser suite | 12 passed, desktop/mobile | Existing gallery, link, keyboard, input/reset, error-state, overflow and reduced-motion checks pass. They do not establish marketing clarity or full accessibility. |
| JavaScript runtime | No page exceptions in measured default desktop/phone states | No observed crash in those states; not exhaustive reliability testing. |
| Horizontal overflow | None at 1440, 390 or 320px | Layout fits tested widths. It does not make embedded screenshot text readable. |
| Automated accessibility | Color-contrast rule flagged 15 nodes in each of 1440 and 390px default states | Contrast ratios include 3.68–4.14 for small numbered labels, 4.33 for timeline dates, 4.47 for courier-unavailable copy. Normal-text target 4.5:1. Review meaningful/decorative context and correct contrast. Incomplete checks require manual review; no compliance claim. |
| Cold phone contact | Reproduced independently at 390×844 | Page grows 13,824→14,077px after image loading. At 4.2 seconds, email button is at y≈822–868 in an 844px viewport; partially outside it. The link address is correct; arrival position is unstable. |
| JavaScript disabled | Visible body is empty, although title exists | Critical content and contact rely entirely on client rendering. Pre-render meaningful HTML and progressively enhance interactions. This is also a resilience/discoverability issue, not proof that all search engines cannot index the site. |
| Sharing/search metadata | Description/title exist; canonical and Open Graph metadata absent | Complete after confirming the actual production URL. No current share-card preview verified. |
| Release automation | No `.github` CI workflow in this revision; Cloudflare configuration builds/deploys | Add meaningful CI and post-deploy checks. No test gate in repo is established by the deployment configuration alone. |
| Assets | Approximately 3.3 MiB of project files, dominated by two edited PNGs | Optimize delivery and responsive sizing while preserving truthful, readable evidence; not a measured public-network performance score. |
| Production operations | Unverified externally | Verify actual host, deployed revision, TLS, headers/cache behavior, redirects, errors, external links and rollback on the deployed site. Absence of a repo `_headers` file is not proof that Cloudflare serves no security headers. |

Raw [automated observations](evidence/automated-metrics.json) record **initial** layout, before all lazy images decode. Use the design report's fully loaded heights for page-length comparisons. [Cold-contact observations](evidence/mobile-contact-observations.json) and [screenshot](evidence/mobile-contact-cold.png) document the inquiry-path defect. The 253px page growth is observed layout instability, not a measured Core Web Vitals CLS score.

## Ordered delivery plan

| Stage | Concrete deliverable | Completion gate |
| --- | --- | --- |
| 1 — Clarity and evidence edit | One-sentence purpose and input/output/ownership/status for each case; accepted contact purposes; curated artifact inventory; brief before/after demo scripts. | A fresh visitor can explain all three products and name a plausible project/team contribution without opening technical disclosures. Every status claim has an evidence basis or is explicitly pending. |
| 2 — Art direction and layout | Designed homepage plus one representative full case at desktop and phone sizes; shared type/spacing/color/component rules; readable evidence crops. | Current role stays prominent; work, career context and contact are discoverable quickly; no gallery controls are needed to understand a project. Other cases inherit the system with distinct content layouts. |
| 3 — Implementation | Short overview and three case routes; optional sliders/demos; meaningful initial HTML; stable media dimensions; improved contact and mobile evidence reading. | Direct routes work; phone contact arrives at an actionable visible target; no avoidable image-induced anchor shift; keyboard, touch, focus, dialog and reduced-motion behavior still work. |
| 4 — Proof and release | Approved current/clearly labeled artifacts, clarified product states, corrected contrast, CI and deployed-site checks. | Functional checks pass, confirmed contrast failures are resolved, incomplete accessibility checks reviewed, live host/revision verified, and representative external links checked. |
| 5 — Fresh human evaluation | Test with actual people resembling the target hiring manager and buyer. | Each can explain who Marcio is, what the projects produce, what he contributed and why/how they would contact him. Record observations and revise; agent simulation cannot establish conversion. |

The first implementation priority is a strong overview and one complete flagship study, not another gallery feature. Source access, publication approval for artifacts, fresh public-product captures and plain product-status facts are dependencies for the corresponding evidence work; they need not block layout and copy work using clearly marked placeholders in the design review.

## Release acceptance criteria

- In a short fresh-visitor scan, current role and practical contribution are clear. A follow-up visit can explain each project's audience, input, output, ownership and status in one sentence.
- An appropriate hiring/client inquiry is visible near the introduction and after relevant evidence; no invented availability, service promise or result.
- Homepage acts as an overview. Set a deliberate content budget, initially around 500–700 words including concise project summaries, and validate the design rather than treating a word count as a quality score. Full methods and experiments remain accessible in studies.
- Each project has one completed, accurately labeled evidence path. No fake UI, inferred production usage, exposed enterprise records or invented metrics.
- Every demo opens with a question, a concrete action and an explanation of the changed result. Its boundary is visible without a long disclaimer wall.
- Ordinary phone reading does not depend on deciphering a desktop screenshot. Full-image inspection has usable zoom/original access.
- No overflow at representative widths; stable contact navigation on a cold 390/320px load; usable browser zoom, keyboard focus and meaningful HTML fallback.
- Automated functional gates pass; contrast findings are resolved and accessibility receives manual review. Do not equate passing unit/browser tests with production approval.
- The real deployment and its contact/external-link behavior are checked separately from local results.

This plan preserves the credible business work and current role while changing how visitors discover and assess it. It does not require a new professional identity, invented outcomes, or an ornamental technology rewrite.
