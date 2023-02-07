import { generateMovies } from "../data/data-generations";
import { httpMock } from "../shared/helpers/http-mock";
import {
	addIfNotExist,
	LocalStorageKey,
} from "../shared/helpers/local-storage";

export async function getHomeboardMovies() {
	try {
		await httpMock({ randomFailure: true });
		return {
			success: true,
			movies: addIfNotExist(LocalStorageKey.movies, generateMovies()),
		};
	} catch (error) {
		return {
			success: false,
			error: {},
		};
	}
}
