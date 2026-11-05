# Production website review — prospective hiring manager

**Reviewer perspective:** first-time hiring manager at an enterprise software team, considering Marcio Herlein for customer-facing technical and applied-AI implementation work.

**Reviewed:** 5 November 2026, the production build served at `http://127.0.0.1:4176`. Desktop: 1440 × 1000. Mobile: 390 × 844. Chromium, headless, through Playwright.

I inspected the rendered desktop and mobile pages and screenshots before reading any implementation material. I did not read app source, repository project research, or other reviews at any point. The judgments below use only what the site communicates. The 30-second and 3-minute judgments are **simulated evaluation scenarios**, not timed sessions with real hiring managers. The interaction checks were a separate, more detailed inspection. No messages were sent, mail links activated, or forms submitted.

## Hiring decision

**I would invite Marcio to an exploratory technical conversation for a role that combines business discovery, domain expertise, and application implementation.** The site gives me a reason to investigate his ability to turn ambiguous business questions into working tools. The enterprise risk work is the strongest evidence because it connects a current professional role, a real organizational problem, explicit personal ownership, deployment infrastructure, and stated use by risk managers.

The site leaves substantial interview work. I still need evidence of customer discovery, implementation planning, rollout, adoption, support, and the quality of a complete delivered workflow. I can see several technical decisions and small working stages. I cannot yet establish the depth of his independent engineering judgment or the scope of a customer implementation he could own.

## Simulated 30-second scan

**What I understand:** Marcio is an Enterprise Risk Manager at SAP, based in Argentina, with finance and risk experience and hands-on application development. The exact line “I’m Marcio, an Enterprise Risk Manager at SAP” makes his current role unambiguous. The three selected-work labels suggest enterprise risk, financial research, and import planning.

**What I would remember:** a risk professional who builds software around business decisions. The large “Enterprise Risk Manager.” headline dominates both desktop and mobile. The calm layout, strong typography, and restrained palette make the page feel considered and readable.

**What I cannot quickly answer:** what role he wants at my company or which part of a customer implementation he can take responsibility for. “Hands-on application development” is broad. The more specific sentence about “customer-facing technical work” and “applied AI implementation” appears in About, near the bottom of a long page.

**Scan decision:** I would continue if my team needs someone who understands finance/risk workflows and can build practical applications. A fast screen for a solutions engineer or implementation role could miss that fit. The first viewport clearly communicates his present job; it gives less help mapping him to the next one.

Desktop and mobile first impressions: [desktop](evidence/desktop-first-visit.png), [mobile](evidence/mobile-first-visit.png). These first-impression captures are included in this review packet. Additional absolute screenshot paths are listed below.

## Simulated 3-minute evaluation

After scanning the project introductions, enterprise case, one demo, and About, my interpretation becomes more specific: Marcio combines business-domain experience with full-stack application building, retrieval, constrained AI workflows, and deterministic financial calculations. The site makes several useful engineering distinctions: estimates require human validation; product identity comes before tariff classification; publishing API acceptance does not establish successful publication; assumptions remain separate from confirmed information.

Those distinctions support an implementation conversation. They show awareness of failure modes and real business boundaries. The breadth is also a burden: there are three substantial projects, three galleries, automation material, classification architecture, and two demos before About. A complete read is substantially longer than this simulated scan. The page is about 10,400 pixels tall on desktop and 13,800 on mobile in the initial capture. Important hiring context competes with project detail.

My first interview questions would be:

1. Walk me through one user's original problem, the requirements you agreed, the part you personally delivered, and what changed after use.
2. Show one completed workflow with realistic, nonconfidential inputs and outputs, including a failure or uncertainty case.
3. Explain one technical choice you made, an alternative you rejected, and how you validated the result.
4. What did you own in deployment, permissions, testing, monitoring, onboarding, and ongoing support? Who else contributed?

## What the projects communicate

