/** @format */

import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import List from "./pages/List";
import New from "./pages/New";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";

// Pages

function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<Router>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={userInputs} title="Add New User" />}
							/>
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={productInputs} title="Add New Product" />}
							/>
						</Route>
					</Route>
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
