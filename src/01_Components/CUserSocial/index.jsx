import React from "react";
import { PText } from "../../06_Utils/styledComponents";
import CSpacer from "../CSpacer";
import CContactArea from "./CContactArea";
import CFollowArea from "./CFollowArea";
const CUserSocial = ({
	bio,
	followers,
	following,
	location,
	email,
	blog,
	twitter,
}) => {
	return (
		<>
			<PText>{bio}</PText>
			<CSpacer size={8} />
			<CFollowArea followers={followers} following={following} />
			<CSpacer size={8} />
			<CContactArea
				location={location}
				email={email}
				blog={blog}
				twitter={twitter}
			/>
		</>
	);
};

export default CUserSocial;
