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
	}

	section:not(:first-of-type) {
		border-top: 4px solid transparent;
		border-image: linear-gradient(90deg, var(--primary), var(--secondary), var(--tertiary)) 1;
	}

	h2 {
		font-size: 1.2rem;
		text-transform: lowercase;
		margin: 0 0 var(--space-3);
	}

	.marker {
		color: var(--secondary);
	}
</style>
