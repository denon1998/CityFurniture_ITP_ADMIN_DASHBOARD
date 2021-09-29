import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow';
import '../styles/formStyles.css';


export default class PostDetailsStockSup extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`https://furniture-store-backend.herokuapp.com/api/suppost/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);
      }
    })

  }

  render(){

    const {supplierID,supplierName,supplierPhone,supplierEmail,supplierAddress,supplierComName,supplierComAddress,supplierDate} = this.state.post;

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

          <h1>{supplierName}</h1>
          <br/>

          <dl className="row">

            <dt className="col-sm-3">Supplier ID</dt><br></br>
            <dd className="col-sm-9">{supplierID}</dd><br></br>

            <dt className="col-sm-3">Contact Number</dt><br></br>
            <dd className="col-sm-9">{supplierPhone}</dd><br></br>

            <dt className="col-sm-3">Email</dt><br></br>
            <dd className="col-sm-9">{supplierEmail}</dd><br></br>

            <dt className="col-sm-3">Address</dt><br></br>
            <dd className="col-sm-9">{supplierAddress}</dd><br></br>

            <dt className="col-sm-3">Company Name</dt><br></br>
            <dd className="col-sm-9">{supplierComName}</dd><br></br>

            <dt className="col-sm-3">Company Address</dt><br></br>
            <dd className="col-sm-9">{supplierComAddress}</dd><br></br>

            <dt className="col-sm-3">Date</dt><br></br>
            <dd className="col-sm-9">{supplierDate}</dd><br></br>

          </dl>

        </div>
      </div>
      <SlideShow/>
      </div>
  
  
  )
      

  }
}