import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	define: {
		// Real "last updated" stamp, set once per build rather than hand-edited -
		// accurate by construction instead of a manually-maintained date that
		// silently goes stale.
		__BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10))
	},
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter()
		})
	]
});
