import React, { useEffect, useState } from "react";

import * as modalActions from "../05_Store/Actions/AModal";
import * as loaderActions from "../05_Store/Actions/ALoader";
import {
	getUserInfoRequest,
	getUserReposRequest,
} from "../05_Store/Actions/AUserInfo";
import { useHelper } from "../06_Utils/useHelper";
import { useGetData } from "../06_Utils/useGetData";

const CSearchUserPage = ({ RenderComponent }) => {
	const { state, dispatch } = useHelper("user");

	const searchFunction = (value) => {
		const payload = { user: value };
		dispatch(getUserInfoRequest(payload));
	};

	useEffect(() => {
		if (state.userInfo) {
			dispatch(getUserReposRequest(state.userInfo.repos_url));
		}
	}, [state["userInfo"]]);

	const propsToComponent = {
		searchFunction,
		userInfo: state.userInfo || null,
		userRepos: state.userRepos || [],
	};

	return <RenderComponent {...propsToComponent} />;
};

export default CSearchUserPage;
