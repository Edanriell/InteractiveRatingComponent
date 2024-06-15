import gsap from "gsap";

type highLightSelectedInputParameters = {
	selectedRatingValue: number;
	inputValue: number;
	input: HTMLInputElement;
};

type removeHighlightFromPreviouslySelectedInputParameters = {
	currentlySelectedInputIndex: number | null;
	inputValue: number;
	form: HTMLFormElement;
};

type handleInputParameters = {
	event: MouseEvent | TouchEvent;
	rating: number;
	selectedRatingValue: number | null;
};

type displaySubmittedContentParameters = {
	ratingFormState: string;
	mainContent: HTMLDivElement;
	submittedContent: HTMLDivElement;
};

export const handleInputMouseUp = (event: MouseEvent) => {
	gsap.to(event.target, {
		scale: 1.1,
		duration: 0.25,
		ease: "power1.inOut"
	});
};

export const handleInputMouseDown = (event: MouseEvent) => {
	gsap.to(event.target, {
		scale: 0.9,
		duration: 0.25,
		ease: "power1.inOut"
	});
};

export const handleInputMouseEnter = ({
	event,
	rating,
	selectedRatingValue
}: handleInputParameters) => {
	gsap.to(event.target, {
		scale: 1.1,
		background: selectedRatingValue === rating ? "#fc7614" : "#FFF",
		color: selectedRatingValue === rating ? "#262e38" : "#262e38",
		duration: 0.25,
		ease: "power1.inOut"
	});
};

export const handleInputMouseLeave = ({
	event,
	rating,
	selectedRatingValue
}: handleInputParameters) => {
	gsap.to(event.target, {
		scale: 1,
		background: selectedRatingValue === rating ? "#fc7614" : "#262e38",
		color: selectedRatingValue === rating ? "#262e38" : "#969fad",
		duration: 0.25,
		ease: "power1.inOut"
	});
};

export const handleInputTouchStart = ({
	event,
	rating,
	selectedRatingValue
}: handleInputParameters) => {
	gsap.to(event.target, {
		scale: 1.1,
		background: selectedRatingValue === rating ? "#fc7614" : "#FFF",
		color: selectedRatingValue === rating ? "#262e38" : "#262e38",
		duration: 0.25,
		ease: "power1.inOut"
	});
};

export const handleInputTouchEnd = ({
	event,
	rating,
	selectedRatingValue
}: handleInputParameters) => {
	gsap.to(event.target, {
		scale: 1,
		background: selectedRatingValue === rating ? "#fc7614" : "#262e38",
		color: selectedRatingValue === rating ? "#262e38" : "#969fad",
		duration: 0.25,
		ease: "power1.inOut"
	});
};

export const highlightSelectedInput = ({
	selectedRatingValue,
	inputValue,
	input
}: highLightSelectedInputParameters) => {
	if (selectedRatingValue === inputValue)
		gsap.to(input, {
			scale: 1.1,
			color: "#262e38",
			background: "#fc7614",
			duration: 0.25,
			ease: "power1.inOut"
		});
};

export const removeHighlightFromPreviouslySelectedInput = ({
	currentlySelectedInputIndex,
	inputValue,
	form
}: removeHighlightFromPreviouslySelectedInputParameters) => {
	if (currentlySelectedInputIndex !== null || Number(currentlySelectedInputIndex) !== inputValue) {
		gsap.to(form.children[0].children[Number(currentlySelectedInputIndex)].children[1], {
			color: "#969fad",
			background: "#262e38",
			duration: 0.25,
			ease: "power1.inOut"
		});
	}
};

export const displaySubmittedContent = ({
	ratingFormState,
	mainContent,
	submittedContent
}: displaySubmittedContentParameters) => {
	if (ratingFormState === "submitted") {
		gsap.to(mainContent, {
			translateX: -412,
			duration: 1,
			ease: "back.inOut"
		});

		gsap.to(submittedContent, {
			translateX: -412,
			duration: 1,
			ease: "back.inOut"
		});
	}
};
