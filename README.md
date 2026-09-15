# ricardo.dev

Personal portfolio. SvelteKit + TypeScript, fully static (`@sveltejs/adapter-static`,
whole site prerendered at build time — no server, no SSR runtime needed at all).

## Developing

```sh
bun install
bun run dev -- --open
```

## Before deploying

- [ ] Replace the placeholder project cards in `src/routes/+page.svelte` (search
      for `TODO(ricardo)`) with real, NDA-cleared screenshots and descriptions.
- [ ] Replace the About section's placeholder bio text.
- [ ] Add real screenshot files under `static/` and point each `Project.image`
      at them (see `src/lib/types.ts`).

## Checking, building, deploying

```sh
bun run check   # svelte-check (types)
bun run lint    # prettier + eslint
bun run build   # outputs a fully static site to ./build
bun run preview # serve the production build locally
```

`./build` after `bun run build` is a plain static site — deploy it to Cloudflare
Pages by connecting this GitHub repo (build command `bun run build`, output
directory `build`), or drag-and-drop the `build/` folder into the Cloudflare
Pages dashboard for a one-off deploy with no CI wiring at all.
