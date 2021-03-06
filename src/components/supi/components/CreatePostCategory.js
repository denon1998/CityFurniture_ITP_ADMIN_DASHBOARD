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
      subcategoryId: "",
      includedComponents: "",
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
    } else if (categoryName.length < 2) {
      swal("Invalid Product Name !", "Do not enter less than 2 letters !", "error");
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

      axios.post("https://furniture-store-backend.herokuapp.com/api/postCategory/save", data).then((res) => {
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

      //Demo button
      demo =() => { 
       
        this.setState( {
          ...this.state,
          categoryName:"Antiques",
          categoryId:"AP05120",
          subcategoryType:"Dining Table",
          subcategoryId:"SC024",
          includedComponents:"Dining Tables With Chairs",
          description:"Opulent Decorative Furniture"
          })
        }

  render() {
    return (
    
          <div className="container border"
    
          style={{
    
              marginTop: "50px",
    
              width: '50%',
    
              backgroundImage: `url('https://images.unsplash.com/photo-1614850523060-8da1d56ae167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JmdWwlMjBsaWdodGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')`,
    
              backgroundPosition: 'center',
    
              backgroundSize: 'cover',
    
          }}>

      <div className="col-md-8 mt-4 mx-auto">
        <center>
        <h1 className="h3 mb-3 font-weight-normal" style={{ color: 'purple'}}>Category Details Form</h1></center>
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
        </div>
          <center>
        <button className="btn btn-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Submit
        </button>
        <br />
        <br></br>
        <button className ="btn btn-danger" onClick={() => {
              this.setState( {                
                  ...this.state,

                    categoryName:"Antiques",
                    categoryId:"AP05120",
                    subcategoryType:"Dining Table",
                    subcategoryId:"SC024",
                    includedComponents:"Dining Tables With Chairs",
                    description:"Opulent Decorative Furniture"
                    })           
            }}>Demo</button> 
          </center>
          <br></br>
      </div>

    )
  }
}