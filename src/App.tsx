import React from "react";
import RouterComponents from "./routes";
import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes  } from "@mui/material";

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
			<CssBaseline />
			<RouterComponents />
		</ThemeProvider>
	);
};


export default App;
