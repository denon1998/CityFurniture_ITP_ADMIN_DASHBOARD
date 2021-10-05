import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import mattress1 from "../../images/mattress1.png";
import Sofa1 from "../../images/Sofa1.jpg";
import cupboard1 from "../../images/cupboard1.jpg";
import chair1 from "../../images/chair1.jpg";


export default class CreatePostStockCat extends Component {

  constructor(props){
    super(props);
    this.state={
        catID:"",
        catName:"",
        catSub:"",
        catDescription:"",
        catStatus:"",
        catDate:""
    }

  }

  onChangeStatus = e =>{
    console.log(e.target.value)

    this.setState({
      catStatus: e.target.value 
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

    const {catID,catName,catSub,catDescription,catStatus,catDate} = this.state;

    const data ={
        catID:catID,
        catName:catName,
        catSub:catSub,
        catDescription:catDescription,
        catStatus:catStatus,
        catDate:catDate,

    }

    console.log(data)

      //Validation 
      const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

      if(catID.length === 0 || catName.length === 0 || catSub.length === 0 || catDescription.length === 0 || catStatus.length === 0 || catDate.length === 0){
        swal("Feilds cannot be empty !", "Plese fill all the information!", "error");
      }else if(catID.length > 6 ){
        swal("Invalid Category ID !", "Do not enter more than 6 letters !", "error");
      }else if(catID.length < 6){
        swal("Invalid Category ID !", "Do not enter less than 6 letters !", "error");
      }else if(catID.length < 6){
        swal("Invalid Category ID !", "Do not enter less than 6 letters !", "error");
      }else if((!name.test(String(catName)))){
        swal("Invalid Category Name !", "Category name cannot contain Numbers ! Please enter valid category name !", "error");
      }else if((!name.test(String(catSub)))){
        swal("Invalid sub category Name !", "sub category name cannot contain Numbers ! Please enter valid sub category name !", "error");


      }else{
        axios.post("https://furniture-store-backend.herokuapp.com/api/catpost/save",data).then((res) =>{

        if(res.data.success){
          this.setState(
            {
              catID:"",
              catName:"",
              catSub:"",
              catDescription:"",
              catStatus:"",
              catDate:""
            }
          )
        }
      });
      swal("Successful!", "Category Details Submitted!", "success");

      }


  }

   //method of demo button
   demo =() => { 
    //setState
   
    this.setState( {
      ...this.state,
      catID: "CD4242",
      catName: "Home Furniture",
      catSub: "Kitchen Furniture",
      catDescription: "Furniture includes objects such as tables, chairs, beds, desks, dressers, and cupboards. These objects are usually kept in a house or other building to make it suitable or comfortable for living or working in.",
      catStatus: "Availble",
      catDate: "2021-09-16"
    })
  }
 
  
  render() {
    return (
      
      <div>

      <div className = "container">



        <div className="row">
        <div class="col-sm" style = {{marginTop:"5%"}}>
          
          <img src = {mattress1} width="73%" />
          <img src = {Sofa1} width="73%" />
          <img src = {cupboard1} width="73%" />
          <img src = {chair1} width="73%" />
          </div>
          <div className="col-sm">
          
        
          <div className = "cardS" style = {{marginTop:"7%"}}>
          <div className = "card-body">

          <div className="col-md-8 mt-4 mx-auto">
          <center>
          <h1 className="h3 mb-3 font-weight-normal" style = {{backgroundColor:'cyan'}}><font face = "Comic sans MS" size ="6"><b>Add new Category</b></font></h1><br/>
          </center>
          <br/>

          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} ><b>Category ID</b></label>
              <input type="text"
              className="form-control"
              name="catID"
              placeholder="Enter Category ID"
              value={this.state.catID}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Name</b></label>
              <input type="text"
              className="form-control"
              name="catName"
              placeholder="Enter Category Name"
              value={this.state.catName}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Sub Categories</b></label>
              <input type="text"
              className="form-control"
              name="catSub"
              placeholder="Enter Sub categories"
              value={this.state.catSub}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Description</b></label>
              <textarea 
              className="form-control"
              name="catDescription"
              placeholder="Enter Description"
              rows={5}
              value={this.state.catDescription}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group">
            <label style={{marginBottom:'5px'}}><b>Status</b></label>

              <select 
              className="form-control"  
              style ={{maxWidth:'1050px' }}
              value = {this.state.catStatus} 
              onChange = {this.onChangeStatus}
              required
              >
              
              <option value="" disabled selected hidden>Please Choose...</option>
              <option value = "Available">Available</option>
              <option value = "Not Available">Not Availabe</option>
 
              </select>
          </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Date</b></label>
              <input type="Date"
              className="form-control"
              name="catDate"
              placeholder="Enter Date"
              value={this.state.catDate}
              onChange={this.handleInputChange}
              required />
            </div>

            <center>
            <button className="btn btn-success btn-lg" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
            </center>


          
          </form>
          <button className ="btn btn-warning" onClick={() => {
              this.setState( {
                ...this.state,
                catID: "CD4242",
                catName: "Home Furniture",
                catSub: "Kitchen Furniture",
                catDescription: "Furniture includes objects such as tables, chairs, beds, desks, dressers, and cupboards. These objects are usually kept in a house or other building to make it suitable or comfortable for living or working in.",
                catStatus: "Available",
                catDate: "2021-09-16"
                  })
            }}>Demo</button> 
      
        </div>
        </div>
        </div>
      
          </div>
        </div>

        <br/><br/><br/>

      

        </div>
        </div>
    )
  }
}