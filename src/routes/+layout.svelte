<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import VisitorCounter from '$lib/components/VisitorCounter.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import Orb from '$lib/components/Orb.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Marquee
	text="Welcome to ricardo.dev — full-stack developer, DevOps, and cloud engineer — thanks for stopping by"
/>

<div class="shell">
	<header>
		<a href="#top" class="brand">ricardo.dev</a>
		<nav aria-label="Section navigation">
			<a href="#about"><Orb color={1} />about</a>
			<a href="#work"><Orb color={2} />work</a>
			<a href="#contact"><Orb color={3} />contact</a>
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
		<div class="webring">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not an internal route. -->
			<a href="https://github.com/ric-dg" target="_blank" rel="noopener noreferrer" class="badge"
				>github</a
			>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- mailto link, not an internal route. -->
			<a href="mailto:ricdeguzman@svnts.xyz" class="badge">email</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- static asset download, not an app route. -->
			<a href="/ricardo-de-guzman-cv.pdf" download class="badge">cv.pdf</a>
		</div>
		<p class="joke">
			best viewed in any browser, any size &middot; built with SvelteKit, deployed static &middot;
			last updated {__BUILD_DATE__}
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
		font-family: var(--font-ui);
	}

	.brand {
		font-weight: 700;
		color: var(--fg);
		text-decoration: none;
		font-size: 1.1rem;
	}

	nav {
		display: flex;
		gap: var(--space-3);
		font-size: 0.9rem;
		margin-right: auto;
	}

	nav a {
		text-decoration: underline;
	}

	main {
		flex: 1;
	}

	footer {
		padding-block: var(--space-3);
		border-top: 1px solid var(--border);
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

	.webring {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-2);
	}

	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 88px;
		height: 31px;
		border: 1px solid var(--border);
		border-radius: 3px;
		color: var(--fg-dim);
		text-decoration: none;
		letter-spacing: 0.03em;
	}

	.badge:hover {
		color: var(--fg);
	}

	.badge:nth-child(3n + 1) {
		border-color: var(--orb-1);
	}

	.badge:nth-child(3n + 2) {
		border-color: var(--orb-2);
	}

	.badge:nth-child(3n + 3) {
		border-color: var(--orb-3);
	}
</style>
