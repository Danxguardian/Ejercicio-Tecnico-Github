import React from "react";
import {
	CTextIconStyled,
	H3Text,
	PText,
} from "../../06_Utils/styledComponents";
import icon_star from "../../assets/icons/icon_star.svg";
import icon_fork from "../../assets/icons/icon_fork.svg";
const CCardRepo = ({
	name,
	description,
	language,
	link,
	stargazers = 0,
	forks = 0,
	className,
}) => {
	return (
		<div
			className={className}
			onClick={() => {
				window.open(link, "mywindow");
			}}
		>
			<H3Text>{name}</H3Text>
			<PText>{description}</PText>
			<div className="row">
				<div className="col-12 col-md-6 col-lg-6">
					<h5>{language}</h5>
				</div>
				<div className="col-6 col-md-3 col-lg-3 d-flex justify-content-end">
					<CTextIconStyled icon={icon_star} text={stargazers} />
				</div>
				<div className="col-6 col-md-3 col-lg-3 d-flex justify-content-end">
					<CTextIconStyled icon={icon_fork} text={forks} />
				</div>
			</div>
		</div>
	);
};

export default CCardRepo;
