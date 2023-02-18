/** @format */

import {
	AccountBalanceWalletOutlined,
	KeyboardArrowUp,
	MonetizationOnOutlined,
	PersonOutline,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";

const Widget = ({ type }) => {
	let data;

	// temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
				icon: (
					<PersonOutline
						className="icon"
						style={{
							color: "rgb(35, 120, 131)",
							backgroundColor: "rgb(64, 233, 255, 0.500)",
						}}
					/>
				),
				bgColor: "rgb(44, 154, 168)",
			};
			break;
		case "order":
			data = {
				title: "ORDER",
				isMoney: false,
				link: "View all orders",
				icon: (
					<ShoppingCartOutlined
						className="icon"
						style={{
							color: "rgb(31, 119, 46)",
							backgroundColor: "rgb(72, 255, 102, 0.500)",
						}}
					/>
				),
				bgColor: "rgb(44, 168, 65)",
			};
			break;
		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View all earnings",
				icon: (
					<MonetizationOnOutlined
						className="icon"
						style={{
							color: "rgb(168, 88, 13)",
							backgroundColor: "rgb(253, 131, 17, 0.500)",
						}}
					/>
				),
				bgColor: "rgb(235, 118, 9)",
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				icon: (
					<AccountBalanceWalletOutlined
						className="icon"
						style={{
							color: "rgb(182, 17, 94)",
							backgroundColor: "rgb(255, 23, 131, 0.500)",
						}}
					/>
				),
				bgColor: "rgb(226, 19, 116)",
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{data.isMoney && "₦"} {amount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUp />
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
