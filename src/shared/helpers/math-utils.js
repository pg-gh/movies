export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRange = (length) => {
	const arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(i);
	}
	return arr;
};
