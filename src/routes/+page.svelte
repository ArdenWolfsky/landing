<script lang="ts">
	import { CenteredImage } from 'hyperlib-but-svelte';
	import SEO from '#lib/components/SEO.svelte';
	import Borders from '#lib/components/Borders.svelte';

	import {
		IconBrandTiktok,
		IconBrandX,
		IconBrandTelegram,
		IconBrandYoutubeFilled,
		IconBrandInstagram,
		IconBrandBluesky,
		IconCamera,
		IconBrandDiscord,
		IconGlassFull
	} from '@tabler/icons-svelte';

	const socials = [
		{ name: 'TikTok', url: 'https://www.tiktok.com/@ardenwolfsky', icon: IconBrandTiktok },
		{ name: 'Twitter', url: 'https://www.twitter.com/ardenwolfsky', icon: IconBrandX },
		{ name: 'Telegram', url: 'https://t.me/ardenwolfsky', icon: IconBrandTelegram },
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/channel/UCRZuXWJAp4lND41IsgMROlA',
			icon: IconBrandYoutubeFilled
		},
		{ name: 'Instagram', url: 'https://www.instagram.com/ardenwolfsky/', icon: IconBrandInstagram },
		{ name: 'Bluesky', url: 'https://bsky.app/profile/ardenwolfsky.com', icon: IconBrandBluesky }
	];

	const links = [
		{
			name: 'FurTrack',
			url: 'https://www.furtrack.com/index/character:arden_wolfsky',
			icon: IconCamera
		},
		{ name: 'Discord', url: 'https://discord.gg/aZbtj8Czeb', icon: IconBrandDiscord },
		{ name: 'Drink Catalog', url: 'https://arden.bar/', icon: IconGlassFull }
	];
</script>

<SEO description="Cheers! I'm Arden Wolfsky, a fluffy, red wolf, Wolfsky hybrid!" />

<Borders />

<h1>Awoo!</h1>
<p>
	Cheers! I'm Arden Wolfsky, a fluffy, red wolf, Wolfsky hybrid who is a Pastry chef by day and
	serves up custom cocktails by night! I am a classically trained Certified Executive Pastry chef
	who specializes in chocolates, custom cakes, and unique dessert designs.
</p>

<div class="social-buttons">
	{#each socials as social (social.name)}
		<a href={social.url} target="_blank" rel="noopener noreferrer" title={social.name}>
			<social.icon size={24} stroke={1.5} />
			<span>{social.name}</span>
		</a>
	{/each}
</div>

<div class="social-buttons">
	{#each links as link (link.name)}
		<a href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
			<link.icon size={24} stroke={1.5} />
			<span>{link.name}</span>
		</a>
	{/each}
</div>

<hr />

<CenteredImage
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/3b8a5a35-cba8-48eb-251a-dbbd0ce32700/public"
	alt="Arden in the woods"
/>

<style>
	.social-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	.social-buttons a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.65rem 1rem;
		border-radius: 8px;
		background-color: var(--arden-red);
		color: var(--arden-cream);
		text-decoration: none;
		transition: background-color 0.2s ease;
	}

	.social-buttons a:hover {
		background-color: var(--arden-caramel);
		color: var(--arden-darker-brown);
	}

	.social-buttons a :global(svg) {
		flex-shrink: 0;
	}

	.social-buttons + .social-buttons {
		margin-top: 1.5rem;
	}
</style>
