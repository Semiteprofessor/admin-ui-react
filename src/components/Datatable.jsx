/** @format */

import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import productData from "../data";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Column {
	id:
		| "title"
		| "image"
		| "price"
		| "category"
		| "description"
		| "stock"
		| "brand"
		| "rating"
		| "status";
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: "title", label: "Title" },
	{
		id: "image",
		label: "Image",
	},
	{ id: "price", label: "Price (₦)" },
	{ id: "category", label: "Category" },
	{ id: "description", label: "Description" },
	{ id: "stock", label: "Stock" },
	{ id: "brand", label: "Brand" },
	{ id: "rating", label: "Rating" },
	{ id: "status", label: "Status" },
];

const Datatable = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<div className="datatable">
			<div className="datatable-title">
				<h1>User List</h1>
				<Link to="/users/new">
					<button>
						<FiPlus className="icon" />
						<span>Add New</span>
					</button>
				</Link>
			</div>
			<Paper>
				<TableContainer className="table">
					<Table>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										className="table-cell"
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{productData
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row) => {
									return (
										<TableRow
											hover
											role="checkbox"
											tabIndex={-1}
											key={row.code}>
											{columns.map((column) => {
												const value = row[column.id];
												return (
													<TableCell
														className="table-cell"
														key={column.id}
														align={column.align}>
														{column.format && typeof value === "number"
															? column.format(value)
															: value}
													</TableCell>
												);
											})}
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={productData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
};

export default Datatable;
