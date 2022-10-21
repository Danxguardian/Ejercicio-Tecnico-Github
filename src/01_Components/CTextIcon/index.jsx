import React from "react";
import { IconImg, PText } from "../../06_Utils/styledComponents";

const CTextIcon = ({ icon, text, className }) => {
	return (
		<div className={className}>
			<IconImg src={icon} />
			<PText>{text}</PText>
		</div>
	);
};

export default CTextIcon;
