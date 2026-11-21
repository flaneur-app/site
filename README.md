# Flâneur website

The website of [Flâneur](https://github.com/flaneur-app), served at
[flaneur.baxyz.dev](https://flaneur.baxyz.dev): a static VitePress site deployed as Cloudflare
Workers static assets.

> Flâneur is an independent, open-source project. It is not affiliated with, endorsed by or
> sponsored by Google, YouTube, Odysee, LBRY or any other service it can connect to. All
> trademarks belong to their owners.

## Development

```bash
pnpm install
pnpm run dev       # http://localhost:5173
pnpm run build     # docs/.vitepress/dist, what Workers Builds runs
```

## Deployment

Cloudflare Workers Builds is connected to this repository: every push to `main` runs
`pnpm run build` and deploys `docs/.vitepress/dist` with `wrangler deploy` (see `wrangler.jsonc`),
and pull requests get preview URLs. The custom domain `flaneur.baxyz.dev` is declared in
`wrangler.jsonc`.

## License

[AGPL-3.0-or-later](LICENSE).
