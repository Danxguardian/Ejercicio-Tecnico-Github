import * as Types from "../Actions/actionTypes";
const INIT_STATE = {};

const userInfoReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.GET_USERINFO_REQUEST: {
			return { ...state };
		}
		case Types.GET_USERINFO_SUCCESS: {
			return { ...state, userInfo: action.payload };
		}
		case Types.GET_USERINFO_ERROR: {
			return { ...state, error: action.payload };
		}

		case Types.GET_USER_REPOS_REQUEST: {
			return { ...state };
		}
		case Types.GET_USER_REPOS_SUCCESS: {
			return { ...state, userRepos: action.payload };
		}
		case Types.GET_USER_REPOS_ERROR: {
			return { ...state, error: action.payload };
		}

		default:
			return state;
	}
};

export default userInfoReducer;
