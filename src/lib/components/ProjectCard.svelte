<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<article class="card">
	<div class="shot" class:empty={!project.image}>
		{#if project.image}
			<img src={project.image} alt="Screenshot of {project.title}" loading="lazy" />
		{:else}
			<span class="placeholder">screenshot pending</span>
		{/if}
	</div>
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
		aspect-ratio: 16 / 10;
		border: 1px dashed var(--border);
		border-radius: 3px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shot img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.shot.empty {
		background: var(--bg);
	}

	.placeholder {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg-dim);
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
