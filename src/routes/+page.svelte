<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import TerminalLine from '$lib/components/TerminalLine.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/types';

	// TODO(ricardo): replace with your real work. Keep image unset until you
	// have a real, NDA-safe screenshot - ProjectCard renders an honest
	// "screenshot pending" placeholder rather than a fake image either way.
	const projects: Project[] = [
		{
			title: 'Role-scoped reporting dashboard',
			role: 'Full-stack + infra',
			summary:
				'Each organization logs in and sees only its own performance data - deliveries, document status, activity history - without asking anyone for a report.',
			stack: ['SvelteKit', 'Postgres', 'Docker']
		},
		{
			title: 'Document upload & review flow',
			role: 'Full-stack',
			summary:
				'Users upload a required document, track its review status, and get notified once it is approved or needs correction.',
			stack: ['TypeScript', 'S3-compatible storage']
		},
		{
			title: 'Internal admin tooling',
			role: 'Full-stack',
			summary:
				'The non-public side: staff managing accounts, permissions, and content without needing a developer for every change.',
			stack: ['Vue / Nuxt', 'REST API']
		}
	];
</script>

<svelte:head>
	<title>Ricardo De Guzman Jr. — Web Developer / DevOps / Cloud Engineer</title>
	<meta
		name="description"
		content="Web developer, DevOps and cloud engineer. Full-stack builds, from the interface to the infrastructure underneath it."
	/>
</svelte:head>

<section class="hero">
	<TerminalLine command="whoami">
		<h1>Ricardo De Guzman Jr.</h1>
		<p class="tagline">Web Developer &middot; DevOps &middot; Cloud Engineer</p>
	</TerminalLine>
</section>

<Section id="about" heading="about">
	<!-- TODO(ricardo): replace with your real background. Keep it to 3-4
	     sentences - this page is meant to be read in under a minute. -->
	<p>
		I build full web applications end-to-end - not just the pages people click through, but the
		systems behind them: accounts and permissions, document uploads, reporting, and the cloud
		infrastructure that keeps it all running. I lean backend and infrastructure, but I hold my own
		on the frontend too - I know the fundamentals and don't need a framework to hide bad habits from
		me.
	</p>
	<p class="dim">
		29 years old. Started when the web still shipped &lt;marquee&gt; tags without irony - still
		prefer things that are simple and work over things that are impressive and fragile.
	</p>
</Section>

<Section id="work" heading="work">
	<div class="grid">
		{#each projects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>

<Section id="contact" heading="contact">
	<TerminalLine command="cat contact.txt">
		<ul class="contact-list">
			<li><a href="mailto:ricdeguzman@svnts.xyz">ricdeguzman@svnts.xyz</a></li>
			<!-- TODO(ricardo): add GitHub / LinkedIn / whatever else you actually want listed -->
		</ul>
	</TerminalLine>
</Section>

<style>
	.hero {
		padding-block: var(--space-5) var(--space-4);
	}

	h1 {
		font-size: clamp(1.5rem, 4vw, 2.25rem);
		margin: var(--space-2) 0 0;
	}

	.tagline {
		font-family: var(--font-mono);
		color: var(--fg-dim);
		margin: var(--space-1) 0 0;
	}

	.dim {
		color: var(--fg-dim);
		font-size: 0.9rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: var(--space-3);
	}

	.contact-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
