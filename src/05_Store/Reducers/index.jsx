/* FILE TO MERGE ALL REDUCER ON ONE ROOT */
import { combineReducers } from "redux";
import loaderReducer from "./RLoader";
import modalReducer from "./RModal";
import repoInfoReducer from "./RRepoInfo";
import userInfoReducer from "./RUserInfo";
export const rootReducer = combineReducers({
	modal: modalReducer,
	loader: loaderReducer,
	user: userInfoReducer,
	repos: repoInfoReducer,
});
