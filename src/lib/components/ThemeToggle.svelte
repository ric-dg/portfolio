<script lang="ts">
	// Tri-state (system/light/dark) rather than a plain light/dark switch -
	// "system" is a real, distinct choice (matches whatever the OS says right
	// now and keeps following it), not just a fallback before the user picks.
	type Theme = 'system' | 'light' | 'dark';

	let theme = $state<Theme>('system');

	$effect(() => {
		try {
			const saved = localStorage.getItem('theme');
			if (saved === 'light' || saved === 'dark') theme = saved;
		} catch {
			// localStorage unavailable (private mode, etc.) - stay on 'system'.
		}
	});

	function apply(next: Theme) {
		theme = next;
		const root = document.documentElement;
		if (next === 'system') {
			root.removeAttribute('data-theme');
			try {
				localStorage.removeItem('theme');
			} catch {
				// Best-effort only - a failed write here just means the choice
				// won't survive a reload, not a broken toggle.
			}
		} else {
			root.setAttribute('data-theme', next);
			try {
				localStorage.setItem('theme', next);
			} catch {
				// Same as above.
			}
		}
	}

	const labels: Record<Theme, string> = { system: 'auto', light: 'light', dark: 'dark' };
	const order: Theme[] = ['system', 'light', 'dark'];

	function cycle() {
		apply(order[(order.indexOf(theme) + 1) % order.length]);
	}
</script>

<button type="button" onclick={cycle} aria-label="Toggle color theme" class="toggle">
	theme: {labels[theme]}
</button>

<style>
	.toggle {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg-dim);
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 3px;
		padding: 0.25rem 0.6rem;
		cursor: pointer;
	}

	.toggle:hover {
		color: var(--fg);
	}
</style>
