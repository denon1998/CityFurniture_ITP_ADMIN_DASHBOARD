import React, { Component } from 'react';
import axios from 'axios';
import SlideShow from '../SlideShow/SlideShow';
import '../styles/formStyles.css';


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

      <div className="container border"

        style={{

          marginTop: "80px",

          width: '100%',

          backgroundImage: `url('https://bhiroof.com/wp-content/uploads/2020/10/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering_41470-1778.jpg')`,

          backgroundPosition: 'center',

          backgroundSize: 'cover',

        }}>

        <div style={{ marginTop: '20px' }}>

          <h1>{productName}</h1>
          <br/>

          <dl className="row">

            <dt className="col-sm-3">Product ID</dt><br></br>
            <dd className="col-sm-9">{productID}</dd><br></br>

            <dt className="col-sm-3">Color</dt><br></br>
            <dd className="col-sm-9">{productColor}</dd><br></br>

            <dt className="col-sm-3">Materials</dt><br></br>
            <dd className="col-sm-9">{productMaterial}</dd><br></br>

            <dt className="col-sm-3">Quantity</dt><br></br>
            <dd className="col-sm-9">{productQuantity}</dd><br></br>

            <dt className="col-sm-3">Category</dt><br></br>
            <dd className="col-sm-9">{productCategory}</dd><br></br>

            <dt className="col-sm-3">Manufacturer</dt><br></br>
            <dd className="col-sm-9">{productManufacture}</dd><br></br>

            <dt className="col-sm-3">Status</dt><br></br>
            <dd className="col-sm-9">{productStatus}</dd><br></br>

            <dt className="col-sm-3">Date</dt><br></br>
            <dd className="col-sm-9">{productDate}</dd><br></br>

          </dl>

        </div>
      </div>
      <SlideShow/>
      </div>
  
  
  )
      

  }
}