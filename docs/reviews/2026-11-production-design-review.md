# Production design review — Marcio Herlein

Reviewed 5 November 2026. Scope: the existing production build served at `http://127.0.0.1:4176`, visually inspected in Chromium at 1440, 1280, 390 and 320 CSS pixels, with a 1000px viewport height. Initial and fully loaded pages, all three project sections, gallery navigation/filtering, enlarged images, the product-identity interaction and the cost demo were inspected. Source was consulted afterward to identify selectors and explain observed behavior. This is a design and planning deliverable; no application changes are proposed as already completed.

## Overall judgment

The opening is more credible than the rest of the experience. Its quiet cream, ink and olive palette, clear enterprise-risk identity, generous spacing and restrained serif accent already provide a useful foundation. The larger credibility problem is editorial: the page accumulates three product presentations, three nearly identical screenshot galleries, several workflow explanations and two embedded demonstrations before returning to the person whose career it represents. It reads as a collection of implementation additions, rather than a deliberately edited professional narrative.

The redesign should make **Enterprise Risk Manager at SAP** the unmistakable primary identity, with application development and applied AI demonstrated as complementary capabilities. That is a hierarchy of information, not a requirement to choose only one future job title. The page can support conversations about customer-facing technical work, implementation, product building and team opportunities without presenting Marcio as several unrelated professional identities.

Better evidence, a shorter overview and a coherent case-study system will improve credibility more than new gradients, animation, a different framework or a wholesale font replacement.

## What should survive

- The opening sentence explicitly connects SAP, enterprise risk and practical application development. It is specific and understandable.
- The flagship enterprise example has a useful problem: fragmented risk context and difficulty finding related risks. This is a stronger starting point than a list of technologies.
- Business reasoning, human review, calculation boundaries and the distinction between deterministic work and AI are valuable themes. Keep them, while editing their presentation.
- The career history, finance background, Argentina location and language range form a believable, differentiated story. Make that story easier to discover.
- The existing wordmark, restrained background, visible link underlines, real product links, reduced-motion support and broad responsive stacking are sound starting points.
- The galleries have useful mechanics: named controls, selected states, arrow-key browsing, a modal with a close action and Escape behavior. The solution is to reduce unnecessary gallery machinery and improve image reading, not discard all that work.
- Neither horizontal page overflow nor a broken responsive grid was observed at the four inspected widths.

## Priority findings and evidence

### 1. The professional story is buried beneath product detail

At 1440px the loaded document is **10,428px** tall. About starts at **8,992px**, and Contact at **9,849px**. At 390px the document grows to **14,077px**, with About at **12,195px**. At 320px it reaches **15,742px**, with About at **13,589px**. These are layout measurements, not estimates of actual reader behavior, but they explain the pacing problem clearly.

`#work` contains almost the entire experience. The large `.sap` panel is followed by its gallery and a second substantial enterprise narrative; Insic then has a full gallery, research ribbon, implementation paragraph and large automation panel; GlobalShipping adds another gallery, four classification stages and two demonstrations. GlobalShipping alone occupies about **2,938px desktop / 4,977px at 390px**, despite enterprise risk being the primary professional identity.

The page gives every addition space without assigning it a clear place in the reader's decision. A hiring manager should see scope, experience, ownership and selected evidence before encountering the complete cost-calculation interface.

Evidence: `1440-full-loaded.png`, `1280-full-loaded.png`, `390-full-loaded.png`, `320-full-loaded.png`; selectors `#work`, `.case-detail`, `.automation-case`, `.classifier-case`, `.demo`, `#about`.

### 2. Image volume exceeds image value

The three gallery blocks use the same heading, “See the product in context,” plus stage, caption, provenance, pagination and thumbnail controls. They occupy about **3,334px in total at 1440px**, before counting the surrounding project narrative. Uniform presentation suggests equal evidentiary strength, although the material has very different status:

- ERM uses explicitly AI-edited/redacted visuals derived from supplied screenshots.
- Insic uses saved captures of an earlier interface, with non-live figures.
- GlobalShipping uses a current frontend rendered locally, mainly its landing page and empty intake.

