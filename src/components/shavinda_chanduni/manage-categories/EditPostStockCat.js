import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import '../styles/formStyles.css';
import swal from 'sweetalert';
import SidebarStock from '../SidebarStock/SidebarStock';


export default class EditPostStockCat extends Component{


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
        const id = this.props.match.params.id;    

        const {catID,catName,catSub,catDescription,catStatus,catDate} = this.state;
    
        const data ={
            catID:catID,
            catName:catName,
            catSub:catSub,
            catDescription:catDescription,
            catStatus:catStatus,
            catDate:catDate
    
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
        axios.put(`https://furniture-store-backend.herokuapp.com/api/catpost/update/${id}`,data).then((res) =>{
          if(res.data.success){
            swal("Successful!", "Category details updated", "success");
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
        })
      }
      }

      componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`https://furniture-store-backend.herokuapp.com/api/catpost/${id}`).then((res) =>{
    
          if(res.data.success){
            this.setState({
             
            catID:res.data.post.catID,
            catName:res.data.post.catName,
            catSub:res.data.post.catSub,
            catDescription:res.data.post.catDescription,
            catStatus:res.data.post.catStatus,
            catDate:res.data.post.catDate
    
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
              <h1 className="h3 mb-3 font-weight-normal" style = {{backgroundColor:'cyan',  margin:"0"}}><font face = "Comic sans MS" size ="6"><b>Update Category</b></font></h1><br/>
              </center>
              <br/>
              <form className="needs-validation" noValidate >
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}} >Category ID</label>
                  <input type="text"
                  className="form-control"
                  name="catID"
                  value={this.state.catID}
                  onChange={this.handleInputChange}
                  required/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Name</label>
                  <input type="text"
                  className="form-control"
                  name="catName"
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

              <option value = "Available">Available</option>
              <option value = "Not Available">Not Availabe</option>

              </select>
            </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>Date</label>
                  <input type="Date"
                  className="form-control"
                  name="catDate"
                  value={this.state.catDate}
                  onChange={this.handleInputChange}
                  required/>
                </div>
    
    
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Update
                </button>
              
              </form>
              
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