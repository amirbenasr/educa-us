<script type="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import education_section from '$lib/images/education_section.jpg';
	export let props = {
		sectionId: '',
		title: '',
		description: '',
		image: '',
		color: '',
		left: true,
		position: ''
	};
	const {
		sectionId,
		title,
		description,
		image,
		color = '#ffffff',
		left = false,
		position = ''
	} = props;
	let isActive = false;

	onMount(() => {
		const sections = document.querySelectorAll('.text-section');
		const difference = 150;

		if (browser) {
			document.addEventListener('scroll', (e) => {
				sections.forEach((element) => {
					if (window.innerHeight - element.getBoundingClientRect().top > 150) {
						element.classList.add('active');
					}
				});
			});
		}
	});
</script>

<div
	id={sectionId}
	class="main-sections"
	style="background-image: url({image}); background-position:{position}"
	class:position-end={left}
>
	<a class="button" href="http://">Learn More <i class="fa-solid fa-angles-right" /> </a>

	<div class="container">
		<div class="text-section">
			<div class="section-title">
				<h1><span class="title-prefix-icon">|</span> {title}</h1>
				<p>{description}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.title-prefix-icon {
		font-size: clamp(0.75rem, 0.75rem+2vw, 4rem);
		line-height: 1rem;
		font-weight: lighter;
	}
	:global(.text-section.active) {
		opacity: 1 !important;
		transform: translateX(0px) !important;
	}

	.position-end {
		justify-content: end;
	}

	.main-sections {
		position: relative;
		display: flex;
		background-repeat: no-repeat;
		background-size: cover;
		/* background-position-x: top !important; */
		height: 450px;
		width: 100%;
	}
	.button {
		text-decoration: none;
		position: absolute;
		border: 2px solid transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 42%;
		bottom: 15%;
		color: #0a3161;
		background-color: #fff;
		border-radius: 40px;
		font-size: 16px;
		font-weight: 700 !important;
		text-transform: uppercase !important;
		padding-top: 7px !important;
		padding-right: 2em !important;
		padding-bottom: 6px !important;
		padding-left: 1.8em !important;
		transition: all ease-in 100ms;
	}
	.button i {
		margin-left: 1rem;
		text-align: center;
	}
	.button:hover {
		background-color: transparent;
		color: white;
		border: 2px solid white;
	}
	.button::after {
		content: '';
		position: absolute;
		right: 20px;
	}
	@media (max-width: 700px) {
		p {
			visibility: hidden;
		}
		.position-end {
			justify-content: start;
		}
		.main-sections {
			height: 250px;
		}
	}
	p {
		line-height: 1.125rem;
	}
	.text-section {
		padding-left: 1.5rem;
		transform: translateX(-25px);
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		opacity: 0;
		transition: all 500ms ease-in-out;
		color: white;
		z-index: 3 !important;
	}
	.text-section p {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.6rem;
	}
</style>
