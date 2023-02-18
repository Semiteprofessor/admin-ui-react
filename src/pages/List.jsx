/** @format */

import React from "react";
import Datatable from "../components/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const List = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="list-container">
				<Navbar />
				<Datatable />
			</div>
		</div>
	);
};

export default List;
