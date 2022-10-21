import React from "react";
import { PText } from "../../06_Utils/styledComponents";
import CSpacer from "../CSpacer";
import CContactArea from "./CContactArea";
import CFollowArea from "./CFollowArea";
const CUserSocial = ({ bio }) => {
	return (
		<>
			<PText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
				quis dignissim neque. Vestibulum metus enim, maximus eget
				sagittis quis, feugiat vitae lectus. Duis tincidunt dapibus
				enim, et tincidunt velit consequat in. In a blandit nisi, ac
				maximus nulla. Proin vel facilisis nisl. Donec consectetur, erat
				eget viverra consectetur
			</PText>
			<CSpacer size={8} />
			<CFollowArea />
			<CSpacer size={8} />
			<CContactArea />
		</>
	);
};

export default CUserSocial;
