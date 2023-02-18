/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./assets/sass/base.scss";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</React.StrictMode>,
);
