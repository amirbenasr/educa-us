<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let y: number;
	let navModal: HTMLElement;
	let header: HTMLElement;
	let logo: HTMLElement;
	function myFunction() {
		var x = document.querySelector('nav');
		if (x?.className === '') {
			x.className += ' responsive';
		} else {
			x!.className = '';
		}
	}
	onMount(() => {
		const svg = document.querySelector('svg');
		const nav = document.querySelector('.navigation-modal');
		document.addEventListener('scroll', (e) => {
			if (y > 50) {
				logo.style.width = '163px';
				logo.style.height = '50px';
				header.classList.add('shrink-header');
				svg?.classList.add('shrink-header');
				nav?.classList.add('shrink-header');
			} else {
				logo.style.width = '100%';
				logo.style.height = '60px';

				nav?.classList.remove('shrink-header');
				svg?.classList.remove('shrink-header');
				header.classList.remove('shrink-header');
			}
		});
	});

	function toggleModal(
		event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }
	): any {
		navModal.classList.toggle('visible');
		if (header.style.marginBottom == '60px') {
			header.style.marginBottom = '0px';
			return;
		}
		header.style.marginBottom = '60px';
	}
</script>

<svelte:window bind:scrollY={y} />
<header bind:this={header}>
	<div class="logo" bind:this={logo}>
		<img src="/logo_white_inline.png" alt="" srcset="" />
	</div>

	<nav class="web-nav">
		<svg fill="transparent">
			<path d="M0,0 L30,0 L30,60 C15,50 10,40 0,0 Z" />
		</svg>
		<ul class="navigation-modal">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/articles">Articles</a>
			</li>
		</ul>
	</nav>

	<nav class="mobile-nav">
		<div class="hamburger">
			<a on:click={toggleModal} href="#">
				<li class="fa fa-bars fa-xl active" />
			</a>
		</div>

		<div>
			<ul class="navigation-modal" bind:this={navModal}>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a on:click={toggleModal} href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a on:click={toggleModal} href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<a on:click={toggleModal} href="/articles">Articles</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	.mobile-nav {
		display: none;
	}

	.web-nav {
		position: absolute;
		inset: auto 0 auto auto;
		transition: all 200ms ease-in;
	}

	header {
		display: block;
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 60px;
		transition: all 200ms ease-in;
		background-color: var(--color-theme-1);
	}

	@media screen and (max-width: 800px) {
		header {
			position: relative;
		}
		nav.web-nav {
			display: none;
		}

		nav.mobile-nav {
			/* display: block; */
			position: relative;
			text-align: center;
			display: grid;
		}
		.hamburger {
			color: white;
			align-self: center;
			inset: 30px auto auto auto;
			position: absolute;
		}

		.navigation-modal {
			position: absolute;
			width: 100%;
			inset: 60px 0 auto 0;
			visibility: hidden;
			opacity: 0;
			transition: all 200ms ease-in-out;
		}
		:global(.visible) {
			visibility: visible !important;
			opacity: 1 !important;
		}
		:global(main) {
			padding-top: 0 !important;
		}
	}

	.navigation-modal {
		transition: all 200ms ease-in;
	}
	:global(.shrink-header) {
		height: 50px !important;
	}
	.active {
		color: white;
	}
	.logo {
		display: block;
		max-width: 100%;
		inset: auto 0 auto 0;
		text-align: center;
		padding-left: 1.75rem;
		position: absolute;
		transition: all 800ms ease-in-out;
	}

	.logo img {
		max-width: 100%;
		max-height: 60px;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		display: block;
		width: 30px;
		height: 60px;
		transition: all 200ms ease-in;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: white;
	}
</style>
