/** @format */

import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Jan",
		total: 2400,
	},
	{
		name: "Feb",
		total: 3210,
	},
	{
		name: "Mar",
		total: 2290,
	},
	{
		name: "Apr",
		total: 2000,
	},
	{
		name: "May",
		total: 2181,
	},
	{
		name: "June",
		total: 2500,
	},
	{
		name: "July",
		total: 1100,
	},
	{
		name: "Aug",
		total: 2790,
	},
	{
		name: "Sep",
		total: 2450,
	},
	{
		name: "Oct",
		total: 1700,
	},
	{
		name: "Nov",
		total: 2900,
	},
	{
		name: "Dec",
		total: 2870,
	},
];

const Chart = ({ aspect, title }) => {
	return (
		<div className="chart">
			<div className="title">{title}</div>
			<ResponsiveContainer width="100%" aspect={aspect}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
						<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					{/* <YAxis /> */}
					<CartesianGrid strokeDasharray="3 3" className="chart-grid" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
