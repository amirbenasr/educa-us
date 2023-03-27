<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let y: number;
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
</script>

<svelte:window bind:scrollY={y} />
<header>
	<div class="logos">
		<div class="corner logo-span">
			<a href="#">
				<span class="logo-title"> <span class="capital-title">E</span> | Educa US</span>
			</a>
		</div>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
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
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
	</nav>
</header>

<style>
	.logos {
		transition: all;
		width: auto;
		transition-duration: 3s;
	}

	.logo-span span {
		vertical-align: middle !important;
	}
	.capital-title {
		font-weight: bold;
		font-size: 4rem;
	}
	.logo-title {
		scale: 0.9;
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: clamp(2rem, 1.125vw, 3rem);
		font-weight: bold;
		color: white;
		font-size: x-large;
		margin-left: 2rem;
		transition: all 300ms ease-in;
	}
	header {
		height: auto;
		display: flex;
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 60px;
		align-items: center;
		justify-content: space-between;
		/* transition: all 200ms ease-in; */
		background-color: var(--color-theme-1);
	}

	@media (max-width: 800px) {
		header {
			position: relative;
		}
		nav {
			display: none !important;
		}
	}

	:global(.shrink) {
		animation: sh 1s ease-in 0s forwards;
		transform: translateX(-20px) scale3d(0.7, 0.7, 0.7);
	}

	:global(.shrink-header) {
		height: 50px !important;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
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
		color: var(--color-theme-1);
	}
</style>
