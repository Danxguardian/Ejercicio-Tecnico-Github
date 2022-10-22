import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getService } from "../../07_Services/getServices";
import * as actionTypes from "../Actions/actionTypes";
import {
	getUserInfoSuccess,
	getUserInfoError,
	getUserReposSuccess,
	getUserReposError,
} from "../Actions/AUserInfo";

import CONFIG from "../../04_Constans/constans";
import ENDPOINTS from "../../04_Constans/endpoints";

export function* getUserInfoRequest({ payload }) {
	const { user } = payload;

	try {
		const infoData = yield call(
			getService,
			CONFIG.API_SERVER,
			"",
			ENDPOINTS["userInfo"].replace("{user}", user)
		);

		yield put(getUserInfoSuccess(infoData.data));
	} catch (error) {
		/* IF ONE SHOW A ERROR THIS IS THE PLACES */
		yield put(getUserInfoError(error));
	}
}

export function* getUserReposRequest({ payload }) {
	try {
		const infoData = yield call(getService, payload);

		yield put(getUserReposSuccess(infoData.data));
	} catch (error) {
		/* IF ONE SHOW A ERROR THIS IS THE PLACES */
		yield put(getUserReposError(error));
	}
}

export default function* userInfoSagas() {
	yield takeLatest(actionTypes.GET_USERINFO_REQUEST, getUserInfoRequest);
	yield takeLatest(actionTypes.GET_USER_REPOS_REQUEST, getUserReposRequest);
}
