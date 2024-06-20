<script lang="ts" setup>
	import { RouterView } from "vue-router";
	import Toast from "primevue/toast";

	import "primevue/resources/primevue.min.css";
	import "primevue/resources/themes/aura-dark-amber/theme.css";
</script>

<template>
	<Toast />
	<RouterView />
</template>
