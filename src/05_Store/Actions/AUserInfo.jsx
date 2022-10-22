import {
	GET_USERINFO_REQUEST,
	GET_USERINFO_SUCCESS,
	GET_USERINFO_ERROR,
	GET_USER_REPOS_REQUEST,
	GET_USER_REPOS_SUCCESS,
	GET_USER_REPOS_ERROR,
} from "./actionTypes";

const getUserInfoRequest = (payload) => {
	return { type: GET_USERINFO_REQUEST, payload: payload };
};

const getUserInfoSuccess = (payload) => {
	return { type: GET_USERINFO_SUCCESS, payload: payload };
};
const getUserInfoError = ({ error }) => {
	return { type: GET_USERINFO_ERROR, payload: error };
};

const getUserReposRequest = (payload) => {
	return { type: GET_USER_REPOS_REQUEST, payload: payload };
};

const getUserReposSuccess = (payload) => {
	return { type: GET_USER_REPOS_SUCCESS, payload: payload };
};
const getUserReposError = ({ error }) => {
	return { type: GET_USER_REPOS_ERROR, payload: error };
};

export {
	getUserInfoRequest,
	getUserInfoSuccess,
	getUserInfoError,
	getUserReposRequest,
	getUserReposSuccess,
	getUserReposError,
};

export default {
	getUserInfoRequest,
	getUserInfoSuccess,
	getUserInfoError,
	getUserReposRequest,
	getUserReposSuccess,
	getUserReposError,
};
