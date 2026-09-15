<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import VisitorCounter from '$lib/components/VisitorCounter.svelte';

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
		<div class="footer-row">
			<span>&copy; {new Date().getFullYear()} Ricardo De Guzman Jr.</span>
			<VisitorCounter />
		</div>
		<p class="joke">
			best viewed in any browser, any size &middot; built with SvelteKit, deployed static
		</p>
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
		font-family: var(--font-display);
		color: var(--fg);
		text-decoration: none;
		font-size: 1.1rem;
	}

	nav {
		display: flex;
		gap: var(--space-2);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		margin-right: auto;
	}

	nav a {
		color: var(--fg);
		text-decoration: none;
		background: var(--bg-panel);
		border: 2px solid var(--border);
		box-shadow: var(--shadow-sm);
		padding: 0.3rem 0.7rem;
		border-radius: 3px;
	}

	nav a:visited {
		color: var(--fg);
	}

	nav a:hover {
		transform: translate(1px, 1px);
		box-shadow: 2px 2px 0 var(--border);
	}

	main {
		flex: 1;
	}

	footer {
		padding-block: var(--space-3);
		border-top: 3px solid var(--border);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--fg-dim);
	}

	.footer-row {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--space-2);
		align-items: center;
	}

	.joke {
		margin: var(--space-1) 0 0;
		opacity: 0.8;
	}
</style>
