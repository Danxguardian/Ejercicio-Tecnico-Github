import React, { useState } from "react";
import CSearchBar from "../../01_Components/CSearchBar";
import CUserInfo from "../../01_Components/CUserInfo";
import CUserSocial from "../../01_Components/CUserSocial";
import { CCardRepoStyled } from "../../06_Utils/styledComponents";

const PSearchUserPage = ({ searchFunction }) => {
	const dummyArray = [
		{
			name: "Dummmy",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis dignissim neque. Vestibulum metus enim, maximus eget sagittis quis, feugiat vitae lectus. Duis tincidunt dapibus enim, et tincidunt velit consequat in. In a blandit nisi, ac maximus nulla. Proin vel facilisis nisl. Donec consectetur, erat eget viverra consectetur",
			language: "JavaScript",
			link: "http://localhost:4444",
			stargazers: 43,
			forks: 1,
		},
		{
			name: "Dummmy",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis dignissim neque. Vestibulum metus enim, maximus eget sagittis quis, feugiat vitae lectus. Duis tincidunt dapibus enim, et tincidunt velit consequat in. In a blandit nisi, ac maximus nulla. Proin vel facilisis nisl. Donec consectetur, erat eget viverra consectetur",
			language: "JavaScript",
			link: "http://localhost:4444",
			stargazers: 43,
			forks: 1,
		},
	];

	return (
		<>
			<div className="row">
				<CSearchBar searchFunction={searchFunction} />
			</div>
			<div className="row my-4">
				<div className="col-12 col-lg-4">
					<CUserInfo
						profileImg={
							"https://www.w3schools.com/howto/img_avatar2.png"
						}
						user={"Danxguardian"}
						name={"Daniel Torrez"}
					/>
				</div>
				<div className="col-12 col-lg-8">
					<CUserSocial />
				</div>
			</div>
			<div className="row">
				{dummyArray.map((item) => {
					return (
						<div className="col-12 col-lg-4 mb-4">
							<CCardRepoStyled
								name={item.name}
								description={item.description}
								language={item.language}
								link={item.link}
								stargazers={item.stargazers}
								forks={item.forks}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default PSearchUserPage;
