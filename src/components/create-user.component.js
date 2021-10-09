import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import './myformStyle.css'

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            show:false,
            username: '',
            email: '',
            Type: '',
            password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            Type: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const { username, email, password } = this.state;
        const user = {
            username: this.state.username,
            email: this.state.email,
            Type: this.state.Type,
            password: this.state.password,
        }

        console.log(user);

        //validation
        const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (username.length < 3) {
            swal("User name invalid !", "length shuld be greater than 3", "error" );
        } else if ((!cuem.test(String(email)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if (password.length < 4)  {
            swal("Password invalid !", "Password shuld be greater than 4", "error" );
        } else {

            axios.post('https://furniture-store-backend.herokuapp.com/api/users/add', user)
            .then((res) => console.log(res.data));
    
            swal({
                title: "Done!",
                text: "Customer Successfully Added",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                window.location = "/users/";
            });
        }
    }

     //demo button method
     demo =() => { 

        //setState
        this.setState ({
            username: "Pasindu Shavinda"
        })
    
        this.setState ({
            Type: "Stock Management"
        })

        this.setState ({
            email: "pasindu@gmail.com"
        })
    
        this.setState ({
            password: "56781234"
        })
    
      }

    render() {
        return ( <
            div > <br/>
            <div class="row">
            <div class="col-6">
            <br/><br/>
            <img src="https://cdn.dribbble.com/users/717092/screenshots/5887484/jingle-keys.gif" width="100%" height="80%" />
            </div>

            <div class="col-6">
            <div class="myformstyle">
            <div className="card-body"> 
            <div className="col-md-8 mt-4 mx-auto"> 
            </div>
            
            <
            h3 className="text-center" > <font face = "Comic sans MS" size ="6"> New User </font> </h3> <
            form onSubmit = { this.onSubmit } >
            
            <
            div className = "form-group" >
            <
            label > User name: </label> <
            input type = "text"
            placeholder="Enter a user name"
            required className = "form-control"
            value = { this.state.username }
            onChange = { this.onChangeUsername }
            /> </
            div >

            <
            div className = "form-group" >
            <
            label > Email: </label> <
            input type = "text"
            placeholder="Enter a user name"
            required className = "form-control"
            value = { this.state.email }
            onChange = { this.onChangeemail}
            /> </
            div >

            <
            div className = "form-group" >
            <
            label > Type: </label> <
            input type = "text"
            placeholder="Enter a type"
            required className = "form-control"
            value = { this.state.Type }
            onChange = { this.onChangeType }
            /> </
            div >

            <
            div className = "form-group" >
            <
            label > Password: </label>  <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter a password"
            value = { this.state.password }
            onChange = { this.onChangepassword }
            /> <label > <p class="text-danger">*Password should be at least 4 words long</p></label>
            </div >

            <
            div className = "form-group" >
            <input type = "submit" value = "Create User" className = "btn btn-primary" / > &nbsp;

            <a href="/users/"> <button type="button" class="btn btn-warning"> Cansal</button></a>
            <br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>
            </div> 
            </form >
            </div> </div> </div> </div> <br/> </div>
        )
    }
}