<script lang="ts">
	// A small colorful sphere, purely decorative - the one direct visual nod
	// to Space-Jam-style planet/orb icons, kept small and scoped to nav
	// items rather than taking over the page.
	let { color }: { color: 1 | 2 | 3 | 4 } = $props();
</script>

<span class="orb orb-{color}" aria-hidden="true"></span>

<style>
	.orb {
		display: inline-block;
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		margin-right: 0.35rem;
		vertical-align: middle;
	}

	.orb-1 {
		background: radial-gradient(circle at 30% 30%, #fff, var(--orb-1) 60%);
	}

	.orb-2 {
		background: radial-gradient(circle at 30% 30%, #fff, var(--orb-2) 60%);
	}

	.orb-3 {
		background: radial-gradient(circle at 30% 30%, #fff, var(--orb-3) 60%);
	}

	.orb-4 {
		background: radial-gradient(circle at 30% 30%, #fff, var(--orb-4) 60%);
	}
</style>
