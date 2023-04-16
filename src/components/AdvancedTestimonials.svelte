<script lang="ts">
	import { onMount } from 'svelte';
	import { testimonials } from '../utils';
	let drag = false;
	let threshold = 5;
	let startingX;
	let startingY;

	let downListener = (e) => {
		drag = false;
		startingX = event.pageX;
		startingY = event.pageY;
	};

	let moveListener = (e) => {
		const moveX = Math.abs(e.pageX - startingX);
		const moveY = Math.abs(e.pageY - startingY);

		if (moveX >= threshold || moveY >= threshold) {
			drag = true;
		}
	};

	let upListener = (e) => {
		if (drag && e.clientX > startingX) {
			previous();
		} else if (drag && e.clientX < startingX) {
			console.log('Drag left Detected');
			next();
		} else return;
	};

	let active;
	let element: HTMLElement;
	let testimonialElement: HTMLElement;

	const selectImage = (index) => () => {
		element.classList.add('hide');
		element.classList.remove('visible');
		active = index;
		element = document.getElementById(active);
		element.classList.remove('hide');
	};
	function next() {
		console.log('next');

		if (active >= testimonials.length - 1) return;
		element.classList.remove('active');
		active++;
		element = document.getElementById(active);
		element.classList.remove('hide');
		element.classList.add('active');
	}
	function previous() {
		console.log('previous');

		if (active == 0) return;
		element.classList.add('hide');
		element.classList.remove('active');
		active--;
		element = document.getElementById(active);
		element.classList.add('active');
	}

	onMount(() => {
		testimonialElement.addEventListener('mousedown', downListener);
		testimonialElement.addEventListener('mousemove', moveListener);
		testimonialElement.addEventListener('mouseup', upListener);

		element = document.querySelector('.visible');
		active = element?.id;
	});
</script>

