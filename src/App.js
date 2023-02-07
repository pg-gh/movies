import React from "react";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { MainLayout } from "./layouts";
import { themeL, themeD } from "./themes";
import { mainNavigation } from "./data";
import Dashboard from "./views/dashboard/Dashboard";

const App = () => {
	const [darkMode, setDarkMode] = React.useState(() => {
		const dark = localStorage.getItem("dark");
		if (dark) {
			return JSON.parse(dark);
		} else {
			return true;
		}
	});

	const darkModeToggle = () => {
		setDarkMode(!darkMode);
		localStorage.setItem("dark", !darkMode);
	};

	const themeSwitchConfig = {
		state: darkMode,
		handler: darkModeToggle,
	};

	const appliedTheme = createTheme(darkMode ? themeD : themeL);
	return (
		<ThemeProvider theme={appliedTheme}>
			<MainLayout navigationData={mainNavigation}>
				<Dashboard themeConfig={themeSwitchConfig} />
			</MainLayout>
		</ThemeProvider>
	);
};

export default App;
