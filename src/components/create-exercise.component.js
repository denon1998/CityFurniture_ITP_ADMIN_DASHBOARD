import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import './myformStyle.css'

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangebirthday = this.onChangebirthday.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Username: '',
            Address: '',
            Phone: '',
            Birthday: new Date(),
            Gender: '',
            Email: '',
            Password: ''
        }
    }

    //set the username 
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    //set the address
    onChangeAddress(e) {
            this.setState({
                address: e.target.value
            })
        }

    //set phone number
    onChangePhone(e) {
            this.setState({
                Phone: e.target.value
            })
        }
        
    //set birthday
    onChangebirthday(date) {
            this.setState({
                Birthday: date
            })
        }
    
    //set gender
    onChangeGender(e) {
        this.setState({
            Gender: e.target.value
        })
    }

    //Set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    //Set password
    onChangepassword(e) {
        this.setState({
            Password: e.target.value
        })
    }

    //submit Function
    onSubmit(e) {
        e.preventDefault();
        const {Phone,Email,Password,username} = this.state;
        const exercise = {
            username: this.state.username,
            Address: this.state.address,
            Phone: this.state.Phone,
            birthday: this.state.Birthday,
            Gender: this.state.Gender,
            Email: this.state.Email,
            password: this.state.Password
        }

        console.log(exercise);

        //validation
        const cup = /^[0-9\b]+$/;
        const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

        if((!cup.test(String(Phone))) || (Phone.length != 10)) {
            swal("Invalid Contact Number !", "contact number should be valide pattern", "error");
        } else if ((!cuem.test(String(Email)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if (Password.length < 4)  {
            swal("Password invalid !", "length shuld be greater than 4", "error");
        } else if (username.length < 3)  {
            swal("User name invalid !", "length shuld be greater than 3", "error");
        }
        else {

        axios.post('https://furniture-store-backend.herokuapp.com/api/exercises/add', exercise)
            .then(res => { console.log(res.data); this.setState({ show: true }) });


            swal({
                title: "Done!",
                text: "Customer Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                window.location = '/main';
            });
        }
    }

    //demo button method
    demo =() => { 

    //setState
    this.setState ({
        username: "Chamidu Priyankara"
    })

    this.setState ({
        address: "Malabe"
    })

    this.setState ({
        Phone: "0751231234"
    }) 

    this.setState ({
        Gender: "Male"
    }) 

    this.setState ({
        Email: "chamidu@gmail.com"
    })

    this.setState ({
        Password: "chamidU123"
    })

    }

    render() {
        return ( <
            div > <br/>
            <div class="row">
            <div class="col-6">
            <br/><br/><br/><br/><br/><br/><br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            <img src="https://static.wixstatic.com/media/fc21aa_02353b548f004825b07fba5792a0beaf~mv2.gif" width="60%" height="45% " />
            </div>

            <div class="col-6">
            <div class="myformstyle2">
            <div className="card-body"> 
            <div className="col-md-8 mt-4 mx-auto"> 
            </div>
            
            <
            h3 className="text-center" > <font face = "Comic sans MS" size ="6"> New Customer </font> </h3> <
            form onSubmit = { this.onSubmit } >
            
            <
            div className = "form-group" >
            <
            label > Name: </label>  <
            input type = "text"
            required className = "form-control"
            placeholder="Enter name"
            value = { this.state.username }
            onChange = { this.onChangeUsername }
            / > </
            div > 
            
            <
            div className = "form-group" >
            <
            label > Address: </label> <
            input type = "text"
            required className = "form-control"
            placeholder="Enter address"
            value = { this.state.address }
            onChange = { this.onChangeAddress }
            /> </
            div > 

            <
            div className = "form-group" >
            <
            label > Phone: </label> <
            input type = "text"
            required className = "form-control"
            placeholder="Enter phone number"
            maxlength = "10"
            value = { this.state.Phone }
            onChange = { this.onChangePhone }
            /> </
            div >
            

            <
            div className = "form-group" >
            <
            label > Gender: </label> <
            input type = "text"
            required className = "form-control"
            placeholder="Enter gender (Male/Female)"
            value = { this.state.Gender }
            onChange = { this.onChangeGender }
            /> </
            div >

            <
            div className = "form-group" >
            <
            label > Email: </label> <
            input type = "text"
            required className = "form-control"
            placeholder="Enter email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/> 
            </
            div >

            <
            div className = "form-group" >
            <
            label > Birthday: </label> <
            div >
            <
            DatePicker selected = { this.state.Birthday }
            onChange = { this.onChangebirthday }
            /> </
            div >
            <br/>

            <
            div className = "form-group" >
            <
            label > Password: </label>  <
            input type = "text"
            required className = "form-control"
            placeholder="Enter a password"
            value = { this.state.Password }
            onChange = { this.onChangepassword }
            /> <label > <p class="text-danger">*Password should be at least 4 words long</p></label>
            </div >

            

            </div>
            <div className = "form-group" >
            <input type = "submit" value = "Create" className = "btn btn-primary" / > &nbsp;

            <a href="/main"> <button type="button" class="btn btn-warning"> Cansal</button></a>
            <br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
            </
            div> </
            form > </
            div> </div> </div> </div>
            <br/> <br/> </div> 

        ) 
    }
}