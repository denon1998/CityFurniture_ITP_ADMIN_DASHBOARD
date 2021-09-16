import React,{ useState} from 'react'
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
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
    rootGrid: {
      flexGrow: 1,
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
function ViewAEmployee() {
    const [empData,setEmpData] = React.useState({});

    const [selectedFile,setSelectedFile] = React.useState(null);
  
    const [profileImage, setProfileImage] = React.useState(null);
    const [employeeId,setEmployeeId] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [dateOfEntery,setDateOfEntery] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [basicSalary, setBasicSalary] = React.useState('');


  const [error, setError] = React.useState('');

  const handleChangeEmpId = (event) => {
    setEmployeeId(event.target.value);
  }

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const  handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangePhone = (event) => {
    
    setPhone(event.target.value);
  };

  const handleChangeDateOfEntery = (event) => {
    setDateOfEntery(event.target.value);
  };



  const handleChangeEducation = (event) => {
    setEducation(event.target.value);
  };

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleChangeBasicSalary = (event) => {
    setBasicSalary(event.target.value);
  };

  const fileChangedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const uploadHandler = () => {

  }

  const handleSubmit = () => {
    // validation first

    if(profileImage === null){
      setError('Please upload a profile image');
      return;
    }
    if(employeeId === ''){
      setError('Employee Id is required');
      return;
    }
    if(firstName === ''){
      setError('First name is required')
      return
    }
    if(lastName === ''){
      setError('Last name is required')
      return
    }
    if(address === ''){
      setError('Address is required')
      return
    }
    if(age === ''){
      setError('Age is required')
      return
    }
    if(email === ''){
      setError('Email is required')
      return
    }
    if(gender === ''){
      setError('Gender is required')
      return
       }
    if(phone === ''){
      setError('Phone is required');
      return
       }
        
    if(dateOfEntery === ''){
      setError('Date of is required');
      return
    } 
    if(education === ''){
      setError('Education is required');
      return
    }
    if(position === ''){
      setError('Position is required');
      return
    }
    if(basicSalary === ''){
      setError('Basic salary is required');
      return
    }
    // if no error
    setError('');
    // axios post request
      const employee = { 
        employeeId: employeeId,
        firstName: firstName,
        lastName: lastName,
        address: address,
        age: age,
        email: email,
        gender: gender,
        empPhone:phone,
        dateOfEntery:dateOfEntery,
        education: education,
        position: position,
        basicSalary: basicSalary,
        empImage:profileImage
       };
      axios.put('https://furniture-store-backend.herokuapp.com/api/employees', employee)
      .then(response =>{
        console.log(response);
        alert('Data added successfully');
        //Reset all useState variables
        setProfileImage(null);
        setEmployeeId('');
        setFirstName('');
        setLastName('');
        setAddress('');
        setAge('');
        setEmail('');
        setGender('');
        setPhone('');
        setDateOfEntery('');
        setEducation('');
        setPosition('');
        setBasicSalary('');
      })
      .catch(error => {
        alert('There was an error!');
        console.error('There was an error!', error);
      });

    
    }


    const findEmp = ()=>{
        if(employeeId){
            axios.get('https://furniture-store-backend.herokuapp.com/api/employees/'+employeeId)
            .then(res => {
                console.log(res.data[0]);
                setEmpData(res.data[0]);
                setFirstName(res.data[0].firstName);
                setLastName(res.data[0].lastName);
                setAddress(res.data[0].address);
                setAge(res.data[0].age);
                setEmail(res.data[0].email);
                setPhone(res.data[0].empPhone);
                setGender(res.data[0].gender);
                setDateOfEntery(res.data[0].dateOfEntery);
                setEducation(res.data[0].education);
                setPosition(res.data[0].position);
                setBasicSalary(res.data[0].basicSalary);
                setProfileImage(res.data[0].empImage);
            }).catch(err => {
                console.log(err);
            });
        }else{
            alert('Please enter employee id');
        }
    }
    const classes = useStyles();
    return (
        <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper className={classes.paper} >
                <h1>View  Employee</h1>
            </Paper>
            </Grid>

            <Grid item xs={6}>
          <Paper className={classes.paper}  style={{display: 'flex',flexDirection:'column'}}>
            <TextField className={classes.inputs} id="outlined-basic" label="Employee ID" variant="outlined" value={employeeId} onChange={handleChangeEmpId} />
            <Button  variant="contained" color="secondary"  className={classes.inputs}  onClick={findEmp}>Find</Button>
            <TextField disabled className={classes.inputs} id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={handleChangeFirstName} />
            
            <TextField disabled className={classes.inputs} id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={handleChangeLastName} />
            <TextField disabled className={classes.inputs} id="outlined-basic" label="Address" variant="outlined"  value={address} onChange={handleChangeAddress} />
            
            <TextField disabled className={classes.inputs} id="outlined-basic" label="Age" type="number" variant="outlined" value={age} onChange={handleChangeAge} />
            <TextField disabled className={classes.inputs} id="outlined-basic" label="Email" variant="outlined" onChange={handleChangeEmail} value={email}/>
            <TextField disabled className={classes.inputs} id="outlined-basic" label="Phone" variant="outlined" onChange={handleChangePhone} value={phone}/>
            

            <FormLabel className={classes.inputs} component="legend" style={{textAlign: 'left'}}>Gender</FormLabel>
            <RadioGroup className={classes.inputs}  aria-label="gender" name="gender1" value={gender} onChange={handleChangeGender}>
                        <FormControlLabel disabled value="female" control={<Radio />} label="Female" />
                        <FormControlLabel disabled value="male" control={<Radio />} label="Male" />
            </RadioGroup>  
            <TextField
                    disabled
                    value={dateOfEntery}
                    onChange={handleChangeDateOfEntery}
                    id="date"
                    label="Date of Entry"
                    type="date"
                    defaultValue="2021-10-10"
                    className={classes.inputs}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />    
                <FormControl className={classes.inputs}>
                    <InputLabel id="demo-simple-select-label">Select Education</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={education}
                      onChange={handleChangeEducation}
                      disabled={true}
                    >
                      <MenuItem value={"AL"}>AL</MenuItem>
                      <MenuItem value={"OL"}>OL</MenuItem>
                      <MenuItem value={"University"}>University</MenuItem>
                    </Select>
                  </FormControl>
                    {/* Select position */}
                    <FormControl className={classes.inputs}>
                    <InputLabel id="demo-simple-select-label">Select Position</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={position}
                      onChange={handleChangePosition}
                      disabled
                    >
                      <MenuItem value={"Accountant"}>Accountant</MenuItem>
                      <MenuItem value={"Manager"}>Manager</MenuItem>
                      <MenuItem value={"Driver"}>Driver</MenuItem>
                    </Select>
                  </FormControl>
                    <TextField disabled className={classes.inputs} id="outlined-basic" label="Basic Salary" variant="outlined" value={basicSalary}  onChange={handleChangeBasicSalary}/>
                    <p className={classes.errorMsg}>{error}</p>
                    {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
                      Add
                    </Button>                    */}
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}  style={{display: 'flex',flexDirection:'column'}}>
                {profileImage == null ? null : <img src={profileImage} alt="profile" width="100%" />}
                
                {/* <TextField  type="file" onChange={fileChangedHandler}/> */}
                {/* <Button onClick={uploadHandler} variant="contained" color="primary">Upload!</Button> */}
            </Paper>
             </Grid>
            
        </Grid>
        </div>
    )
}

export default ViewAEmployee
