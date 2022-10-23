import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import CONFIG from "./04_Constans/constans";

import { CLoader } from "./01_Components/CLoader/index";
import { CModal } from "./01_Components/CModal";
import PSearchUserPage from "./02_Pages/PSearchUserPage/index";

import CSearchUserPage from "./03_Controllers/CSearchUserPage";
import CSearchRepoPage from "./03_Controllers/CSearchRepoPage";
import PSearchRepo from "./02_Pages/PSearchRepo";
import { CNavMenu } from "./06_Utils/styledComponents";
import CSpacer from "./01_Components/CSpacer";

console.log("env", process.env);
console.log("config", CONFIG);

export const App = () => {
	const loading = useSelector((state) => state.loader);
	const modal = useSelector((state) => state.modal);

	return (
		<>
			<div className="container">
				<CNavMenu />
				<CSpacer size={16} />
				<BrowserRouter>
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
							exact
							path="/repositories"
							element={
								<CSearchRepoPage
									RenderComponent={PSearchRepo}
								/>
							}
						/>
					</Routes>
				</BrowserRouter>
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
