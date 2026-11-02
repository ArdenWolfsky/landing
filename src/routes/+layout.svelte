<script lang="ts">
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import { ImagePopup } from 'hyperlib-but-svelte';
	import FooterImage from '#lib/components/FooterImage.svelte';
	import { type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Header />
<main>
	{@render children()}
	<ImagePopup />
	<FooterImage />
</main>

<style>
	main {
		background-color: var(--arden-darker-brown);
		padding-left: 3rem;
		padding-right: 3rem;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		position: relative;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 14px 28px,
			rgba(0, 0, 0, 0.22) 0px 10px 10px;
	}
	@media (max-width: 600px) {
		main {
			padding: 1.8rem;
		}
	}
</style>
