import axios from "axios";
import { useState, useEffect } from "react";

export const useGetData = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		try {
			axios.get(url).then((resp) => console.log(resp.data));
		} catch (error) {
			throw error;
		}
	}, [url]);

	return [data];
};
