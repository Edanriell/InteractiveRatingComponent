import { onMounted, onUnmounted, ref } from "vue";

export const useWindowWidth = () => {
	const windowWidth = ref(window.innerWidth);

	const updateWindowWidth = () => {
		windowWidth.value = window.innerWidth;
	};

	onMounted(() => {
		window.addEventListener("resize", updateWindowWidth);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", updateWindowWidth);
	});

	return { windowWidth };
};
