/** @format */

import {
	ChatBubbleOutlineOutlined,
	DarkModeOutlined,
	FullscreenExitOutlined,
	LanguageOutlined,
	ListOutlined,
	NotificationsNoneOutlined,
	SearchOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchOutlined className="lens" />
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlined className="icon" />
						English
					</div>
					<div className="item">
						<DarkModeOutlined
							className="icon"
							onClick={() => dispatch({ type: "TOGGLE" })}
						/>
					</div>
					<div className="item">
						<FullscreenExitOutlined className="icon" />
					</div>
					<div className="item">
						<NotificationsNoneOutlined className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineOutlined className="icon" />
						<div className="counter">2</div>
					</div>
					<div className="item">
						<ListOutlined className="icon" />
					</div>
					<div className="avatar">
						<img
							src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
							alt=""
							className="avatar-img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
