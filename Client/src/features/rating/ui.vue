<script lang="ts" setup>
	import { onMounted, ref } from "vue";

	import { Button } from "@shared/ui";

	import {
		displaySubmittedContent,
		handleInputMouseDown,
		handleInputMouseEnter,
		handleInputMouseLeave,
		handleInputMouseUp,
		handleInputTouchEnd,
		handleInputTouchStart,
		highlightSelectedInput,
		removeHighlightFromPreviouslySelectedInput
	} from "./model";

	import ResultsSvg from "./assets/results.svg";

	const selectedRatingValue = ref<number | null>(null);
	const ratingFormState = ref<"invalid" | "valid" | "submitted">("invalid");
	let currentlySelectedInputIndex = ref<number | null>(null);

	const formRef = ref<HTMLFormElement | null>(null);
	const mainContentRef = ref<HTMLDivElement | null>(null);
	const submittedContentRef = ref<HTMLDivElement | null>(null);

	onMounted(() => {
		const isRatingFormSubmitted = Boolean(localStorage.getItem("isRatingFormSubmitted"));

		if (isRatingFormSubmitted) ratingFormState.value = "submitted";
	});

	const handleInputMouseClick = (event: Event, inputValue: number, index: number) => {
		selectedRatingValue.value = inputValue;

		if (selectedRatingValue.value) {
			ratingFormState.value = "valid";
		} else {
			return;
		}

		removeHighlightFromPreviouslySelectedInput({
			currentlySelectedInputIndex: currentlySelectedInputIndex.value,
			inputValue,
			form: formRef.value as HTMLFormElement
		});

		highlightSelectedInput({
			selectedRatingValue: selectedRatingValue.value,
			inputValue,
			input: event.target as HTMLInputElement
		});

		currentlySelectedInputIndex.value = index;
	};

	const handleFormSubmit = (event: Event) => {
		event.preventDefault();

		if (ratingFormState.value === "invalid") return;

		ratingFormState.value = "submitted";

		displaySubmittedContent({
			ratingFormState: ratingFormState.value,
			mainContent: mainContentRef.value as HTMLDivElement,
			submittedContent: submittedContentRef.value as HTMLDivElement
		});

		// localStorage.setItem("isRatingFormSubmitted", "true");
	};
</script>

<template>
	<article class="rating-card">
		<div ref="mainContentRef" class="rating-card__content-rating">
			<span class="rating-card__icon-wrapper">
				<svg
					class="rating-card__icon"
					fill="none"
					viewBox="0 0 17 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.06688 0.429953L11.0567 4.46137C11.1691 4.68909 11.3864 4.84692 11.6377 4.88341L16.0866 5.52998C16.3773 5.5722 16.6188 5.77583 16.7095 6.05523C16.8002 6.33463 16.7244 6.64131 16.514 6.84627L13.2943 9.98421C13.1122 10.1617 13.0296 10.4171 13.0721 10.667L13.8321 15.0981C13.8816 15.3876 13.7626 15.6801 13.525 15.8527C13.2874 16.0253 12.9724 16.048 12.7125 15.9114L8.73279 13.8189C8.50789 13.7009 8.23937 13.7009 8.01447 13.8189L4.03475 15.9114C3.77481 16.048 3.45984 16.0253 3.22224 15.8527C2.98464 15.6801 2.86562 15.3876 2.91521 15.0981L3.6752 10.667C3.71815 10.4167 3.63503 10.1613 3.45299 9.98421L0.233258 6.84627C0.022814 6.64131 -0.0529846 6.33463 0.0377459 6.05523C0.128477 5.77583 0.369993 5.5722 0.660704 5.52998L5.10953 4.88341C5.36085 4.84692 5.57812 4.68909 5.69052 4.46137L7.68038 0.429953C7.96586 -0.143318 8.78372 -0.143318 9.06688 0.429953Z"
						fill="#FC7614"
					/>
				</svg>
			</span>
			<h2 class="rating-card__title">How did we do?</h2>
			<p class="rating-card__text">
				Please let us know how we did with your support request. All feedback is appreciated to help
				us improve our offering! {{ selectedRatingValue }}
			</p>
			<form ref="formRef" class="rating-card__rating-form rating-form" @submit="handleFormSubmit">
				<div class="rating-form__rating-input-wrapper">
					<div v-for="(rating, index) in [1, 2, 3, 4, 5]" :key="rating">
						<label class="visually-hidden" for="rating1">Rating {{ rating }}</label>
						<input
							:value="rating"
							class="rating-form__rating-input"
							type="button"
							@click="(event) => handleInputMouseClick(event, rating, index)"
							@mousedown="handleInputMouseDown"
							@mouseenter="
								(event) =>
									handleInputMouseEnter({
										event,
										rating,
										selectedRatingValue: selectedRatingValue
									})
							"
							@mouseleave="
								(event) =>
									handleInputMouseLeave({
										event,
										rating,
										selectedRatingValue: selectedRatingValue
									})
							"
							@mouseup="handleInputMouseUp"
							@touchend="
								(event) =>
									handleInputTouchEnd({
										event,
										rating,
										selectedRatingValue: selectedRatingValue
									})
							"
							@touchstart="
								(event) =>
									handleInputTouchStart({
										event,
										rating,
										selectedRatingValue: selectedRatingValue
									})
							"
						/>
					</div>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</div>
		<div ref="submittedContentRef" class="rating-card__content-rating-submitted">
			<img :src="ResultsSvg" alt="my-logo" class="rating-card__image" />
			<p class="rating-card__rating-result">You selected 4 out of 5</p>
			<h2 class="rating-card__title rating-card__title--text-align--center">Thank you!</h2>
			<p class="rating-card__text rating-card__text--text-align--center">
				We appreciate you taking the time to give a rating. If you ever need more support, don’t
				hesitate to get in touch!
			</p>
		</div>
	</article>
