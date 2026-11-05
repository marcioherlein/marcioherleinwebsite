Cloudflare Worker deployment
===========================

This site uses Cloudflare Workers Static Assets. The Worker name is
`marcioherleinwebsite`, matching the app connected to GitHub. Wrangler uploads
the static `dist/` directory; there is no server entry point or database.

GitHub-connected deployment
---------------------------

For `marcioherlein/marcioherleinwebsite`, configure the Cloudflare app's build:

- Production branch: `main`
- Root directory: repository root (leave blank or use `/` as the UI requires)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Wrangler also runs `npm run build` through its custom build setting, so deploying
from a clean checkout prepares the assets even if the Cloudflare build command
is left empty. An explicit Cloudflare build command is supported as well.

Cloudflare installs packages from `package-lock.json`. Wrangler is pinned as a
development dependency. Node 22.12+ is required; Node 24 also works. No application
environment variables or API tokens are needed for this static site. Cloudflare's
GitHub/build integration supplies deployment authentication inside its own build
environment; no token needs to be copied into the application or this chat.

Pushes to the configured production branch trigger Cloudflare builds. Inspect
the latest build/deployment logs to establish success; a Git push alone does
not confirm deployment. The public `workers.dev` endpoint is enabled in
`wrangler.jsonc`; use the actual URL shown by Cloudflare after deployment.

Local validation
----------------

```sh
npm ci
npm run build
npm test
npm run test:e2e
npx wrangler deploy --dry-run --outdir /tmp/marcio-website-worker-check
```

The dry run checks the static asset deployment configuration without publishing.
Browser tests require Chromium (see README.md). No confidential ERM repository,
attachments, credentials, or draft research are part of the uploaded assets.

After deployment
----------------

Check the homepage title and introduction (Enterprise Risk Manager at SAP),
mobile layout, and contact links. In the example landed-cost demo, compact
packaging at 100 units must select air freight at $2,884.03. Only the labeled
example fixture data is used by the demo.

The built assets are also available in the ZIP outside the checkout at
`/workspace/deployments/marcioherlein-cloudflare-pages.zip` for a separate Pages
Direct Upload workflow if desired. The checked-in Wrangler configuration targets
the GitHub-connected Worker, not a Pages project.

A `vercel.app` hostname is managed by Vercel. Cloudflare serves its own
`workers.dev` hostname or a custom domain configured in the Cloudflare account.

Redesigned static routes and release checks
------------------------------------------

The Vite build now generates the homepage, three case-study routes and 404 HTML.
Wrangler's asset settings use `auto-trailing-slash` and `404-page` handling.
Public `_headers` declares a self-hosted-content policy, nosniff, referrer and
framing restrictions. These declarations need external verification on Cloudflare;
a successful local build alone is not confirmation of production headers.

The optional build variable `PUBLIC_SITE_URL` must be the actual HTTPS portfolio
URL, without a trailing slash. When set, the build emits absolute canonical and
Open Graph URLs plus robots/sitemap files. No API token is needed for this setting.
It is deliberately unset until a real URL is confirmed.

The GitHub check workflow runs 8 unit tests and 32 browser/accessibility cases.
With `CI=true`, tests use the built production preview rather than Vite's dev
server. Cloudflare's connected build/deploy workflow runs separately; a pushed
commit or a local test pass does not establish successful public deployment.
