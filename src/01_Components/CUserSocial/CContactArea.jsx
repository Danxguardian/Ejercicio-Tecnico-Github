import React from "react";
import {
	CTextIconStyled,
	IconImg,
	PText,
} from "../../06_Utils/styledComponents";
import icon_group from "../../assets/icons/icon_group.svg";
import icon_email from "../../assets/icons/icon_email.svg";
import icon_link from "../../assets/icons/icon_link.svg";
import icon_location from "../../assets/icons/icon_location.svg";
import icon_twitter from "../../assets/icons/icon_twitter.svg";

const CContactArea = () => {
	return (
		<div className="row">
			<div className="col-6">
				<CTextIconStyled icon={icon_location} text={"ubicacion"} />
			</div>
			<div className="col-6">
				<CTextIconStyled icon={icon_email} text={"email"} />
			</div>
			<div className="col-6">
				<CTextIconStyled icon={icon_link} text={"page"} />
			</div>
			<div className="col-6">
				<CTextIconStyled icon={icon_twitter} text={"twitter"} />
			</div>
		</div>
	);
};
export default CContactArea;
