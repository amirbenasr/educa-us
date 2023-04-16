<!-- <footer> -->
<div class="footer">
	<div class="footer-header">
		<div class="logo">
			<img src="/logo.png" alt="" srcset="" />
		</div>
		<div class="description">
			<div class="address">
				<div class="contact-details align-left">
					<!-- <span class="contact-header blue-icon align-left">
						<i class="fa-solid fa-location-dot" /> Location
					</span> -->
					<!-- <span class="blue-icon align-left"> -->
					<a
						class="blue-icon align-left"
						target="_blank"
						href="https://www.google.com/maps/dir/36.8665383,10.22637/36.8482342,10.2703983/@36.852128,10.2056903,13z/"
					>
						<p>Tunis, Tunisie</p>
						<p>Lac 2, Immeuble Saphir</p>
						<p>Local B.3.2 Rue De La Bourse</p>
						<!-- </span> -->
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- <span class="divider" /> -->

	<div class="contact">
		<div class="contact-details">
			<span class="contact-header"> Email us </span>
			<a href="mailto:educaustravel@gmail.com" class="blue-icon"><p>educaustravel@gmail.com</p></a>
		</div>
	</div>
	<!-- <span class="divider" /> -->
	<div class="contact">
		<div class="contact-details">
			<span class="contact-header"> contact us </span>

			<a href="tel:+21655961771" class="blue-icon"><p>+216.55.961.771</p></a>
		</div>
	</div>
	<!-- <span class="divider" /> -->

	<div class="icons">
		<a href="https://www.instagram.com/educa_us/" target="_blank">
			<i class="fa-brands fa-instagram fa-xl blue-icon" />
		</a>
		<!-- until we get twitter link -->
		<!-- <a href="#">
			<i class="fa-brands fa-twitter fa-xl blue-icon" />
		</a> -->
		<a href="https://www.facebook.com/EducaUS.tn" target="_blank">
			<i class="fa-brands fa-facebook fa-xl blue-icon" />
		</a>
		<a href="https://www.linkedin.com/in/educa-us-5883521b3/" target="_blank">
			<i class="fa-brands fa-linkedin fa-xl blue-icon" />
		</a>
		<!-- <a href="http://">
			<i class="fa-brands fa-youtube fa-xl blue-icon" />
		</a> -->
	</div>
</div>

<!-- <p style="text-align: center;">visit <a href="#">educa.us</a> to apply for your Visa</p> -->

<!-- </footer> -->
<style>
	.description {
		font-size: 100%;
	}
	.footer-header {
		display: flex;
		/* flex-shrink: 0; */
		align-items: center;
		justify-content: start;
	}
	.logo img {
		max-height: 120px;
		max-width: 120px;
	}
	.align-left {
		text-align: left;
	}
	.contact {
		display: flex;
		align-items: center;
		color: var(--color-theme-2);
	}
	.contact-details {
		display: flex;
		gap: 1rem;
		justify-content: flex-start;
		align-items: center;
	}
	.contact-header {
		font-weight: 700;
		text-transform: uppercase;
	}
	.footer {
		background-color: var(--color-bg-2);
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: center;

		gap: 1rem;
		padding: 1rem;
	}
	.footer > * {
		flex-grow: 1;
	}

	.icons {
		width: 16rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	/* span.divider::after {
		content: '';
		border-right: 1.4px solid var(--color-theme-2);
		height: 5rem;
		display: flex;
	} */
	.blue-icon {
		color: rgb(30, 48, 80);
	}
	.icons > a {
		padding-left: 8px;
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
