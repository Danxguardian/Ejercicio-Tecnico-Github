import React, { useEffect, useState } from "react";
import { getSearchReposRequest } from "../05_Store/Actions/ARepoInfo";
import { useHelper } from "../06_Utils/useHelper";

const CSearchRepoPage = ({ RenderComponent }) => {
	const { state, dispatch } = useHelper("repos");

	const searchFunction = (value) => {
		const payload = { query: value };
		dispatch(getSearchReposRequest(payload));
	};

	const propsToComponent = {
		searchFunction,
		reposInfo: state.repoInfo || null,
	};

	return <RenderComponent {...propsToComponent} />;
};

export default CSearchRepoPage;
