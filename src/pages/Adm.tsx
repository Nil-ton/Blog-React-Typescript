import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../api";

const Adm = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		api.get("/authenticate/ensure", {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		})
			.catch(err => err ? localStorage.clear() : navigate("/login"));
	}, []);

	return (
		<>
			<h1>Adm</h1>
			<Outlet context={token} />
		</>
	);
};

export default Adm;