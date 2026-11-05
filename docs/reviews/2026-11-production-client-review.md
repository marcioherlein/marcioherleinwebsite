# Production website review: simulated prospective project buyer

Date: 2026-11-05. Candidate: Marcio Herlein. Reviewed production build: `http://127.0.0.1:4176`.

This is a **simulated assessment**, not real user research, customer feedback, or evidence of purchase intent. I took the perspective of an operations or finance/risk lead considering an individual for an internal workflow tool, applied-AI implementation, or classification/reporting project. I began with the rendered website, with no project knowledge, and did not read application source or existing project documents. Observations below distinguish what the browser demonstrated from what the site's narrative says.

I reviewed Chromium at 1440 × 1000 and a 390 × 844 phone viewport. I opened every gallery slide, used the enlarge controls and desktop/mobile filters, expanded the explanatory disclosures, changed all three product-identity examples, varied order quantity and packaging in the landed-cost demo, reset the example, and followed the inquiry anchors. I inspected the `mailto:` destination without opening a mail client or sending anything. Read-only visits to `insic.app` and `globalshipping.app` failed with `ERR_TUNNEL_CONNECTION_FAILED` in this restricted environment; that is **not evidence that either public product is down**. Their live functionality remains unassessed here.

**Buyer verdict:** I understand the broad problems Marcio works on and have enough evidence to consider an exploratory conversation. I do not yet know precisely what paid work he accepts, what the first engagement produces, or how a prototype becomes an owned, maintainable internal tool. The page demonstrates business judgment more convincingly than it defines a commercial offer. The landed-cost demo is the strongest direct proof; the weakest part is the lack of completed business artifacts from the other workflows.

**What I understand about each project**

| Project | End-user and business problem | Input and deliverable I understand | Marcio's contribution and present status | Remaining buyer uncertainty |
| --- | --- | --- | --- | --- |
| Enterprise risk / ERM Intelligence | Risk managers at SAP. Fragmented risk records and context make it hard to find related risks, responses, organizational relationships, and evidence. This is clearly stated. | Risk portfolio information, related responses, documents, external signals, and assessment assumptions feed a shared exploration and assessment workspace. Intended outputs include evidence/context, scenario quantification, and engagement preparation. The quantifier image also lists Word/PDF and five-sheet Excel exports, but no completed export is shown. | The page says Marcio built the platform from scratch, deployed it on SAP BTP, and that risk managers use it. React/TypeScript, FastAPI, retrieval, and AI-assisted work are described. Usage and implementation are first-person claims, not independently verified in this review. The gallery explicitly identifies edited, redacted visuals rather than live captures. | I can understand the application, but cannot follow one example risk from source evidence through review to a finished assessment or report. I do not know the breadth of adoption, ownership/support model, or which capabilities are routinely used. No adoption numbers are needed if unavailable, but the current-use boundary should be explicit. |
| Insic | I infer a person researching listed companies. The research loop is clear: understand a business, challenge valuation assumptions, preserve reasoning, and revisit evidence. The specific target user is less explicit than ERM's risk managers. | Company/financial information, model defaults, market context, and editable growth, margin, and terminal-multiple assumptions. Outputs include valuation/scenario context, reverse-valuation context, and saved research history. A separate research workflow is said to produce dated HTML briefings; publishing workflows produce channel-specific content and delivery records. | The page calls the standalone finance application a **prototype** and says Marcio built the Next.js/TypeScript app, local calculations, normalization, saved history, and scheduled publishing workflows. The gallery clearly labels its stock views as saved captures of an earlier interface. There is no local valuation or bot execution demo on this page. | I see polished analysis presentation, but not an actual assumption edit, a saved reasoning record, an HTML briefing, a prepared post, or a held/retried delivery record. I cannot assess the quality of the briefing or the human review experience. Product prototype status is clear; the operational status of the separate automations is less clear. |
| GlobalShipping | A buyer planning an import purchase into Argentina. The problem goes beyond freight arithmetic: establish the actual goods, clarify commercial facts, classify them, and compare landed costs before committing. This is understandable. | The narrative describes supplier listings/descriptions, product facts, commercial terms, quantity, and packaging. Intended deliverables are an evidence-aware classification, outstanding questions, cost scenarios, and a dated saved quote. The local demo visibly delivers a product-identity result and a goods/freight/tax/destination cost comparison. | Marcio says he built the classification workflow and cost engine. The galleries identify current frontend captures rendered locally, with no live provider connection. The cost demo says it runs the actual engine against invented fixtures. The identity demo says it runs actual helpers for one stage only. | The overall readiness label is missing: prototype, private pilot, or operating product? The gallery shows the landing page and empty intake on desktop and phone, not a completed result. I have not seen catalog retrieval, a clarification round, a returned code, unresolved-case review, or a saved quote work. “Current frontend” alone does not answer operational readiness. |

