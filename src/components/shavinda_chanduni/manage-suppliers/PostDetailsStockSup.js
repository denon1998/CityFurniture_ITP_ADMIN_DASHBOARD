import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow';
import '../styles/formStyles.css';
import SidebarStock from '../SidebarStock/SidebarStock';


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
      <SidebarStock/>

      <div className = "container">


      <div style = {{marginTop: '20px'}}>

      <div className="cardS">
      <div className = "card-body" style = {{marginTop: '60px'}}> 
            <div className = "row">
            <div className="col-sm" />
            <div className="col-sm"><b>Supplier ID</b></div>
            <div className="col-sm">{supplierID}</div>
            </div>

            <br/>

            <div className="row">
            <div className="col-sm" />
            <div className="col-sm"><b>Name</b></div>
            <div className="col-sm">{supplierName}</div>
            </div>
            <br/>

            <div className="row">
            <div className="col-sm" />
            <div className="col-sm"><b>Contact Number</b></div>
            <div className="col-sm">{supplierPhone}</div>
            </div>
            <br/>

            <div className="row">
            <div className="col-sm" />
            <div className="col-sm"><b>Email</b></div>
            <div className="col-sm">{supplierEmail}</div>
            </div>
            <br/>

            <div className="row">
            <div className="col-sm" />
            <div className="col-sm"><b>Address</b></div>
            <div className="col-sm">{supplierAddress}</div>
            </div>
            <br/>

            <div className="row">
            <div className="col-sm" />
            <div className="col-sm"><b>Company</b></div>
            <div className="col-sm">{supplierComName}</div>
            </div>
            <br/>

            <div className="row">
            <div className="col-sm" />
            <div className="col-sm"><b>Company Address</b></div>
            <div className="col-sm">{supplierComAddress}</div>
            </div>
            <br/>
            
            <div className="row">
            <div className="col-sm" />
            <div className="col-sm"><b>Date</b></div>
            <div className="col-sm">{supplierDate}</div>
            
            </div>
            </div>
            </div>

            <SlideShow/>
      </div>

      <br/><br/><br/>

      <Footer />

      </div>
      </div>

  )
  }
}