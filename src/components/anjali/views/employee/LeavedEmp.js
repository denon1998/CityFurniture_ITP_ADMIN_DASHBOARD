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
import TextField from '@material-ui/core/TextField';
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
function LeavedEmp() {
    const [rowData,setRowData] = React.useState([]);
    const [count,setCount] = React.useState(0);


    const [search,setSearch] = React.useState('');
    const handleChangeSearch = (event)=>{
      setSearch(event.target.value);
    }


    useEffect(() => {
      if(search === ''){
        setCount(count+1);
      }else{
        const data = {
          id:search
        }
        axios.post('https://furniture-store-backend.herokuapp.com/api/leavedemp/search',data).then(res => {
          setRowData(res.data);
        }
        );
      }
      
    },[search])

    useEffect(() => {
        axios.get('https://furniture-store-backend.herokuapp.com/api/leavedemp')
        .then(res => {
            console.log(res.data);
            setRowData(res.data);
        }).catch(err => {
            console.log(err);
        });
    },[count]);
    const classes = useStyles();
    return (
        <div>
          <TextField  id="outlined-basic" label="Search by Employee ID" variant="outlined" value={search} onChange={handleChangeSearch} />
            
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EMP ID</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.empId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.Address}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default LeavedEmp
