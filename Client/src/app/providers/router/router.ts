import { createRouter, createWebHistory } from "vue-router";

import { Routes } from "@pages/routes";

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: Routes
});
