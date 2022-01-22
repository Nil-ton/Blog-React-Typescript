import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    redirectTo: string
}

const ProtectedRoutes = ({ redirectTo }: Props) => {
    
	const token = localStorage.getItem("token");

	return (
		token ? <Outlet /> : <Navigate to={redirectTo}/>
	);
};

export default ProtectedRoutes;