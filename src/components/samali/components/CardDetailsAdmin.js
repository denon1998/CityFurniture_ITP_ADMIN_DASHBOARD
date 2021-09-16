import React, { Component } from 'react';
import axios from 'axios';
import '../style/CardPay.css'

class CardDetailsAdmin extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };

    }

    componentDidMount(){

        const id = this.props.match.params.id;
        
        //post/${id}/
        axios.get(`https://furniture-store-backend.herokuapp.com/api/cardpost/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });

    }

    

    render() {

        const {cardnumber,customerName,expiry,cvc} = this.state.post;

        return (
         
            <div style={{marginTop : '20px', fontSize:'mediem',}}>
                <br></br>
                <h4>{cardnumber}</h4>
                <hr/>

                <d1 className ="row">
                    <dt className="col-sm-3">Card Number</dt>
                    <dd className="col-sm-9">{cardnumber}</dd>

                    <dt className="col-sm-3">Customer Name</dt>
                    <dd className="col-sm-9">{customerName}</dd>

                    <dt className="col-sm-3">Expiry Date</dt>
                    <dd className="col-sm-9">{expiry}</dd>

                    <dt className="col-sm-3">CVC</dt>
                    <dd className="col-sm-9">{cvc}</dd>

                
                </d1>
                <br></br>
                <button className="btn btn-primary"><a href="/mail" style={{ textDecoration: 'none', color: 'white' }}>Request to client</a> </button>
            </div>
        );
    }

    
}

export default CardDetailsAdmin;