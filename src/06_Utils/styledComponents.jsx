import styled from "styled-components";
import CCardRepo from "../01_Components/CCardRepo";
import CTextIcon from "../01_Components/CTextIcon";
import { bgColors } from "../04_Constans/bgColors";

export const Input = styled.input`
	border: 0.2em black solid;
	font-weight: bold;
`;

export const H3Text = styled.h3`
	text-align: center;
`;

export const H4Text = styled.h3`
	text-align: center;
`;

export const PText = styled.p``;

export const CTextIconStyled = styled(CTextIcon)`
	display: flex;
`;

export const CCardRepoStyled = styled(CCardRepo)`
	background: ${(props) => bgColors[props.language] || "#b5b5b56c"};
	padding: 1em 1em;
	border-radius: 16px;
`;

export const CircleImg = styled.img`
	border-radius: 50%;
	max-width: 160px;
	margin: 0 auto;
`;

export const IconImg = styled.img`
	width: 24px;
	height: 24px;
	margin-left: 8px;
	margin-right: 8px;
`;