**What the screenshots persuade me of**

The galleries are usable. Labels, thumbnails, next/previous controls, filters, and close controls worked in the tested interactions. Captions distinguish edited visuals, older saved captures, and current local frontend captures. That honesty supports trust and should remain.

ERM's Morning Brief visual conveys the scale and organization of an application, but most useful content is redacted. It cannot establish evidence quality. The Risk Quantifier screen is more informative: it names scenarios, percentile statistics, and output formats. It remains an entry screen describing outputs, not an example of those outputs. The gallery also does not show the portfolio exploration that leads the enterprise case.

Insic gives the strongest visual evidence of a developed analytical interface. ServiceNow and NVIDIA show company-specific context and different model conclusions; the reverse-valuation view gives a recognizable analytical output. Nevertheless, three desktop analysis captures partly repeat the same presentation. Replacing one with a real editable-assumptions state or saved research record would better support the stated research loop. The screenshots do not establish investment performance, model accuracy, or business adoption.

GlobalShipping establishes a coherent product identity and responsive intake. Four images cover two entry states across two screen sizes. They do not show the difficult work the copy emphasizes. For a classification/reporting commission, a genuine example of the candidate shortlist, missing fact, answer, review status, and completed cost or saved-quote view would be materially more persuasive. The Spanish UI is appropriate to its stated market; concise English annotations would help an English-speaking buyer understand the important fields without changing or fabricating the underlying interface.

On the phone, all galleries initially show a desktop image. The enlarged desktop captures still fit within a narrow dialog and their UI labels remain too small to inspect comfortably. Selecting the dedicated Mobile view produces substantially clearer evidence. Prefer an appropriate phone view or a readable annotated crop for phone visitors, and make full-resolution inspection easy. This is a presentation limitation, not a failure of the underlying product's mobile interface.

**What the working demos actually demonstrate**

| Interaction observed | Actual output | What it supports, and its limit |
| --- | --- | --- |
| Switch between complete scooter, scooter battery, and scooter charger descriptions | “Complete scooter” / normalized `electric scooter`; “Battery” / `lithium battery`; “Charger / power adapter” / `usb c charger`, with an explanation of the principal article | A concrete domain distinction and a constrained classification stage. The three presets are not an open-ended classifier. No catalog shortlist, clarification interaction, tariff code, or duty assignment is demonstrated. The page states this boundary clearly. |
| Default cost example: 100 units, standard packaging | Sea $3,231.30 ($32.31/unit), air $3,728.70 ($37.29/unit), courier unavailable; sea identified as lowest modeled total | A visible cost breakdown and eligibility boundary within the invented tariff fixture. This is a real output the buyer can inspect, not evidence of a real shipment or quote from a provider. |
| Change to 20 units, compact packaging | Sea $1,609.54; air $1,008.85; courier $719.34, now lowest modeled total | Demonstrates how minimums, quantity, and packaging change a business comparison, rather than simply animating a number. This is the page's best explanation of an actual decision-support deliverable. |
| Change to 100 units, bulky packaging | Sea $3,535.39; air $5,755.92; courier unavailable | Makes volumetric freight effects tangible. It does not prove optimal logistics, timing, regulatory eligibility, accurate live taxes, or profit. |
| Reset example | Returns quantity to 100 and packaging to standard, with the original results | The local control works when the UI update settles. |

