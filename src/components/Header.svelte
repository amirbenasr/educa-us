<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let y: number;
	let navModal: HTMLElement;
	function myFunction() {
		var x = document.querySelector('nav');
		if (x?.className === '') {
			x.className += ' responsive';
		} else {
			x!.className = '';
		}
	}
	onMount(() => {
		const header = document.querySelector('header');
		const capitalTitle = document.querySelector('.logo-title');
		document.addEventListener('scroll', (e) => {
			if (y > 50) {
				header?.classList.add('shrink-header');
				capitalTitle?.classList.add('shrink');
			} else {
				capitalTitle?.classList.remove('shrink');

				header?.classList.remove('shrink-header');
			}
		});
	});

	function toggleModal(
		event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }
	): any {
		navModal.classList.toggle('visible');
	}
</script>

<svelte:window bind:scrollY={y} />
<header>
	<div class="corner">
		<img src="/logo_white_inline.png" alt="" srcset="" />
	</div>
	<!-- <div class="logos">
		<div class="corner logo-span">
			<a href="#">
				<span class="logo-title"> <span class="capital-title">E</span> | Educa US</span>
			</a>
		</div>
	</div> -->
	<nav class="web-nav">
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
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
		<a href="/" class="icon active" on:click={toggleModal}>
			<li class="fa fa-bars fa-lg" />
		</a>
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
	</nav>
</header>

<style>
	.mobile-nav {
		display: none;
	}
	.icon {
		width: 2rem;
		height: auto;
		text-align: center;
	}
	.corner {
		transition: all;
		width: auto;
		transition-duration: 3s;
	}

	header {
		height: auto;
		display: flex;
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 60px;
		align-items: center;
		justify-content: space-between;
		/* transition: all 200ms ease-in; */
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
			display: block !important;
			position: relative;
		}

		.navigation-modal {
			visibility: hidden;
			opacity: 0;
			display: block;
			display: flex;
			position: absolute;
			right: 0px;
			top: 8px;
			height: 150px;
			width: auto;
			flex-direction: column;
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

	:global(.shrink) {
		animation: sh 1s ease-in 0s forwards;
		transform: translateX(-20px) scale3d(0.7, 0.7, 0.7);
	}

	:global(.shrink-header) {
		height: 50px !important;
	}
	.active {
		color: white;
	}
	.corner {
		display: block;
		text-align: center;
		transform: translateX(10px);
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
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
