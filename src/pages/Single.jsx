/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import List from "../components/Table";

const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<div className="single-container">
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="edit-btn">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img
								src="https://images.pexels.com/photos/14940465/pexels-photo-14940465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="item-img"
							/>
							<div className="details">
								<h1 className="item-title">Jane Doe</h1>
								<div className="detail-item">
									<span className="item-key">Email:</span>
									<span className="item-value">janedoe@gmail.com</span>
								</div>
								<div className="detail-item">
									<span className="item-key">Phone:</span>
									<span className="item-value">(+234)80 6909 5729</span>
								</div>
								<div className="detail-item">
									<span className="item-key">Address:</span>
									<span className="item-value">
										308, Murtala Muhammad Way, Yaba, Lagos
									</span>
								</div>
								<div className="detail-item">
									<span className="item-key">Country:</span>
									<span className="item-value">Nigeria</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={4 / 1} title="User Spending (Last 6 Month)" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">Last Transaction</h1>
					<List />
				</div>
			</div>
		</div>
	);
};

export default Single;