<section class="testimonials" bind:this={testimonialElement}>
	<div class="carousel-actions">
		<div class="left">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa-solid fa-angle-left fa-2xl active"
				class:active={active != testimonials.length - 1}
				on:click={next}
			/>
		</div>
		<hr />
		<div class="right">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa-solid fa-angle-right fa-2xl active"
				class:active={active != 0}
				on:click={previous}
			/>
		</div>
	</div>
	<div class="fs-row">
		<div class="carousel">
			{#each testimonials as testimonial, index}
				<div
					id={index}
					class="testimonial-card"
					style="z-index: {index}; position:absolute; top:0; "
					class:next_item={active - 1 == index}
					class:visible={index == testimonials.length - 1}
				>
					<div class="avatar">
						<picture>
							<source
								media="(min-width: 2000px)"
								srcset="https://www.massachusetts.edu/sites/default/files/styles/square_xsml/public/2019-03/Jennifer%20Martinez%20DSC_0138_0_0.JPG?itok=0oQMXnO0"
							/>
							<img
								src="/students/Photos/img_{index}.jpg"
								class="avatar_image"
								alt={testimonial.student_name}
							/>
						</picture>
					</div>
					<div class="description">
						<div class="testimonial_quote">
							<div class="testimonial_quote_text">
								{testimonial.testimonial}
							</div>
						</div>
						<div class="info">
							<span class="personal"
								><span class="name">{testimonial.student_name}</span> Computer science student
							</span>
							<!-- <div class="personal">Name LastName</div> -->
							<!-- <div class="action">Sepcialty</div> -->
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="carousel-pagination">
		{#each testimonials as testimonial, index}
			<button
				class="carousel-page"
				class:carousel-active={index == active}
				on:click={selectImage(index)}
			/>
		{/each}
	</div>
</section>

<style>
	@media screen and (max-width: 500px) {
		.carousel-pagination {
			display: none !important;
		}
	}
	.carousel-active {
		background-color: white !important;
		height: 20px !important;
		width: 20px !important;
	}
	button {
		background: none;
		border: none;
		cursor: none;
		padding: 0;
	}
	.carousel-pagination {
		position: absolute;
		bottom: 3rem;
		left: 3rem;
		display: flex;
		align-items: center;
	}

	.carousel-page {
		height: 15px;
		width: 15px;
		position: relative;
		color: transparent;
		display: inline-block;
		overflow: hidden;
	}
	.testimonials .carousel-pagination button {
		display: inline-block;
		width: 12px;
		height: 12px;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 50%;
		margin-right: 8px;
		-webkit-transform: translateY(2px);
		transform: translateY(2px);
		-webkit-transition: width 0.25s ease, height 0.25s ease, -webkit-transform 0.25s ease;
		transition: width 0.25s ease, height 0.25s ease, -webkit-transform 0.25s ease;
		transition: transform 0.25s ease, width 0.25s ease, height 0.25s ease;
		transition: transform 0.25s ease, width 0.25s ease, height 0.25s ease,
			-webkit-transform 0.25s ease;
	}
	.active {
		color: #2a6dff;
	}
	:global(.hide) {
		transform: translateX(120%) !important;
	}
	.description {
		border-left: 2px solid white;
		padding-left: 5px;
		width: calc(100% - 500px) !important;
		text-align: left;
	}
	.visible {
		/* opacity: 0.4 !important; */
		transform: translateX(0px);
	}

	.next_item {
		transform: translateX(-100px);
		overflow: hidden !important;
	}
	.info .personal {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		font-size: 14px;
		font-size: 0.875rem;
		line-height: 1.85714;
		color: #fff;
	}
	.name {
		font-weight: 700;
		text-align: left;
		display: block;
	}
	.info {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
	}

	.testimonial_quote_text {
		position: relative;
	}

	@media screen and (min-width: 740px) {
		.description {
			width: calc(100% - 225px) !important;
		}
	}
	.testimonial_quote:before {
		width: 67px;
		height: 53px;
		display: block;
		position: absolute;
		left: -22px;
		top: -22px;
		background: transparent
			url('https://www.massachusetts.edu/themes/custom/umass/static/images/quote.svg') no-repeat;
		background-size: 67px 53px;
		content: '';
	}
	.testimonial_quote {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: 18px;
		font-size: 1.825rem;
		line-height: 1.33333;
		width: 100%;
		display: block;
		position: relative;
		color: #fff;
		margin-bottom: 24px;
	}
	.avatar_image {
		object-fit: cover;
		width: 100%;
		border-radius: 50%;
	}
	hr {
		margin-left: 0;
		margin-right: 0;
	}
	@media screen and (min-width: 980px) {
		.carousel-actions {
			display: flex !important;
		}
	}
	.carousel-actions {
		z-index: 60;
		display: none;
		flex-direction: column;
		justify-content: space-around;
		position: absolute;
		top: 50%;
		right: 0;
		height: 150px;
		width: 50px;
		margin-top: -75px;
		background-color: white;
	}
	.avatar {
		width: 300px;
		flex-shrink: 0;
	}
	.testimonials {
		text-align: center;
		position: relative;
		width: 100%;
		height: 500px;
		background-color: #025cb8;
		overflow: hidden;
	}
	.testimonials > * {
		user-select: none !important;
		-webkit-user-select: none !important;
	}
	img {
		-webkit-user-drag: none;
		max-width: 100%;
		max-height: 100%;
		height: 300px;
		width: 300px;
	}
	@media screen and (min-width: 1220px) {
		.carousel {
			width: 1200px;
		}
	}
	@media screen and (min-width: 980px) {
		.carousel {
			width: 960px;
		}
	}
	@media screen and (min-width: 740px) {
		.carousel {
			width: 720px;
		}
	}
	.fs-row {
		min-width: 300px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-left: auto;
		margin-right: auto;
	}
	.carousel {
		width: 1200px;
		position: relative;
		margin-left: auto;
		margin-right: auto;
	}
	.testimonial-card {
		/* border: 1px solid white; */
		/* transform: translateX(0%); */
		top: 0;
		display: flex;
		height: 400px;
		background-color: #025cb8;
		display: flex;
		align-items: center;
		justify-content: start;
		padding-left: 1.5rem;
		gap: 6rem;
		transition: transform 500ms ease-in-out;
	}
</style>
