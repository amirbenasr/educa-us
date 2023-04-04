<script>
	//write code here
</script>

<div class="scroll-parent">
	<div class="scroll-element primary">
		<div class="box red" />
		<div class="box yellow" />
		<div class="box green" />
	</div>
	<div aria-hidden="true" class="scroll-element">
		<div class="box red" />
		<div class="box yellow" />
		<div class="box green" />
	</div>
</div>

<style>
	.red {
		width: 150px;
		height: 150px;
		background-color: red;
	}
	.green {
		width: 150px;
		height: 150px;
		background-color: green;
	}
	.yellow {
		width: 150px;
		height: 150px;
		background-color: yellow;
	}
	.scroll-parent {
		position: relative;
		width: 80%;
		margin-left: 15rem;
		height: 20rem;
		overflow-x: hidden;
		text-align: center;
	}

	.scroll-element {
		display: grid;
		grid-auto-flow: column;
		gap: 3rem;
		width: inherit;
		height: inherit;
		position: absolute;
		left: 0%;
		top: 0%;
		animation: primary 3s linear infinite;
	}
	.primary {
		animation: primary 3s linear infinite;
	}

	@keyframes primary {
		from {
			left: 0%;
		}
		to {
			left: -100%;
		}
	}

	@keyframes secondary {
		from {
			left: 100%;
		}
		to {
			left: 0%;
		}
	}
</style>
