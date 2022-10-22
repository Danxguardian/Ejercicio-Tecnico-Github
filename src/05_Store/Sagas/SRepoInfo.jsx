import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getService } from "../../07_Services/getServices";
import * as actionTypes from "../Actions/actionTypes";

import CONFIG from "../../04_Constans/constans";
import ENDPOINTS from "../../04_Constans/endpoints";
import {
	getSearchReposError,
	getSearchReposSuccess,
} from "../Actions/ARepoInfo";
import { showModal } from "../Actions/AModal";

export function* getSearchReposRequest({ payload }) {
	const { query } = payload;

	try {
		const infoData = yield call(
			getService,
			CONFIG.API_SERVER,
			"",
			ENDPOINTS["searchRepos"].replace("{query}", query)
		);
		console.log(infoData.data);

		yield put(getSearchReposSuccess(infoData.data));
	} catch (error) {
		/* IF ONE SHOW A ERROR THIS IS THE PLACES */
		if (error.request.status)
			yield put(
				showModal(
					1,
					"Problema con la petición",
					"Los parametros de busqueda no traen algun resultado intente con otro"
				)
			);
		yield put(getSearchReposError(error));
	}
}

export default function* repoInfoSagas() {
	yield takeLatest(
		actionTypes.GET_SEARCH_REPOS_REQUEST,
		getSearchReposRequest
	);
}