</template>

<style scoped>
	.rating-card {
		border-radius: 1.5rem;
		background: radial-gradient(98.96% 98.96% at 50% 0%, rgb(35, 42, 52) 0%, rgb(24, 30, 39) 100%);
		margin-left: 2.4rem;
		margin-right: 2.4rem;
		max-width: 32.7rem;
		overflow: hidden;
		display: flex;
		flex-direction: row;

		@media (width >= 768px) {
			border-radius: 3rem;
			max-width: 41.2rem;
		}
	}

	.rating-card__content-rating {
		padding: 2.4rem 2.4rem 3.2rem 2.4rem;
		display: block;
		flex: 0 0 32.7rem;

		@media (width >= 768px) {
			padding: 3.2rem;
			flex: 0 0 41.2rem;
		}
	}

	.rating-card__icon-wrapper {
		border-radius: 100%;
		width: 4rem;
		height: 4rem;
		background: var(--dark-blue);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.6rem;

		@media (width >= 768px) {
			width: 4.8rem;
			height: 4.8rem;
			margin-bottom: 3rem;
		}
	}

	.rating-card__icon {
		width: 1.3rem;
		height: 1.3rem;

		@media (width >= 768px) {
			width: 1.6rem;
			height: 1.6rem;
		}
	}

	.rating-card__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 2.4rem;
		color: var(--pure-white);
		text-align: left;
		margin: 0 0 1.7rem 0;

		@media (width >= 768px) {
			font-size: 2.8rem;
			margin: 0 0 0.7rem 0;
		}
	}

	.rating-card__title--text-align--center {
		text-align: center;
	}

	.rating-card__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 157%;
		color: var(--light-grey);
		text-align: left;
		margin: 0;

		@media (width >= 768px) {
			font-size: 1.5rem;
			line-height: 160%;
		}
	}

	.rating-card__text--text-align--center {
		text-align: center;
	}

	.rating-card__rating-form {
		position: relative;
		margin-top: 2.4rem;
	}

	.rating-form {
		display: flex;
		flex-direction: column;
		row-gap: 2.4rem;

		@media (width >= 768px) {
			row-gap: 3.2rem;
		}
	}

	.rating-form__rating-input-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.rating-form__rating-input {
		width: 4.2rem;
		height: 4.2rem;
		border-radius: 100%;
		background: var(--dark-blue);
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 1.4rem;
		line-height: 171%;
		letter-spacing: 0.01em;
		text-align: center;
		color: var(--light-grey);
		cursor: pointer;
		border: none;

		@media (width >= 768px) {
			width: 5.1rem;
			height: 5.1rem;
			font-size: 1.6rem;
			line-height: 150%;
		}
	}

	.rating-card__content-rating-submitted {
		padding: 3.4rem 2.4rem 3.7rem 2.4rem;
		display: block;
		flex-direction: column;
		align-items: center;
		flex: 0 0 32.7rem;

		@media (width >= 768px) {
			flex: 0 0 41.2rem;
			padding: 4.5rem 3.2rem 4.5rem 3.2rem;
		}
	}

	.rating-card__image {
		width: 14.4rem;
		height: 9.6rem;
		margin: 0 auto 2.4rem auto;
		display: block;

		@media (width >= 768px) {
			width: 16.2rem;
			height: 10.8rem;
			margin: 0 auto 3.2rem auto;
		}
	}

	.rating-card__rating-result {
		border-radius: 2.2rem;
		background: var(--dark-blue);
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 157%;
		text-align: center;
		color: var(--orange);
		padding: 0.5rem 1.2rem;
		margin: 0 0 2.4rem 0;

		@media (width >= 768px) {
			padding: 0.4rem 2rem;
			font-size: 1.5rem;
			line-height: 160%;
		}
	}
</style>
