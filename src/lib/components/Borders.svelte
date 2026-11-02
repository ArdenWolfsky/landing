<img
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/e4b4a7cb-1328-40f5-15f4-cea1e5157c00/public"
	class="no-drag right-top-border"
	alt=""
	aria-hidden="true"
/>

<img
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/e4b4a7cb-1328-40f5-15f4-cea1e5157c00/public"
	class="no-drag left-top-border"
	alt=""
	aria-hidden="true"
/>

<img
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/e4b4a7cb-1328-40f5-15f4-cea1e5157c00/public"
	class="no-drag left-bottom-border"
	alt=""
	aria-hidden="true"
/>

<img
	src="https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/e4b4a7cb-1328-40f5-15f4-cea1e5157c00/public"
	class="no-drag right-bottom-border"
	alt=""
	aria-hidden="true"
/>

<style>
	.left-top-border,
	.right-top-border,
	.left-bottom-border,
	.right-bottom-border {
		position: absolute;
		z-index: 3;
		width: 15%;
		aspect-ratio: 1;
		pointer-events: none;
	}

	.left-top-border {
		top: 0;
		left: 0;
		transform: rotate(180deg);
	}

	.right-top-border {
		top: 0;
		right: 0;
		transform: rotate(-90deg);
	}

	.left-bottom-border {
		bottom: 0;
		left: 0;
		transform: rotate(90deg);
		margin: 0;
	}

	.right-bottom-border {
		bottom: 0;
		right: 0;
		margin: 0;
	}

	@media (max-width: 600px) {
		.left-top-border,
		.right-top-border,
		.left-bottom-border,
		.right-bottom-border {
			width: 20%;
		}
	}
</style>
