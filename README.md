# socx-org-uk

Simple monorepo inspired by the `socx/asset-manager` structure.

## Structure

```text
apps/
	api/   Express API exposing GET /health on port 3002
	web/   React + Vite app on port 5172 with a single route (/)
```

## Run locally

```bash
npm install
npm run dev
```

This starts:

- Web app: `http://localhost:5172`
- API: `http://localhost:3002`

## Health flow

The web page (`/`) calls:

`http://localhost:3002/health`

The UI displays:

- API status
- API timestamp
- Local fetch time