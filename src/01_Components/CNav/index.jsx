import React from "react";
import { Link } from "react-router-dom";
import CSpacer from "../CSpacer";

const CNav = ({ className }) => {
	return (
		<div className={`row ${className}`}>
			<ul>
				<li>
					<Link to="/">Usuarios</Link>
				</li>
				<CSpacer size={4} horizontal />
				<li>
					<Link to="/repositories">Repositorios</Link>
				</li>
			</ul>
		</div>
	);
};
export default CNav;
