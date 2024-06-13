<script lang="ts" setup></script>

<template>
	<main class="main">
		<h1 class="visually-hidden">Interactive Rating Component</h1>
		<slot />
	</main>
</template>

<style scoped>
	.main {
		background: var(--very-dark-blue);
		min-width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