| Project | What I can understand from the site | What remains unclear for a hiring decision |
| --- | --- | --- |
| Enterprise risk | **For:** SAP risk managers. **Problem:** fragmented risks, responses, organizational context, and duplicated work. **Inputs:** risk portfolio information, documents, external signals, financial context, and assessment assumptions. **Outputs:** portfolio exploration, linked context, quantification/scenario support, and engagement preparation. **Ownership:** “I built an enterprise risk platform from scratch at SAP.” **Status:** “runs on SAP BTP and is being used by risk managers.” | How broad is the actual adoption? Which workflows are used regularly? What exactly did Marcio own beyond building the application? What user feedback changed the product? What complete assessment/report does it produce? The public evidence supports the account at a high level, but does not establish operational depth. |
| Insic | **For:** someone researching companies and challenging valuation assumptions; the audience is implied by the workflow. **Inputs:** company/financial context and editable growth, margin, and terminal-multiple assumptions. **Outputs:** local valuation/scenario views and saved research history. **Ownership:** “My first standalone finance application outside SAP” and a clear “What I built” paragraph. **Status:** explicitly a prototype. | Is this mainly a personal research tool, an experiment for retail investors, or a product intended for external users? Which parts of the shown earlier interface still work today? I do not see a completed saved/revisited research case. The publishing bots and separate Morning Brief add scope, but their actual operating status is less concise than the prototype label. |
| GlobalShipping | **For:** buyers planning imports into Argentina. **Inputs:** supplier/product evidence, commercial terms, product facts, packaging, quantity, and classification evidence. **Outputs:** classification candidates/clarifications, modeled landed-cost comparisons, and saved dated quotes. **Ownership:** explicit “I built a classification workflow”; the page also refers to the application's actual identity helpers and cost engine. | The overall project status is the least explicit. “Actual current frontend rendered locally” describes image provenance, not whether the complete application is a prototype, a deployed usable product, or used by importers. How much of supplier intake → clarification → classification → quote preservation is operational? The product narrative is clearer than the delivery status. |

The repeated “What I built” language is valuable. It prevents the work from reading as a collection of products he merely encountered. A compact, consistent “My role / status / users / last updated” line would make the ownership claims easier to assess across all three.

## Images and credibility

The galleries loaded after scrolling into view. The initially blank off-screen gallery areas in full-page screenshots were a lazy-loading capture artifact. I checked the apparent “This image could not load” elements: they were hidden with no rendered dimensions. I did not reproduce a visible broken-image state.

The provenance captions are unusually explicit and helpful:

- ERM: “AI-edited visual derived from the owner’s supplied screenshot” and “this is not a live capture.”
- Insic: “earlier interface; displayed figures are not live.”
- GlobalShipping: “Actual current frontend rendered locally” and “no live provider connection.”

These disclosures prevent me from assuming live production behavior. They also limit what the images prove. The ERM Morning Brief is heavily redacted, and the Risk Quantifier is an entry screen. I can evaluate organization and intended capability, but cannot judge a real result or its quality. AI editing further weakens the image as evidence of exact implemented UI behavior. A deterministic redaction of a real capture, or a clearly labeled reproduction using synthetic data, would be easier to interpret.

Insic looks like an application with genuine research information, but the “earlier interface” caption creates an obvious question about present functionality. GlobalShipping's images show a polished introduction and empty intake. They give visual context, while the inline cost demo provides stronger evidence of a working decision stage.

The phrase “owner’s supplied screenshot,” and the disclosure “These implementation details come from the supplied project research and my account,” sound like an outside audit of the candidate's material. In a personal portfolio, “my screenshot” plus a capture date and a clear editing explanation would be more direct.

## Demos and keyboard inspection

**The demos explain useful ideas and earned their space.** Both are small enough to understand without leaving the page. They become more useful when paired with a suggested experiment.

**Product identity:** using keyboard focus, ArrowDown and Enter, I changed the description from a complete scooter to a battery and then a charger. The outputs changed to “Battery” / `lithium battery` and “Charger / power adapter” / `usb c charger`. The explanation that the scooter can be the intended host rather than the principal imported article is concrete and understandable. The visible boundary “No tariff code or duty rate is assigned by this demonstration” makes the scope clear. This demonstrates a product-identity stage; it does not let me evaluate the larger AI classification pipeline, evidence retrieval, ambiguity handling, or clarification quality.

**Landed cost:** keyboard changes to quantity and packaging recalculated the displayed totals and changed the lowest modeled option:

| Example state | Lowest modeled total observed |
| --- | --- |
| 100 units, standard packaging | Sea LCL: $3,231.30 |
| 25 units, standard packaging | Air freight: $1,194.68 |
| 25 units, compact packaging | Courier: $883.85 |

That is a useful demonstration of a business decision changing because of packaging and order size. The cost breakdown, reset control, assumptions disclosure, and explicit example-data boundaries help me follow it. A short prompt such as “Try 25 units, then switch to compact packaging” would make the interesting behavior easier to discover in a quick review.

I used Enter on the next controls and thumbnails, the Desktop/Mobile filters for Insic and GlobalShipping, and Enlarge in all three galleries. Images/captions updated, dialogs opened with focus on Close, and Escape closed them and returned focus to the relevant Enlarge button. Native dialog tabbing cycled between Close and the browser/body focus position; I did not reach an underlying page link while the dialog was open. The same galleries and dialogs worked at the 390-pixel viewport with no horizontal overflow. Both demos accepted keyboard input at mobile size; native selects committed their selection with Enter. Reset restored 100 units and standard packaging. The expandable technical/education sections also opened with Enter.

