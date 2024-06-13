<script lang="ts" setup>
	import { MainLayout } from "@widgets/layouts";
	import { Rating } from "@features/rating";
</script>

<template>
	<MainLayout>
		<section class="section">
			<Rating />
		</section>
	</MainLayout>
</template>

<style scoped>
	.section {
		align-self: center;
	}
</style>
