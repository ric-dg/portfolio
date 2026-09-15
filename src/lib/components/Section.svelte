<script lang="ts">
	let {
		id,
		heading,
		children
	}: { id: string; heading: string; children: import('svelte').Snippet } = $props();
</script>

<section {id}>
	<h2>{heading}</h2>
	{@render children()}
</section>

<style>
	section {
		padding-block: var(--space-4);
	}

	section:not(:first-of-type) {
		border-top: 1px solid var(--border);
	}

	h2 {
		font-size: 1.3rem;
		text-transform: capitalize;
		margin: 0 0 var(--space-3);
	}
</style>
