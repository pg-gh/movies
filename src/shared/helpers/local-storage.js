export function add(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
	return value;
}

export function addIfNotExist(key, value) {
	const itemInStore = get(key);
	// add to local storage if not exist
	if (!itemInStore) {
		return add(key, value);
	}
	// return existing one
	return itemInStore;
}

export function get(key) {
	const itemInStore = localStorage.getItem(key);
	return itemInStore ? JSON.parse(itemInStore) : undefined;
}

export const LocalStorageKey = {
	movies: "exercise.movies",
};
