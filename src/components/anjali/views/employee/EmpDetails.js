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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
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

  
  
function EmpDetails() {
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
    const classes = useStyles();

    const handleDelete = (id)=>{
        // confirm for delete
        if(window.confirm('Are you sure to delete this record?')){

          axios.delete('https://furniture-store-backend.herokuapp.com/api/employees/'+id)
          .then(res => {
              console.log(res.data);
              addDatatoLeaveTable(res.data);
              
              setCount(count+1);
          }).catch(err => {
              console.log(err);
          });
        }
    }
    const handleChangeSearch = (event)=>{
      setSearch(event.target.value);
    }

    const addDatatoLeaveTable = (data)=>{
      const newData =  {
        empId:data.employeeId,
        firstName:data.firstName,
        lastName: data.lastName,
        email: data.email,
        Address: data.address,
        phone: data.empPhone
      };
      axios.post('https://furniture-store-backend.herokuapp.com/api/leavedemp',newData)
      .then(res => {
          console.log(res.data);
      }
      ).catch(err => {
          console.log(err);
      }
      );
    }

    


    return (
        <div>
            <TextField  id="outlined-basic" label="Search by Employee ID" variant="outlined" value={search} onChange={handleChangeSearch} />
            
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EMP ID</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Date of entry</StyledTableCell>
            <StyledTableCell align="right">Education</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Basic Salary Rs</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.employeeId}
              </StyledTableCell>
              <StyledTableCell align="right"><img src={row.empImage} width="100" /></StyledTableCell>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.empPhone}</StyledTableCell>
              <StyledTableCell align="right">{row.dateOfEntery}</StyledTableCell>
              <StyledTableCell align="right">{row.education}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.basicSalary}</StyledTableCell>
              <StyledTableCell align="right" style={{display:"flex",flexDirection:"row"}}>
                <Button variant="contained" color="secondary" size="small" onClick={()=>handleDelete(row._id)}><DeleteIcon/></Button>
                <Link to={`../editemp/${row.employeeId}`}><Button size="small" variant="contained" color="primary"><EditIcon/> </Button></Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <br/>
    
        </div>
    )
}

export default EmpDetails
