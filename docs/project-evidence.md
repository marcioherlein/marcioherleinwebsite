Product case-study evidence and visual provenance
================================================

Source review and public presentation update: 4 November 2026.

Insic
-----

Read-only reference: marcioherlein/dcf-dashboard, commit
`4bc25a8641a74ad19aaa6ef94bd383a1f5322cd1`.

- `components/ui/InsicLogo.tsx`, `lib/brand.ts`, and `public/brand/`: the shipped brand assets. `public/projects/insic-logo.svg` is copied from `public/brand/insic-logo-horizontal-cropped.svg`.
- `public/screenshots/summary-desktop.png`, `valuation-cockpit.png`, `nvda-valuation.png`, and `mobile-valuation.png`: retained product captures, copied without content changes. The portfolio labels them as saved captures from an earlier interface. Their figures are not live; they do not verify present valuation results or performance.
- `scripts/x-post.mjs`: scheduled content routines; canonical app valuation accessors; validation, no-content/duplicate handling, and Buffer submission paths. This code is not itself proof of publication.
- `.github/workflows/x-post.yml`, `.github/workflows/li-post.yml`, `lib/social/xSchedule.ts`, and `lib/social/linkedinSchedule.ts`: scheduling and channel-specific content selection.
- `lib/posting/queue-processor.ts`, `buffer-adapter.ts`, and `error-classifier.ts`: atomic claims, provider delivery attempts, and retry decisions.
- `docs/social-automation-contract.md`: source/output boundaries, shared channel controls, attribution, and distinction between provider acceptance and actual publication.
- `scripts/generate-brief.mjs` and `.github/workflows/morning-brief.yml`: Claude with web search and dated HTML output. The case study distinguishes this tool-using research agent from deterministic scheduled social routines.

No production publishing, email, social delivery, private account, or financial API was invoked for this update. No audience, conversion, subscriber, revenue, or return claims are added.

GlobalShipping
--------------

Read-only reference: marcioherlein/ShippingAPP, commit
`c48d0d5d2cf9f1675b7ab55bd743b770716df090`.

- `src/components/Landing.tsx`, `UiIcon.tsx`, `src/AppEntry.tsx`, and product styles: the actual landing, brand symbol, and responsive intake UI. `globalshipping-mark.svg` was extracted from the rendered application icon, retaining its geometry and computed color.
- New `globalshipping-*.jpg` assets are captures of that actual frontend rendered locally at 1440×980 and 390×844. They show the landing and empty intake states. No quote, supplier response, classification result, or account history was fabricated. The landing's own globe and preview are explanatory illustrations and are described as such.
- `src/lib/productIdentity.ts`: copied unchanged into the portfolio for a bounded, executable product-identity demonstration. It separates a complete article from an included accessory or intended host. It does not run the full classifier or assign a tariff.
- `worker/ncmRetrieval.ts`: deterministic candidate retrieval; concept and exclusion evidence; AI search vocabulary and shortlist-only reranking; confidence gates, time limits, and diagnostics.
- `src/lib/fullNcmClient.ts`, `ncmDisambiguation.ts`, and `src/components/NcmDisambiguation.tsx`: provisional evidence, SIM/NCM reconciliation, and guided refinement. The story does not imply that provisional pricing is a confirmed classification or an official customs ruling.
- `docs/plans/NCM_CLASSIFICATION_ARCHITECTURE.md`: useful implementation context, checked against the functions above rather than treating every future recommendation as shipped.

Only frontend rendering was started for the capture. No production Worker, supplier, authentication, or publishing credentials were supplied. Reference application source files and lockfiles remain unchanged.

ERM Intelligence
----------------

The owner supplied Morning Brief and Control Tower/Risk Quantifier screenshots in this conversation. These are now expressly supplied for a public-facing portfolio treatment.

The two `erm-*-edited.png` files were produced by image editing from those screenshots. They are **derived interface illustrations**, not pixel-exact captures or current live screenshots. Article narratives, identifying context, user details, unsupported timing promises, and external extension badges were removed/redacted. The gallery prominently labels the provenance. No confidential risk records, exposure values, internal source code, or unredacted screenshot is included.

The images demonstrate visible UI organization, not verified exports, model results, news accuracy, executive approval, or production completion. The high-level case-study claims still use the owner's supplied account and historical source-review handoff; the ERM repository was unavailable here.

Access and validation limits
----------------------------

Direct requests to insic.app and globalshipping.app were denied by the environment's restricted egress proxy. The network draft includes these two domains and their www hosts, preserving earlier custom rules. A saved draft does not apply runtime access.

Consequently no fresh live Insic stock captures or live public-site checks are claimed. The Insic gallery uses existing repository captures, while the GlobalShipping gallery uses actual local frontend renders. Links point to the public products, with direct Insic stock links where appropriate. Fresh live captures can replace these assets after the domain additions are applied.

The galleries support manual previous/next controls, thumbnails, desktop/mobile filtering, arrow/Home/End keys, horizontal touch swipes, and a native enlarged-image dialog with Escape and focus return. There is no autoplay. Broken images have a recoverable state. Browser tests cover the main navigation, filters, image errors, zoom behavior, links, and both executable demonstrations.