The provenance labels are a good practice. They also reveal that the strongest-looking artifacts do not necessarily show the strongest implemented workflow. The redesign must preserve those distinctions while choosing fewer, more useful examples.

### 3. The flagship image looks unfinished, even though the redactions are intentional

The default ERM Morning Brief image shows long gray bars where almost all meaningful content would be. At normal viewing distance those bars resemble a skeleton/loading state. It therefore creates an impression of an unpopulated dashboard rather than helping the reader understand a working risk-management tool. The second slide is an assessment entry card; it communicates available features but does not show a completed assessment, its inputs or its human-review boundary.

The current labels disclose the edits, so the issue is not an undisclosed claim. It is weak visual evidence occupying the most prominent evidence position. AI editing also makes the fidelity of interface details harder to assess. Do not solve this by inventing polished dashboard screens or simulated outcomes.

Prefer a permission-safe actual capture with deterministic, clearly marked redactions, cropped to a workflow that remains understandable. If no such screen can be shared, lead with an accurate architecture/workflow diagram and a concrete written account of one implemented decision. An honest diagram is stronger evidence than an unreadable “product” image. Keep confidential data and proprietary source private.

Evidence: `1440-1-gallery-enterprise.png`, `1440-erm-quantifier.png`; `.gallery-enterprise`, `/projects/erm-brief-edited.png`, `/projects/erm-quantification-edited.png`.

### 4. The page is responsive, but screenshot reading is not

At 390px a complete desktop Insic capture is reduced to roughly 310px wide; at 320px, roughly 240px. Product labels and most financial details become too small to read. Captions then occupy more visual space than the decision evidence. Thumbnail labels are 9px and wrap into four or five lines at 320px.

The “Enlarge” dialog still fits the entire desktop image to the available phone width. It does not supply a useful zoom/pan or original-resolution reading path, so opening it barely solves the problem. The mobile slide is much more readable, but choosing device format should not be a prerequisite for understanding the project.

Use a task-specific detail crop with adjacent explanatory text in the overview. On a case-study page, offer the full capture as secondary context plus an accessible original-image/zoom path. Use mobile-native evidence when it genuinely shows a relevant task. Preserve real proportions; decorative phone frames are optional and should not compete with the work.

Evidence: `390-4-gallery-finance.png`, `320-4-gallery-finance.png`, `390-desktop-lightbox.png`, `320-desktop-lightbox.png`, `390-lightbox.png`; `.gallery-stage`, `.gallery-image`, `.gallery-thumbnails`, `.dialog-image img`.

### 5. Component consistency exists locally, but the page lacks a single visual hierarchy

The green enterprise card, blue gallery tint, navy automation panel, pale blue classifier, olive cost results and cream editorial page each make sense individually. Together they introduce several competing surface systems. The navy automation panel is especially prominent: about 769px tall on desktop and 1,503px at 390px. A secondary part of a secondary project receives more emphasis than career scope and experience.

Brand treatment also varies: the flagship starts with an editorial headline, Insic with a large supplied logo, and GlobalShipping with a compact brand mark beside section metadata. Workflow treatments vary between vertical nodes, a four-part ribbon, four publishing columns and four classification columns. This repeated re-invention makes the page feel assembled.

Use one portfolio component vocabulary: a project heading, a concise metadata row, a challenge/ownership summary, one selected artifact and a clear detail link. Product brands may remain inside artifacts or in a consistent small identity position. Reserve the main dark surface for the flagship or one intentional emphasis; use neutral surfaces elsewhere.

Evidence: `1280-5-automation-case.png`, `1280-9-demo.png`, full-page captures; `.sap`, `.automation-case`, `.identity-explorer`, `.shipping-brand`, `.product-logo-title`, `.research-ribbon`.

### 6. Typography has a strong opening and a weak information floor

The large sans-serif/italic-serif pairing gives the hero character. But the distance between the 103px desktop title and the 9–11px metadata/control text is too great. Much of the evidence is communicated through small captions, indices, provenance and labels. The main case paragraphs are only 14px despite ample space.

At 320px, the hero wraps into three title lines and the actions stack; that is acceptable. The larger issue is the following fifteen thousand pixels of body text, nested cards and fine print. The repeated all-caps eyebrows, tight negative tracking and manually broken headings can feel more like styling motifs than an intentional reading system.