The calculation assumptions are available in a disclosure and explicitly identify invented rates, modeled tax assumptions, and absent live connections. The separation of deterministic calculation, AI assistance, missing information, and human validation is especially relevant to a finance/risk buyer. Preserve it.

The ERM workflow diagram and Insic automation sequence are explanations, not executable demos. I understand that distinction from their captions. To make the AI work commissionable, show a genuine sample artifact: a sourced briefing, a draft awaiting review, an exception record, or a report produced by the existing workflow. A clearly labeled synthetic-data run is suitable where confidentiality prevents real data. It must be generated through an actual implemented path and not presented as a client result.

**Outputs and outcomes must stay separate**

The site currently avoids claiming measured time savings, reduced risk exposure, publishing reach/growth, universally correct classification, or profit. That restraint is useful. A portfolio workspace, a valuation result, a dated briefing, a delivery log, or a landed-cost comparison is an output. Faster decisions, lower workload, better returns, fewer errors, and lower costs are outcomes that would require evidence. More output evidence can strengthen the page immediately without inventing outcome metrics, clients, adoption, or expertise.

**What prevents a project inquiry**

1. **I do not know if this is an offer for paid project work.** “Enterprise Risk Manager” establishes domain credibility; the bottom combines joining a team, implementing an idea, and exploring a project. I cannot tell whether he accepts scoped external work, wants employment, or is only open to informal discussion. State the actual availability and engagement preference, once confirmed.
2. **I have to invent the initial scope.** “Bring a business problem” is welcoming but broad. There is no example of what I can commission, what he needs from me, or what I receive after a first stage.
3. **I cannot inspect the finished business deliverable for most workflows.** I can see the cost comparison. I cannot inspect the assessment/report, reviewed briefing, saved research reasoning, or classification review artifact that would make this relevant to my team.
4. **Readiness is unevenly labeled.** ERM says used by risk managers; Insic says prototype; GlobalShipping and the automations need similarly plain status statements. “Implemented” and “current frontend” do not tell me what is operating end to end.
5. **Implementation and handover expectations are absent.** Before commissioning, I would want to discuss the target environment, access/data boundaries, integration scope, validation criteria, repository/documentation handover, and support expectations. The website need not solve these questions, but it should name them as scoping topics rather than imply that an attractive prototype settles them.
6. **The email path is simple but underspecified.** The visible address and `mailto:marciofabrizio@gmail.com` destination work as a direct inquiry route. There is no suggested brief or statement of what follows. A short prompt would lower the effort of writing the first email.

There is also an observed **mobile inquiry-path defect**. On a fresh 390 × 844 load, clicking the hero's “Start a conversation” sets `#contact`. As lazy project assets load, document height grows from 13,824 to 14,077 px. After five seconds, scrolling remains at 12,980, leaving the contact section at y=487 and the Email Marcio button partly below the viewport. Re-aligning after assets load moves the section to y=234 and exposes the controls. The 253 px change matches the document growth. Reserve asset space or otherwise keep the anchor destination stable. No message was sent; this is a landing-position issue, not a verified email failure.

**A practical buyer journey**

