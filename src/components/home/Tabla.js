import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const { data } = useSelector((state) => state.dataReducer);

  console.log("table data ", data);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Algo</StyledTableCell>
            <StyledTableCell align="right">Algo 1</StyledTableCell>
            <StyledTableCell align="right">Algo 2</StyledTableCell>
            <StyledTableCell align="right">Algo 3</StyledTableCell>
            <StyledTableCell align="right">Algo 4</StyledTableCell>
            <StyledTableCell align="right">Algo 5</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">1</StyledTableCell>
              <StyledTableCell align="right">2</StyledTableCell>
              <StyledTableCell align="right">3</StyledTableCell>
              <StyledTableCell align="right">4</StyledTableCell>
              <StyledTableCell align="right">5</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
