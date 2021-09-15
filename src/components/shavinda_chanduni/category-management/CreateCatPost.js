import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Footer from '../Footer/Footer';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';

export default class CreatCatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      name:"",
      parentId:"",
      type:""
      
    }
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

    const {name, parentId, type} = this.state;

    const data ={
     name: name,
     parentId: parentId,
     type: type

    }

    console.log(data)
    const con=/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if( name== "" ||  parentId== "" || type == "" ){
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }
   else if( name== "" ||  parentId== "" || type == "" ){
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }
    else if(name.length < 2){
      swal("User name invaide", "length should be greater than 2", "error");
    }
    else if((!con.test(String(type)))){
      swal("Type invaide", "Cannot contain Numerics", "error");
    } else{

      swal({
        title: "Are you sure?",
        text: `Name: ${this.state.name} | Postal No.: ${this.state.postalNo} | Street: ${this.state.street} | Town: ${this.state.town} | Contact No: ${this.state.contactNo} | Status: ${this.state.status} | Total: ${this.state.cartTotal}` ,
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

    axios.post("http://furniture-store-backend.herokuapp.com/api/admincat/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
              name:"",
              parentId:"",
              type:""
              
            }
                
            )
            // swal("Order Added Successfully!", "Your oder will be accepted"+ `${this.state.status}`, "success");
          }
        })
        swal("Category Added Successfully!", {
          icon: "success",
        });
      } else {
        swal("Your Order is not completed!");
      }
    });

    
  } 


}   
  render() {
    return (

      <div>
        <SidebarOrder/>
      <div className="container">
        <div class="row">
          <div class="col-6">
            <br/>
            <br/>
          <div className="card" style={{ width: "80%" }}>
          <div className="cardmy">   
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal adminletter text-center ">Category/Sub Category Adding Form</h1>
          <form className="needs-validation" noValidate  align="center">
            <div className="form" style={{marginBottom:'15px'}} >
              <label style={{marginBottom:'5px'}} >Category Name: </label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Enter Category/Subcategory Name"
              value={this.state.name}
              onChange={this.handleInputChange}/>
            </div>

  
            <label style={{marginBottom:'5px'}} >Parent Id: </label>
            <div class="row">
            <div class="col">
              <input type="text"
              className="form-control"
              name="parentId"
              placeholder="parent Id"
              value={this.state.parentId}
              onChange={this.handleInputChange}/>
            </div>
            </div>

            <label style={{marginBottom:'5px'}} >Parent Type: </label>
            <div class="row">
            <div class="col">
              <input type="text"
              className="form-control"
              name="type"
              placeholder="parent type"
              value={this.state.type}
              onChange={this.handleInputChange}/>
            </div>
            </div>
          </form>
          </div>
              <div className="text-center">
            <button className="btn btn-primary" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>  
              &nbsp; Submit
            </button>
            </div>
            <br/>
            </div>
            </div>
          </div>
       
        <div className="col-6">
          <br/>
          <br/>
          <br/>
        <div class="list-group" style={{ width: "80%" }}>
              <li class="list-group-item list-group-item-primary">
                <div className="text-center"><b><h3>Main Category List</h3></b></div></li>
              <ul className="list-group">
                <div className="adminletter">
                  <li className="list-group-item" ><b>Sofa </b>- 613ce8a4e8e40c670078db6f </li>
                  <li className="list-group-item"><b>Indoor Furniture</b> - 613ce865e8e40c670078db6d</li>
                  <li className="list-group-item"><b>Outdoor Furniture</b> - 613cf25dc0492711981fd06a </li>
                  <li className="list-group-item"><b>Mirrors and Hangers</b> - 613ce930e8e40c670078db73 </li>
                  <li className="list-group-item"><b>Office Furniture</b>  - 613ce90ae8e40c670078db71</li>
                  <li className="list-group-item"><b>Stainless Steel and Plywood Furniture </b> - 613ce98ee8e40c670078db75</li>
                </div>
              </ul>
              </div>
              
</div>
          </div>
      </div> 
      <br/>
      <br/>
      <Footer />
      
        </div>
    )
  }
}