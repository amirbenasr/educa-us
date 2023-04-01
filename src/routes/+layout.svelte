<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
	import './fa.css';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app">
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
	/>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-top: 60px;

		width: 100%;
		box-sizing: border-box;
	}
</style>
