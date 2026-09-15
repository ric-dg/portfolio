<script lang="ts">
	// A real counter, not a decorative fake number - increments once per
	// browser (localStorage-backed) the classic "hit counter" widgets did,
	// styled the same way, but it's not lying about a global count nobody
	// could actually track from a static site with no backend.
	const STORAGE_KEY = 'visit-count';
	let count = $state(1);

	$effect(() => {
		try {
			const stored = Number(localStorage.getItem(STORAGE_KEY));
			const next = Number.isFinite(stored) && stored > 0 ? stored + 1 : 1;
			count = next;
			localStorage.setItem(STORAGE_KEY, String(next));
		} catch {
			// localStorage unavailable (private mode, etc.) - just show 1
			// rather than breaking the page over a decorative widget.
		}
	});

	const digits = $derived(String(count).padStart(6, '0').split(''));
</script>

<div class="counter" role="status" aria-label="Your visit count on this device: {count}">
	<span class="label">visits (this device)</span>
	<span class="digits">
		{#each digits as digit, i (i)}
			<span class="digit">{digit}</span>
		{/each}
	</span>
</div>

<style>
	.counter {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		font-family: var(--font-mono);
	}

	.label {
		font-size: 0.7rem;
		color: var(--fg-dim);
	}

	.digits {
		display: flex;
		gap: 2px;
		background: var(--border);
		padding: 3px;
		border-radius: 2px;
	}

	.digit {
		background: #000;
		color: #3ef25c;
		font-weight: 700;
		font-size: 0.8rem;
		padding: 1px 3px;
		border-radius: 1px;
		min-width: 1ch;
		text-align: center;
	}
</style>
