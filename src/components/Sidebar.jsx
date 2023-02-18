/** @format */

import React, { useContext } from "react";
import {
	NotificationsNone,
	PsychologyOutlined,
	AccountCircleOutlined,
	ExitToAppOutlined,
	SettingsApplicationsOutlined,
	SettingsSystemDaydreamOutlined,
	InsertChartOutlined,
	LocalShippingOutlined,
	CreditCardOutlined,
	PersonOutline,
	StoreOutlined,
	DashboardOutlined,
} from "@mui/icons-material/";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";

const Sidebar = ({ setDark }) => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/">
					<span className="logo">rancho</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<Link to="/">
							<DashboardOutlined className="icon" />
							<span>Dashboard</span>
						</Link>
					</li>
					<p className="title">LIST</p>
					<li>
						<Link to="/users">
							<PersonOutline className="icon" />
							<span>Users</span>
						</Link>
					</li>
					<li>
						<Link to="/products">
							<StoreOutlined className="icon" />
							<span>Products</span>
						</Link>
					</li>
					<li>
						<CreditCardOutlined className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingOutlined className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<InsertChartOutlined className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNone className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<SettingsSystemDaydreamOutlined className="icon" />
						<span>Syetem Health</span>
					</li>
					<li>
						<PsychologyOutlined className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsApplicationsOutlined className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountCircleOutlined className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppOutlined className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div
					className="color-option"
					onClick={() => dispatch({ type: "LIGHT" })}></div>
				<div
					className="color-option"
					onClick={() => dispatch({ type: "DARK" })}></div>
			</div>
		</div>
	);
};

export default Sidebar;
