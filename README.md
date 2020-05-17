# svelte-ssr-cloudflare-worker-site

> A server-side rendered Svelte application built as a Cloudflare Worker Site

## Overview

This project is an example of how to set up a server-side rendered, single-page application using [Svelte](https://svelte.dev) and [Cloudflare Workers Sites](https://workers.cloudflare.com/sites). The [`svelte-loader`](https://github.com/sveltejs/svelte-loader) Webpack loader is used given native support of Webpack by [Wrangler](https://github.com/cloudflare/wrangler), the official CLI for managing Workers Sites. Wrangler automates the process of pushing static assets to [Workers KV](https://developers.cloudflare.com/workers/tooling/wrangler/kv_commands/) so you can focus on your application code. The result is a high performance server-side rendered Svelte application deployed globally!

Live demo [here](https://svelte-ssr.cross-solutions.workers.dev/) and [here](https://svelte-ssr.cross-solutions.workers.dev/?name=svelte).

Heavily inspired by [lukeed/svelte-ssr-worker](https://github.com/lukeed/svelte-ssr-worker).

## Install

Get started by cloning a copy of the template and running a local dev server.

```bash
npx degit wtcross/svelte-ssr-cloudflare-worker-site svelte-ssr-example
cd svelte-ssr-example
npm install
npm run dev
```

It is strongly recommended to reference the following docs before building anything beyond a basic demo:

- [Cloudflare Worker Docs](https://developers.cloudflare.com/workers/)
- [Wrangler Docs](https://developers.cloudflare.com/workers/tooling/wrangler)

## Usage

### `npm run build`

Build the client, ssr, and worker components.

### `npm run publish`

Build everything and publish the Workers Site using Wrangler.

### `npm run dev`

Start a Webpack DevServer for local development.

### `npm run prettier`

Use [Prettier](https://prettier.io/) to format everything.

## Deploy

If you want to publish a Workers Site to your Cloudflare account you need to:

- Set the `account_id` property in [wrangler.toml](wrangler.toml) to your Cloudflare account ID
- Configure Wrangler with the `wrangler config` command

Now you can run `npm run publish` to publish the application.

## License

MIT © Tyler Cross
