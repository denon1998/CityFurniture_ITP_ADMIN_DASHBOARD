import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import SlideShow from '../SlideShow/SlideShow';
import '../styles/formStyles.css';
import SidebarStock from '../SidebarStock/SidebarStock';

export default class PostDetailsStockCat extends Component{
  constructor(props){
    super(props);

    this.state={
    post:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://furniture-store-backend.herokuapp.com/api/catpost/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
            post:res.data.post
        });

        console.log(this.state.post);
      }
    })

  }

  render(){

    const {catID,catName,catSub,catDescription,catStatus,catDate} = this.state.post;

    return(

      <div>
      <SidebarStock/>  
      <div className = "container">
      <center>
      <h1>Category Details</h1>
      </center>

      <br/>

  <div style = {{marginTop: '20px'}}>

  <div className="cardS">
  <div className = "card-body" style = {{marginTop: '60px'}}> 

  <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Category ID</b></div>
        <div className="col-sm">{catID}</div>
        </div>

        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Name</b></div>
        <div className="col-sm">{catName}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Sub categories</b></div>
        <div className="col-sm">{catSub}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Description</b></div>
        <div className="col-sm">{catDescription}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Status</b></div>
        <div className="col-sm">{catStatus}</div>
        </div>
        <br/>

        <div className="row">
        <div className="col-sm" />
        <div className="col-sm"><b>Date</b></div>
        <div className="col-sm">{catDate}</div>
        </div>
        <br/>

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