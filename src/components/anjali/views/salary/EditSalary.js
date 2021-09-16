import React, { useEffect }from 'react'
import axios from 'axios';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    useParams
  } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        flexDirection: 'column',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    errorMsg:{
      color:'red'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    inputs: {
      margin: theme.spacing(2),
    },
  }));
function EditSalary() {
    let { id } = useParams();

    const [empId,setEmpId] = React.useState('');
    const [empData,setEmpData] = React.useState({});
    const [month,setMonth] = React.useState('');
    const [advancePayment,setAdvancePayment] = React.useState('');
    const [overtimePayment,setOvertimePayment] = React.useState('');
    const [perDaySalary,setPerDaySalary] = React.useState('');
    const [numDays,setNumDays] = React.useState('');
    const [error,setError] = React.useState('');
    const [name,setName] = React.useState('');
    const [position,setPosition] = React.useState('');
    const [basicSalary,setBasicSalary] = React.useState('');
    const [netSalary,setNetSalary] = React.useState(0);

    useEffect(() => {
      if(basicSalary !== undefined){
        var bs = parseInt( basicSalary)
        var nd = parseInt(numDays)
        var pd = parseInt(perDaySalary)
        var op = parseInt(overtimePayment)
        var ap = parseInt(advancePayment)
        const netS =bs  + (nd * pd) + op - ap;
        
        setNetSalary(netS);
      }
      
    },[advancePayment,overtimePayment,perDaySalary,numDays]);
    const handleChangeAdvancePayment = (event) => {
        setAdvancePayment(event.target.value);
    };

    const handleChangeOvertimePayment = (event) => {

        setOvertimePayment(event.target.value);
    };
    const handleChangePerDaySalary = (event) => {
        setPerDaySalary(event.target.value);
    };

    const handleChangeNumDays = (event) => {
        setNumDays(event.target.value);
    };

    const handleChangeEmpId = (event) => {
        setEmpId(event.target.value);
      };


    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
      };


    const saveData = () => {
      //validate data before saving
      if(empId === ''){
        setError('Please select employee');
        return;
      }
      if(month === ''){
        setError('Please select month');
        return;
      }
      if(advancePayment === ''){
        setError('Please enter advance payment');
        return;
      }
      if(overtimePayment === ''){
        setError('Please enter overtime payment');
        return;
      }
      if(perDaySalary === ''){
        setError('Please enter per day salary');
        return;
      }
      if(numDays === ''){
        setError('Please enter number of days');
        return;
      }

      setError('');
      const data = {
        id:id,
        employeeId: empId,
        name: name,
        position: position,
        basicSalary: basicSalary,
        month: month,
        advancePayment: advancePayment,
        overtimePayment: overtimePayment,
        totalPayment: netSalary,
        perDaySalary: perDaySalary,
        totalDays: numDays,
      }
      console.log(data);
      axios.put('https://furniture-store-backend.herokuapp.com/api/salary',data).then(res => {
        console.log(res);
        alert('Salary updated successfully');

      }).catch(err => {
        console.log(err);
      });  
      

    }

    const takeData = (id) => {
        axios.get('https://furniture-store-backend.herokuapp.com/api/salary/'+id).then(res => {
            console.log(res);
            setEmpId(res.data.employeeId);
            setName(res.data.name);
            setPosition(res.data.position);
            setBasicSalary(res.data.basicSalary);
            setMonth(res.data.month);
            setAdvancePayment(res.data.advancePayment);
            setOvertimePayment(res.data.overtimePayment);
            setPerDaySalary(res.data.perDaySalary);
            setNumDays(res.data.totalDays);
        }
        ).catch(err => {
            console.log(err);
        }
        );
    }

    useEffect(() => {
        takeData(id);
    },[])
    
    
    const classes = useStyles();
    return (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper} >
                <h1>Add Salary</h1>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper} style={{display: 'flex',flexDirection:'column'}}>
                  <TextField disabled  className={classes.inputs}   id="outlined-basic" label="Employee ID" variant="outlined"  type="text" value={empId} onChange={handleChangeEmpId} />
                  
                 
                <TextField id="outlined-basic" value={name} className={classes.inputs} label="Name" variant="outlined"  disabled />
                <TextField id="outlined-basic" value={position} className={classes.inputs} label="Position" variant="outlined"  disabled />
                <TextField id="outlined-basic" value={basicSalary} className={classes.inputs} label="Basic Salary" variant="outlined"  disabled />
                 
                   </Paper>
                  
                    
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} style={{display: 'flex',flexDirection:'column'}}>
              <FormControl className={classes.inputs}>
                        <InputLabel id="demo-simple-select-label">Select Month</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={month}
                        onChange={handleChangeMonth}
                        >
                        <MenuItem value={"January"}>January</MenuItem>
                        <MenuItem value={"February"}>February</MenuItem>
                        <MenuItem value={"March"}>March</MenuItem>
                        <MenuItem value={"April"}>April</MenuItem>
                        <MenuItem value={"May"}>May</MenuItem>
                        <MenuItem value={"June"}>June</MenuItem>
                        <MenuItem value={"July"}>July</MenuItem>
                        <MenuItem value={"August"}>August</MenuItem>
                        <MenuItem value={"September"}>September</MenuItem>
                        <MenuItem value={"October"}>October</MenuItem>
                        <MenuItem value={"November"}>November</MenuItem>
                        <MenuItem value={"December"}>December</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField className={classes.inputs} id="outlined-basic" label="Advance Payment" variant="outlined" value={advancePayment} onChange={handleChangeAdvancePayment}  />
                    <TextField className={classes.inputs} id="outlined-basic" label="Overtime Payment" variant="outlined" value={overtimePayment} onChange={handleChangeOvertimePayment}  />
                    <TextField className={classes.inputs} id="outlined-basic" label="Per day payment" variant="outlined" value={perDaySalary} onChange={handleChangePerDaySalary} />
                    <TextField className={classes.inputs} id="outlined-basic" label="Number of days" variant="outlined" value={numDays} onChange={handleChangeNumDays} />
                    <h5>Net Salary {netSalary == NaN ? '': netSalary} </h5>
                    <p>{error}</p>

                    <Button className={classes.inputs} variant="contained" color="primary" onClick={saveData}>
                        Update Salary
                    </Button>
              </Paper>
            </Grid>
        </Grid>
            
        </div>
    )
}

export default EditSalary
