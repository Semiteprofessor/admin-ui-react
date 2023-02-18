/** @format */

import React from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import Table from "../components/Table";

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="home-container">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earning" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<Featured />
					<Chart title="Last 6 Month (Revenue)" aspect={3 / 1} />
				</div>
				<div className="list-container">
					<div className="list-title">Latest Transactions</div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
