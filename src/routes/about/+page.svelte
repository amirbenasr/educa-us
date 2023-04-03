<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About Educa us</h1>

	<p>
		Welcome to Educa Us, a travel education agency that believes education and travel go hand in
		hand. We are passionate about providing our clients with unique and immersive travel experiences
		that not only broaden their horizons but also enrich their knowledge of the world..
	</p>
	<h1>Our team</h1>

	<p>
		Our team at Educa Us consists of travel experts and educators who have years of experience in
		creating customized educational travel itineraries. We understand that every traveler has
		different needs and interests, which is why we work closely with each client to create a
		personalized itinerary that meets their specific requirements.
	</p>

	<div class="team-section">
		<div class="member">
			<div class="member-container">
				<div class="member-circle" />
				<img class="member__image" src="/profile.png" alt="" srcset="" />
			</div>
			<span class="title">X Y</span>
			<small class="">CEO</small>
		</div>
		<div class="member">
			<div class="member-container">
				<div class="member-circle" />
				<img class="member__image" src="/profile.png" alt="" srcset="" />
			</div>
			<span class="title">X Y</span>
			<small class="subtitle">CEO</small>
		</div>
		<div class="member">
			<div class="member-container">
				<div class="member-circle" />
				<img class="member__image" src="/profile.png" alt="" srcset="" />
			</div>
			<span class="title">X Y</span>
			<small class="subtitle">CEO</small>
		</div>
		<div class="member">
			<div class="member-container">
				<div class="member-circle" />
				<img class="member__image" src="/profile.png" alt="" srcset="" />
			</div>
			<span class="title">X Y</span>
			<small class="subtitle">CEO</small>
		</div>
		<div class="member">
			<div class="member-container">
				<div class="member-circle" />
				<img class="member__image" src="/profile.png" alt="" srcset="" />
			</div>
			<span class="title">X Y</span>
			<small class="subtitle">CEO</small>
		</div>
	</div>
	<p>
		Our travel education programs are designed to provide a well-rounded educational experience. At
		Educa Us, we offer a wide range of programs, including language immersion courses, cultural
		exchanges, study abroad programs, and educational tours. Our programs are designed to give our
		clients an opportunity to learn about the local culture, history, and traditions of the places
		they visit.
	</p>
	<p>
		We believe that education and travel should be accessible to everyone, which is why Educa Us
		offers affordable programs that cater to a wide range of budgets. We are committed to providing
		our clients with the best value for their money and ensuring that they have a memorable and
		enriching travel experience.
	</p>
	<p>
		At Educa Us, we pride ourselves on our commitment to customer satisfaction. We work tirelessly
		to ensure that every aspect of our clients' travel experience is seamless and stress-free. From
		the initial planning stages to the end of the trip, we are here to provide our clients with the
		support they need to have a safe, comfortable, and enjoyable trip.
	</p>

	<p>
		Thank you for considering <a href="/"><span>Educa us</span></a> for your next adventure. We look
		forward to helping you discover the world and learn something new along the way.
	</p>
</div>

<style>
	.member {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.team-section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.member-container {
		position: relative;
		scale: 0.8;
		height: 300px;
		width: 250px;
		border-radius: 0 0 100vw 100vw;
		overflow: hidden;
		transition: transform 200ms ease-in-out;
	}
	.member-circle {
		position: absolute;
		aspect-ratio: 1/1;
		width: 100%;
		background-color: white;
		bottom: 0;
		border-radius: 100%;
	}
	img.member__image {
		position: absolute;
		width: 250px;
		max-height: 350px;
		transition: all 200ms 200ms ease-in-out;
	}
	img.member__image:hover {
		transform: translateY(-5px);
	}
	.member-container:hover {
		transform: scale(1.1);
	}
</style>
