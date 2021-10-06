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

      axios.get(`https://furniture-store-backend.herokuapp.com/api/postOffers/${id}`).then((res) =>{
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
            <hr/>
          <dl className="row">
            <dt className="col-sm-3">Sale Product Name</dt> <br></br><br></br>
            <dd className="col-sm-9">{saleProductName}</dd> <br></br><br></br>

            <dt className="col-sm-3">Discount Amount</dt> <br></br><br></br>
            <dd className="col-sm-9">{discountAmount}</dd> <br></br><br></br>

            <dt className="col-sm-3">Discount Percentage</dt> <br></br><br></br>
            <dd className="col-sm-9">{discountAsAPercentage}</dd> <br></br><br></br>

            <dt className="col-sm-3">Previous Price</dt> <br></br><br></br>
            <dd className="col-sm-9">{previousPrice}</dd> <br></br><br></br>

            <dt className="col-sm-3">New Price</dt> <br></br><br></br>
            <dd className="col-sm-9">{newPrice}</dd> <br></br><br></br>

            <dt className="col-sm-3">Description</dt> <br></br><br></br>
            <dd className="col-sm-9">{description}</dd> <br></br><br></br>

          </dl>

          <div className="text-center">
          
          <div>
          
            <img src="https://i.pinimg.com/originals/e4/e6/89/e4e689332b6aa0d9d427f5883d4c3d53.gif" width="50%" height="80%" style={{width: 300,
            height: 300,
            //Below lines will help to set the border radius
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 15,
            overflow: 'hidden'}}/>
           </div>      
          </div>
        </div> 
        </div>
      )
    }
}

