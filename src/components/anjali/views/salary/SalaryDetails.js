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
import TextField from '@material-ui/core/TextField';
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
function SalaryDetails() {
    const classes = useStyles();
    const [rowData,setRowData] = React.useState([]);
    const [count,setCount] = React.useState(0);
    const [search,setSearch] = React.useState('');

    useEffect(() => {
      if(search === ''){
        setCount(count+1);
      }else{
        const data = {
          id:search
        }
        axios.post('https://furniture-store-backend.herokuapp.com/api/salary/search',data).then(res => {
          setRowData(res.data);
        }
        );
      }
      
    },[search])

    const handleChangeSearch = (event)=>{
      setSearch(event.target.value);
    }

    useEffect(() => {
        axios.get('https://furniture-store-backend.herokuapp.com/api/salary')
        .then(res => {
            console.log(res.data);
            setRowData(res.data);
        }).catch(err => {
            console.log(err);
        });
    },[count]);
    const handleDelete = (id)=>{
      // confirm for delete
      if(window.confirm('Are you sure to delete this record?')){

        axios.delete('https://furniture-store-backend.herokuapp.com/api/salary/'+id)
        .then(res => {
            console.log(res.data);
            setCount(count+1);
        }).catch(err => {
            console.log(err);
        });
      }
  }
    return (
        <div>
            <TextField  id="outlined-basic" label="Search by Employee ID" variant="outlined" value={search} onChange={handleChangeSearch} />
            
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EMP ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Basic Salary</StyledTableCell>
            <StyledTableCell align="right">Advance Payment Rs</StyledTableCell>
            <StyledTableCell align="right">Overtime Payment Rs</StyledTableCell>
            <StyledTableCell align="right">Per Day Payment Rs</StyledTableCell>
            <StyledTableCell align="right">Number of Days</StyledTableCell>
            <StyledTableCell align="right">Net Salary</StyledTableCell>
            <StyledTableCell align="right">Month</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.employeeId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.basicSalary}</StyledTableCell>
              <StyledTableCell align="right">{row.advancePayment}</StyledTableCell>
              <StyledTableCell align="right">{row.overtimePayment}</StyledTableCell>
              <StyledTableCell align="right">{row.perDaySalary}</StyledTableCell>
              <StyledTableCell align="right">{row.totalDays}</StyledTableCell>
              <StyledTableCell align="right">{row.totalPayment}</StyledTableCell>
              <StyledTableCell align="right">{row.month}</StyledTableCell>
              <StyledTableCell align="right">
              <Link to={`../edit-salary/${row._id}`}><Button variant="contained" color="primary" size="small">Edit</Button></Link>
                <Button variant="contained" color="secondary" size="small" onClick={()=>handleDelete(row._id)}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default SalaryDetails
