import React, { useState } from "react";
import {
	TextField, Stack, Button, Grid, Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import authService from "../../service/auth";
import api from "../../service/api";
import { IFormValue } from "./types";

function Login() {
	const navigate = useNavigate();
	const [formValue, setFormValue] = useState<IFormValue>({} as IFormValue);
	const [formMessageError, setFormMessageError] = useState<JSX.Element>(<></>);

	const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
		const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		if (!formValue.username && !formValue.username) {
			return setFormMessageError(<Typography color="error">Preencha todos os campos</Typography>);
		}

		const { data } = await api.post("/authenticate/login", formValue);

		if (data.Error) {
			return setFormMessageError(<Typography color="error">{data.Error}</Typography>);
		}

		authService.signIn(data);
		navigate("/adm");
	};

	return (
		<Grid
			container
			spacing={2}
			direction="column"
			sx={{
				alignItems: "center", justifyContent: "center", height: "100vh", width: "100%",
			}}
		>
			<Grid item>
				<Typography variant="h3">Sign-In</Typography>
			</Grid>
			<Grid item sx={{ width: "45%" }}>
				<Stack>
					<TextField label="Username" name="username" type="text" fullWidth sx={{ marginBottom: 2 }} onChange={handleInputChange} />
					<TextField label="Password" name="password" type="password" fullWidth sx={{ marginBottom: 2 }} onChange={handleInputChange} />
					{formMessageError}
					<Button variant="contained" type="submit" onClick={handleSubmit}>Sign-in</Button>
				</Stack>
			</Grid>
		</Grid>
	);
}

export default Login;
