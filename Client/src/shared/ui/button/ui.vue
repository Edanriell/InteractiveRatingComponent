<script lang="ts" setup>
	import gsap from "gsap";

	const props = defineProps<{
		type: "button" | "submit" | "reset";
	}>();

	const handleButtonMouseUp = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 1.05,
			duration: 0.25,
			ease: "power1.inOut"
		});
	};

	const handleButtonMouseDown = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 0.95,
			duration: 0.25,
			ease: "power1.inOut"
		});
	};

	const handleButtonMouseEnter = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 1.05,
			background: "#FFF",
			duration: 0.25,
			ease: "power1.inOut"
		});
	};

	const handleButtonMouseLeave = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 1,
			background: "#fc7614",
			duration: 0.25,
			ease: "power1.inOut"
		});
	};

	const handleButtonTouchStart = (event: TouchEvent) => {
		gsap.to(event.target, {
			scale: 1.05,
			background: "#FFF",
			duration: 0.25,
			ease: "power1.inOut"
		});
	};

	const handleButtonTouchEnd = (event: TouchEvent) => {
		gsap.to(event.target, {
			scale: 1,
			background: "#fc7614",
			duration: 0.25,
			ease: "power1.inOut"
		});
	};
</script>

<template>
	<button
		:type="props.type"
		class="button"
		@mousedown="handleButtonMouseDown"
		@mouseenter="handleButtonMouseEnter"
		@mouseleave="handleButtonMouseLeave"
		@mouseup="handleButtonMouseUp"
		@touchend="handleButtonTouchEnd"
		@touchstart="handleButtonTouchStart"
	>
		<slot />
	</button>
</template>

<style scoped>
	.button {
		width: 100%;
		border-radius: 2.2rem;
		background: var(--orange);
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 1.4rem;
		letter-spacing: 0.13em;
		color: var(--very-dark-blue);
		padding-top: 1.4rem;
		padding-bottom: 1.3rem;
		border: none;
		cursor: pointer;
		text-transform: uppercase;

		@media (width >= 768px) {
			font-size: 1.5rem;
		}
	}
</style>
