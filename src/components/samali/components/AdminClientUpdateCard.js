import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import React, { Component } from 'react';
import axios from 'axios';

class EditPosts extends Component {

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
            cardnumber: '',
            customerName: '',
            expiry: '',
            cvc: '',
            focus: '',

        }
    }


    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
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
        const { cardnumber, customerName, expiry, cvc } = this.state;


        const data = {
            cardnumber: cardnumber,
            customerName: customerName,
            expiry: expiry,
            cvc: cvc,



        }

        console.log(data)

        axios.put(`https://furniture-store-backend.herokuapp.com/api/cardpost/update/${id}`, data).then((res) => {

            if (res.data.success) {

                alert("post updated successfully")

                this.setState(
                    {
                        cardnumber: "",
                        customerName: "",
                        expiry: "",
                        cvc: "",

                    }
                )
            }
        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        //post/${id}/
        axios.get(`https://furniture-store-backend.herokuapp.com/api/cardpost/${id}`).then((res) => {
            if (res.data.success) {


                this.setState({
                    cardnumber: res.data.post.cardnumber,
                    customerName: res.data.post.customerName,
                    expiry: res.data.post.expiry,
                    cvc: res.data.post.cvc
                });

                console.log(this.state.post);
            }
        });

    }





    render() {
        return (
            <div className='container' align="center" >
                <br />
                <br />
                <Cards
                    number={this.state.cardnumber}
                    name={this.state.customerName}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc}
                    focused={this.state.focus}


                />
                <br />
                <h2>Update Details Here</h2>

                <br />
                <form style={{ width: "40%" }}>
                    <input
                        class="form-control"
                        type="tel"
                        name="cardnumber"
                        placeholder="Card Number"
                        value={this.state.cardnumber}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <br />
                    <br />
                    <input
                        class="form-control"
                        type="text"
                        name="customerName"
                        placeholder="customer Name"
                        value={this.state.customerName}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <br />
                    <br />
                    <input
                        class="form-control"
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        value={this.state.expiry}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <br />
                    <br />
                    <input
                        class="form-control"
                        type="tel"
                        name="cvc"
                        placeholder="cvc"
                        value={this.state.cvc}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <br />
                    <br />
                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; UPDATE
                    </button>

                </form>
            </div>
        );
    }
}
export default EditPosts;