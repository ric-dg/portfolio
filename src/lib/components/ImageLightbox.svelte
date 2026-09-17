<script lang="ts">
	// Native <dialog> rather than a hand-rolled modal or a lightbox library -
	// showModal() gives ESC-to-close and top-layer stacking for free.
	// Backdrop-click-to-close, arrow-key navigation, and the Tab focus trap
	// below are added on top - measured (real headless Chromium, not just
	// theory) that showModal()'s own focus containment isn't reliable enough
	// to depend on alone, so it's reinforced explicitly rather than assumed.
	let {
		images,
		alt,
		index = $bindable(null)
	}: { images: string[]; alt: string; index: number | null } = $props();

	let dialogEl: HTMLDialogElement;

	function focusables(): HTMLElement[] {
		return [...dialogEl.querySelectorAll<HTMLElement>('button, [href], input, [tabindex]')];
	}

	$effect(() => {
		if (index !== null && !dialogEl.open) {
			dialogEl.showModal();
			// Explicit rather than relying on the browser's own autofocus -
			// same reasoning as the Tab trap below.
			focusables()[0]?.focus();
		} else if (index === null && dialogEl.open) {
			dialogEl.close();
		}
	});

	// Fires on ESC and on the native close() call above - the single place
	// that reconciles dialog state back into index, so both paths agree.
	function onClose() {
		index = null;
	}

	function onBackdropClick(event: MouseEvent) {
		// The dialog element itself is the click target only when the click
		// landed on the ::backdrop, never when it hit a child - no need to
		// check event.target against children.
		if (event.target === dialogEl) index = null;
	}

	function prev() {
		if (index !== null) index = (index - 1 + images.length) % images.length;
	}

	function next() {
		if (index !== null) index = (index + 1) % images.length;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Tab') {
			trapFocus(event);
			return;
		}
		if (images.length < 2) return;
		if (event.key === 'ArrowLeft') prev();
		else if (event.key === 'ArrowRight') next();
	}

	// Manual wrap-around, standard focus-trap shape: Tab off the last
	// focusable goes to the first, Shift+Tab off the first goes to the last.
	function trapFocus(event: KeyboardEvent) {
		const items = focusables();
		if (items.length === 0) return;
		const first = items[0];
		const last = items[items.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}
</script>

<dialog
	bind:this={dialogEl}
	onclose={onClose}
	onclick={onBackdropClick}
	onkeydown={onKeydown}
	aria-label="{alt} screenshots"
>
	{#if index !== null}
		<figure>
			<img src={images[index]} alt="{alt} — screenshot {index + 1} of {images.length}" />
			{#if images.length > 1}
				<figcaption>
					<button type="button" onclick={prev} aria-label="Previous screenshot">‹</button>
					<span>{index + 1} / {images.length}</span>
					<button type="button" onclick={next} aria-label="Next screenshot">›</button>
				</figcaption>
			{/if}
		</figure>
		<button type="button" class="close" onclick={() => (index = null)} aria-label="Close">×</button>
	{/if}
</dialog>

<style>
	dialog {
		max-width: min(90vw, 60rem);
		max-height: 90vh;
		padding: 0;
		border: none;
		border-radius: 4px;
		background: var(--bg-panel);
		color: var(--fg);
	}

	dialog::backdrop {
		background: var(--overlay-scrim);
	}

	figure {
		margin: 0;
		display: grid;
	}

	img {
		display: block;
		max-width: 100%;
		max-height: 80vh;
		object-fit: contain;
	}

	figcaption {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		padding: var(--space-1);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--fg-dim);
	}

	figcaption button {
		background: none;
		border: 1px solid var(--border);
		border-radius: 3px;
		color: var(--fg);
		width: 1.75rem;
		height: 1.75rem;
		cursor: pointer;
		font-size: 1rem;
		line-height: 1;
	}

	.close {
		position: absolute;
		top: var(--space-1);
		right: var(--space-1);
		background: var(--bg-panel);
		border: 1px solid var(--border);
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		color: var(--fg);
		cursor: pointer;
		font-size: 1.1rem;
		line-height: 1;
	}
</style>
