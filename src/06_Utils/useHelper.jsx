import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useHelper = (stateSelector) => {
	const [state, setState] = useState({});

	const stateForWorks = useSelector((state) => state[stateSelector]);

	useEffect(() => {
		if (stateForWorks) setState(stateForWorks);
	}, [stateForWorks]);

	const dispatch = useDispatch();
	return { state, dispatch };
};
