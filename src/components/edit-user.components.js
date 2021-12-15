import React, { Component } from 'react';
import axios from 'axios';



export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            email: '',
            Type: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    email: response.data.email,
                    Type: response.data.Type,
                    password: response.data.password

                })
            })
            .catch(function(error) {
                console.log(error);
            })



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

    onChangeType(e) {
        this.setState({
            Type: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }





    onSubmit = (e) => {
        e.preventDefault();

        const { username,email, Type, password } = this.state;

        const user = {
            username: username,
            email: email,
            Type: Type,
            password: password,
        }

        console.log(user);

        axios.post('https://furniture-store-backend.herokuapp.com/api/users/update/' + this.props.match.params.id, user)
        .then(res => console.log(res.data));
        alert("Edit Successfully")
        
        window.location = '/users/';
    }


    render() {
        return ( <
            div > <br/>
            <div class="row">
            <div class="col-6">
            <br/><br/><br/><br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <img src="https://icons-for-free.com/iconfiles/png/512/cloud+database-131964743840800085.png" width="50%" height="50%" />
            </div>

            <div class="col-6">
            <div class="myformstyle">
            <div className="card-body"> 
            <div className="col-md-8 mt-4 mx-auto"> 
            </div>
            
            <
            h3 className="text-center" > Edit Users </h3> <
            form onSubmit = { this.onSubmit } >
            <
            div className = "form-group" >
            <
            label > Name: </label>  <
            input type = "text"
            required className = "form-control"
            value = { this.state.username }
            onChange = { this.onChangeUsername }
            / > </
            div >


            <
            div className = "form-group" >
            <
            label > Email: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.email }
            onChange = { this.onChangeemail }
            /> </
            div >

            <
            div className = "form-group" >
            <
            label > Type: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.Type }
            onChange = { this.onChangeType }
            /> </
            div >


            <
            div className = "form-group" >
            <
            label > Password: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.password }
            onChange = { this.onChangePassword }
            /> </
            div >

            <
            div className = "form-group" >
            <
            input type = "submit"
            value = "Edit"
            className = "btn btn-primary" / > &nbsp;

            <a href="/users/"> <button type="button" class="btn btn-warning"> Cansal</button></a>
            </
            div> </
            form >  </div> </div> </div> </div>
            <br/><br/> </div> 
        )
    }
}
