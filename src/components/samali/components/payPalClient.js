import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';


class payPal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cname: '',
            cemail: '',
            cpassword: ''


        }
    }
    changeNameHandler = event => { this.setState({ cname: event.target.value }) }
    changeEmailHandler = event => { this.setState({ cemail: event.target.value }) }
    changePasswordHandler = event => { this.setState({ cpassword: event.target.value }) }



    onSubmit = (event) => {
        event.preventDefault();

        const Paypal = {
            cname: this.state.cname,
            cemail: this.state.cemail,
            cpassword: this.state.cpassword
        };

        axios.post("https://furniture-store-backend.herokuapp.com/api/postPay/save", Paypal)
            .then(response => {
                if (response.data.success) {
                    alert('successful')
                    this.props.history.push('/palSuccess/' + this.state.cpassword + '/' + this.props.match.params.tot);

                } else {
                    alert('Failed')
                }
            })

    }
    render() {

        return (
            <div className="App">

                <div className="col-10 mt-5 ml-5 mr-10">


                    <h1 class="topic">PAY NOW </h1>
                    <h4>Please do payments to proceed ahead with your selected items</h4>


                    <center>
                        <div className="card" style={{ width: '48rem' }}>
                            <form onSubmit={this.onSubmit} className="payform">
                                <h3>Payments through PayPal</h3>
                                <div className="form-group">
                                    <Link to="https://www.paypal.com/lk/home">
                                        <input type="submit" value="Sign in" className="btn signIn" /></Link><br /><br />
                                    <label>Customer Name :   </label><br />
                                    <input type="text" onChange={this.changeNameHandler} value={this.state.cname} className="form-control" /><br />

                                    <label>Email Address: </label> <br />
                                    <input type="text" onChange={this.changeEmailHandler} value={this.state.cemail} className="form-control" /><br />
                                </div>
                                <div className="form-group">
                                    <label>Password: </label><br />
                                    <input type="password" onChange={this.changePasswordHandler}
                                        value={this.state.cpassword} className="formpwd" /><br />
                                </div>


                                <div className="form-group">
                                    <Link to={"/CardPay/"} value="Pay Rs." className="btn btn-primary" onClick={this.onSubmit}>Pay</Link>
                                  
                                </div>

                            </form>
                           
                        </div></center>
                        <div className="form-group">
               
              </div><br /><br />
                </div>

               

            </div>
        );
    }
}
export default payPal;