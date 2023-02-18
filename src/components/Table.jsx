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

const TableView = () => {
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
		<Paper sx={{ width: "100%" }}>
			<TableContainer component={Paper} className="table">
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className="table-cell">Title</TableCell>
							<TableCell className="table-cell">Image</TableCell>
							<TableCell className="table-cell">Price (₦)</TableCell>
							<TableCell className="table-cell">Category</TableCell>
							<TableCell className="table-cell">Description</TableCell>
							<TableCell className="table-cell">Stock</TableCell>
							<TableCell className="table-cell">Brand</TableCell>
							<TableCell className="table-cell">Rating</TableCell>
							<TableCell className="table-cell">Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{productData.map((row) => (
							<TableRow key={row.id}>
								<TableCell className="table-cell">{row.title}</TableCell>
								<TableCell className="table-cell">
									<div className="cell-wrapper">
										<img src={row.images[0]} alt="" className="image" />
										{/* {row.title} */}
									</div>
								</TableCell>
								<TableCell className="table-cell">
									{row.price.toLocaleString(undefined, {
										maximumFractionDigits: 2,
									})}
								</TableCell>
								<TableCell className="table-cell">{row.category}</TableCell>
								<TableCell className="table-cell">{row.description}</TableCell>
								<TableCell className="table-cell">{row.stock}</TableCell>
								<TableCell className="table-cell">{row.brand}</TableCell>
								<TableCell className="table-cell">{row.rating}</TableCell>
								<TableCell className="table-cell">
									<span className={`status ${row.status}`}>{row.status}</span>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{/* <TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={productData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/> */}
		</Paper>
	);
};

export default TableView;
