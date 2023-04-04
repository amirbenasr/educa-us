<script>
	import Member from '../../components/Member.svelte';
	import { members } from '../../types/member.type';
</script>

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
		{#each members as member}
			<Member memberDetails={member} />
		{/each}
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
	.team-section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
