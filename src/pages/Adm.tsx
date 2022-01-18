import React from "react";
import { Outlet } from "react-router-dom";

const Adm = () => {
	const token = localStorage.getItem("token");
	return (
		<>
			<h1>Adm</h1>
			<Outlet context={token} />
		</>
	);
};

export default Adm;