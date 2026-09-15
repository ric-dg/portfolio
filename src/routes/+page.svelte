<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import TerminalLine from '$lib/components/TerminalLine.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/types';

	// image stays unset until a real, NDA-safe UI screenshot exists for each -
	// ProjectCard renders an honest "screenshot pending" placeholder rather
	// than a fake image either way.
	const projects: Project[] = [
		{
			title: 'KargaX — legacy-to-automated logistics platform',
			role: 'Head of Product / Full-stack',
			summary:
				'Own the product roadmap moving trucking and logistics operations off fragmented spreadsheet workflows onto a scalable, automated system - reporting, SLA tracking, and account management, end to end.',
			stack: ['SvelteKit', 'NestJS', 'PostgreSQL']
		},
		{
			title: 'Enterprise AWS infrastructure & CI/CD',
			role: 'DevOps / Cloud',
			summary:
				'Re-provisioned ECS clusters, tightened IAM policies, and overhauled build pipelines for cost-effective, high-repetition deployment cycles across enterprise client workloads, including migrating a global client’s cloud platform to a new account.',
			stack: ['AWS ECS', 'Terraform', 'GitHub Actions']
		},
		{
			title: 'LG Energy Storage System (ESS) tooling',
			role: 'Full-stack + embedded',
			summary:
				'Updated and debugged Device Management Client and CLI tools for battery energy storage systems, across Windows-based (Gen 1/2) and Linux-based (Gen 3) generations.',
			stack: ['C++', 'CLI tooling', 'Linux / Windows']
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
	<p>
		Full-stack developer, DevOps, and cloud engineer. I build applications end-to-end - not just the
		pages people click through, but the systems behind them: accounts and permissions, document
		uploads, reporting, and the cloud infrastructure that keeps it all running. Currently Head of
		Product at KargaX, previously CTO at Seaversity, and technical lead across enterprise client
		work including LG's OTA platform and battery energy storage system software.
	</p>
	<p class="dim">
		29 years old. Started on Unity3D games and AR/VR experiments before the web, back when
		&lt;marquee&gt; tags shipped without irony - still prefer things that are simple and work over
		things that are impressive and fragile.
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
			<li>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not an internal route. -->
				<a href="https://github.com/ric-dg" target="_blank" rel="noopener noreferrer"
					>github.com/ric-dg</a
				>
			</li>
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
