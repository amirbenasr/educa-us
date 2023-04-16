<script>
	import { onDestroy, onMount } from 'svelte';
	import { testimonials } from '../utils';
	import Testimonial from './Testimonial.svelte';
	export let style;
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

{#if style == 1}
	<section class="testimonials">
		<div class="section-title">
			<h1 style="color:var(--color-theme-2)">Testimonials</h1>
		</div>
		<div class="gallery">
			{#each testimonials as testimonial}
				<Testimonial {testimonial} />
				<!-- <figure class="picture">
						<img src={'/students/Photos/' + testimonial.image + '.jpg'} alt="" srcset="" />
						<figcaption>
							<blockquote>{testimonial.testimonial}</blockquote>
							<h3>{testimonial.student_name}</h3>
							<h5>Blidos</h5>
						</figcaption>
					</figure> -->
			{/each}
		</div>
	</section>
{/if}

{#if style == 2}
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
{/if}

<style>
	.gallery {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: 1rem;
		justify-content: center;
	}

	/* figure,
	img {
		margin: 0 !important;
		padding: 0 !important;
	} */
	.picture {
		cursor: pointer;

		height: 24rem;
		padding: 0 !important;
		margin: 0 !important;
		font-family: 'Lato', Arial, sans-serif;
		position: relative;
		display: inline-block;
		overflow: hidden;
		/* border-right: 1px solid rgb(149, 143, 143); */
		background-color: #000000;
		color: #ffffff;
		text-align: center;
		font-size: 16px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	}

	.picture img {
		vertical-align: top;
		opacity: 0.6;
		max-width: 100%;
		height: auto;
		object-fit: contain;
	}
	.picture h3 {
		font-family: 'Oswald';
		text-transform: uppercase;
		font-size: 20px;
		font-weight: 400;
		line-height: 24px;
		margin: 3px 0;
	}

	.picture h5 {
		font-weight: 400;
		margin: 0;
		text-transform: uppercase;
		color: #bbb;
		letter-spacing: 1px;
	}
	.picture blockquote {
		padding: 0;
		margin: 0;
		font-style: italic;
		font-size: 1em;
	}
	.picture figcaption:before {
		font-family: 'FontAwesome';
		content: '\201C';
		position: absolute;
		font-size: 60px;
		opacity: 0.45;
		font-style: normal;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		top: 10%;
		left: 50%;
	}
	.picture figcaption {
		position: absolute;
		top: 7rem;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 80px 10% 15%;
	}
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
	/* img.active {
		border: 1px solid blue;
	} */
	/* .testimonials-slider {
		display: flex;
		width: 100%;
	} */

	.section-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 80px;
	}
</style>
