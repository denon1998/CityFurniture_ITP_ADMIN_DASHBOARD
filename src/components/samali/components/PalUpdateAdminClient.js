

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

        axios.put(`http://furniture-store-backend.herokuapp.com/api/paypalpost/update/${id}`, data).then((res) => {

            if (res.data.success) {

                alert("post updated successfully")

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

    componentDidMount() {

        const id = this.props.match.params.id;

        //post/${id}/
        axios.get(`http://furniture-store-backend.herokuapp.com/api/paypalpost/${id}`).then((res) => {
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