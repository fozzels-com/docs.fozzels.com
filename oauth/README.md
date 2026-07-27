# Sveltia CMS OAuth worker

A tiny Cloudflare Worker ([sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth))
that performs the GitHub OAuth handshake for the CMS at `/admin`. GitHub Pages
can't run server code, so this small worker holds the OAuth client secret and
exchanges the login token. It's free on Cloudflare's Workers free plan.

## One-time setup

1. **Create a free Cloudflare account** (if you don't have one): https://dash.cloudflare.com/sign-up

2. **Log in and deploy the worker:**
   ```bash
   cd oauth
   yarn install
   yarn login      # opens a browser to authorize wrangler with Cloudflare
   yarn deploy     # prints the worker URL: https://sveltia-cms-auth.<subdomain>.workers.dev
   ```
   Copy the printed worker URL.

3. **Register a GitHub OAuth App:**
   https://github.com/organizations/fozzels-com/settings/applications → *New OAuth App*
   - Application name: `Fozzels Docs CMS`
   - Homepage URL: `https://fozzels-com.github.io/docs.fozzels.com/`
   - Authorization callback URL: `<WORKER_URL>/callback`

   Click *Generate a new client secret*. Note the **Client ID** and **Client Secret**.

4. **Give the worker the GitHub credentials** (secrets, not committed):
   ```bash
   cd oauth
   yarn wrangler secret put GITHUB_CLIENT_ID       # paste Client ID
   yarn wrangler secret put GITHUB_CLIENT_SECRET   # paste Client Secret
   ```
   `ALLOWED_DOMAINS` is already set in `wrangler.toml` to the site hostname.

5. **Point the CMS at the worker** — set `base_url` in `static/admin/config.yml`
   to the worker URL, commit, and push.

Then editors can sign in at `https://fozzels-com.github.io/docs.fozzels.com/admin/`.
