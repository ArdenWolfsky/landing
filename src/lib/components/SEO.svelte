<script lang="ts">
	import { page } from '$app/state';
	let {
		title,
		description,
		image,
		noindex = false
	}: {
		title?: string;
		description?: string;
		image?: string;
		noindex?: boolean;
	} = $props();

	const siteTitle = 'Arden Wolfsky';
	const fullTitle = $derived(title ? `${title} - ${siteTitle}` : siteTitle);
	const currentUrl = $derived(new URL(page.url.pathname, 'https://ardenwolfsky.com').href);
	const defaultImage = '3b8a5a35-cba8-48eb-251a-dbbd0ce32700';
	const imageUrl = $derived(
		`https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/${image || defaultImage}/public`
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>

	<meta name="description" content={description} />
	<link rel="canonical" href={currentUrl} />

	<!-- Open Graph -->
	<meta property="og:url" content={currentUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if noindex}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>
