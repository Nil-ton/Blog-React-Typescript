import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adm from "./pages/Adm";
import Login from "./pages/Login";
import Post from "./pages/Post";
import ProtectedRoutes from "./components/ProtectedRoutes";

const RouterComponents = () => {

	return (
		<BrowserRouter>
			<Routes>

				<Route path="/adm" element={<ProtectedRoutes redirectTo="/login" />}>
					<Route path="" element={<Adm />}>
						<Route path = "post" element = {<Post />}/>
					</Route>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<h1>Not a found</h1>} />

			</Routes>
		</BrowserRouter>
	);
};

export default RouterComponents;