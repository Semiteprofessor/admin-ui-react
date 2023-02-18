/** @format */

import React from "react";
import {
	KeyboardArrowDown,
	KeyboardArrowUp,
	MoreVertOutlined,
} from "@mui/icons-material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertOutlined fontSize="small" />
			</div>
			<div className="bottom">
				<div className="featured-chart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">₦72,500</p>
				<p className="desc">
					Previous transactions progressing. Last payments may not be included.
				</p>
				<div className="summary">
					<div className="item">
						<div className="item-title">Target</div>
						<div className="item-result negative">
							<FiArrowDown />
							<div className="result-amount">₦26,000</div>
						</div>
					</div>
					<div className="item">
						<div className="item-title">Last Week</div>
						<div className="item-result positive">
							<FiArrowUpRight />
							<div className="result-amount">₦26,000</div>
						</div>
					</div>
					<div className="item">
						<div className="item-title">Last Month</div>
						<div className="item-result positive">
							<FiArrowUpRight />
							<div className="result-amount">₦26,000</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
