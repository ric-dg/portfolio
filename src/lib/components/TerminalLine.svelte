<script lang="ts">
	// The one deliberate nostalgic touch on the page - a terminal prompt line
	// with a blinking cursor, nodding to the era without recreating an actual
	// GeoCities <marquee>. Content is passed in via the default slot so this
	// stays a dumb, reusable shell rather than owning any real copy.
	let { command = 'whoami', children }: { command?: string; children?: import('svelte').Snippet } =
		$props();
</script>

<p class="line">
	<span class="prompt">guest@ricardo</span><span class="sep">:~$</span>
	{command}
	<span class="cursor" aria-hidden="true">_</span>
</p>
{#if children}
	<div class="output">{@render children()}</div>
{/if}

<style>
	.line {
		font-family: var(--font-mono);
		color: var(--fg-dim);
		margin: 0;
	}

	.prompt {
		color: var(--prompt);
	}

	.sep {
		color: var(--fg-dim);
		margin-right: 0.4em;
	}

	.cursor {
		display: inline-block;
		color: var(--accent);
		animation: blink 1.1s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.output {
		margin-top: var(--space-2);
	}
</style>
