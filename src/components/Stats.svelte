<script lang="ts">
	import { onMount } from 'svelte';
	import { animateValue } from '../utils.js';
	let animted = false;
	let sectionElement: HTMLElement;
	let successRate: HTMLElement,
		studentsRate: HTMLElement,
		visaRate: HTMLElement,
		masterRate: HTMLElement;
	function showRates() {
		animateValue(visaRate!, 0, 96, 1500, '%');
		animateValue(studentsRate!, 0, 250, 2500, '+');
		animateValue(successRate!, 0, 97, 5000, '%');
		animateValue(masterRate!, 0, 97, 5000, '%');
	}
	onMount(() => {
		document.addEventListener('scroll', (e) => {
			if (window.innerHeight - sectionElement.getBoundingClientRect().top > 100 && !animted) {
				showRates();
				animted = true;
			}
		});
	});
</script>

<section class="stats" bind:this={sectionElement}>
	<div class="circle-stats">
		<span class="circle-stat-title" id="visa-rate" bind:this={visaRate} />
		<span> Visa Approval Rate </span>
	</div>
	<div class="circle-stats">
		<span class="circle-stat-title" id="students-rate" bind:this={studentsRate} />
		<span>Students </span>
	</div>
	<div class="circle-stats">
		<span class="circle-stat-title" id="success-rate" bind:this={successRate} />
		<span> Integration Rate </span>
	</div>
	<div class="circle-stats">
		<span class="circle-stat-title" id="success-rate" bind:this={masterRate} />
		<span> Master Acceptance Rate </span>
	</div>
</section>

<style>
	@media only screen and (max-width: 600px) {
		.stats {
			flex-direction: column !important;
			align-items: center;
		}
	}
	.stats {
		padding: 16px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.circle-stats {
		text-align: center;
		width: 150px;
		height: 150px;
		border-radius: 100%;
		background-color: var(--color-theme-2);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 16px;
		margin: 8px;
	}
	.circle-stat-title {
		font-weight: 700;
		font-size: clamp(1.1rem, 1.7153rem + 1.6368vw, 1.8rem);
	}
</style>
