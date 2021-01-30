import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { getAllAssets } from "../../store/assets";
import "./AssetsDisplaySplash.css";

const columns = [
  { id: "rank", label: "#", minWidth: 5 },
  { id: "logo", label: "Logo", minWidth: 5 },
  { id: "symbol", label: "Symbol", minWidth: 15 },
  { id: "name", label: "Name", align: "left", minWidth: 15 },
  { id: "price", label: "Price", minWidth: 15 },
  { id: "change24h", label: "24h", minWidth: 15 },
  { id: "change7d", label: "7d", minWidth: 15 },
];

function createData(rank, logo, symbol, name, price, change24h, change7d) {
  return { rank, logo, name, symbol, price, change24h, change7d };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
    fontSize: 5,
  },
});

export default function AssetsDisplay({ setAssetDetailsData }) {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let assetsArr;
  // useEffect(() => {
  //   assetsArr = Object.values(assets);
  //   console.log(assetsArr);
  // }, [assets]);
  assetsArr = Object.values(assets);
  const classes = useStyles();
  const rows = assetsArr.map((asset) => {
    return createData(
      asset.id,
      asset.assetDetails.logo,
      asset.symbol,
      asset.name,
      asset.quote.USD.price.toFixed(2),
      asset.quote.USD.percent_change_24h.toFixed(2),
      asset.quote.USD.percent_change_7d.toFixed(2)
    );
  });

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id !== "logo") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <img className="logo-img" src={value}></img>
                          </TableCell>
                        );
                      }
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

// {assetsArr.map((asset) => {
//   return (
//     <tr>
//       <td>
//         <img src={asset.assetDetails.logo}></img>
//       </td>
//       <td>{asset.symbol}</td>
//       <td>${asset.quote.USD.price.toFixed(2)}</td>
//     </tr>
//   );
// })}
