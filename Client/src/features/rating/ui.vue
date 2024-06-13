<script lang="ts" setup></script>

<template>
	<article class="rating-card">
		<span class="rating-card__icon-wrapper">
			<svg
				fill="none"
				height="14"
				viewBox="0 0 15 14"
				width="15"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.88911 0.691623L9.54732 4.05114C9.641 4.2409 9.82205 4.37243 10.0315 4.40284L13.7388 4.94165C13.9811 4.97683 14.1824 5.14652 14.258 5.37936C14.3336 5.61219 14.2704 5.86775 14.095 6.03855L11.4119 8.65351C11.2602 8.80139 11.1914 9.01421 11.2268 9.22254L11.8601 12.9151C11.9014 13.1563 11.8022 13.4001 11.6042 13.5439C11.4062 13.6877 11.1437 13.7067 10.9271 13.5928L7.6107 11.8491C7.42328 11.7507 7.19952 11.7507 7.0121 11.8491L3.69566 13.5928C3.47905 13.7067 3.21657 13.6877 3.01857 13.5439C2.82057 13.4001 2.72139 13.1563 2.76272 12.9151L3.39604 9.22254C3.43183 9.01394 3.36257 8.80109 3.21087 8.65351L0.527756 6.03855C0.352386 5.86775 0.28922 5.61219 0.364829 5.37936C0.440438 5.14652 0.641701 4.97683 0.883961 4.94165L4.59132 4.40284C4.80075 4.37243 4.9818 4.2409 5.07548 4.05114L6.73369 0.691623C6.97159 0.213897 7.65314 0.213897 7.88911 0.691623Z"
					fill="#FC7614"
				/>
			</svg>
		</span>
		<h2 class="rating-card__title">How did we do?</h2>
		<p class="rating-card__text">
			Please let us know how we did with your support request. All feedback is appreciated to help
			us improve our offering!
		</p>
		<form class="rating-card__rating-form rating-form">
			<div class="rating-form__rating-input-wrapper">
				<label class="visually-hidden" for="rating1">Rating 1</label>
				<input class="rating-form__rating-input" type="button" value="1" />
				<label class="visually-hidden" for="rating2">Rating 2</label>
				<input class="rating-form__rating-input" type="button" value="2" />
				<label class="visually-hidden" for="rating3">Rating 3</label>
				<input class="rating-form__rating-input" type="button" value="3" />
				<label class="visually-hidden" for="rating4">Rating 4</label>
				<input class="rating-form__rating-input" type="button" value="4" />
				<label class="visually-hidden" for="rating5">Rating 5</label>
				<input class="rating-form__rating-input" type="button" value="5" />
			</div>
			<button class="rating-form__rating-submit-button" type="submit">Submit</button>
		</form>
	</article>
</template>

<style scoped>
	.rating-card {
		border-radius: 1.5rem;
		background: radial-gradient(98.96% 98.96% at 50% 0%, rgb(35, 42, 52) 0%, rgb(24, 30, 39) 100%);
		padding: 2.4rem 2.4rem 3.2rem 2.4rem;
		margin-left: 2.4rem;
		margin-right: 2.4rem;
		max-width: 32.7rem;
		overflow: hidden;
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
	}

	.rating-card__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 24px;
		color: var(--pure-white);
	}

	.rating-card__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 14px;
		line-height: 157%;
		color: var(--light-grey);
		text-align: left;
	}

	.rating-card__rating-form {
		position: relative;
	}

	.rating-form {
		display: flex;
		flex-direction: column;
		row-gap: 2.4rem;
	}

	.rating-form__rating-input-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1.8rem;
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
	}

	.rating-form__rating-submit-button {
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
	}
</style>
