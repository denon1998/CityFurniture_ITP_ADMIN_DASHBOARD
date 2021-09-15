import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

    }

    function onSubmit() {

        //   const email = this.state.email
        //   const password = this.state.password

        if (email === 'admin@gmail.com' && password === 'admin') {
            window.location = '/admindashboard';
        }


    }

    return ( 
        <div className="jumbotron">
        <div className = "Login" >

        <
        Form onSubmit = { handleSubmit } >
        <
        Form.Group size = "lg"
        controlId = "email" >
        <h1 className="text-center" ><font face = "Comic sans MS" size ="6"> User Login </font></h1> <br/>
        <
        Form.Label > User email </Form.Label> <
        Form.Control autoFocus type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        /> </
        Form.Group > <
        Form.Group size = "lg"
        controlId = "password" >
        <
        Form.Label > Password </Form.Label> <
        Form.Control type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> 
        </
        Form.Group > <
        Button block size = "lg"
        type = "submit"
        disabled = {!validateForm() }
        onClick = { onSubmit() } >
        Login </
        Button> </
        Form >


        </div> </div>
    );
}