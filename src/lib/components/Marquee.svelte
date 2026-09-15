<script lang="ts">
	// A real scrolling marquee, built with a CSS animation rather than the
	// deprecated <marquee> tag - same visual effect, but screen-reader-safe
	// (the text is just normal text, not fighting the tag's own semantics)
	// and it honors prefers-reduced-motion for anyone who finds continuous
	// scrolling motion uncomfortable, instead of forcing it on everyone.
	let { text }: { text: string } = $props();
</script>

<div class="marquee" role="note">
	<div class="track">
		<span>{text}</span>
		<span aria-hidden="true">{text}</span>
	</div>
</div>

<style>
	.marquee {
		overflow: hidden;
		background: var(--fg);
		color: var(--bg);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		padding-block: 0.4rem;
		white-space: nowrap;
	}

	.track {
		display: inline-flex;
		gap: 3rem;
		animation: scroll 18s linear infinite;
		width: max-content;
	}

	.track span {
		padding-inline: 1.5rem;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
		}

		.track span:last-child {
			display: none;
		}
	}
</style>
