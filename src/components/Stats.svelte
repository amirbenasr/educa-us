<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
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
		animateValue(successRate!, 0, 100, 5000, '%');
		animateValue(masterRate!, 0, 100, 5000, '%');
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

<div class="container">
	<section class="stats" bind:this={sectionElement}>
		<div class="title">
			<h2>We Are &nbsp;Clear &nbsp;&nbsp;About &nbsp;&nbsp;&nbsp;Our Data</h2>
		</div>
		<div class="charts">
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
		</div>
	</section>
</div>

<style>
	.stats {
		width: 100%;
		padding: 16px;
		display: flex;
		align-items: center;
	}
	@media only screen and (max-width: 850px) {
		.stats {
			flex-direction: column !important;
			align-items: start;
			justify-content: center;
			padding-left: 3rem;
		}
		.title h2 {
			font-size: 2rem !important;
			width: 12rem !important;
			text-align: left;
			letter-spacing: 0rem !important;
		}
		.circle-stats {
			place-self: center !important;

			width: 140px !important;
			height: 140px !important;
		}
		.circle-stat-title {
			font-weight: 700;
			font-size: 2rem !important;
		}
	}
	.charts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		flex-grow: 1;
	}

	.title > h2 {
		margin: 0;
		font-weight: bolder;
		letter-spacing: -0.3rem;
		width: 35rem;
		font-size: 100%;
		text-transform: uppercase;
		line-height: 1em;
		font-size: 6rem;
		padding: 0;
		color: rgba(0, 0, 0, 0.855);
	}

	.circle-stats {
		justify-self: center;

		text-align: center;
		width: 240px;
		height: 240px;
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
		font-size: 4rem;
	}
</style>
