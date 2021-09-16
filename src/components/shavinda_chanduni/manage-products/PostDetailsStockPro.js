import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow';
import '../styles/formStyles.css';
import SidebarStock from '../SidebarStock/SidebarStock';

export default class PostDetailsStockPro extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`https://furniture-store-backend.herokuapp.com/api/postPro/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);
      }
    })

  }

  render(){

    const {productID,productName,productColor,productMaterial,productQuantity,productCategory,productManufacture,productStatus,productDate} = this.state.post;

    return(

      <div>
      <SidebarStock/>

      <div className = "container">

      <center>
      <h2>Product Details</h2>
      </center>

      <br/>


    
  <div style = {{marginTop: '20px'}}>

  <div className="cardS">
  <div className = "card-body" style = {{marginTop: '60px'}}> 

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Product ID</b></div>
        <div className="col-sm">{productID}</div>
        </div>

        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Name</b></div>
        <div className="col-sm">{productName}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Color</b></div>
        <div className="col-sm">{productColor}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Material</b></div>
        <div className="col-sm">{productMaterial}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Quantity</b></div>
        <div className="col-sm">{productQuantity}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Category</b></div>
        <div className="col-sm">{productCategory}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Manufacturer</b></div>
        <div className="col-sm">{productManufacture}</div>
        </div>
        <br/>
        
        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Status</b></div>
        <div className="col-sm">{productStatus}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Date</b></div>
        <div className="col-sm">{productDate}</div>
        </div>

        <SlideShow/>
  </div>
  </div>
  </div>

 
  <br/><br/><br/>
 
  </div> 
  <Footer />
  </div>
  
  
  )
  }
}