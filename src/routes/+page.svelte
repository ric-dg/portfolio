<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import TerminalLine from '$lib/components/TerminalLine.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CrossfadeBadge from '$lib/components/CrossfadeBadge.svelte';
	import type { Project } from '$lib/types';

	const roles = ['Web Developer', 'DevOps', 'Cloud Engineer'];

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
			title: 'LG OTA Platform — AWS cloud migration & CI/CD',
			role: 'IFELSE / DevOps + Cloud',
			summary:
				'Co-authored the planning and migration of LG’s OTA platform AWS infrastructure to IFELSE’s account - re-provisioned ECS clusters, tightened IAM policies, and overhauled build pipelines for faster, more reliable deployments.',
			stack: ['AWS ECS', 'Terraform', 'GitHub Actions']
		},
		{
			title: 'LG Energy Storage System (ESS) tooling',
			role: 'IFELSE / Full-stack + embedded',
			summary:
				'Updated and debugged Device Management Client and CLI tools for battery energy storage systems, across Windows-based (Gen 1/2) and Linux-based (Gen 3) generations.',
			stack: ['C++', 'CLI tooling', 'Linux / Windows']
		},
		{
			title: 'AUM Attendance System',
			role: 'Personal project / Full-stack',
			summary:
				'Multi-tenant attendance platform built from scratch - Discord and Telegram bots for clock-in/out, a SvelteKit dashboard and admin panel, and an Elysia + PostgreSQL API underneath.',
			stack: ['SvelteKit', 'Elysia', 'PostgreSQL'],
			image: '/projects/aum-dashboard.png'
		},
		{
			title: 'HomeNVR',
			role: 'Personal project / Systems',
			summary:
				'Cross-platform, self-hosted NVR - a single static Go daemon replacing fragile Python glue: process supervision, motion/sound-gated recording, and a browser-based control panel.',
			stack: ['Go', 'Embedded panel', 'Cross-platform'],
			image: '/projects/homenvr-status.png'
		},
		{
			title: 'Lexphere',
			role: 'IFELSE / Full-stack',
			summary:
				'Multi-tenant SaaS platform for law firms - microservices architecture (auth, API gateway, tenant management) behind a main app and a separate super-admin console.',
			stack: ['SvelteKit', 'NestJS', 'Microservices']
		},
		{
			title: 'Enrollment Management System',
			role: 'Seaversity / Full-stack',
			summary:
				'Course enrollment and admin platform for vocational/maritime training providers - course catalog, scheduling, payments, and an admin console for managing training programs end to end. Built once, deployed per institution.',
			stack: ['Nuxt', 'NestJS', 'PostgreSQL'],
			image: '/projects/enrollment-system.png',
			variants: ['MTI', 'PMMA', 'STI', 'USMC', 'STIA']
		},
		{
			title: 'TofuStack',
			role: 'Personal project / Full-stack',
			summary:
				'Opinionated SvelteKit starter - a Hono API mounted directly on SvelteKit’s catch-all route instead of a separate backend, with Drizzle, PASETO auth, and dependency injection via TSyringe.',
			stack: ['SvelteKit', 'Hono', 'Drizzle'],
			link: 'https://github.com/ric-dg/TofuStack-bunified'
		},
		{
			title: 'reknix',
			role: 'Personal project / Full-stack',
			summary:
				'Open-source, self-hostable game analytics - a Rust (axum + sqlx) event-ingest server with Prometheus metrics and an OpenAPI-generated TypeScript client, feeding a SvelteKit dashboard.',
			stack: ['Rust', 'PostgreSQL', 'SvelteKit'],
			link: 'https://github.com/reknix/reknix'
		},
		{
			title: 'AI-Powered HRIS Productivity Service',
			role: 'IFELSE / Full-stack + AI',
			summary:
				'Multi-tenant HR backend with OpenAI-integrated productivity reporting - ticket handling, timesheet analysis, and automated productivity reports across tenant organizations.',
			stack: ['NestJS', 'OpenAI', 'RabbitMQ']
		},
		{
			title: 'AGV Fleet Integration Middleware',
			role: 'IFELSE / Systems + Robotics',
			summary:
				'Middleware bridging a Manufacturing Execution System (Oracle), an autonomous robot fleet (Bear Robotics ACS), and PLC hardware - real-time order dispatch, hardware polling with retry/circuit-breaker logic, and a live operations dashboard. Originally built in Go, later rewritten in Rust for cross-platform deployment.',
			stack: ['Rust', 'Oracle', 'Industrial protocols']
		}
	];
