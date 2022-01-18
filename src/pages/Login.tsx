import React, { useState } from "react";
import { TextField, Stack, Button, Grid, Typography } from "@mui/material";
import api from "../api";
import { Navigate } from "react-router-dom";

const Login = () => {

	const [formValue, setFormValue] = useState({});
	const [formMessageError, setFormMessageError] = useState(<></>);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		const { data } = await api.post("/authenticate", formValue);

		if (data.Error) {
			setFormMessageError(<Typography color="error">{data.Error}</Typography>);
		} else {
			localStorage.setItem("token", data);
			setFormMessageError(<Navigate to="/adm" />);
		}

	};

	return (
		<Grid container spacing={2} direction="column" sx={{ alignItems: "center", justifyContent: "center", height: "100vh", width: "100%" }}>
			<Grid item >
				<Typography variant="h3">Sign-In</Typography>
			</Grid>
			<Grid item sx={{ width: "45%" }}>
				<Stack >
					<TextField label="Username" name="username" type="text" fullWidth sx={{ marginBottom: 2 }} onChange={handleInputChange} />
					<TextField label="Password" name="password" type="password" fullWidth sx={{ marginBottom: 2 }} onChange={handleInputChange} />
					{formMessageError}
					<Button variant="contained" type="submit" onClick={handleSubmit}>Sign-in</Button>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Login;