import React from "react";
import { IconImg, PText } from "../../06_Utils/styledComponents";

import icon_group from "../../assets/icons/icon_group.svg";

const CFollowArea = ({ followers = 0, following = 0 }) => {
	return (
		<div className="d-flex justify-content-center">
			<IconImg src={icon_group} />
			<PText>{`${followers} followers | ${following} following`}</PText>
		</div>
	);
};

export default CFollowArea;
