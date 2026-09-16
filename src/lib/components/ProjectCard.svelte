<script lang="ts">
	import type { Project } from '$lib/types';
	import ImageLightbox from './ImageLightbox.svelte';

	// Which section this card renders in - drives the wording of the
	// no-image placeholder (client work with nothing public reads
	// "confidential", a personal project that just hasn't been
	// screenshotted yet reads "no screenshot yet"). Not stored on Project
	// itself since it's a fact about where the card is placed, not the
	// project.
	let { project, context }: { project: Project; context: 'work' | 'personal' } = $props();

	// null = closed; otherwise the index into project.images currently shown.
	let lightboxIndex = $state<number | null>(null);
</script>

<article class="card">
	{#if project.images && project.images.length > 0}
		<button
			type="button"
			class="shot"
			onclick={() => (lightboxIndex = 0)}
			aria-label="View {project.images.length > 1
				? `${project.images.length} screenshots`
				: 'screenshot'} of {project.title}"
		>
			<img src={project.images[0]} alt="Screenshot of {project.title}" loading="lazy" />
			{#if project.images.length > 1}
				<span class="count-badge">+{project.images.length - 1}</span>
			{/if}
		</button>
		<ImageLightbox images={project.images} alt={project.title} bind:index={lightboxIndex} />
	{:else}
		<div class="shot shot-static">
			<span class="placeholder">
				{#if project.link}
					public - see link below
				{:else if context === 'work'}
					confidential - NDA
				{:else}
					no screenshot yet
				{/if}
			</span>
		</div>
	{/if}
	<div class="body">
		<h3>{project.title}</h3>
		<p class="role">{project.role}</p>
		<p>{project.summary}</p>
		<ul class="stack">
			{#each project.stack as tech (tech)}
				<li>{tech}</li>
			{/each}
		</ul>
		{#if project.variants && project.variants.length > 0}
			<details class="variants">
				<summary>Deployed for {project.variants.length} organizations</summary>
				<ul>
					{#each project.variants as org (org)}
						<li>{org}</li>
					{/each}
				</ul>
			</details>
		{/if}
		{#if project.link}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- project.link is always an external URL to a deployed project, never an internal route resolve() would apply to. -->
			<a href={project.link} target="_blank" rel="noopener noreferrer">view →</a>
		{/if}
	</div>
</article>

<style>
	.card {
		display: grid;
		gap: var(--space-2);
		padding: var(--space-3);
		background: var(--bg-panel);
		border: 1px solid var(--border);
		border-radius: 4px;
	}

	.shot {
		position: relative;
		aspect-ratio: 16 / 10;
		border: 1px solid var(--border);
		border-radius: 3px;
		overflow: hidden;
		display: block;
		padding: 0;
		background: none;
		cursor: zoom-in;
	}

	.shot img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.15s ease;
	}

	.shot:hover img {
		transform: scale(1.03);
	}

	.shot-static {
		border-style: dashed;
		cursor: default;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--space-2);
	}

	.placeholder {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg-dim);
	}

	.count-badge {
		position: absolute;
		bottom: var(--space-1);
		right: var(--space-1);
		background: rgb(0 0 0 / 65%);
		color: #fff;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
	}

	h3 {
		margin: 0;
		font-size: 1rem;
	}

	.role {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg-dim);
		margin: 0;
		font-weight: 700;
	}

	p {
		margin: 0;
		color: var(--fg-dim);
	}

	.stack {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		padding: 0;
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.7rem;
	}

	.stack li {
		border: 1px solid var(--border);
		border-radius: 3px;
		padding: 0.15rem 0.5rem;
		color: var(--fg-dim);
	}

	.stack li:nth-child(4n + 1) {
		border-color: var(--orb-1);
	}

	.stack li:nth-child(4n + 2) {
		border-color: var(--orb-2);
	}

	.stack li:nth-child(4n + 3) {
		border-color: var(--orb-3);
	}

	.stack li:nth-child(4n + 4) {
		border-color: var(--orb-4);
	}

	.variants {
		font-size: 0.8rem;
	}

	.variants summary {
		cursor: pointer;
		color: var(--link);
		width: fit-content;
	}

	.variants summary:hover {
		text-decoration: underline;
	}

	.variants ul {
		list-style: disc;
		margin: var(--space-1) 0 0;
		padding-left: 1.2rem;
		color: var(--fg-dim);
	}
</style>
