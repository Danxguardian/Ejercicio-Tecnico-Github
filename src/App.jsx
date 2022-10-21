import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CONFIG from "./04_Constans/constans";

import { CLoader } from "./01_Components/CLoader/index";
import { CModal } from "./01_Components/CModal";
import PSearchUserPage from "./02_Pages/PSearchUserPage/index";
import CSearchUserPage from "./03_Controllers/CSearchUserPage";

console.log("env", process.env);
console.log("config", CONFIG);

export const App = () => {
	const loading = useSelector((state) => state.loader);
	const modal = useSelector((state) => state.modal);
	useEffect(() => {
		/* dispatch(showLoader("Nice")); */
	}, []);

	return (
		<>
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={
							<CSearchUserPage
								RenderComponent={PSearchUserPage}
							/>
						}
					/>
					<Route
						path="/about"
						element={
							<CSearchUserPage
								RenderComponent={PSearchUserPage}
							/>
						}
					/>
				</Routes>
			</div>

			{modal.status && (
				<CModal
					type={modal.type}
					title={modal.title}
					message={modal.message}
					btnAccept={modal.accept}
					btnCancel={modal.cancel}
				/>
			)}
			{loading.status && <CLoader title={loading.title} />}
			{/* implementar dialogue errors */}
		</>
	);
};
