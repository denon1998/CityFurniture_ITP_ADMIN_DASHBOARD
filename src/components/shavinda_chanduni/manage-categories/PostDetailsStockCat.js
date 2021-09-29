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

    axios.get(`https://furniture-store-backend.herokuapp.com/api/catpost/${id}`).then((res) =>{

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

      <div className="container border"

        style={{

          marginTop: "80px",

          width: '100%',

          backgroundImage: `url('https://bhiroof.com/wp-content/uploads/2020/10/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering_41470-1778.jpg')`,

          backgroundPosition: 'center',

          backgroundSize: 'cover',

        }}>

        <div style={{ marginTop: '20px' }}>

          <h1>{catName}</h1>
          <br/>

          <dl className="row">

            <dt className="col-sm-3">Category ID</dt><br></br>
            <dd className="col-sm-9">{catID}</dd><br></br>

            <dt className="col-sm-3">Sub category</dt><br></br>
            <dd className="col-sm-9">{catSub}</dd><br></br>

            <dt className="col-sm-3">Description</dt><br></br>
            <dd className="col-sm-9">{catDescription}</dd><br></br>

            <dt className="col-sm-3">Status</dt><br></br>
            <dd className="col-sm-9">{catStatus}</dd><br></br>

            <dt className="col-sm-3">Date</dt><br></br>
            <dd className="col-sm-9">{catDate}</dd><br></br>

          </dl>

        </div>
      </div>
      <SlideShow/>
      </div>
  
  )
  }
}