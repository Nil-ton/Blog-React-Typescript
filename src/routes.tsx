import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { CriarPost, Post } from "./pages/Adm";


const AppRoutes = () => {

	return (
		<BrowserRouter>

			<Routes>

				<Route path="/adm" element={<ProtectedRoutes redirectTo="/login" />}>
					<Route path="" element={<Post />} />
					<Route path="criarPost" element={<CriarPost />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="*" element={<h1>Not a found</h1>} />

			</Routes>

		</BrowserRouter>
	);
};

export default AppRoutes;