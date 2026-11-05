# Redesign implementation record

5 November 2026. Implements the website review in `2026-11-production-review-and-plan.md` using the existing lightweight TypeScript/Vite stack. No runtime framework rewrite or confidential ERP backend startup.

## Shipped in this change

- Replaced the long product-tour homepage with a professional overview. Enterprise Risk Manager at SAP remains the primary identity. Selected work explains what each application produces; practical contributions, background and separate project/team inquiry paths are explicit.
- Added three static case-study routes with end-user, input, deliverable and personal-contribution facts. Galleries and optional experiments live in the studies.
- Introduced a shared reading scale, grid, spacing, color and component system. Normal body text is 16–18px, meaningful metadata at least 12px, controls readable, and all contact targets are usable on phones.
- Made an explicitly labeled risk-workflow illustration the primary enterprise visual. Heavily redacted AI-edited interface references are secondary and behind a native disclosure.
- Added an authentic Insic editorial excerpt: three questions from `docs/social-drafts/2026-10-08.md` at reference commit `4bc25a8641a74ad19aaa6ef94bd383a1f5322cd1`. It is labeled held/not published. No news claims, portfolio allocations, delivery IDs or published-post claims are copied.
- Redesigned the GlobalShipping experiment around a question and guided quantity/packaging comparison, using the unchanged numerical engine. A compact table, actual billed basis, cost delta and explanation replace stacked mode cards. The product-identity helper remains explicitly optional and scoped.
- Added meaningful build-time HTML for all pages. No-JS browsing retains role, case narrative, contact and the baseline calculation; interactive controls are enabled only after enhancement.
- Reserved image dimensions and stable gallery slots; the prior cold-load phone contact defect no longer reproduced in tests or independent follow-up.
- Retained device filters, thumbnails, swipe and keyboard controls. Phone galleries default to native phone captures. A lightbox offers Fit, 100%, 200%, scroll/drag panning, original-image access, and Escape/focus return.
- Added automated accessibility regression checks, a GitHub CI workflow, static 404 handling, security-header declarations, share-card assets, and optional real-domain metadata/sitemap generation.

## Validation

- Production build passes; 8 unit tests pass.
- 32 production-browser checks pass across desktop/phone projects: 24 functional checks and eight automated accessibility cases.
- Routes were checked at 320/390/768/1440px without page overflow. No-JS production smoke covers all four routes and real contact links.
- Automated WCAG A/AA-tagged checks found no violations in the tested final states, including expanded ERM references and a changed shipping scenario. This does not establish comprehensive compliance.
- Cold mobile contact tests wait for delayed image loading and check the actual email stays visible with less than 3px movement.
- Presets execute real calculations: 100 standard → Sea $3,231.30; 25 standard → Air $1,194.68; 25 compact → Courier $883.85. The same 25-unit packaging change is $310.83 lower under the fixture assumptions.
- Original calculation/identity unit suites remain intact. No production provider calls, publications, emails or account writes were used as tests.
- Cloudflare deployment configuration passed Wrangler dry-run validation with static multipage output. Actual connected-build completion and deployed response behavior remain externally unverified.
- Optional canonical/share/sitemap generation was tested with an isolated example-domain fixture output in `/tmp`, not the production output. The real build contains no placeholder canonical host.

## Measured overview change

At the tested production viewport, homepage height changed from 10,428 to 4,342px at 1440px width (about 58% shorter), and from 14,077 to 6,428px at 390px (about 54% shorter). This is a page-layout measurement, not a conversion or Core Web Vitals claim. The desktop overview contains approximately 581 visible words; disclosures and responsive visibility affect counts.

The [independent simulated buyer follow-up](2026-11-redesign-client-followup.md) found contribution/deliverable/inquiry clarity improved and did not reproduce the old contact issue. It is an agent assessment, not real customer validation.

## Still dependent on real evidence or deployment access

- A permitted completed ERM assessment/report and fuller workflow evidence.
- Current live Insic captures, a real saved research reference, approved sourced briefing or actual publishing-review/delivery evidence.
- GlobalShipping's complete classification/dated-quote evidence and confirmed whole-product operating status.
- Real deployed URL, live headers/TLS/cache/redirect behavior, external product access, and social preview validation. Set `PUBLIC_SITE_URL` only to that confirmed URL.
- Follow-up with actual target hiring managers and project buyers.

The redesign improves clarity and function while making those boundaries visible. It does not invent the missing artifacts, user outcomes, certifications or customer validation.
