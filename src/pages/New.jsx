/** @format */

import React, { useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");

	return (
		<div className="new">
			<Sidebar />
			<div className="new-container">
				<Navbar />
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: require('../images/no-image.png')
							}
							alt=""
						/>
					</div>
					<div className="right">
						<form>
							<div className="form-input">
								<label htmlFor="file">
									Image:
									<DriveFolderUploadOutlined className="icon" />
								</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: "none" }}
								/>
							</div>
							{inputs.map((input) => (
								<div className="form-input" key={input.id}>
									<label>{input.label}</label>
									<input type={input.type} placeholder={input.placeholder} />
								</div>
							))}
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