1. **Recognize a relevant problem immediately.** Keep the finance/risk background visible and add a plain statement about the work being offered, if paid projects are indeed accepted. Link to three concrete capabilities: internal workflow tools, research/reporting automation, and evidence-based classification/decision support.
2. **Choose the closest example by business task.** Alongside the project brands, explain the transferable task: explore related records and prepare a review; turn financial evidence into reusable research; clarify product facts before classification and costing.
3. **See one complete path per example.** Present a small input → review → output sequence, with the real artifact and its data/status label. Keep deeper architecture in the disclosures. The buyer should not need to infer the final document or decision view from a feature list.
4. **Understand a bounded starting engagement.** A possible starting offer is workflow discovery plus a working prototype for one agreed process. Define the proposed outputs, such as a workflow map, one representative input path, a reviewer-facing result, documented assumptions, acceptance checks, and a handover note. Discuss production deployment and additional integration as scoped next steps. These are proposed service definitions, not assertions of an existing service or guaranteed delivery terms.
5. **Send a useful first brief.** Put a project-specific inquiry link after the relevant case as well as at the end. Ask for the process that is difficult today, who uses it, one non-confidential example of the input and desired output, the current tools, and any deadline or access constraint. Explain the actual next step, once Marcio chooses it; do not invent response times, fees, or timelines.

Potential offer wording, to use only if it accurately reflects the work Marcio wants to accept:

> I build practical tools for finance, risk, and operational decisions: internal workflow applications, research and reporting automation, and classification workflows with human review. We can start with one process, its inputs, and the output your team needs to use.

Potential inquiry wording:

> Tell me what your team does today, what information it starts with, and what result it needs. A non-confidential example is enough to begin scoping a project.

Neither sentence claims new clients, measured benefits, production certifications, customs authority, or skills beyond the work described on the page. Publish only the engagement boundaries that Marcio can actually support.

**Highest-value changes**

| Priority | Change | Why it matters to this buyer |
| --- | --- | --- |
| 1 | State the accepted engagement type and add two or three specific commissionable outputs near the introduction/contact | Answers whether I should send a paid-project inquiry and gives me a scope to discuss. |
| 1 | Add a completed, accurately labeled output artifact for ERM, Insic automation, and GlobalShipping classification/quote workflows | Shows the business deliverable behind the architecture and entry screens. Use only available, authorized evidence. |
| 1 | Fix the cold-load mobile contact landing position | Keeps the direct inquiry action visible after the buyer accepts the invitation. |
| 2 | Add consistent project and automation status labels | Separates current usage, prototypes, local demonstrations, and unavailable live integrations. |
| 2 | Improve phone gallery defaults and readable detail views | Lets a mobile buyer inspect the evidence instead of relying entirely on explanatory copy. |
| 2 | Give email visitors a short brief template and a truthful next step | Reduces the work of starting a useful discussion without adding a complex form. |

**Evidence captures**

All captures are under `/workspace/scratch/production-review/client/`. The initial full-page capture includes lazy images before scrolling; it should not be used to diagnose missing images. The gallery captures below were taken after their images loaded.

| Evidence | Files |
| --- | --- |
| First visit and work arrival | `desktop-hero.png`, `mobile-hero.png`, `mobile-work-arrival.png` |
| ERM's edited visuals | `desktop-erm-morning-enlarged.png`, `desktop-erm-quantifier-enlarged.png` |
| All Insic slides | `desktop-insic-1-enlarged.png` through `desktop-insic-4-enlarged.png` |
| All GlobalShipping slides | `desktop-globalshipping-1-enlarged.png` through `desktop-globalshipping-4-enlarged.png` |
| Phone gallery readability | `mobile-insic-enlarged.png`, `mobile-insic-mobile-enlarged.png`, `mobile-globalshipping-gallery.png`, `mobile-globalshipping-mobile-enlarged.png` |
| Identity examples and cost results | `desktop-identity-scooter.png`, `desktop-identity-battery.png`, `desktop-identity-charger.png`, `desktop-cost-20-compact.png`, `desktop-cost-100-bulky.png`, `mobile-cost-results.png` |
| Inquiry path | `desktop-contact.png`, `mobile-contact-hero-path-5s.png`, `mobile-contact-manually-aligned.png` |
| Browser interaction text | `desktop-interaction-observations.json`, `mobile-interaction-observations.json` |

The raw desktop observation JSON records a reset result immediately after the click, before its asynchronous render. The separately rechecked phone observations confirm the settled reset values and original totals. The report uses the settled result.
