import React, { Component} from 'react';
import axios from 'axios';
//import BG from './images/a.jpg';

export default class PostDetailsOffer extends Component {
    constructor(props){
      super(props);

      this.state={
        post:{}
      };      
    }

    //Retrieve data of specific form
    componentDidMount(){

      const id = this.props.match.params.id;

      axios.get(`http://furniture-store-backend.herokuapp.com/api/postOffers/${id}`).then((res) =>{
        if(res.data.success){
          this.setState({
            post:res.data.post
          });

          console.log(this.state.post);

        }
      });

    }

    render() {

      const {saleProductName,discountAmount,discountAsAPercentage,previousPrice,newPrice,description} = this.state.post;

      return (

        <div className="container border"

        style={{

          marginTop: "50px",

          width: '50%',

          backgroundImage: `url('https://i.pinimg.com/736x/f7/19/25/f719251215a20ff66f203f84444aec5e.jpg')`,

          backgroundPosition: 'center',

          backgroundSize: 'cover',

        }}>

          <div style={{marginTop:'20px'}}>

            <h1>{saleProductName}</h1>

          <dl className="row">
            <dt className="col-sm-3">Sale Product Name</dt>
            <dd className="col-sm-9">{saleProductName}</dd>

            <dt className="col-sm-3">Discount Amount</dt>
            <dd className="col-sm-9">{discountAmount}</dd>

            <dt className="col-sm-3">Discount Percentage</dt>
            <dd className="col-sm-9">{discountAsAPercentage}</dd>

            <dt className="col-sm-3">Previous Price</dt>
            <dd className="col-sm-9">{previousPrice}</dd>

            <dt className="col-sm-3">New Price</dt>
            <dd className="col-sm-9">{newPrice}</dd>

            <dt className="col-sm-3">Description</dt>
            <dd className="col-sm-9">{description}</dd>

          </dl>

          <div className="text-center">
          <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; 
          </button>
                 
          </div>
        </div> 
        </div>
      )
    }
}

