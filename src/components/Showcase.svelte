<script>
	import Map from './Map.svelte';
</script>

<section id="showcase">
	<div class="section-title">
		<h1 style="color:var(--color-theme-2)">Our Best Destinations</h1>
	</div>

	<div class="section-content">
		<ul class="states__list">
			<li>Washington</li>
			<li>California</li>
			<li>Texas</li>
			<li>Florida</li>
			<li>New York</li>
			<li>Massachusetts</li>
		</ul>
		<Map />
	</div>
</section>

<style>
	@media screen and (max-width: 1200px) {
		#showcase {
			display: none !important;
		}
	}
	.section-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
	}
	.states__list {
		list-style: none;
	}
	.states__list > * {
		margin: 0.8rem;
		font-weight: 500;
		font-size: 1.5rem;
		color: var(--color-theme-2);
	}
</style>
