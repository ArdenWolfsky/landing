<script lang="ts">
	import { CenteredImage } from 'hyperlib-but-svelte';
	import SEO from '#lib/components/SEO.svelte';
	import Borders from '#lib/components/Borders.svelte';
	import { ImageRow } from 'hyperlib-but-svelte';
</script>

<SEO
	title="Fursona"
	description="Welcome to Arden Wolfsky's speakeasy. Take a seat and pick a drink!"
	image="e4d1af52-aa85-4c98-81af-f541d898aa00"
/>

<Borders />

<h1>Fursona</h1>
<CenteredImage
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/e4d1af52-aa85-4c98-81af-f541d898aa00/public"
	alt="Arden sitting in front of a bridge waving at Anthrocon"
	width="90%"
/>
<hr />
<p>big gay wolf</p>

<ImageRow
	images={[
		{
			src: 'https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/16e3dffb-a92b-4ee3-f27e-45514515e900/public',
			alt: 'Arden standing on a rock with paws up',
			caption: "Photo by <a href='https:/hyper.lol/'>hyperdefined</a>",
			radius: '24px'
		},
		{
			src: 'https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/6293766f-8cda-4588-2734-f2f633469c00/public',
			alt: 'Arden leaning against a railing waving',
			caption: "Photo by <a href='https:/hyper.lol/'>hyperdefined</a>",
			radius: '24px'
		}
	]}
/>
