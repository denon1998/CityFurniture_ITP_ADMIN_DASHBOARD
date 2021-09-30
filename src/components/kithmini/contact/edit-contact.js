import React, { Component } from 'react';
import axios from 'axios';
//import SidebarCustomercare from '../customercare/SidebarCustomercare';



export default class Editcontact extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Username: '',
            Phone: '',
            Email: ''
        }
    }

    componentDidMount() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/contact/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Username: response.data.Username,
                    Phone: response.data.Phone,
                    Email: response.data.Email,
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
            Username: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            Phone: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const contact = {
            Username: this.state.Username,
            Phone: this.state.Phone,
            Email: this.state.Email,
        }

        console.log(contact);

        axios.put('https://furniture-store-backend.herokuapp.com/api/contact/update/' + this.props.match.params.id, contact)
            .then(res => console.log(res.data));

        window.location = "/contact/";
    }

    render() {
        return ( 
            <div > 
                 {/* <SidebarCustomercare/> */}
            <br >
         </br>
  
    <div class="col-6">
    <div className="cardf" style={{width: "85%"}}>
       <div className="card-body">
         <div className="col-md-8 mt-4 mx-auto">

            <h3 > Edit contact </h3> 
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
              <label > Name: </label> 
              <input type = "text"
                     required className = "form-control"
                     value = { this.state.Username }
                     placeholder="Change your name"
                     onChange = { this.onChangeUsername }/> 
            </div > 

            <div className = "form-group" >
              <label > Phone: </label> 
              <input type = "text"
                     maxlength = "10"
                     className = "form-control"
                     value = { this.state.Phone }
                     placeholder="Change your phone number"
                     onChange = { this.onChangePhone }/> 
            </div >

            <div className = "form-group" >
              <label > Email: </label> 
              <input type = "text"
                     className = "form-control"
                     value = { this.state.Email }
                     placeholder="Change your Email address"
                     onChange = { this.onChangeEmail }/> 
            </div >

             <div className = "form-group" >
             <input type = "submit"
                    value = "Edit"
                    className = "btn btn-primary" />
             </div> 

             </form >
             </div>
            </div >
            </div >
          </div > 
            </div>
        )
    }
}