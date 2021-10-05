import React, { Component } from 'react';
import axios from 'axios';
import '../style/CardPay.css'


class PayDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };

    }

    componentDidMount() {

        const id = this.props.match.params.id;

        //post/${id}/
        axios.get(`https://furniture-store-backend.herokuapp.com/api/paypalpost/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });

    }



    render() {

        const { cname, cemail, cpassword } = this.state.post;

        return (
            <div className="container border"

                style={{
                    marginTop: "50px",
                    width: '50%',
                    backgroundImage: `url('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                <div style={{ marginTop: '20px', fontSize: 'medium' }}>

                    <br></br>
                    <center>
                        <h3>CUSTOMER PAYPAL DETAILS</h3>
                    </center>
                    <br></br>
                    <h4 ><b>{cname}</b></h4>
                    <hr />


                    <d1 className="row" style={{ marginTop: '10px' }}>
                        <dt className="col-sm-3">Customer Name</dt>
                        <dd className="col-sm-9">{cname}</dd>

                        <dt className="col-sm-3">Customer Email</dt>
                        <dd className="col-sm-9">{cemail}</dd>

                        <dt className="col-sm-3">Customer Password</dt>
                        <dd className="col-sm-9">{cpassword}</dd>




                    </d1>

                    <div className="form-group">
                        <br />
                      

                    </div>
                </div>


            </div>
        );
    }


}

export default PayDetails;