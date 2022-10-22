import React, { useState } from "react";
import CSearchBar from "../../01_Components/CSearchBar";
import CSpacer from "../../01_Components/CSpacer";
import { CCardRepoStyled, H3Text } from "../../06_Utils/styledComponents";

const PSearchRepo = ({ searchFunction, reposInfo }) => {
	const { items } = reposInfo || [];

	return (
		<>
			<div className="row">
				<CSearchBar
					placeholder={"Buscar repositorio"}
					searchFunction={searchFunction}
				/>
				<CSpacer size={16} />
			</div>
			<CSpacer size={8} />
			{items && (
				<div className="row">
					{items.map((item, index) => {
						return (
							<div
								className="col-12 col-lg-4 mb-4"
								key={item.id + index}
							>
								<CCardRepoStyled
									name={item.name}
									description={item.description}
									language={item.language}
									link={item.html_url}
									stargazers={item.stargazers_count}
									forks={item.forks_count}
								/>
							</div>
						);
					})}
				</div>
			)}
			{!items && <H3Text>Ingrese un valor a buscar</H3Text>}
		</>
	);
};

export default PSearchRepo;
