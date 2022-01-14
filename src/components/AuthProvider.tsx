import React from "react";
import Login from "./pages/Login";

interface Props {
    children: JSX.Element
}

const AuthProvider = ({children}: Props) => {
	const auth = false;
	return (
		auth ? ({...children}) : (<Login/>)
	);
};

export default AuthProvider;