import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import swal from '@sweetalert/with-react'
import './myformStyle.css'
import SweetAlert from 'sweetalert2-react';

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
            show: false,
            Username: '',
            Address: '',
            Phone: '',
            Birthday: new Date(),
            Gender: '',
            Email: '',
            Password: '',
            users: []
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

        axios.post('https://furniture-store-backend.herokuapp.com/api/exercises/add', exercise)
            .then(res => { console.log(res.data); this.setState({ show: true }) });


        // swal({
        //         title: "Done!",
        //         text: "Customer Successfully Added",
        //         icon: "success",
        //         button: "Okay!"
        //     })
        //     .then((value) => {
        //         swal(window.location = '/main');
        //     });
    }

    render() {
        return (<
            div >
            <div class="row">
                <div class="col-6">
                    <br />
                    <img src="https://spinestaffing.com/wp-content/uploads/2021/03/giphy-6.gif" width="80%" height="60% " />
                </div>

                <div class="col-6">
                    <div class="myformstyle">
                        <div className="card-body">
                            <div className="col-md-8 mt-4 mx-auto">
                            </div>

                            <
                                h3 className="text-center" ><font face="Comic sans MS" size="6"> New Customer </font> </h3> <
                                    form onSubmit={this.onSubmit} >
                                <
                                    div className="form-group" >
                                    <
                                        label > Name: </label>  <
                                        input type="text"
                                        required className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    /> </
                                div > <
                                    div className="form-group" >
                                    <
                                        label > Address: </label> <
                                        input type="text"
                                        required className="form-control"
                                        value={this.state.address}
                                        onChange={this.onChangeAddress}
                                    /> </
                                div > <
                                    div className="form-group" >
                                    <
                                        label > Phone: </label> <
                                        input type="text"
                                        maxlength="10"
                                        className="form-control"
                                        value={this.state.Phone}
                                        onChange={this.onChangePhone}
                                    /> </
                                div >


                                <
                                    div className="form-group" >
                                    <
                                        label > Gender: </label> <
                                        input type="text"
                                        className="form-control"
                                        value={this.state.Gender}
                                        onChange={this.onChangeGender}
                                    /> </
                                div >


                                <
                                    div className="form-group" >
                                    <
                                        label > Email: </label> <
                                        input type="text"
                                        className="form-control"
                                        value={this.state.Email}
                                        onChange={this.onChangeEmail}
                                    /> </
                                div >

                                <
                                    div className="form-group" >
                                    <
                                        label > Birthday: </label> <
                                            div >
                                        <
                                            DatePicker selected={this.state.Birthday}
                                            onChange={this.onChangebirthday}
                                        /> </
                                    div >
                                    <br />

                                    <
                                        div className="form-group" >
                                        <
                                            label > Password: </label>  <
                                            input type="text"
                                            required className="form-control"
                                            value={this.state.Password}
                                            onChange={this.onChangepassword}
                                        /> </
                                    div >


                                </
                                div>

                                <
                                    div className="form-group" >
                                    <
                                        input type="submit"
                                        value="Create"
                                        className="btn btn-primary" />
                                </
                                div> </
                            form > </
                        div> </div>
                    <SweetAlert
                        show={this.state.show}
                        title="Done!"
                        text="Customer Successfully Addedt"
                        onConfirm={() => {
                            this.setState({ show: false })
                            window.location = '/main';
                        }}
                    />

                </div> </div><br /><br /> </div>
        )
    }
}