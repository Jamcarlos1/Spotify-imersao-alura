# Spotify Imersão — Professional Fork

This repository is a professional, deployment-ready fork of the "Spotify Imersão" front-end exercise. It includes a static client and a simple artists API compatible with both local development and deployment on Vercel as a serverless function.

## Overview

- Static front-end built with vanilla HTML, CSS and JavaScript.
- Local development compatibility with `json-server` on port `3000`.
- A lightweight Python API for local testing (`api-artists/server.py`).
- A Vercel-ready serverless function at `api/artists.js` for production `/api/artists`.

## Key Changes in this branch

- Added `api/artists.js`: a Node serverless function that reads `api-artists/artists.json` and supports query parameters (`name_like` and `genre`).
- Updated `script.js` so the client uses `http://localhost:3000` during local development, and `/api` in production.
- Rewrote this README with clear setup and deployment instructions.

## Quickstart — Local Development

Prerequisites:

- Node.js (for `json-server` and optional Vercel CLI)
- Python 3 (optional — included lightweight API server)

Steps:

1. Serve the static site (from project root):

```bash
python3 -m http.server 8000
```

2. Run the artists API for development (choose one):

- json-server (recommended during development):

```bash
npx json-server --watch api-artists/artists.json --port 3000
```

- Lightweight Python API (included):

```bash
python3 api-artists/server.py
```

3. Open the app at `http://localhost:8000` and use the search input.

## Production — Vercel Deployment

This repository includes a serverless API file at `api/artists.js`. When deployed on Vercel, the function will be available at `/api/artists` and the production client will call that endpoint automatically.

Deploy steps (recommended):

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notes:

- Ensure `api-artists/artists.json` is committed to the repository so the serverless function can read it at runtime.
- After the first successful push to GitHub, importing the repository in Vercel will auto-configure deployments.

## Contributing & Git

To push this project to your GitHub repository and trigger CI/deployments:

```bash
git remote add origin https://github.com/Jamcarlos1/Spotify-imersao-alura.git
git branch -M main
git push -u origin main
```

## License

MIT — feel free to reuse for learning and demonstration purposes.

---

**Author:** Jean Carlos da Silva Gonçalves

