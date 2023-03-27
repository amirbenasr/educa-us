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
				// isActive = true;
				console.log(window.innerHeight);
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
	<div class="text-section">
		<div class="section-title">
			<h1><span class="title-prefix-icon">|</span> {title}</h1>
			<p>{description}</p>
		</div>
	</div>
</div>

<style>
	.center-prefix {
		text-align: center;
		border: 1px solid red;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title-prefix-icon {
		font-size: 4rem;
		line-height: 2rem;
		font-weight: lighter;

		/* font-size: 32px; */
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
		background-size: auto;
		background-position-x: top !important;
		width: auto;
		height: 24rem;
	}
	@media (max-width: 700px) {
		p {
			visibility: hidden;
		}
		.position-end {
			justify-content: start;
		}
	}
	p {
		line-height: 1.125rem;
	}
	.text-section {
		width: 24rem;
		transform: translateX(-25px);
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		padding: 0;
		opacity: 0;
		transition: all 500ms ease-in-out;
		color: white;
		z-index: 3 !important;
	}
</style>
