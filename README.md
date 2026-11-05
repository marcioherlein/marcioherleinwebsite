# Marcio Herlein — career website

An editorial career overview and three focused case studies. Enterprise Risk Manager at SAP is the primary identity; applications and applied AI show the practical work alongside it.

## Develop and validate

Use Node 22.12+; development and validation used Node 24.19.0.

```sh
npm ci
npm run dev -- --port 5173
npm run build
npm test
npm run test:e2e
```

The browser tests use `CHROMIUM_PATH`, system `/usr/bin/chromium` when available, or Playwright's installed Chromium. On a machine without a browser, run `npx playwright install chromium` first. CI installs browser system dependencies as well.

## Pages and rendering

- `/`: professional overview, selected work, background and inquiry paths.
- `/work/enterprise-risk/`: enterprise workflow, contribution and edited secondary interface references.
- `/work/insic/`: financial research, a held editorial artifact, tool-using research and controlled publishing workflows.
- `/work/globalshipping/`: import planning, a guided calculation and a bounded product-identity example.
- `/404.html`: static not-found page.

`src/pages.ts` renders meaningful HTML at build time through the Vite configuration. The browser entry progressively enhances galleries and demonstrations; the role, case copy, contact links and initial numerical result remain available without JavaScript. No runtime server rendering or application secrets are needed. Build output is `dist/`; `npm run preview` serves it locally.

`src/style.css` is the shared visual system. `src/galleries.ts` keeps image/source metadata with keyboard, device filters, intrinsic sizing and inspectable original-resolution images. `src/demos.ts` uses the unchanged numerical and identity functions in `src/lib/` with invented portfolio fixtures. The demos do not connect live financial, supplier, customs, publishing or authentication services.

## Production

Cloudflare Workers Static Assets serves all four routes with explicit HTML and 404 handling. See [DEPLOYMENT.md](DEPLOYMENT.md). Project links open the public product websites; case links open these local studies. Email links open the visitor's mail client and do not pretend to submit a backend form.

Set the optional **build-time** `PUBLIC_SITE_URL` to the real HTTPS site URL once confirmed. It enables absolute canonical/Open Graph URLs and generated robots/sitemap files. No guessed hostname or test domain is published by default. Title, description, social-card asset and basic Open Graph metadata exist without it. Social preview rendering and actual Cloudflare headers/TLS must be checked on the real deployment.

`.github/workflows/ci.yml` runs build, unit and production-browser checks. The browser suite includes automated accessibility checks; passing automated checks is not a complete accessibility certification. Cloudflare's connected deployment is separate from the GitHub checks.

## Evidence and accuracy

The career history and ERM case use the owner's account and supplied source-review handoff. No private career goals, confidential risk records, exposures or proprietary ERM source are included. ERM visuals are edited derivatives and are labeled as references; the primary diagram is an explicitly labeled workflow illustration.

Insic captures are saved images from an earlier interface. The editorial artifact quotes three research questions from a held draft dated 8 October 2026; it is not proof of a generated, queued or published post. The product prototype, tool-using Morning Brief and deterministic scheduled publishing routines are described separately. No adoption, performance, revenue, reach or savings claims are added.

GlobalShipping frontend captures are real local renders; its complete live-provider/account/deployment status is not established here. The cost example uses the actual engine with invented rates. The identity example is one deterministic helper stage, not the full classifier or a customs ruling. Saved-quote behavior is described from source; no fake completed quote screenshot is used.

See [project sources and visual provenance](docs/project-evidence.md), the [original review](docs/reviews/2026-11-production-review-and-plan.md), and the [implementation record](docs/reviews/2026-11-redesign-implementation.md).
