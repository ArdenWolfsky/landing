<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { IconHome, IconUser, IconPaw, IconShirt, IconMenu2, IconX } from '@tabler/icons-svelte';

	let menuOpen = $state(false);
	afterNavigate(() => (menuOpen = false));
</script>

<header>
	<div class="navbar-icon">
		<h1 class="neon">Arden Wolfsky</h1>
	</div>
	<button
		class="menu-toggle"
		aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
		aria-expanded={menuOpen}
		aria-controls="site-nav"
		onclick={() => (menuOpen = !menuOpen)}
	>
		{#if menuOpen}
			<IconX size={24} />
		{:else}
			<IconMenu2 size={24} />
		{/if}
	</button>

	<nav id="site-nav" class="nav-menu" class:active={menuOpen}>
		<ul>
			<li>
				<a href="/">
					<IconHome size={20} stroke={1.5} />
					Home
				</a>
			</li>
			<li>
				<a href="/about">
					<IconUser size={20} stroke={1.5} />
					About
				</a>
			</li>
			<li>
				<a href="/merch">
					<IconShirt size={20} stroke={1.5} />
					Merch
				</a>
			</li>
			<li>
				<a href="/fursona">
					<IconPaw size={20} stroke={1.5} />
					Fursona
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		padding-bottom: 1rem;
		border-bottom: unset;
		background-color: var(--arden-darker-brown);
		padding-top: 40px;
		padding-bottom: 10px;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 14px 28px,
			rgba(0, 0, 0, 0.22) 0px 10px 10px;
	}
	.navbar-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	nav {
		width: 100%;
		margin-top: 10px;
		font-family: var(--font-ui);
	}
	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		display: flex;
		justify-content: center;
	}
	nav li {
		margin: 0;
	}
	nav li a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		white-space: nowrap;
		background-color: unset;
		color: var(--arden-tan);
		transition: background-color 0.2s ease;
	}
	nav li a:hover {
		background-color: var(--arden-caramel);
		color: var(--arden-darker-brown);
		border-radius: 5%;
	}
	nav li a:active {
		background-color: var(--arden-red);
		color: var(--arden-tan);
	}
	nav li a:focus {
		background-color: var(--arden-red);
		color: var(--arden-tan);
	}
	h1 {
		font-family: RitzyRemix;
	}
	.menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		background-color: var(--arden-red);
		color: var(--arden-cream);
		border: none;
		border-radius: 6px;
		padding: 10px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	.menu-toggle:active,
	.menu-toggle:hover {
		background-color: var(--arden-red);
	}
	.menu-toggle:focus {
		background-color: var(--arden-red);
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
	}
	.neon {
		font-family: var(--font-heading);
		color: var(--arden-caramel);
		letter-spacing: 0.12em;
		text-shadow:
			0 0 2px #fff,
			0 0 5px var(--arden-cream),
			0 0 10px var(--arden-caramel),
			0 0 20px var(--arden-caramel),
			0 0 40px var(--arden-caramel),
			0 0 60px var(--arden-caramel);

		animation: neon-flicker 5s infinite alternate;
	}
	@keyframes neon-flicker {
		0%,
		18%,
		22%,
		25%,
		53%,
		57%,
		100% {
			opacity: 1;
		}

		20%,
		24%,
		55% {
			opacity: 0.65;
		}
	}
	@media screen and (max-width: 768px) {
		nav ul {
			flex-direction: column;
			align-items: center;
			display: none;
		}
		.menu-toggle {
			display: flex;
		}
		nav.active ul {
			display: flex;
		}
		nav li {
			width: 100%;
		}
		nav li a {
			white-space: normal;
		}
	}
</style>
