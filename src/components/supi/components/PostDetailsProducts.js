import React, { Component } from 'react';
import axios from 'axios';
//import BG from './images/a.jpg';
//import BG from '../components/';

class PostDetailsProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  //retrieve data of specific form
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`https://furniture-store-backend.herokuapp.com/api/postProducts/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
  
  render() {
    const { productname, itemModelNumber, itemHeight, itemLength, itemWidth, materialsUsed, colours, price, modelType, includedComponents, description } = this.state.post;
    return (

      <div className="container border"

        style={{         
        
        
          marginTop: "50px",

          width: '50%',

          backgroundImage: `url('https://i.pinimg.com/736x/f7/19/25/f719251215a20ff66f203f84444aec5e.jpg')`,

          backgroundPosition: 'center',

          backgroundSize: 'cover',
  

        }}>

        <div className="fetchP" style={{ marginTop: '20px'}}>

          <h1>{productname}</h1>
          <hr/>
          <dl className="row">            

            <dt className="col-sm-3">Product Name</dt><br></br>
            <dd className="col-sm-9">{productname}</dd><br></br><br></br>
            
            <dt className="col-sm-3 " >Item Model Number</dt><br></br>
            <dd className="col-sm-9" >{itemModelNumber}</dd><br></br><br></br>
           
            <dt className="col-sm-3">Item Height</dt><br></br>
            <dd className="col-sm-9">{itemHeight}</dd><br></br><br></br>
            
            <dt className="col-sm-3">Item Length</dt><br></br>
            <dd className="col-sm-9">{itemLength}</dd><br></br><br></br>

            <dt className="col-sm-3">Item Width</dt><br></br>
            <dd className="col-sm-9">{itemWidth}</dd><br></br><br></br>

            <dt className="col-sm-3">Materials Used</dt><br></br>
            <dd className="col-sm-9">{materialsUsed}</dd><br></br><br></br>

            <dt className="col-sm-3">Colours</dt><br></br>
            <dd className="col-sm-9">{colours}</dd><br></br><br></br>

            <dt className="col-sm-3">Price</dt><br></br>
            <dd className="col-sm-9">{price}</dd><br></br><br></br>

            <dt className="col-sm-3">Model Type</dt><br></br>
            <dd className="col-sm-9">{modelType}</dd><br></br><br></br>

            <dt className="col-sm-3">Included Components</dt><br></br>
            <dd className="col-sm-9">{includedComponents}</dd><br></br><br></br>

            <dt className="col-sm-3">Description</dt><br></br>
            <dd className="col-sm-9">{description}</dd><br></br><br></br>
          </dl>
          
          </div>
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
      
    )
    
  }
  
}


export default PostDetailsProducts;