Specific contrast concerns also exist in the small numbered text. `.project-jumps span` uses `#788169` on `#f5f4ed`, approximately **3.70:1**; `.research-ribbon b` is approximately **3.68:1**; `.classifier-stages li > span` approximately **4.14:1**. Where these numbers convey information, they fall below the 4.5:1 normal-text target. Primary paragraphs are more robust; this is not a blanket contrast failure.

The parallel automated accessibility audit also identifies the unavailable-courier copy at approximately 4.47:1 and timeline dates at approximately 4.33:1. It reports 15 failing text nodes in the default desktop and 390px states, all under the color-contrast rule. These findings strengthen the case for a small, controlled text-color palette.

Several standalone `.text-link` actions have a rendered height around 21–22px. Increase the actual interactive area without making every link visually bulky. Aim for 44px on mobile; assess WCAG minimum target-size spacing and exception rules rather than assuming every small text link is automatically a violation.

### 7. Both demos need an editorial decision, not more decoration

The product-identity selector changes between three preset descriptions and updates the identified principal article. This is a real, bounded code demonstration. It does not by itself demonstrate the full retrieval, clarification or AI-classification architecture described immediately above it. At 320px the long selected description is clipped in the native select, weakening the very word-order distinction it is trying to explain.

The landed-cost demo is richer and genuinely changes modeled results. But it asks the visitor to become an import buyer very late in a career overview, and its initial courier option is already unavailable. On mobile the controls and three mode cards become a long sequence; comparing outputs requires scrolling. Changing quantity to 5,000 maintained the page layout, but did not address that comparison burden.

Move both experiments to the GlobalShipping case study. Keep one as the primary interactive proof only if it demonstrates the case's central engineering decision. The identity example may be better as a compact before/after comparison of three full sentences. The cost demo should explain one cause-and-effect question, such as packaging changing chargeable weight, with inputs adjacent to the key comparison, a concise comparison table on phones, and expandable detailed costs. Keep example-data and limitation labels visible. Remove an experiment from the overview when a short annotated artifact communicates the same point more clearly.

Evidence: `320-identity-battery.png`, `320-demo-5000.png`, `390-9-demo.png`; `.identity-explorer`, `#identity-example`, `.demo`, `.modes`, `.mode`.

## Proposed information architecture

The homepage should be a confident professional overview. Detailed studies should be available through clear links, using the existing lightweight stack if appropriate.

1. **Header:** name; Work; Experience/About; Contact. Keep a contact path available on phones. Consider a résumé link only when a current résumé exists.
2. **Opening:** Enterprise Risk Manager at SAP; one sentence connecting domain experience to applications and applied AI; “View selected work” and a secondary contact action. Maintain the current primary identity and avoid turning the opening into a list of desired titles.
3. **Credibility and scope:** a compact current-role/career summary based on verified facts: SAP experience since 2018, enterprise risk since 2023, the kinds of stakeholders/workflows served. No invented company logos, testimonials or impact metrics.
4. **Flagship enterprise case:** one concise problem, Marcio's ownership, implementation/status, one useful artifact, and “Read the enterprise risk case.” Give it more visual space than either independent project.
5. **Two supporting projects:** Insic and GlobalShipping. Each gets a short domain problem, ownership/status, one distinctive evidence image and a project-detail link. Their implementation skills support the professional story.
6. **Experience/About:** brief narrative, legible timeline, languages, education or a link to further detail. Bring enough of this upward that the reader can establish career credibility without reading three product studies.
7. **Contact:** retain the broad invitation to joining a team, implementation and collaboration; provide email and LinkedIn clearly.

Working overview budget: roughly 600–850 words, excluding navigation and necessary metadata. Aim for approximately 4,000–5,000px at 1440px and no more than 6,000–7,000px at 390px as an initial design constraint, not a reason to shrink text or suppress useful evidence. The final criterion is a coherent 60-second skim, not pixel count alone.

