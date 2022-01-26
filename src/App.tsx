import React from "react";
import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from "@mui/material";
import AppRoutes from "./routes";

let theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#ffab00",
			contrastText: "#ffffff",
			light: "#ffdd4b",
			dark: "#c67c00",
		}
	}
});

theme = responsiveFontSizes(theme);

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<AppRoutes />
			<CssBaseline />
		</ThemeProvider>
	);
};


export default App;
