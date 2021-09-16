import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class CreatePostCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      categoryId: "",
      subcategoryType: "",
      includedComponents: "",
      categoryName: "",
      description: ""

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

    const { categoryName, categoryId, subcategoryType, subcategoryId, includedComponents, description } = this.state;

    const data = {
      categoryName: categoryName,
      categoryId: categoryId,
      subcategoryType: subcategoryType,
      subcategoryId: subcategoryId,
      includedComponents: includedComponents,
      description: description

    }

    console.log(data)

    //Validations for category form

    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

    if (categoryName.length === 0 || categoryId.length === 0 || subcategoryType.length === 0 || subcategoryId.length === 0 || includedComponents.length === 0 || description.length === 0) {

      swal("Fields cannot be empty !", "Plese fill all the information!", "error");
    } else if ((!name.test(String(categoryName)))) {
      swal("Invalid Product Name !", "Product Name cannot contain numbers ! Please enter a valid product name !", "error");
    } else if (categoryName.length > 20) {
      swal("Invalid product Name!", "Do not enter more than 20 letters !", "error");
    } else if (categoryName.length < 4) {
      swal("Invalid Product Name !", "Do not enter less than 4 letters !", "error");
    } else if (categoryId.length < 3) {
      swal("Invalid Category Id !", "Do not enter less than 3 letters !", "error");
    } else if ((!name.test(String(subcategoryType)))) {
      swal("Invalid Sub Category Type !", "Sub Category Type cannot contain Numbers ! Please enter valid colour name !", "error");
    } else if (subcategoryType.length > 20) {
      swal("Invalid Sub Category Type!", "Do not enter more than 20 letters !", "error");
    } else if (subcategoryId.length > 10) {
      swal("Invalid Sub Category Id!", "Do not enter more than 10 letters or numbers !", "error");
    } else if (subcategoryId.length < 3) {
      swal("Invalid subcategoryId!", "Do not enter less than 3 letters or numbers !", "error");
    } else if ((!name.test(String(includedComponents)))) {
      swal("Invalid Input !", "Components cannot contain numbers ! Please enter valid input !", "error");
    } else if (description.length > 50) {
      swal("Invalid Description!", "Do not enter more than 50 letters !", "error");

    } else {

      axios.post("http://furniture-store-backend.herokuapp.com/api/postCategory/save", data).then((res) => {
        if (res.data.success) {
          swal("post insert successfully")
          this.setState(
          
          
          {
              categoryName: "",
              categoryId: "",
              subcategoryType: "",
              subcategoryId: "",
              includedComponents: "",
              description: ""

            }
          )
        }
      })


    }
  }
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Category Details Form</h1>
        <form className="needs-validation" noValidate>
          <div className="form" style={{ marginBottom: '15px' }} >
            <label style={{ marginBottom: '5px' }} ><b>Category Name: </b></label>
            <input type="text"
              className="form-control"
              name="categoryName"
              placeholder="Enter Category Name"
              value={this.state.categoryName}
              onChange={this.handleInputChange} />
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{ marginBottom: '5px' }} ><b>Category Id: </b></label>
              <input type="text"
                className="form-control"
                name="categoryId"
                placeholder="Enter category Id"
                value={this.state.categoryId}
                onChange={this.handleInputChange} />
            </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{ marginBottom: '5px' }} ><b>Subcategory Type: </b></label>
              <input type="text"
                className="form-control"
                name="subcategoryType"
                placeholder="Enter subcategory Type"
                value={this.state.subcategoryType}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{ marginBottom: '5px' }} ><b>Subcategory Id: </b></label>
              <input type="text"
                className="form-control"
                name="subcategoryId"
                placeholder="Enter subcategory Id"
                value={this.state.subcategoryId}
                onChange={this.handleInputChange} />
            </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{ marginBottom: '5px' }} ><b>Included Components: </b></label>
              <input type="text"
                className="form-control"
                name="includedComponents"
                placeholder="Enter the included Components"
                value={this.state.includedComponents}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{ marginBottom: '5px' }} ><b>Description: </b></label>
              <input type="text"
                className="form-control"
                name="description"
                placeholder="Write a description"
                value={this.state.description}
                onChange={this.handleInputChange} />
            </div>

        </form>

        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Submit
        </button>
        <br />


      </div>


    )
  }
}