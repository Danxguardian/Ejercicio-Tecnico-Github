import React from "react";
import CSpacer from "../CSpacer";

const CNav = ({ className }) => {
	return (
		<div className={`row ${className}`}>
			<ul>
				<li>
					<a href="/">Usuarios</a>
				</li>
				<CSpacer size={4} horizontal />
				<li>
					<a href="/repositories">Repositorios</a>
				</li>
			</ul>
		</div>
	);
};
export default CNav;
