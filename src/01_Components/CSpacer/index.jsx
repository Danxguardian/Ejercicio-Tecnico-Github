import React from "react";

const CSpacer = ({ size, horizontal }) => {
	const defaultValue = "auto";

	return (
		<div
			style={{
				width: horizontal ? size : defaultValue,
				height: !horizontal ? size : defaultValue,
			}}
		/>
	);
};

export default CSpacer;
