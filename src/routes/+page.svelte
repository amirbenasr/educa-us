<script type="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Section from '../components/Section.svelte';
	import educa_fvideo from '$lib/videos/educa_fvideo.mp4';
	import { browser } from '$app/environment';
	import education_section from '$lib/images/education_section.jpg';
	import health_section from '$lib/images/health_section.jpg';
	import career_section from '$lib/images/career_section.jpg';
	import { onMount } from 'svelte';
	import Testimonials from '../components/Testimonials.svelte';

	onMount(() => {
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	});
</script>

<svelte:head>
	<title>Educa US</title>
	<meta name="description" content="Educa US" />
</svelte:head>

<div class="full-width">
	<section class="video-section">
		<a href="#IT"><span /></a>
		<video autoplay loop class="educa-video" muted src={educa_fvideo} />
	</section>
	<Section
		props={{
			sectionId: 'IT',
			title: 'IT',
			description:
				'Our IT section offers customized solutions to keep you connected, productive, and secure while traveling. We specialize in network security, cloud computing, data management, and more. Stay ahead of the curve with the latest tools and technologies that are reliable, efficient, and affordable. Let us help you stay connected and productive wherever your travels take you.',
			color: '#ffffff',
			image: education_section,
			left: false,
			position: 'top right'
		}}
	/>

	<Section
		props={{
			sectionId: 'test',
			title: 'Scolarship Program',
			description:
				'Our scholarship programs are highly competitive, and we select successful applicants based on their academic achievements, leadership potential, and community involvement. We aim to support students in their pursuit of academic excellence, personal growth, and career development through our scholarship programs.',
			color: '',
			image: career_section,
			left: true,
			position: 'top left'
		}}
	/>
	<Section
		props={{
			sectionId: 'health',
			title: 'Health Care',
			description:
				'Traveling for medical treatment or education can be overwhelming. Our healthcare section offers personalized assistance to help you find the best facilities and education worldwide. We prioritize safety, quality, and affordability in our recommendations, ensuring you have access to the most advanced medical treatments and education. Let us be your partner in your healthcare journey.',
			color: '',
			image: health_section,
			left: false,
			position: 'center  top    '
		}}
	/>
	<Testimonials />
</div>

<style>
	a span {
		z-index: 1;
		position: absolute;
		left: 50%;
		bottom: 2px;
		margin-left: -15px;
		width: 30px;
		height: 50px;
		border: 2px solid #ffffff;
		border-radius: 50px;
	}
	span::before {
		position: absolute;
		left: 50%;
		top: 5px;
		margin-left: -5px;
		width: 10px;
		height: 10px;
		border-radius: 100%;
		content: '';
		background-color: #fff;
		color: #fff;
		animation: sdb10 2s infinite;
	}
	@keyframes sdb10 {
		0% {
			transform: translate(0, 0);
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			transform: translate(0, 20px);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	.video-section {
		position: relative;
	}

	.full-width {
		width: 100%;
	}
	.educa-video {
		width: 100%;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
