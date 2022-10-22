import * as Types from "../Actions/actionTypes";
const INIT_STATE = {};

const repoInfoReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.GET_SEARCH_REPOS_REQUEST: {
			return { ...state };
		}
		case Types.GET_SEARCH_REPOS_SUCCESS: {
			return { ...state, repoInfo: action.payload };
		}
		case Types.GET_SEARCH_REPOS_ERROR: {
			return { ...state, error: action.payload };
		}

		default:
			return state;
	}
};

export default repoInfoReducer;
