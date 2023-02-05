import { getRandomInt } from "./math-utils";

export function httpMock({ success, randomFailure }) {
	return new Promise((resolve, reject) => {
		// resolves randomly between 200ms to 1000ms
		setTimeout(() => {
			if ((randomFailure && Math.random() < 0.99) || success) {
				resolve();
			} else {
				reject({ message: "Failed" });
			}
		}, getRandomInt(2, 10) * 100);
	});
}