## Contact path

Contact is straightforward. “Start a conversation” is visible in the first viewport on desktop and mobile. Desktop also has “Let’s talk” in the header. Both target `#contact`, where “Email Marcio” and the visible address use `mailto:marciofabrizio@gmail.com`. Keyboard focus is clearly visible, and the contact destination leads naturally to the email button. The mobile header omits “Let’s talk,” but the hero contact link remains easy to find.

LinkedIn and GitHub links are present; their destinations are `https://www.linkedin.com/in/marcioherlein/` and `https://github.com/marcioherlein`. External profile ownership and availability were not independently verified. I found no CV download or direct project repository links in the rendered page. Those would reduce the effort of completing a hiring screen.

## Prioritized changes and acceptance criteria

1. **High: make the intended contribution visible in the first viewport.** Keep the accurate current SAP role and add one sentence that names the next kind of work and concrete tasks: translating customer workflows into working applications, integrating AI/retrieval into business processes, and implementing with stakeholders. **Acceptance:** at desktop and 390-pixel mobile size, a visitor can answer current role, target contribution, and how to make contact before scrolling. The wording claims only responsibilities Marcio is prepared to discuss and demonstrate.

2. **High: add one complete implementation case as the main hiring evidence.** ERM is the strongest starting point. Show an anonymized user situation, discovery/requirements, Marcio's scope, a meaningful design decision, validation, rollout, and an observed outcome. A qualitative outcome is useful when no defensible metric exists. **Acceptance:** the case distinguishes Marcio's work from collaborators' work, states its date/status, and includes one permitted completed input → output example plus what happened when users tried it. Unsupported impact numbers are unnecessary.

3. **High: label status and ownership consistently.** Give all three projects a compact line for target user, personal role, current stage, and last verified date. Especially clarify GlobalShipping's whole-product status and the bots' current operating status. **Acceptance:** a skim of each project introduction establishes what is working, who uses it if anyone, and what Marcio personally owns; image-provenance captions are no longer needed to infer product status.

4. **Medium: give the galleries one stronger output artifact each.** Use permitted real captures with deterministic redaction or clearly labeled synthetic data. Show an assessment/report for ERM, a saved/revisited research case for Insic, and a completed clarification/estimate for GlobalShipping when those workflows are available. **Acceptance:** each gallery includes at least one explained input → result pair with a date, data provenance, and a statement of which parts actually ran. Captions use Marcio's own voice and preserve the current honesty about limitations.

5. **Medium: shorten the route to the hiring case.** Bring a concise role-fit/about summary ahead of the detailed automation and classification material, or add an obvious jump to experience and hiring fit near Selected work. Keep deeper technical detail expandable. **Acceptance:** a visitor can reach experience, intended role, personal scope, and contact within a short scan on mobile without traversing every gallery and demo. Project details remain available for deeper review.

6. **Medium: add explicit experiments and easy verification links.** Suggest the 25-unit/compact example beside the landed-cost inputs; state what the identity demo proves. Add a current CV and direct permitted repositories or technical artifacts per project where available. **Acceptance:** a visitor can reproduce one meaningful behavior change in under a minute and find a relevant verification artifact without searching a general GitHub profile.

## Screenshot evidence

All screenshots are under `/workspace/scratch/production-review/hiring/`. The most useful files are:

- `01-desktop-first-viewport.png` — first desktop impression.
- `03-mobile-first-viewport.png` — first mobile impression.
- `10-erm-gallery-loaded.png` — ERM image, caption, and controls after loading.
- `09-erm-enlarged-quantifier.png` — edited Risk Quantifier entry screen and visible provenance.
- `10-insic-gallery-loaded.png` — saved earlier Insic interface.
- `10-globalshipping-gallery-loaded.png` — GlobalShipping landing screen and provenance.
- `13-mobile-gallery-0.png`, `13-mobile-gallery-1.png`, `13-mobile-gallery-2.png` — mobile gallery layouts after keyboard navigation.
- `17-desktop-product-identity-charger.png` — keyboard-selected charger and resulting identity.
- `18-desktop-cost-25-compact.png` — recalculated 25-unit compact example.
- `19-mobile-identity-committed.png` — mobile native-select choice committed with Enter.
- `15-mobile-cost-25-compact.png` — mobile stacked cost results.
- `16-mobile-contact.png` — mobile contact destination.
- `20-mobile-full-page-loaded.png` — full mobile page after scrolling images into view.

`02-desktop-full-page.png` and `04-mobile-full-page.png` preserve the initial full-page capture, including off-screen images that had not yet lazy-loaded. They should not be used as evidence of broken galleries.
