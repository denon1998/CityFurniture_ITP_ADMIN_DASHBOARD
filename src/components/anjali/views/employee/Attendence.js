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
import AttendenceMark from './components/AttendenceMark';
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

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
function Attendence() {
    const classes = useStyles();
    const [rowData,setRowData] = React.useState([]);
    const [count,setCount] = React.useState(0);
    const [today,setToday] = React.useState(new Date().toISOString().slice(0,10));
    const [search,setSearch] = React.useState('');


    useEffect(() => {
      if(search === ''){
        setCount(count+1);
      }else{
        const data = {
          id:search
        }
        axios.post('https://furniture-store-backend.herokuapp.com/api/employees/search',data).then(res => {
          setRowData(res.data);
        }
        );
      }
      
    },[search])

    useEffect(() => {
        axios.get('https://furniture-store-backend.herokuapp.com/api/employees')
        .then(res => {
            console.log(res.data);
            setRowData(res.data);
        }).catch(err => {
            console.log(err);
        });
    },[count]);

    const handleChangeSearch = (event)=>{
      setSearch(event.target.value);
    }
    const handleChangeToday = (event) => {
      setToday(event.target.value);
      setCount(count+1);
    };
  
    return (
        <div>
            <h3>Attendance</h3>
            <h4>Mark Attendence {today}</h4>
            
            <TextField  id="outlined-basic" label="Search by Employee ID" variant="outlined" value={search} onChange={handleChangeSearch} />
            
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EMP ID</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Attendence</StyledTableCell>
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
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">
                    <AttendenceMark today={today} employeeId={row.employeeId} empData={row}/> 
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Attendence
