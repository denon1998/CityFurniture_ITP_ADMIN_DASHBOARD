import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import axios from 'axios';
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
function EditEmp() {
    let { id } = useParams();
    const classes = useStyles();
    


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
  const [dateOfEntery,setDateOfEntery] = React.useState('2021-10-11');
  const [education, setEducation] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [basicSalary, setBasicSalary] = React.useState('');
  const [uid,setUId] = React.useState('');
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
    const formData = new FormData()
    formData.append(
    'propic',
    selectedFile,
    selectedFile.name
  )
    axios.post('https://furniture-store-backend.herokuapp.com/api/employees/uploadimage', formData,{
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    }).then(res => {
      console.log(res.data.url)
      setProfileImage(`https://furniture-store-backend.herokuapp.com/${res.data.url}`);
    });
  }

  
  const  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
    if(!validateEmail(email)){
      setError('Please enter a valid email');
      return;
    }
    if(gender === ''){
      setError('Gender is required')
      return
       }
    if(phone === ''){
      setError('Phone is required');
      return
       }
    //phone number length validation
    if(phone.length != 10){
      setError('Please enter a valid phone number');
      return;
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
        id:uid,
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
      axios.put('https://furniture-store-backend.herokuapp.com/api/employees/', employee)
      .then(response =>{
        console.log(response);
        alert('Data updated successfully');
        //Reset all useState variables
      })
      .catch(error => {
        alert('There was an error!');
        console.error('There was an error!', error);
      });

    
    }


    
    
    const findEmp = (employeeId)=>{
      // alert(employeeId);
      if(employeeId){
          axios.get('https://furniture-store-backend.herokuapp.com/api/employees/'+employeeId)
          .then(res => {
              console.log(res.data[0]);
              setUId(res.data[0]._id);
              setEmployeeId(res.data[0].employeeId);
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
  useEffect(() => {
    findEmp(id);
  },[])
    
    return (
        <div style={{backgroundColor:"#ccc"}}>
            <div className={classes.rootGrid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
            <h1>Edit Employee</h1>
          </Paper>
        </Grid>
        
        
        
        
          <Grid item xs={6}>
          <Paper className={classes.paper}  style={{display: 'flex',flexDirection:'column'}}>
            <TextField className={classes.inputs} id="outlined-basic" label="Employee ID" variant="outlined" value={employeeId} disabled />
            <TextField className={classes.inputs} id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={handleChangeFirstName} />
            
            <TextField className={classes.inputs} id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={handleChangeLastName} />
            <TextField className={classes.inputs} id="outlined-basic" label="Address" variant="outlined"  value={address} onChange={handleChangeAddress} />
            
            <TextField className={classes.inputs} id="outlined-basic" label="Age" type="number" variant="outlined" value={age} onChange={handleChangeAge} />
            <TextField className={classes.inputs} id="outlined-basic" label="Email" variant="outlined" onChange={handleChangeEmail} value={email}/>
            <TextField className={classes.inputs} id="outlined-basic" label="Phone" variant="outlined" onChange={handleChangePhone} value={phone}/>
            

            <FormLabel className={classes.inputs} component="legend" style={{textAlign: 'left'}}>Gender</FormLabel>
            <RadioGroup className={classes.inputs}  aria-label="gender" name="gender1" value={gender} onChange={handleChangeGender}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>  
            <TextField
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
                    >
                      <MenuItem value={"BCom"}>BCom</MenuItem>
                      <MenuItem value={"BA"}>BA</MenuItem>
                      <MenuItem value={"Diploma"}>Diploma</MenuItem>
                      <MenuItem value={"AL"}>A/L</MenuItem>
                      <MenuItem value={"OL"}>O/L</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
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
                    >
                      <MenuItem value={"Account"}>Account</MenuItem>
                      <MenuItem value={"Manager"}>Manager</MenuItem>
                      <MenuItem value={"Driver"}>Driver</MenuItem>
                      <MenuItem value={"FurnitureDesigner"}>Furniture Designer</MenuItem>
                      <MenuItem value={"Carpenter"}>Carpenter</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                    <TextField className={classes.inputs} id="outlined-basic" label="Basic Salary" variant="outlined" type="number" value={basicSalary}  onChange={handleChangeBasicSalary}/>
                    <p className={classes.errorMsg}>{error}</p>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                      Update
                    </Button>                   
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}  style={{display: 'flex',flexDirection:'column'}}>
                {profileImage == null ? null : <img src={profileImage} alt="profile" width="100%" />}
                
                <TextField  type="file" onChange={fileChangedHandler}/>
                <Button onClick={uploadHandler} variant="contained" color="primary">Upload!</Button>
            </Paper>
             </Grid>
            
        
        
      </Grid>
    </div>
                
                

                <form className={classes.root} noValidate autoComplete="off">
                    
                    
                   
                    {/* Select education */}
                    
                </form>
        </div>
    )
}

export default EditEmp
