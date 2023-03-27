<script>
	import { onDestroy, onMount } from 'svelte';
	import { testimonials } from '../utils';
	import Testimonial from './Testimonial.svelte';
	let index = 0;
	let time = 3000;
	let scrollInterval = setInterval(() => {
		if (index > 4) {
			index = 0;
			return;
		}
		index += 1;
	}, time);

	onDestroy(() => {
		clearInterval(scrollInterval);
	});
</script>

<section class="testimonials">
	<div class="section-title">
		<h1 style="color:var(--color-theme-2)">Testimonials</h1>
	</div>
	<div class="testimonials-slider">
		{#key index}
			<Testimonial testimonial={testimonials[index]} />
		{/key}
	</div>
	<div class="section-footer">
		{#each testimonials as testimonial, currentIndex}
			<div
				class="slider-avatar"
				on:keydown={() => {}}
				on:click={(e) => {
					index = currentIndex;
					clearInterval(scrollInterval);
					scrollInterval = setInterval(() => {
						if (index > 4) {
							index = 0;
							return;
						}
						index += 1;
					}, time);
				}}
			>
				<img
					class:active={currentIndex == index}
					src="/students/Photos/{testimonial.image}.jpg"
					alt=""
					srcset=""
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.slider-avatar {
		padding-left: 1rem;
		cursor: pointer;
	}
	.slider-avatar img {
		object-fit: cover;
		height: 2rem;
		width: 2rem;
		border-radius: 100%;
		border: 2px solid #fff;
	}
	img.active {
		border: 1px solid blue;
	}
	.testimonials-slider {
		display: flex;
		width: 100%;
	}

	.section-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 80px;
	}
</style>
