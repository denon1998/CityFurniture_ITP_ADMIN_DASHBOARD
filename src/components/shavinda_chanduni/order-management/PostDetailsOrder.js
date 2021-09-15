import React, { Component } from 'react';
import axios from 'axios';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';

class PostDetailsOrder extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  //retriew data of specific form
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`http://furniture-store-backend.herokuapp.com/api/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {name,postalNo,street,town,contactNo,orderDate,status,cartTotal} = this.state.post;
      return(
        <div>
         <SidebarOrder/>
        <div className="container">
        <div class="row">
        <div class="col-6">
    <div style={{marginTop:'20px'}}>
          <h1>{name}</h1>
          
          <hr/>
          <dl className="row">
            <dt className="col-sm-3">Postal No</dt>
            <dd className="col-sm-9">{postalNo}</dd>
            <dt className="col-sm-3">Street</dt>
            <dd className="col-sm-9">{street}</dd>
            <dt className="col-sm-3">Town</dt>
            <dd className="col-sm-9">{town}</dd>
            <dt className="col-sm-3">Contact No</dt>
            <dd className="col-sm-9">{contactNo}</dd>
            <dt className="col-sm-3">Order Date</dt>
            <dd className="col-sm-9">{orderDate}</dd>
            <dt className="col-sm-3">Status</dt>
            <dd className="col-sm-9">{status}</dd>
            <dt className="col-sm-3">Order Total</dt>
            <dd className="col-sm-9">{cartTotal}</dd>
          </dl>
         
        </div>
    </div>
    <div class="col-6">
    <div className="imageprofile">
          <img src="https://i.pinimg.com/originals/91/7c/06/917c06856035dd3d396b62916d082472.gif "alt="..." className="rounded-circle" style={{marginLeft:"20%"}}/>
          </div>
    </div>
    
    
  </div>
        
        </div>
        </div>
        
      )
    }
  }
  export default PostDetailsOrder;