<script lang="ts">
	let {
		id,
		heading,
		children
	}: { id: string; heading: string; children: import('svelte').Snippet } = $props();
</script>

<section {id}>
	<h2><span class="marker" aria-hidden="true">#</span> {heading}</h2>
	{@render children()}
</section>

<style>
	section {
		padding-block: var(--space-4);
		border-top: 1px solid var(--border);
	}

	section:first-of-type {
		border-top: none;
	}

	h2 {
		font-size: 1.1rem;
		text-transform: lowercase;
		margin: 0 0 var(--space-3);
	}

	.marker {
		color: var(--accent);
	}
</style>
