export function getFinalState(baseState: number, queue: (number | ((n: number) => number))[]) {
	let finalState = baseState;

	for (const update of queue) {
		if (typeof update === "function") {
			// TODO: apply the updater function
			finalState = update(finalState);
		} else {
			// TODO: replace the state
			finalState = update;
		}
	}

	return finalState;
}
