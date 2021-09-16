import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
function MonthlySalaryPaymentReport() {
    const classes = useStyles();
    const [rowData,setRowData] = React.useState([]);
    const [count,setCount] = React.useState(0);
    //   TODO take report from backend
    return (
        <div>
            <h1>Monthly Salary Payment Report</h1>
            <h2>Date </h2>
            <h2>Month</h2>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Total Basic Salary Payment Rs.</StyledTableCell>
            <StyledTableCell align="right">Total Advance Payment Rs.</StyledTableCell>
            <StyledTableCell align="right">Total Overtime Payment Rs.</StyledTableCell>
            <StyledTableCell align="right">Net Total Rs.</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.employeeId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default MonthlySalaryPaymentReport
