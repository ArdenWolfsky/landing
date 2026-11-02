<script lang="ts">
	import { CenteredImage } from 'hyperlib-but-svelte';
	import SEO from '#lib/components/SEO.svelte';
	import Borders from '#lib/components/Borders.svelte';
	import { IconShoppingBag } from '@tabler/icons-svelte';
</script>

<SEO
	title="Merch"
	description="Want to support Arden Wolfsky and rep the brand? Buy some merch!"
	image="a33fa2d4-f511-496a-cf49-f6ebaf1e6b00"
/>

<Borders />

<h1>Merch</h1>
<CenteredImage
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/3ea536a1-d616-48e9-e17a-2bc3a1fd6800/public"
	alt="Arden logo"
	width="300px"
/>
<hr />
<p>Want to support myself and rep the Arden Wolfsky brand? Here are the merch items!</p>

<hr />
<h2>CorgiBeans Plushie</h2>
<CenteredImage
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/a33fa2d4-f511-496a-cf49-f6ebaf1e6b00/public"
	alt="Arden stirring a pot"
	width="300px"
/>
<p>
	Get your very own Limited Edition: Arden Wolfsky Bartender Plush Collectible! These plushies are
	of highest quality. Made with complex embroideries, super soft material, and luscious long faux
	fur. Dressed in Bartender attire, Arden also carries his signature cocktail shaker that is
	magnetic to his hand!
</p>
<div class="social-buttons">
	<a href="https://www.corgibeansshop.com/product/arden-wolfsky-plush-preorder">
		<IconShoppingBag size={24} stroke={1.5} />
		<span>Buy Now!</span>
	</a>
</div>
<hr />
<h2>Agent Ink Collection</h2>
<CenteredImage
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/d4519b41-8044-4063-d755-08c008d58600/public"
	alt="Arden sticker"
	width="300px"
/>
<p>Show off your bar flair with some speakeasy gear by Agent Ink!</p>
<div class="social-buttons">
	<a href="https://agentink.gg/collections/arden-wolfsky">
		<IconShoppingBag size={24} stroke={1.5} />
		<span>Buy Now!</span>
	</a>
</div>

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
</style>
