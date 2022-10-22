import {
	GET_SEARCH_REPOS_REQUEST,
	GET_SEARCH_REPOS_SUCCESS,
	GET_SEARCH_REPOS_ERROR,
} from "./actionTypes";

const getSearchReposRequest = (payload) => {
	return { type: GET_SEARCH_REPOS_REQUEST, payload: payload };
};

const getSearchReposSuccess = (payload) => {
	return { type: GET_SEARCH_REPOS_SUCCESS, payload: payload };
};
const getSearchReposError = ({ error }) => {
	return { type: GET_SEARCH_REPOS_ERROR, payload: error };
};

export { getSearchReposRequest, getSearchReposSuccess, getSearchReposError };

export default {
	getSearchReposRequest,
	getSearchReposSuccess,
	getSearchReposError,
};
