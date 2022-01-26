import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import authService from "../../service/auth";
import { PropsProtectedRoutes } from "./types";


const ProtectedRoutes = ({ redirectTo }: PropsProtectedRoutes) => {
	const location = useLocation();
	return (
		authService.isAuthenticate() ? <Outlet context = {location}/> : <Navigate to={redirectTo} />
	);
};

export default ProtectedRoutes;