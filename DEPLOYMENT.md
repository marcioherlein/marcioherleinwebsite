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
