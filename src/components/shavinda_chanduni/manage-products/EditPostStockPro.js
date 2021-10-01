import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import swal from 'sweetalert';

export default class EditPostStockPro extends Component{


  constructor(props){
    super(props);
    this.state={
        productID:"",
        productName:"",
        productColor:"",
        productMaterial:"",
        productQuantity:"",
        productCategory:"",
        productManufacture:"",
        productStatus:"",
        productDate:""
    }
  }

  onChangeCategory = e =>{
    console.log(e.target.value)

    this.setState({
      productCategory: e.target.value 
    })
}

  onChangeStatus = e =>{
    console.log(e.target.value)

    this.setState({
      productStatus: e.target.value 
    })
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();
    const id = this.props.match.params.id;

    const {productID,productName,productColor,productMaterial,productQuantity,productCategory,productManufacture,productStatus,productDate} = this.state;

    const data ={
        productID:productID,
        productName:productName,
        productColor:productColor,
        productMaterial:productMaterial,
        productQuantity:productQuantity,
        productCategory:productCategory,
        productManufacture:productManufacture,
        productStatus:productStatus,
        productDate:productDate
    }

    console.log(data)

            //Validation

            const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

            if(productID.length === 0 || productName.length === 0 || productColor.length === 0 || productMaterial.length === 0 || productQuantity.length === 0 || productCategory.length === 0 || productManufacture.length === 0 || productStatus.length === 0 || productDate.length === 0 ){
              swal(" Fields Cannot empty !","Please Enter all the data !", "error");
            }else if(productID.length > 6 ){
              swal("Invalid Product ID !", "Do not enter more than 6 letters !", "error");
            }else if(productID.length > 6 ){
              swal("Invalid Product ID !", "Do not enter more than 6 letters !", "error");
            }else if(productID.length < 6){
              swal("Invalid Product ID !", "Do not enter less than 6 letters !", "error");
            }else if((!name.test(String(productName)))){
              swal("Invalid Product Name !", "Product name cannot contain Numbers ! Please enter valid product name !", "error");

            }else{  

              axios.put(`https://furniture-store-backend.herokuapp.com/api/postPro/update/${id}`,data).then((res) =>{
              if(res.data.success){
                swal("Successful!", "Product details updated", "success");
                this.setState(
                  {
                    productID:"",
                    productName:"",
                    productColor:"",
                    productMaterial:"",
                    productQuantity:"",
                    productCategory:"",
                    productManufacture:"",
                    productStatus:"",
                    productDate:""
                  }
                )
              }
            }) 
          }    
  }
  
 
  
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`https://furniture-store-backend.herokuapp.com/api/postPro/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
          productID:res.data.post.productID,
          productName:res.data.post.productName,
          productColor:res.data.post.productColor,
          productMaterial:res.data.post.productMaterial,
          productQuantity:res.data.post.productQuantity,
          productCategory:res.data.post.productCategory,
          productManufacture:res.data.post.productManufacture,
          productStatus:res.data.post.productStatus,
          productDate:res.data.post.productDate
          

        });
        

        console.log(this.state.post);
      }
    })

  }

  render() {

    return (


      <div>
     
        <div className="container">

        <div className = "cardU" style={{marginTop:'40px'}}>
        <div className = "card-body">   

        <div className="col-md-8 mt-4 mx-auto"></div>

          <center>
          <h1 className="h3 mb-3 font-weight-normal" style = {{backgroundColor:'cyan',  margin:"0"}}><font face = "Comic sans MS" size ="6"><b>Update Product</b></font></h1><br/>
          </center>
          <br/>
          <center>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Product ID</b></label>
              <input type="text"
              className="form-control"
              name="productID"
              placeholder="Enter Product ID"
              value={this.state.productID}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Name</b></label>
              <input type="text"
              className="form-control"
              name="productName"
              placeholder="Enter Product Name"
              value={this.state.productName}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Color</b></label>
              <input type="text"
              className="form-control"
              name="productColor"
              placeholder="Enter color"
              value={this.state.productColor}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Material</b></label>
              <input type="text"
              className="form-control"
              name="productMaterial"
              placeholder="Enter materials"
              value={this.state.productMaterial}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Quantity</b></label>
              <input type="text"
              className="form-control"
              name="productQuantity"
              placeholder="Enter quantity"
              value={this.state.productQuantity}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group">
            <label style={{marginBottom:'5px'}}><b>Category</b></label>

              <select 
              className="form-control"  
              style ={{marginBottom:'15px', maxWidth:'500px'}}
              value = {this.state.productCategory} 
              onChange = {this.onChangeCategory}
              required
              >

              <option value = "Home Furniture">Home Furniture</option>
              <option value = "Office Furniture">Office Furniture</option>
              <option value = "Outdoor Furniture">Outdoor Furniture</option>
              <option value = "Resturant Furniture">Resturant Furniture</option>
              <option value = "School Furniture">School Furniture</option>

              </select>
          </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Manufacturer</b></label>
              <input type="text"
              className="form-control"
              name="productManufacture"
              placeholder="Enter Manufacturer"
              value={this.state.productManufacture}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group">
            <label style={{maxWidth:'500px' }}><b>Status</b></label>

              <select 
              className="form-control"  
              style ={{marginBottom:'15px', maxWidth:'500px'}}
              value = {this.state.productStatus} 
              onChange = {this.onChangeStatus}
              required
              >

              <option value = "Available">Available</option>
              <option value = "Not Available">Not Availabe</option>
 
              </select>
          </div>



            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Date</b></label>
              <input type="date"
              className="form-control"
              name="productDate"
              value={this.state.productDate}
              onChange={this.handleInputChange}
              required/>
            </div>


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
                          
              </button>
          
          
          </form>
          </center>
          </div>
          </div>

          <br/><br/><br/>
        
          </div>     
          <Footer />
        </div>

    )
   }
}
