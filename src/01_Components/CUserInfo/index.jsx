import React, { useState } from "react";
import styled from "styled-components";
import { CircleImg, H3Text, H4Text } from "../../06_Utils/styledComponents";

const CUserInfo = ({ profileImg, user, name }) => {
	return (
		<div className="d-flex flex-column">
			<CircleImg src={profileImg} />
			<H3Text>{user}</H3Text>
			{name && <H4Text>{name}</H4Text>}
		</div>
	);
};
export default CUserInfo;
