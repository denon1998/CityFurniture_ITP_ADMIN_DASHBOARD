import React, { Component } from 'react';
import axios from 'axios';
//import BG from './images/a.jpg';

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

        <div className="fetchP" style={{ marginTop: '20px' }}>

          <h1>{productname}</h1>

          <dl className="row">

            <dt className="col-sm-3">Product Name</dt><br></br>
            <dd className="col-sm-9">{productname}</dd><br></br>

            <dt className="col-sm-3 " >Item Model Number</dt><br></br>
            <dd className="col-sm-9" >{itemModelNumber}</dd><br></br>

            <dt className="col-sm-3">Item Height</dt><br></br>
            <dd className="col-sm-9">{itemHeight}</dd><br></br>

            <dt className="col-sm-3">Item Length</dt><br></br>
            <dd className="col-sm-9">{itemLength}</dd><br></br>

            <dt className="col-sm-3">Item Width</dt><br></br>
            <dd className="col-sm-9">{itemWidth}</dd><br></br>

            <dt className="col-sm-3">Materials Used</dt><br></br>
            <dd className="col-sm-9">{materialsUsed}</dd><br></br>

            <dt className="col-sm-3">Colours</dt><br></br>
            <dd className="col-sm-9">{colours}</dd><br></br>

            <dt className="col-sm-3">Price</dt><br></br>
            <dd className="col-sm-9">{price}</dd><br></br>

            <dt className="col-sm-3">Model Type</dt><br></br>
            <dd className="col-sm-9">{modelType}</dd><br></br>

            <dt className="col-sm-3">Included Components</dt><br></br>
            <dd className="col-sm-9">{includedComponents}</dd><br></br>

            <dt className="col-sm-3">Description</dt><br></br>
            <dd className="col-sm-9">{description}</dd><br></br>
          </dl>

          <div className="text-center">
            <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; More
            </button>

          </div>

        </div>
      </div>
    )
  }
}

export default PostDetailsProducts;