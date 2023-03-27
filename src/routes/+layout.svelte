<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
	import './fa.css';
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

	<!-- <footer> -->
	<div class="footer">
		<div class="icons">
			<a href="#">
				<i class="fa-brands fa-instagram fa-xl blue-icon" />
			</a>
			<a href="#">
				<i class="fa-brands fa-twitter fa-xl blue-icon" />
			</a>
			<a href="#">
				<i class="fa-brands fa-facebook fa-xl blue-icon" />
			</a>
			<a href="#">
				<i class="fa-brands fa-linkedin fa-xl blue-icon" />
			</a>
			<a href="http://">
				<i class="fa-brands fa-youtube fa-xl blue-icon" />
			</a>
		</div>
		<span class="divider" />
		<div class="contact">
			<div class="contact-details">
				<span class="contact-header"> contact us </span>
				<p>54.014.133</p>
			</div>
		</div>
		<span class="divider" />
		<div class="contact">
			<div class="contact-details">
				<span class="contact-header"> Email us </span>
				<p>contact@educaus.edu</p>
			</div>
		</div>
		<span class="divider" />
		<div class="contact">
			<div class="contact-details">
				<span class="contact-header"> Location </span>
				<p>Lac 2</p>
			</div>
		</div>
	</div>
	<p style="text-align: center;">visit <a href="#">educa.us</a> to apply for your Visa</p>
	<!-- </footer> -->
</div>

<style>
	.contact {
		display: flex;
		align-items: center;
		color: var(--color-theme-2);
	}
	.contact-details {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.contact-header {
		font-weight: 700;
		text-transform: uppercase;
	}
	.footer {
		height: 6rem;
		background-color: var(--color-bg-2);
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		padding: 16px;
	}
	.icons {
		width: 16rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	span.divider::after {
		content: '';
		border-right: 1.4px solid var(--color-theme-2);
		height: 5rem;
		display: flex;
	}
	.blue-icon {
		color: rgb(30, 48, 80);
	}
	.icons > a {
		padding-left: 8px;
	}
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (max-width: 720px) {
		.footer {
			flex-direction: column;
			/* justify-content: ; */
			justify-content: space-evenly !important;
			height: auto;
			margin: 0px !important;
		}
		span.divider {
			transform: rotate(90deg);
			margin: 0 !important;
			padding: 0px;
		}
	}
</style>
