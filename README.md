# Drexel YDSA Website

This is the repository for the website of Drexel University's YDSA chapter. In the spirit of socialism, this is an open source website and other chapters are free to use our website structure as inspiration, under the [MIT License](./LICENSE).

## Tech Stack

- Vite (React)
- Cloudflare Pages
- Action Network API

## How to run

1. Clone the repo:

```bash
git clone https://github.com/drexelydsa/drexelydsa.git/
```

1.

Install dependencies:

```bash
npm install
```

1. Run the website locally:

```bash
npm run dev:web
```

1. Run the action network API server:

```bash
npm run dev:an-proxy
```

## How to deploy?

You can deploy via Github Actions by committing and pushing to the main branch. If you want to deploy manually, you can run the following command:

```bash
npm run deploy:web # website
npm run deploy:an-proxy # action network proxy
```

> (c) 2026 Drexel YDSA. All rights reserved.
