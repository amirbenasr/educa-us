<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Testimonial } from '../utils';

	export let testimonial: Testimonial;
	let element: Element;
	onMount(() => {
		setTimeout(() => {
			element.classList.add('active');
		}, 100);
	});
</script>

<div class="section-body" bind:this={element}>
	<div class="section-left">
		<div class="img-container">
			<img src="/students/Photos/{testimonial.image}.jpg" alt="" srcset="" />
		</div>
	</div>
	<div class="section-right">
		<div class="title">
			<h2>{testimonial.student_name}</h2>
		</div>
		<div class="testimonial">
			<p>
				{testimonial.testimonial}
			</p>
		</div>
	</div>
</div>

<style>
	.testimonial {
		text-overflow: ellipsis;
		width: fit-content;
		margin: 16px;
		overflow-wrap: break-word;
	}

	@media (min-width: 1000px) {
		.testimonial {
			width: 32rem;
		}
	}

	p {
		font-size: clamp(1rem, 1.125vm, 2rem);
		line-height: 1.5rem;
		text-align: center;
	}
	.testimonial p::before {
		content: '"';
		font-size: 2rem;
	}
	.testimonial p::after {
		content: '"';
		font-size: 2rem;
	}
	.img-container {
		width: auto;
		margin: 6px;
		height: 20rem;
		/* border: 2px solid #fff; */
		border-radius: 25px;
	}
	.img-container img {
		object-fit: fill;
		width: 20rem;
		height: 20rem;
		border-radius: 25px;
		box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.2);
	}
	.section-body {
		transition: all ease-in 500ms;
		transform: translateX(-30px);
		opacity: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: start;
		text-align: center;
	}
	@media (max-width: 600px) {
		.section-body {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	:global(.active) {
		opacity: 1 !important;
		transform: translateX(0px) !important;
	}
</style>