Each detail page should follow a shared reading sequence: **context → ownership and scope → user problem → selected workflow evidence → two or three engineering decisions → implementation/status and limits → next project/contact**. Use progressive disclosure for genuinely optional technical detail, rather than hiding basic credibility facts.

## Evidence treatment by project

| Project | Lead with | Evidence to obtain or curate | Reduce or relocate |
| --- | --- | --- | --- |
| Enterprise risk at SAP | The risk-management problem and Marcio's specific ownership; current use/status stated only as verified | One permission-safe actual workflow, annotated to explain inputs, linked context and human review; accurate system boundary diagram if screens cannot be shared; dated, scoped description of what Marcio designed/built and what remains manual | Large generic four-node diagram, two heavily obscured screens as the sole proof, repeated long caveats. Consolidate provenance while retaining essential labels beside each artifact |
| Insic | A finance researcher challenging and preserving assumptions | A current, dated capture of an actual editable valuation/research task; one desktop detail and one mobile view only if materially different; a real generated briefing or sanitized delivery artifact if available for the automation section | Duplicate company overview/NVIDIA capture unless it demonstrates a distinct decision; huge homepage automation panel; claims about reach or published volumes without evidence |
| GlobalShipping | Turning incomplete product facts into a more defensible import decision | Actual guided intake/clarification state, visible evidence/uncertainty treatment and a real modeled comparison; use existing working code honestly and label fixtures | Marketing landing page as the main capability proof; repeated globe illustration; two large demos in the overview; landing and empty-state captures presented as end-to-end proof |

For every artifact, record source, capture date/version, edit/redaction method, what it demonstrates and what it does not establish. Build captions around the decision the reader should notice. Do not generate UI screenshots, fabricate user evidence, claim quantified impact without measurement or imply SAP endorsement. If an artifact is unavailable, state that limitation and choose a truthful alternative.

## Visual direction and system rules

**Direction:** a calm professional practice with the rigor of an enterprise case study and the concreteness of a builder's portfolio. Keep the existing warmth and restraint. Add confidence through editing, legible evidence and consistent composition.

| Area | Proposed rule |
| --- | --- |
| Color | Warm neutral page; white/light-neutral evidence surfaces; dark ink text; one olive action accent. Reuse a small semantic palette. Keep source-product colors within screenshots; avoid giving every subsection a new visual brand |
| Typography | One dependable sans-serif for reading and UI; retain Georgia-style italic as a sparing editorial accent. No font-library change is necessary to establish quality |
| Scale | Hero roughly 64–80px desktop / 40–48px mobile; section 32–40 / 28–32; project 26–32 / 24–28; body 16–18px at 1.55–1.7 line height; captions 13–14px; essential metadata at least 12px |
| Width | Retain a disciplined content width around 1,120–1,160px; prose 60–72 characters. Desktop 12-column layout, simple single-column mobile. Use 24px phone gutters, allowing 20px at 320px |
| Spacing | Use a small 8px-based scale; project summary and artifact belong together; larger gaps indicate real section changes. Avoid spacer-driven length and nested card padding that leaves only 220px for reading on small phones |
| Surfaces | One border color and one small radius family around 4–6px; restrained or absent shadow. Use a dark panel deliberately for the flagship, rather than alternating dark cards as a default rhythm |
| Actions | One primary and one secondary style; consistent external-link treatment; visible keyboard focus; generous hit areas. Keep product URLs and case-study links distinct in purpose |
| Evidence | Overview uses one selected image/crop per project with a precise caption. Detail pages can have additional figures. Use galleries only where sequence or comparison is useful; do not require a carousel to reveal essential proof |
| Images | Preserve real screen proportions and text; reserve dimensions/aspect ratios while lazy-loading; use appropriately sized responsive assets. Cropping and annotations may clarify actual work; do not redraw the interface to make the product appear stronger |

A portrait could make the site feel more personal if Marcio has an appropriate real photograph, but it is optional. It should not become a prerequisite or a substitute for professional evidence. Avoid stock business photography, decorative AI art and generic device mockups.

## Ordered milestones and acceptance criteria

### 1. Establish the content and evidence inventory

Before visual production, create one sheet per project recording ownership, dates/status, intended user, implemented scope, available artifacts, confidentiality constraints and support for every outcome claim. Select one leading artifact per project.

