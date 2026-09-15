<script lang="ts">
	// Cycles through a few labels with a slow crossfade - the "picture that
	// changes into another picture" trope, done with text and opacity rather
	// than a GIF, so it stays crisp at any size and costs nothing to load.
	// Well under any flash-rate that could be a seizure risk (one change
	// every few seconds, a soft fade, not a hard cut) - and for anyone who's
	// still sensitive to it, prefers-reduced-motion just freezes on the
	// first label instead of forcing the cycle.
	let { labels }: { labels: string[] } = $props();

	let index = $state(0);
	let reduceMotion = $state(false);

	$effect(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) return;

		const id = setInterval(() => {
			index = (index + 1) % labels.length;
		}, 2600);
		return () => clearInterval(id);
	});
</script>

<span class="badge">
	{#key index}
		<span class="label">{labels[index]}</span>
	{/key}
</span>

<style>
	.badge {
		display: inline-block;
		min-width: 12ch;
	}

	.label {
		display: inline-block;
		animation: fade 0.6s ease;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.label {
			animation: none;
		}
	}
</style>
