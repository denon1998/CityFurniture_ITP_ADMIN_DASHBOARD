import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './ProductsAdmin.css';

export default class EditPostProducts extends Component {


  constructor(props) {
    super(props);
    this.state = {
        productName:"",
        itemModelNumber:"",
        itemHeight:"",
        itemLength:"",
        itemWidth:"",
        materialsUsed:"",
        colours:"",
        price:"",
        modelType:"",
        includedComponents:"",
        description:""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })

  }

  onSubmit = (e) => {

    e.preventDefault();
    const id = this.props.match.params.id;

    const { productname, itemModelNumber, itemHeight, itemLength, itemWidth, materialsUsed, colours, price, modelType, includedComponents, description } = this.state;

    const data = {
      productName:productname,
        itemModelNumber: itemModelNumber,
        itemHeight: itemHeight,
        itemLength:itemLength,
        itemWidth:itemWidth,
        materialsUsed:materialsUsed,
        colours:colours,
        price:price,
        modelType:modelType,
        includedComponents:includedComponents,
        description:description

    }

    console.log(data)

    axios.put(`https://furniture-store-backend.herokuapp.com/api/postProducts/update/${id}`, data).then((res) => {
      if (res.data.success) {
        swal("Product Details Updated Successfully")
        this.setState(
          {
        productName:"",
        itemModelNumber:"",
        itemHeight:"",
        itemLength:"",
        itemWidth:"",
        materialsUsed:"",
        colours:"",
        price:"",
        modelType:"",
        includedComponents:"",
        description:""

          }
        )
      }
    })
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`https://furniture-store-backend.herokuapp.com/api/postProducts/${id}`).then((res) => {

      if (res.data.success) {
        this.setState({

          productName: res.data.post.productName,
          itemModelNumber: res.data.post.itemModelNumber,
          itemHeight: res.data.post.itemHeight,
          itemLength: res.data.post.itemLength,
          itemWidth: res.data.post.itemWidth,
          materialsUsed: res.data.post.materialsUsed,
          colours: res.data.post.colours,
          price: res.data.post.price,
          modelType: res.data.post.modelType,
          includedComponents: res.data.post.includedComponents,
          description: res.data.post.description

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (

      <div className="container border"

      style={{

          marginTop: "50px",

          width: '50%',

          backgroundImage: `url('https://previews.123rf.com/images/pospelowa/pospelowa1703/pospelowa170300023/73692302-dry-flowers-on-a-white-wooden-background-wallpaper.jpg')`,

          backgroundPosition: 'center',

          backgroundSize: 'cover',

      }}>
        

      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal adminletter text-center">Product Details Edit Form </h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px'}} ><b>Product Name: </b></label>

            <div class="row">
            <div class="col">
            <input type="text"
              className="form-control"
              name="productName"
              placeholder="Enter Product Name"
              value={this.state.productName}
              onChange={this.handleInputChange} />
          </div>
          </div></div>

          <label style={{ marginBottom: '5px' }} ><b>Item Model Number: </b></label>
          <div class="row">
            <div class="col">
              <input type="text"
                className="form-control"
                name="itemModelNumber"
                placeholder="Enter the item Model Number"
                value={this.state.itemModelNumber}
                onChange={this.handleInputChange} />
            </div>
          </div>
        <br></br>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Item Height</b></label>
            <input type="text"
              className="form-control"
              name="itemHeight"
              placeholder="Enter Item Height"
              value={this.state.itemHeight}
              onChange={this.handleInputChange} />
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Item Length</b></label>
            <input type="text"
              className="form-control"
              name="itemLength"
              placeholder="Item Length"
              value={this.state.itemLength}
              onChange={this.handleInputChange} />
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Item Width</b></label>
            <input type="text"
              className="form-control"
              name="itemWidth"
              placeholder="Enter item Width"
              value={this.state.itemWidth}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Materials Used</b></label>
            <input type="text"
              className="form-control"
              name="materialsUsed"
              placeholder="Materials Used"
              value={this.state.materialsUsed}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Colours</b></label>
            <input type="text"
              className="form-control"
              name="colours"
              placeholder="Colours"
              value={this.state.colours}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Price</b></label>
            <input type="text"
              className="form-control"
              name="price"
              placeholder="Enter the Price"
              value={this.state.price}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Model Type</b></label>
            <input type="text"
              className="form-control"
              name="modelType"
              placeholder="Enter the Model Type"
              value={this.state.modelType}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>includedComponents</b></label>
            <input type="text"
              className="form-control"
              name="includedComponents"
              placeholder="Enter the included Components"
              value={this.state.includedComponents}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Description</b></label>
            <input type="text"
              className="form-control"
              name="description"
              placeholder="Write a description"
              value={this.state.description}
              onChange={this.handleInputChange} />
          </div>

          <br />
          <br />
      <div className="text-center">
          <button className="btn btn-primary" type="submit" style={{ marginTop: '15px',color:'white', }} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
             Update
          </button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}