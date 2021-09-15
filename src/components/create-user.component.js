import React, { Component } from 'react';
import axios from 'axios';
// import swal from '@sweetalert/with-react'
import './myformStyle.css'
import SweetAlert from 'sweetalert2-react';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            show:false,
            username: '',
            Type: '',
            password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
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

        const user = {
            username: this.state.username,
            Type: this.state.Type,
            password: this.state.password,
        }

        console.log(user);

        axios.post('https://furniture-store-backend.herokuapp.com/api0/users/add', user)
            .then(res => {console.log(res.data); this.setState({show:true})});

        //window.location = '/users/';

        // swal({
        //     title: "Done!",
        //     text: "Customer Successfully Added",
        //     icon: "success",
        //     button: "Okay!"
        // })
        //     .then((value) => {
        //         swal(window.location = '/users/');
        //     });
    }

    render() {
        return (<
            div > <br />
            <div class="row">
                <div class="col-6">
                    <br />
                    <img src="https://cdn.dribbble.com/users/717092/screenshots/5887484/jingle-keys.gif" width="100%" height="100% " />
                </div>

                <div class="col-6">
                    <div class="myformstyle">
                        <div className="card-body">
                            <div className="col-md-8 mt-4 mx-auto">
                            </div>

                            <
                                h3 className="mb-3 font-weight-normal" > New User </h3> <
                                    form onSubmit={this.onSubmit} >
                                <
                                    div className="form-group" >
                                    <
                                        label > Username: </label> <
                                        input type="text"
                                        required className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                    /> </
                                div >

                                <
                                    div className="form-group" >
                                    <
                                        label > Type: </label> <
                                        input type="text"
                                        required className="form-control"
                                        value={this.state.Type}
                                        onChange={this.onChangeType}
                                    /> </
                                div >

                                <
                                    div className="form-group" >
                                    <
                                        label > Password: </label> <
                                        input type="text"
                                        required className="form-control"
                                        value={this.state.password}
                                        onChange={this.onChangepassword}
                                    /> </
                                div >

                                <
                                    div className="form-group" >
                                    <
                                        input type="submit"
                                        value="Create User"
                                        className="btn btn-primary" />
                                </
                                div> </
                            form > </
                        div> </div> </div>

                <SweetAlert
                    show={this.state.show}
                    title="Done!"
                    text="Customer Successfully Addedt"
                    onConfirm={() => {
                        this.setState({ show: false })
                        window.location = '/main';
                    }}
                />



            </div> </div>
        )
    }
}