Acceptance: every visible claim has an owner/source; all edited imagery is identified; no missing evidence is replaced with invented UI or outcomes; enterprise-risk identity and complementary implementation capabilities are explicit.

### 2. Design the overview and case-study wireframes

Produce low-fidelity desktop and 390px layouts for the shorter homepage and one complete flagship study. Establish the same structure for the two supporting projects. Decide where the demonstrations live before styling them.

Acceptance: a reviewer can identify current role/employer, background, flagship ownership, two supporting capabilities and contact route in a 60-second skim. Experience appears before exhaustive project detail. Essential information is visible without using a slider, opening an accordion or leaving for an external product. The approximate length/word budgets above are met without reducing legibility.

### 3. Produce one visual system and art-directed evidence set

Create high-fidelity hero, flagship, supporting-project, timeline, figure/caption and contact components. Apply the same rules at 1440, 1280, 390 and 320px. Prepare honest image crops and annotations from approved source material.

Acceptance: body copy is at least 16px, essential metadata at least 12px, meaningful text meets 4.5:1 contrast, no heading or long product description clips at 320px, and product evidence can be understood at the displayed size. At least one figure per project makes a specific implemented decision understandable without reading tiny UI text.

### 4. Validate the demonstration and image-reader designs

Prototype the proposed GlobalShipping experiment only in its intended detail-page context. Show default, changed input, invalid input and unavailable comparison states. Demonstrate a useful original-resolution/zoom path for desktop captures on a phone.

Acceptance: the complete product description is readable at 320px; input and key output can be compared without traversing multiple large cards; example-data boundaries remain visible; no unavailable option is implied to be a valid recommendation; modal opening/closing and focus return work by keyboard, and image reading does not depend on precise swipes.

### 5. Implement and verify only after the design direction is agreed

No framework rewrite is indicated by this review. Build the approved structure in the existing stack, then perform a fresh production-build visual and interaction pass.

Acceptance: no horizontal page overflow at 320, 390, 1280 or 1440px; no missing images or unreserved image shifts; all navigation and contact paths work; keyboard focus is visible and ordered; interactive targets have adequate mobile hit areas; reduced motion is respected; public performance/accessibility checks are reviewed, with real issues resolved rather than treating a score as design approval. Record before/after screenshots at the same sizes. Test with at least a few readers unfamiliar with the projects: they should recall the enterprise-risk identity and explain how application/AI implementation complements it.

## Evidence files

All captures are under `/workspace/scratch/production-review/design/`.

- Whole-page pacing: `1440-full-loaded.png`, `1280-full-loaded.png`, `390-full-loaded.png`, `320-full-loaded.png`.
- First impressions: `1440-hero.png`, `1280-hero.png`, `390-hero.png`, `320-hero.png`.
- Enterprise imagery: `1440-1-gallery-enterprise.png`, `1440-erm-quantifier.png`.
- Gallery legibility: `390-4-gallery-finance.png`, `320-4-gallery-finance.png`, `390-desktop-lightbox.png`, `320-desktop-lightbox.png`, `390-lightbox.png`.
- Component hierarchy: `1280-5-automation-case.png`, `1280-9-demo.png`.
- Demonstrations: `320-identity-battery.png`, `320-demo-5000.png`, `390-8-classifier-case.png`, `390-9-demo.png`.
- Layout measurements: `{1440,1280,390,320}-loaded-metrics.json`.

The unqualified `*-full.png` captures were taken during scrolling and may include images before lazy decoding finished; use `*-full-loaded.png` for final layout comparisons. Initial versus fully decoded document heights were 10,428 → 10,428px at 1440; 10,241 → 10,241px at 1280; **13,824 → 14,077px at 390 (+253px)**; and **15,524 → 15,742px at 320 (+218px)**. The mobile layout expands as lazy images acquire intrinsic dimensions. This is an observed before/after height difference, not a measured Core Web Vitals CLS score. Reserve appropriate aspect ratios while loading and verify the behavior in the redesign.

This review did not validate external product availability, confidential implementation, user adoption or measured business impact; those remain evidence-inventory tasks, not visual findings.
