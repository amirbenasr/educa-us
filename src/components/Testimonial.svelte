<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Testimonial } from '../utils';

	export let testimonial: Testimonial;
	let element: Element;
	// onMount(() => {
	// 	setTimeout(() => {
	// 		element.classList.add('active');
	// 	}, 100);
	// });
</script>

<div class="testimonial">
	<div class="testimonial-body">
		<p>
			{testimonial.testimonial}
		</p>
		<i class="fas fa-quote-right" />
	</div>
	<div class="testimonial-footer">
		<img src="/students/Photos/{testimonial.image}.jpg" alt="user" />
		<h3>{testimonial.student_name}</h3>
		<h4>Student</h4>
	</div>
</div>

<!-- <div class="section-body" bind:this={element}>
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
			<p style="color:var(--color-theme-2-lighter) ">
				{testimonial.testimonial}
			</p>
		</div>
	</div>
</div> -->

<style>
	.testimonial {
		background-color: #fff;
		border-radius: 20px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		overflow: hidden;
		width: 400px;
		min-width: 0px;
		display: flex;
		flex-direction: column;
		/* justify-content: center;
		align-items: ce; */
		font-size: 100%;
	}

	.testimonial-body {
		padding: 40px 40px 80px;
		font-size: 100%;
		height: 350px;
		max-height: 450px;
	}

	.testimonial-body p {
		color: #555;
		font-size: 20px;
		line-height: 36px;
		margin: 0;
		font-size: 100%;
	}

	.testimonial-body .fa-quote-right {
		color: #eee;
		font-size: 40px;

		float: right;
	}

	.testimonial-footer {
		flex-grow: 1;
		background: linear-gradient(var(--color-theme-2-lighter), var(--color-theme-2));
		color: #fff;
		padding: 40px;
		text-align: center;
	}

	.testimonial-footer img {
		border-radius: 50%;
		border: 5px solid #fff;
		height: 120px;
		width: 120px;
		margin-top: -100px;
	}

	.testimonial-footer h3 {
		margin: 10px 0;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.testimonial-footer h4 {
		color: #b3b5ef;
		margin: 0;
		letter-spacing: 1px;
	}
	.title {
		color: var(--color-theme-2);
	}
	.testimonial {
		text-overflow: ellipsis;
		width: fit-content;
		margin: 16px;
		overflow-wrap: break-word;
	}

	/* @media (min-width: 1000px) {
		.testimonial {
			width: 32rem;
		}
	} */

	p {
		font-size: clamp(1rem, 1.125vm, 2rem);
		line-height: 1.5rem;
		text-align: center;
	}
	.testimonial p::before {
		font-size: 2rem;
	}
	.testimonial p::after {
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
