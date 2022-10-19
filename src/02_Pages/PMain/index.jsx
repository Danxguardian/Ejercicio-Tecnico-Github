import React, { useState } from "react";

const PMain = ({ summitData, openModal, openLoader }) => {
	return (
		<>
			<div className="row">
				<div className="col-12 col-lg-4 d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg "
						onClick={() => {
							openModal();
						}}
					>
						Abrir Modal
					</button>
				</div>
				<div className="col-12 col-lg-4 d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg"
						onClick={() => {
							openLoader();
						}}
					>
						Abrir Loader
					</button>
				</div>
				<div className="col-12 col-lg-4 d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg"
						onClick={() => {
							console.log("Hacer Ping");
							summitData();
						}}
					>
						Hacer Ping
					</button>
				</div>
			</div>
		</>
	);
};

export default PMain;