</script>

<svelte:head>
	<title>Ricardo De Guzman Jr. — Web Developer / DevOps / Cloud Engineer</title>
	<meta
		name="description"
		content="Web developer, DevOps and cloud engineer. Full-stack builds, from the interface to the infrastructure underneath it."
	/>

	<!-- Open Graph / Twitter Card - without these, sharing the link (email,
	     Slack, LinkedIn) renders a blank preview with no title/image. -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ric.svnts.xyz/" />
	<meta
		property="og:title"
		content="Ricardo De Guzman Jr. — Web Developer / DevOps / Cloud Engineer"
	/>
	<meta
		property="og:description"
		content="Web developer, DevOps and cloud engineer. Full-stack builds, from the interface to the infrastructure underneath it."
	/>
	<meta property="og:image" content="https://ric.svnts.xyz/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Ricardo De Guzman Jr. — Web Developer / DevOps / Cloud Engineer"
	/>
	<meta
		name="twitter:description"
		content="Web developer, DevOps and cloud engineer. Full-stack builds, from the interface to the infrastructure underneath it."
	/>
	<meta name="twitter:image" content="https://ric.svnts.xyz/og-image.png" />
</svelte:head>

<section class="hero">
	<TerminalLine command="whoami">
		<h1>Ricardo De Guzman Jr.</h1>
		<p class="tagline">
			<span class="sr-only">Web Developer, DevOps, and Cloud Engineer</span>
			<span aria-hidden="true"><CrossfadeBadge labels={roles} /></span>
		</p>
	</TerminalLine>
</section>

<Section id="about" heading="about">
	<p>
		Full-stack developer, DevOps, and cloud engineer with 10+ years across game dev, web, and cloud
		infrastructure. I build applications end-to-end - not just the pages people click through, but
		the systems behind them: accounts and permissions, document uploads, reporting, and the cloud
		infrastructure that keeps it all running. Currently Head of Product at KargaX and Senior
		Full-Stack Developer at IFELSE, previously CTO at Seaversity - technical lead across enterprise
		client work including LG's OTA platform and battery energy storage system software.
	</p>
	<p class="dim">
		29 years old. Started on Unity3D games and AR/VR experiments before the web, back when
		&lt;marquee&gt; tags shipped without irony - still prefer things that are simple and work over
		things that are impressive and fragile.
	</p>
	<p class="dim">
		In 2018, our team
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not an internal route. -->
		<a
			href="https://2018.spaceappschallenge.org/challenges/universe-beauty-and-wonder/virtual-space-exploration/teams/pci-seaversity-vr/"
			target="_blank"
			rel="noopener noreferrer">PCI Seaversity VR</a
		>
		reached the
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not an internal route. -->
		<a
			href="https://2018.spaceappschallenge.org/locations/makati-city-bonifacio-global-city/"
			target="_blank"
			rel="noopener noreferrer">Global Finalist round</a
		>
		at NASA's Space Apps Challenge (Makati City / BGC), earning a Global Nominee spot in the Virtual Space
		Exploration category for Mars2Earth VR - I led the VR side.
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not an internal route. -->
		<a href="https://www.youtube.com/watch?v=_VMjFPb09y4" target="_blank" rel="noopener noreferrer"
			>Covered on ABS-CBN's Bandila</a
		>.
	</p>
</Section>

<Section id="work" heading="work">
	<p class="dim work-note">
		A selection, not the full picture - a lot of client work stays off here by NDA. Happy to walk
		through more in a call.
	</p>
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
			<li>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL, not an internal route. -->
				<a
					href="https://www.linkedin.com/in/deguzmanricardo016/"
					target="_blank"
					rel="noopener noreferrer">linkedin.com/in/deguzmanricardo016</a
				>
			</li>
			<li>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- static asset download, not an app route. -->
				<a href="/ricardo-de-guzman-cv.pdf" download>download-cv.pdf</a>
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

	.work-note {
		margin: 0 0 var(--space-3);
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
