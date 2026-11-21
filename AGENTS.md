# AGENTS.md — Flâneur `site`

This repository inherits the [canonical workspace rules](https://github.com/flaneur-app/.dev/blob/main/AGENTS.md). Only project-specific details are documented here.

## Scope

The website at flaneur.baxyz.dev: VitePress (`docs/`), deployed by Cloudflare Workers Builds as
static assets (`wrangler.jsonc`).

## Content rules

- English only. Plain, concrete sentences; no marketing superlatives.
- Never use "YouTube" or "tube" as or in the product name. Service names only describe
  compatibility, and every page that lists services keeps the non-affiliation line.
- Do not advertise ad blocking or downloading.
- `services.md` states what really works: change a cell only when the connector ships it.

## Commit Scopes

Defined in `scopes.json`:

| Scope | Covers |
| --- | --- |
| `content` | Pages in `docs/` |
| `theme` | `docs/.vitepress/` config, theme, styles |
| `deploy` | `wrangler.jsonc`, Workers Builds |
| `docs`, `deps`, `ci`, `ai`, `build` | As usual |

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm exec wrangler deploy --dry-run
```
