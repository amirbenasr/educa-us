<script>
	let boxes = ['california', 'florida', 'new-york', 'texas', 'massachussets', 'tunisia-tourism'];
</script>

<section class="partners">
	<!-- <div class="section-title">
		<h1 style="color:var(--color-theme-2)">Our Accreditations and Approvals</h1>
		<span class="section-description"
			>Atlantis University is accredited by the Accrediting Commission for Career Schools and
			Colleges (ACCSC), and is licensed by the Commission for Independent Education (CIE), Florida
			Department of Education.</span
		>
	</div> -->
	<div class="container">
		<div aria-hidden="true" class="marquee">
			<!-- <div class="fade" /> -->
			<div class="marquee-group">
				{#each boxes as box}
					<div class="box" style="background-color: {box};width:80px">
						<img src={'partners/' + box + '.png'} alt="" srcset="" />
					</div>
				{/each}
			</div>
			<div class="marquee-group">
				{#each boxes as box}
					<div class="box" style="background-color: {box};width:80px">
						<img src={'partners/' + box + '.png'} alt="" srcset="" />
					</div>
				{/each}
			</div>
			<div class="marquee-group">
				{#each boxes as box}
					<div class="box" style="background-color: {box};width:80px">
						<img src={'partners/' + box + '.png'} alt="" srcset="" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.box {
		display: flex;
		justify-content: center;
		margin-right: 3rem;
		width: 300px !important;
		height: 100px !important;
	}
	.box img {
		max-width: 100%;
		max-height: 100%;
		object-fit: fill;
	}
	.marquee-group {
		display: flex;
		gap: 0;
		align-items: center;
		animation-duration: 25s;
		animation-name: slide;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	.container {
		display: grid;
		align-content: center;
		/* background-color: green; */
		margin-left: auto;
		margin-right: auto;
		width: 80%;
		padding: 32px;
	}

	.marquee {
		height: 150px;
		/* background-color: white; */
		position: relative;
		display: flex;
		overflow: hidden;
		align-items: center;
	}
	.fade {
		pointer-events: none;
		background: linear-gradient(90deg, #1e293b, transparent 30%, transparent 70%, #1e293b);
		position: absolute;
		inset: 0;
	}
	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
