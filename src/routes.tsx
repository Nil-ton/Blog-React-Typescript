import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import Adm from "./components/pages/Adm";

const RouterComponents = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/adm" element={<AuthProvider><Adm /></AuthProvider>}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterComponents;