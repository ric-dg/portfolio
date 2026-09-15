<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="shell">
	<header>
		<a href="#top" class="brand">ricardo.dev</a>
		<nav aria-label="Section navigation">
			<a href="#about">about</a>
			<a href="#work">work</a>
			<a href="#contact">contact</a>
		</nav>
		<ThemeToggle />
	</header>

	<main id="top">
		{@render children()}
	</main>

	<footer>
		<span>&copy; {new Date().getFullYear()} Ricardo De Guzman Jr.</span>
		<span class="dim">built with SvelteKit, deployed static</span>
	</footer>
</div>

<style>
	.shell {
		max-width: var(--measure);
		margin-inline: auto;
		padding-inline: var(--space-3);
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	header {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding-block: var(--space-3);
		flex-wrap: wrap;
	}

	.brand {
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--fg);
		text-decoration: none;
	}

	nav {
		display: flex;
		gap: var(--space-2);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		margin-right: auto;
	}

	nav a {
		color: var(--fg-dim);
		text-decoration: none;
	}

	nav a:hover {
		color: var(--accent);
	}

	main {
		flex: 1;
	}

	footer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--space-1);
		padding-block: var(--space-3);
		border-top: 1px solid var(--border);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--fg-dim);
	}

	.dim {
		opacity: 0.7;
	}
</style>
