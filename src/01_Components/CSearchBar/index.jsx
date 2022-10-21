import React, { useState } from "react";
import { Input } from "../../06_Utils/styledComponents";

const CSearchBar = ({ placeholder = "Buscar", searchFunction }) => {
	const [value, setValue] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				searchFunction(value);
			}}
		>
			<Input
				className="w-100"
				name="search"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</form>
	);
};

export default CSearchBar;
