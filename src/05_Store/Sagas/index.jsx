/* FILE TO MERGE ALL SAGAS ON ONE ROOT */
import { fork } from "redux-saga/effects";
import repoInfoSagas from "./SRepoInfo";
import userInfoSagas from "./SUserInfo";

export default function* rootSaga() {
	yield fork(userInfoSagas);
	yield fork(repoInfoSagas);
}
