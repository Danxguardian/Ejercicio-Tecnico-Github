import React, { useState } from "react";
import CSearchBar from "../../01_Components/CSearchBar";
import CSpacer from "../../01_Components/CSpacer";
import CUserInfo from "../../01_Components/CUserInfo";
import CUserSocial from "../../01_Components/CUserSocial";
import { CCardRepoStyled, H3Text } from "../../06_Utils/styledComponents";

const PSearchUserPage = ({ searchFunction, userInfo, userRepos }) => {
	const {
		name,
		login: user,
		avatar_url: profileImg,
		bio,
		followers,
		following,
		location,
		email,
		blog,
		twitter_username: twitter,
	} = userInfo || {};

	return (
		<>
			<div className="row">
				<CSearchBar
					placeholder={"Buscar usuario"}
					searchFunction={searchFunction}
				/>
				<CSpacer size={16} />
			</div>
			{userInfo && (
				<div className="row my-4">
					<div className="col-12 col-lg-4">
						<CUserInfo
							profileImg={profileImg}
							user={user}
							name={name}
						/>
					</div>
					<div className="col-12 col-lg-8">
						<CUserSocial
							bio={bio}
							followers={followers}
							following={following}
							location={location}
							email={email}
							blog={blog}
							twitter={twitter}
						/>
					</div>
				</div>
			)}
			{!userInfo && <H3Text>Ingrese un valor a buscar</H3Text>}
			<div className="row">
				{userRepos.map((item, index) => {
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
		</>
	);
};

export default PSearchUserPage;
