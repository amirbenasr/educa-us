<script lang="ts">
	import type { Member } from '../types/member.type';

	export let memberDetails: Member;
	const { img, name, position } = memberDetails;
</script>

<div class="member">
	<div class="member-container">
		<div class="member-circle" />
		<img class="member__image" src={img} alt="" srcset="" />
	</div>
	<span class="title">{name}</span>
	<small class="subtitle">{position}</small>
</div>

<style>
	.member {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.member-container {
		cursor: pointer;
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
