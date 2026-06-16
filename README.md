# Engin Horzum Personal Website

Modern, static portfolio site built with Vite + TypeScript and prepared for GitHub Pages.

## Why this stack

- GitHub Pages hosts static files only.
- No backend runtime is available on GitHub Pages.
- Resend API keys must stay secret, so sending mail must happen in a separate serverless backend.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In your repo settings, enable Pages and use the `gh-pages` branch as source.
3. Deploy with:

```bash
npm run deploy
```

## Contact form and credentials safety

This site posts contact form data to `VITE_CONTACT_ENDPOINT`.

- `VITE_CONTACT_ENDPOINT` is safe to publish because it is only a URL.
- Never put `RESEND_API_KEY` in this repo or frontend code.

Create a `.env` file locally:

```bash
VITE_CONTACT_ENDPOINT=https://your-worker.example.workers.dev/contact
```

### Recommended backend for Resend (free + secure)

Use Cloudflare Workers (free tier) or similar serverless platform.

- Store `RESEND_API_KEY` as a Worker secret.
- Worker receives form payload and sends the email with Resend to `enginhorzum@gmail.com`.
- Configure CORS to allow your GitHub Pages/custom domain.

## Example worker payload contract

Frontend sends:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello from your website"
}
```

Backend should validate input and return:

- `200` on success
- `4xx/5xx` on error

## Cloudflare Worker quick setup

1. Install Wrangler globally:

```bash
npm i -g wrangler
```

2. In `workers/`, copy `wrangler.example.toml` to `wrangler.toml`.
3. Set secrets (never commit these):

```bash
cd workers
wrangler secret put RESEND_API_KEY
```

4. Deploy worker:

```bash
wrangler deploy
```

5. Put deployed endpoint into `.env`:

```bash
VITE_CONTACT_ENDPOINT=https://your-worker-subdomain.workers.dev
```
