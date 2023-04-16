export type Testimonial = {
	image: string;
	student_name: string;
	testimonial: string;
};

export const testimonials: Testimonial[] = [
	{
		image: 'img_0',
		student_name: 'Sawseen jrad',
		testimonial:
			'Educa us Team provided me with a personalized itinerary that allowed me to fully immerse myself in the local culture and learn about the history and traditions of the places I visited. '
	},
	{
		image: 'img_1',
		student_name: 'Aziz Bardi',
		testimonial:
			'Educa us Team provided me with a personalized itinerary that allowed me to fully immerse myself in the local culture and learn about the history and traditions of the places I visited. '
	},

	{
		image: 'img_2',
		student_name: 'Mayssa mehouechi',
		testimonial:
			'Educa Us provided me with an exceptional travel education experience that surpassed all my expectations. The personalized itinerary created by their team of travel experts and educators was impressive'
	},

	{
		image: 'img_3',
		student_name: 'Rani  maghrbi',
		testimonial:
			'My travel education experience with Educa Us was nothing short of exceptional. The customized itinerary crafted by their team of travel experts and educators allowed me to explore the local culture and history to a great extent'
	},

	{
		image: 'img_4',
		student_name: 'Safouene ben rjeb',
		testimonial:
			'The team of travel experts and educators worked tirelessly to ensure that every aspect of my trip was seamless and stress-free. The language immersion course and educational tours were excellent'
	},

	{
		image: 'img_5',
		student_name: 'Khalil chatti',
		testimonial:
			'My education travel experience with Educa Us was simply amazing, I would highly recommend their services to anyone seeking an immersive and educational travel experience.'
	},

	{
		image: 'img_6',
		student_name: 'Yessin dahmene',
		testimonial:
			"The itinerary was seamlessly organized, making the trip stress-free and enjoyable. The agency's attention to detail and commitment to customer satisfaction was truly exceptional."
	}
];

export const animateValue = (
	obj: HTMLElement,
	start: number,
	end: number,
	duration: number,
	literal = ''
) => {
	let startTimestamp: any = null;
	const step = (timestamp: number) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerText = Math.floor(progress * (end - start) + start).toString() + literal;
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
};
