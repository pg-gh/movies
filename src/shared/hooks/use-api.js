import { useReducer, useCallback } from "react";
import { getHomeboardMovies } from "../../api/get-movies";

export function useApi({ url, initialLoadState = "loading" }) {
	const [state, dispatch] = useReducer(stateReducer, {
		data: undefined,
		loadState: initialLoadState,
		error: undefined,
	});
	const callApi = useCallback(async () => {
		dispatch({ type: "loading" });

		function process(result) {
			if (result.success) {
				dispatch({ type: "success", result: result });
			} else if (result.error) {
				dispatch({ type: "error", error: result.error });
			}
		}

		switch (url) {
			case "get-homeboard-movies":
				return getHomeboardMovies().then(process);
			default:
				return {};
		}
	}, [url]);

	return [callApi, state.data, state.loadState, state.error];
}

/* use-api state reducer */
function stateReducer(state, action) {
	switch (action.type) {
		case "loading":
			return { ...state, loadState: "loading", error: undefined };
		case "success":
			return {
				...state,
				loadState: "loaded",
				error: undefined,
				data: action.result,
			};
		case "error":
			return { ...state, loadState: "error", error: action.error };
		default:
			return {};
	}
}
