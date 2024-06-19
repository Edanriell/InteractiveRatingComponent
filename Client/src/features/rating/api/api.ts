type createNewRatingParameters = {
	value: number;
};

export const createNewRating = async ({ value }: createNewRatingParameters) => {
	const response = await fetch("https://localhost:7223/api/ratings/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		mode: "cors",
		body: JSON.stringify({
			value: value
		})
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const contentType = response.headers.get("content-type");
	if (!contentType || !contentType.includes("application/json")) {
		throw new Error("Response is not in JSON format");
	}

	return response.json();
};
