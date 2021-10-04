import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
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
            Password: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/exercises/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    address: response.data.Address,
                    Phone: response.data.Phone,
                    Birthday: new Date(response.data.birthday),
                    Gender: response.data.Gender,
                    Email: response.data.Email,
                    Password: response.data.password,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('https://furniture-store-backend.herokuapp.com/api/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.Username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            Phone: e.target.value
        })
    }

    onChangebirthday(date) {
        this.setState({
            Birthday: date
        })
    }

    onChangeGender(e) {
        this.setState({
            Gender: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    onChangepassword(e) {
        this.setState({
            Password: e.target.value
        })
    }

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

        axios.post('https://furniture-store-backend.herokuapp.com/api/exercises/update/' + this.props.match.params.id, exercise)
        .then(res => console.log(res.data));
        alert("Edit Successfully")
        
        window.location = '/main';
    }

    render() {
        return ( <
            div > <br/>
            <div class="row">
            <div class="col-6">
            <br/><br/><br/><br/><br/><br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <img src="https://iconarchive.com/download/i93800/custom-icon-design/silky-line-user/user2-setting.ico" width="50%" height="40%" />
            </div>

            <div class="col-6">
            <div class="myformstyle">
            <div className="card-body"> 
            <div className="col-md-8 mt-4 mx-auto"> 
            </div>
            
            <
            h3 className="text-center" > Edit Customer </h3> <
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
            div > <
            div className = "form-group" >
            <
            label > Address: </label> <
            input type = "text"
            required className = "form-control"
            value = { this.state.address }
            onChange = { this.onChangeAddress }
            /> </
            div > <
            div className = "form-group" >
            <
            label > Phone: </label> <
            input type = "text"
            maxlength = "10"

            className = "form-control"
            value = { this.state.Phone }
            onChange = { this.onChangePhone }
            /> </
            div > <
            div className = "form-group" >
            <
            label > Birthday: </label> <
            div >
            <
            DatePicker selected = { this.state.Birthday }
            onChange = { this.onChangebirthday }
            /> </
            div >


            <
            div className = "form-group" >
            <
            label > Gender: </label> <
            input type = "text"
            className = "form-control"
            value = { this.state.Gender }
            onChange = { this.onChangeGender }
            /> </
            div >




            <
            div className = "form-group" >
            <
            label > Email: </label> <
            input type = "text"
            className = "form-control"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }
            /> </
            div >



            <
            div className = "form-group" >
            <
            label > Password: </label>  <
            input type = "text"
            required className = "form-control"
            value = { this.state.Password }
            onChange = { this.onChangepassword }
            / > </
            div >



            </div>

            <
            div className = "form-group" >
            <
            input type = "submit"
            value = "Edit"
            className = "btn btn-primary" / >
            </div> </
            form > </div> </div> </div> </div>
            <br/><br/> </div> 
        )
    }
}