

import React, { Component } from 'react';
import axios from 'axios';

class PalUpdate extends Component {

    /*state = {
        cardnumber: '',
        customerName: '',
        expiry: '',
        cvc: '',
        focus: '',

    };*/

    constructor(props) {
        super(props);
        this.state = {
            cname: '',
            cemail: '',
            cpassword: '',


        }
    }




    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })

    }


    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;
        const { cname, cemail, cpassword } = this.state;


        const data = {
            cname: cname,
            cemail: cemail,
            cpassword: cpassword,




        }

        console.log(data)

         //validation start here
         const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
         const email = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
 
 
         if (cname.length === 0 || cemail.length === 0 || cpassword.length === 0) {
            alert("Fields can not be empty!", "Please fill all the information!", "error");
 
         } else if ((!name.test(String(cname)))) {
            alert("Invalid Customer Name", "Customer name cannot contain any Numbers!", "error");
 
         }
         else if (cname.length > 20) {
            alert("Invalid Customer Name!", "Do not enter more than 20 letters!", "error");
         }
 
         else if (cname.length < 3) {
            alert("Invalid Customer Name!", "Please check your name again!", "error");
         }
         else if ((!email.test(String(cemail)))) {
            alert("Invalid Customer email", "Customer email should contain @ sign!", "error");
 
         }
         else if (cemail.length > 20) {
            alert("Invalid Customer Email!", "Please recheck your Email address!");
         }
 
         else if (cemail.length < 3) {
            alert("Invalid Customer Email!", "Please enter Correct Email Address!", "error");
         }
         else if (cpassword.length > 8) {
            alert("Invalid Customer Password!", "Please enter Correct Password!", "error");
         }
         else if (cpassword.length < 8) {
            alert("Invalid Customer Password!", "Please recheck your password", "error");
         }
 
         else {

        axios.put(`https://furniture-store-backend.herokuapp.com/api/paypalpost/update/${id}`, data).then((res) => {

            if (res.data.success) {

                alert("Payment updated successfully")

                this.setState(
                    {
                        cname: "",
                        cemail: "",
                        cpassword: "",


                    }
                )
            }
        })
    }
}

    componentDidMount() {

        const id = this.props.match.params.id;

        //post/${id}/
        axios.get(`https://furniture-store-backend.herokuapp.com/api/paypalpost/${id}`).then((res) => {
            if (res.data.success) {


                this.setState({
                    cname: res.data.post.cname,
                    cemail: res.data.post.cemail,
                    cpassword: res.data.post.cpassword,

                });

                console.log(this.state.post);
            }
        });

    }





    render() {
        return (
            <div className="App">

                <div className="col-10 mt-5 ml-5 mr-10">
                    <center>
                        <div class="card" style={{ width: '48rem' }}>
                            <form className="payform">
                                <h3>Payments through Credit Card</h3>
                                <label>Customer Name :   </label><br />
                                <input type="text" name="cname" onChange={this.handleInputChange} value={this.state.cname} className="form-control" /><br />

                                <label>Email Address: </label> <br />
                                <input type="text" name="cemail" onChange={this.handleInputChange} value={this.state.cemail} className="form-control" /><br />

                                <div className="form-group">
                                    <label>Password: </label><br />
                                    <input type="password" name="cpassword" onChange={this.handleInputChange} value={this.state.cpassword} className="formpwd" /><br />
                                </div>

                                <div className="form-group">
                                    <button value="Pay Rs." className="btn btn-warning" onClick={this.onSubmit}>Update</button>
                                </div>
                            </form>
                        </div>
                    </center>
                </div>

            </div>
        )

    }
}
export default PalUpdate;