<script lang="ts">
	import { page } from '$app/state';
	import { CenteredImage } from 'hyperlib-but-svelte';
	import SEO from '#lib/components/SEO.svelte';
	import Borders from '#lib/components/Borders.svelte';

	const status = String(page.status);
	const message = page.error?.message ?? 'Something went wrong.';
</script>

<SEO title={message} description={status} />

<Borders />

<h1>{status} - {message}</h1>
<p>There was an issue fetching this page: {status} ({message}).</p>
<CenteredImage
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/8c999916-8d41-46b5-0f49-2bb9902a8c00/public"
	alt="Arden face down on the ground"
/>
