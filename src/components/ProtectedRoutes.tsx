import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api";



interface Props {
    redirectTo: string
}


const ProtectedRoutes = ({ redirectTo }: Props) => {
    
	const token = localStorage.getItem("token");
	useEffect(() => {
        
		(async () => {
			const {data} = await api.get("/authenticate/ensure", {
				headers: {
					authorization: `Bearer ${token}` 
				}
			});
			if(data.Error) {
				localStorage.clear();
			}
		})();

	},[]);


	return (
		token ? <Outlet /> : <Navigate to={redirectTo}/>
	);
};

export default ProtectedRoutes;