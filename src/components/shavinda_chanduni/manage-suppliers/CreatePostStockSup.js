import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import '../styles/formStyles.css';
import swal from 'sweetalert';
import mattress1 from "../../images/mattress1.png";
import Sofa1 from "../../images/Sofa1.jpg";
import cupboard1 from "../../images/cupboard1.jpg";
import chair1 from "../../images/chair1.jpg";
import UserGif from "../../images/UserGif.gif";
import SidebarStock from '../SidebarStock/SidebarStock';



export default class CreatePostStockSup extends Component {

  constructor(props){
    super(props);
    this.state={

      supplierID:"",
      supplierName:"",
      supplierPhone:"",
      supplierEmail:"",
      supplierAddress:"",
      supplierComName:"",
      supplierComAddress:"",
      supplierDate:""

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

    const {supplierID,supplierName,supplierPhone,supplierEmail,supplierAddress,supplierComName,supplierComAddress,supplierDate} = this.state;

    const data ={
      supplierID:supplierID,
      supplierName:supplierName,
      supplierPhone:supplierPhone,
      supplierEmail:supplierEmail,
      supplierAddress:supplierAddress,
      supplierComName:supplierComName,
      supplierComAddress:supplierComAddress,
      supplierDate:supplierDate

    }
    


    console.log(data)

     //Validation 
     const con = /^[0-9\b]+$/;
     const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
     
    if(supplierID.length === 0 || supplierName.length === 0 || supplierPhone.length === 0 || supplierEmail.length === 0 || supplierAddress.length === 0 || supplierComName.length === 0 || supplierComAddress.length === 0 || supplierDate.length === 0){
      swal("Feilds cannot be empty !", "Plese fill all the information!", "error");
    }else if(supplierID.length > 6 ){
      swal("Invalid Category ID !", "Do not enter more than 6 letters !", "error");
    }else if(supplierID.length < 6){
      swal("Invalid Category ID !", "Do not enter less than 6 letters !", "error");
    }else if(supplierID.length < 6){
      swal("Invalid Category ID !", "Do not enter less than 6 letters !", "error");
    }else if((!con.test(String(supplierPhone)))||(supplierPhone.length != 10)){
      swal("Invalid Contact Number !", "Please enter valid contact number !", "error");
    }else if((!email.test(String(supplierEmail)))){
      swal("Invalid email address !", "Please enter valid email address !", "error");
    }else if((!name.test(String(supplierName)))){
      swal("Invalid Name !", "Name cannot contain numbers ! Please enter valid name !", "error");
    }else if((!name.test(String(supplierComName)))){
      swal("Invalid Company Name !", "Name cannot contain Numbers ! Please enter valid company name !", "error");
    
      
    }else{
    axios.post("https://furniture-store-backend.herokuapp.com/api/suppost/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
        supplierID:"",
        supplierName:"",
        supplierPhone:"",
        supplierEmail:"",
        supplierAddress:"",
        supplierComAddress:"",
        supplierDate:""
          }
        )
      }
    });
    swal("Successful!", "Supplier Details Submitted!", "success");

    }

  }


     //method of demo button
     demo =() => { 
      //setState
     
      this.setState( {
        ...this.state,
        supplierID:"SP4124",
        supplierName:"Nissanka Perera",
        supplierPhone:"0788899887",
        supplierEmail:"nissanka@gmail.com",
        supplierAddress:"No.23, Queens Road, Colombo 07",
        supplierComName:"NSDH Furniture Suppliers",
        supplierComAddress:"No.244, Raymond Street, Colombo 07",
        supplierDate:"2021-09-07"
      })
    }


  render() {
    return (

      <div>
      <SidebarStock/>

      <div className = "container">

        <div className="row">
           <div class="col-sm" style = {{marginTop:"4%"}}>
          
          <img src = {mattress1} width="70%" />
          <img src = {Sofa1} width="70%" />
          <img src = {cupboard1} width="70%" />
          <img src = {chair1} width="70%" />
          </div>
          <div className="col-sm">
          <div className = "cardS" style = {{marginTop:"4%"}}>
          <div className = "card-body">

        <div className="col-md-8 mt-4 mx-auto">
          
          <center>
          <h1 className="h3 mb-3 font-weight-normal" style = {{backgroundColor:'cyan'}}><font face = "Comic sans MS" size ="6"><b>Add new Supplier</b></font></h1><br/>&nbsp;
          <img src = {UserGif} width="80%" />
          </center>
          <br/>
          <center>
          <form className="needs-validation">
            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}} ><b>Supplier ID</b></label>
              <input type="text"
              className="form-control"
              name="supplierID"
              placeholder="Enter supplier ID"
              value={this.state.supplierID}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Name</b></label>
              <input type="text"
              className="form-control"
              name="supplierName"
              placeholder="Enter supplier Name"
              value={this.state.supplierName}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Contact Number</b></label>
              <input type="text"
              className="form-control"
              name="supplierPhone"
              placeholder="Enter contact number"
              value={this.state.supplierPhone}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Email</b></label>
              <input type="text"
              className="form-control"
              name="supplierEmail"
              placeholder="Enter email"
              value={this.state.supplierEmail}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Address</b></label>
              <input type="text"
              className="form-control"
              name="supplierAddress"
              placeholder="Enter address"
              value={this.state.supplierAddress}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Comapany Name</b></label>
              <input type="text"
              className="form-control"
              name="supplierComName"
              placeholder="Enter company name"
              value={this.state.supplierComName}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Company address</b></label>
              <input type="text"
              className="form-control"
              name="supplierComAddress"
              placeholder="Enter address"
              value={this.state.supplierComAddress}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}><b>Date</b></label>
              <input type="Date"
              className="form-control"
              name="supplierDate"
              value={this.state.supplierDate}
              onChange={this.handleInputChange}
              required/>
            </div>


            <button className="btn btn-success btn-lg" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          
          
          </form>
          </center>

          <button className ="btn btn-warning" onClick={() => {
              this.setState( {
                ...this.state,
                supplierID:"SP4124",
                supplierName:"Nissanka Perera",
                supplierPhone:"0788899887",
                supplierEmail:"nissanka@gmail.com",
                supplierAddress:"No.23, Queens Road, Colombo 07",
                supplierComName:"NSDH Furniture Suppliers",
                supplierComAddress:"No.244, Raymond Street, Colombo 07",
                supplierDate:"2021-09-07"
                  })
            }}>Demo</button> 
          
        </div>
        </div>
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