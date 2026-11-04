# Marcio Herlein — personal career website

A responsive editorial website with three project-specific case studies and a working import landed-cost demonstration. Built with TypeScript and Vite; no backend or credentials required.

## Develop and validate

Use Node 22.12+ (verified here on Node 24.19.0).

```sh
npm ci
npm run dev -- --port 5173
npm run build
npm test
npm run test:e2e
```

The browser suite uses the system Chromium at `/usr/bin/chromium`; set `CHROMIUM_PATH` to another installed Chromium executable if needed. It starts Vite itself. Build output is `dist/`; any static host can serve it. `npm run preview` serves a production build locally. Cloudflare's connected GitHub integration can deploy the static assets using the checked-in Wrangler configuration; see [DEPLOYMENT.md](DEPLOYMENT.md) for settings and validation.

## Content and evidence

The career history and SAP/Insic case studies are based on the owner's supplied handoff. The confidential SAP source, records, screenshots, and any private career goals are excluded. These case studies do not claim measured outcomes, adoption counts, or verified live automation. No profile PDF was available, so no download is fabricated. Email uses a real mailto link; there is no simulated form submission. External product availability is outside local validation.

GlobalShipping's landed-cost engine was inspected and copied unchanged from `src/lib/landedCostEngine.ts` at ShippingAPP commit `4e3decf7eecbdf2bf8a6aba37200351ec9bffebf`:
https://github.com/marcioherlein/ShippingAPP/blob/4e3decf7eecbdf2bf8a6aba37200351ec9bffebf/src/lib/landedCostEngine.ts

The three data modules in this website are **invented fixtures**, not copied commercial rates. They retain the engine's expected input shape and are labeled on screen. The UI bounds quantity to integers 1–5,000; packaging changes volumetric weight, rounded sea W/M, freight, modeled taxes, and the selected lowest available total. Courier is unavailable beyond its 50 kg tariff boundary. The website does not copy the supplier intake, account flows, AI classification, or purchase optimizer and does not claim to run the entire ShippingAPP application.

The unit tests verify independent expected totals and freight boundaries. Browser tests exercise desktop/mobile interaction, input errors and reset, internal navigation, keyboard disclosure, contact hrefs, reduced motion, and horizontal overflow. No live SAP, supplier, email, publishing, or authentication services are contacted.

A current profile PDF and approved product screenshots can be added later. The public case studies use high-level descriptions and exclude confidential enterprise data.
