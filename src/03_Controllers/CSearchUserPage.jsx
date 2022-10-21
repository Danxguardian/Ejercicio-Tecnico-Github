import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalActions from "../05_Store/Actions/AModal";
import * as loaderActions from "../05_Store/Actions/ALoader";
const CSearchUserPage = ({ RenderComponent }) => {
	const stateForWorks = useSelector((state) => state);

	const searchFunction = (value) => {
		console.log(value);
	};

	const propsToComponent = {
		searchFunction,
	};

	return <RenderComponent {...propsToComponent} />;
};

export default CSearchUserPage;
