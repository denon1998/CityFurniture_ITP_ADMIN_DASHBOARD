import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import swal from 'sweetalert';
import SidebarStock from '../SidebarStock/SidebarStock';

export default class EditPostStockSup extends Component{


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
    const id = this.props.match.params.id;

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
          swal("Invalid Supplier ID !", "Do not enter more than 6 letters !", "error");
        }else if(supplierID.length < 6){
          swal("Invalid Supplier ID !", "Do not enter less than 6 letters !", "error");
        }else if(supplierID.length < 6){
          swal("Invalid Supplier ID !", "Do not enter less than 6 letters !", "error");
        }else if((!con.test(String(supplierPhone)))||(supplierPhone.length != 10)){
          swal("Invalid Contact Number !", "Please enter valid contact number !", "error");
        }else if((!email.test(String(supplierEmail)))){
          swal("Invalid email address !", "Please enter valid email address !", "error");
        }else if((!name.test(String(supplierName)))){
          swal("Invalid Name !", "Name cannot contain numbers ! Please enter valid name !", "error");
        }else if((!name.test(String(supplierComName)))){
          swal("Invalid Company Name !", "Name cannot contain Numbers ! Please enter valid company name !", "error");

        }else{

        axios.put(`http://furniture-store-backend.herokuapp.com/api/suppost/update/${id}`,data).then((res) =>{
          if(res.data.success){
            swal("Successful!", "Supplier details updated", "success");
            this.setState(
              {
                supplierID:"",
                supplierName:"",
                supplierPhone:"",
                supplierEmail:"",
                supplierAddress:"",
                supplierComName:"",
                supplierComAddress:"",
                supplierDate:""
              }
            )
          }
        })
      }
      }
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://furniture-store-backend.herokuapp.com/api/suppost/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
          supplierID:res.data.post.supplierID,
          supplierName:res.data.post.supplierName,
          supplierPhone:res.data.post.supplierPhone,
          supplierEmail:res.data.post.supplierEmail,
          supplierAddress:res.data.post.supplierAddress,
          supplierComName:res.data.post.supplierComName,
          supplierComAddress:res.data.post.supplierComAddress,
          supplierDate:res.data.post.supplierDate,

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (

      <div>
      <SidebarStock/>

      <div className = "container">
      <div className = "cardU" style={{marginTop:'40px'}}>
        <div className = "card-body">   


        <div className="col-md-8 mt-4 mx-auto">
          <center>
          <h1 className="h3 mb-3 font-weight-normal" style = {{backgroundColor:'cyan',  margin:"0"}}><font face = "Comic sans MS" size ="6"><b>Update Supplier</b></font></h1><br/>
          </center> 
          <br/>
          <center>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}} >Supplier ID</label>
              <input type="text"
              className="form-control"
              name="supplierID"
              placeholder="Enter supplier ID"
              value={this.state.supplierID}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}>Name</label>
              <input type="text"
              className="form-control"
              name="supplierName"
              placeholder="Enter supplier Name"
              value={this.state.supplierName}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type="text"
              className="form-control"
              name="supplierPhone"
              placeholder="Enter contact number"
              value={this.state.supplierPhone}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="text"
              className="form-control"
              name="supplierEmail"
              placeholder="Enter email"
              value={this.state.supplierEmail}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type="text"
              className="form-control"
              name="supplierAddress"
              placeholder="Enter address"
              value={this.state.supplierAddress}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}>Comapany Name</label>
              <input type="text"
              className="form-control"
              name="supplierComName"
              placeholder="Enter company name"
              value={this.state.supplierComName}
              onChange={this.handleInputChange}
              required/>
            </div>

            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}>Company address</label>
              <input type="text"
              className="form-control"
              name="supplierComAddress"
              placeholder="Enter address"
              value={this.state.supplierComAddress}
              onChange={this.handleInputChange}
              required/>
            </div>


            <div className="form-group" style={{marginBottom:'15px', maxWidth:'500px'}}>
              <label style={{marginBottom:'5px'}}>Date</label>
              <input type="Date"
              className="form-control"
              name="supplierDate"
              value={this.state.supplierDate}
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
        </div>
        <br/><br/><br/>

        <Footer />
        </div>
        </div>
   

    )
   }
}
