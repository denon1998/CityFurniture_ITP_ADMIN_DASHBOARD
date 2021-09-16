import React, { Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class CreatePostOffers extends Component {
  
  constructor(props){
    super(props);
    this.state={
      saleProductName:"",
      discountAmount:"",
      discountAsAPercentage:"",
      previousPrice:"",
      newPrice:"",
      description:""

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

    const {saleProductName,discountAmount,discountAsAPercentage,previousPrice,newPrice,description} = this.state;

    const data ={
      saleProductName:saleProductName,
      discountAmount:discountAmount,
      discountAsAPercentage:discountAsAPercentage,
      previousPrice:previousPrice,
      newPrice:newPrice,
      description:description
      
    }

    console.log(data)

    //Validations for offers adding form

    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

    if (saleProductName.length === 0 || discountAmount.length === 0 || discountAsAPercentage.length === 0 || previousPrice.length === 0 || newPrice.length === 0 || description.length === 0) {

      swal("Fields cannot be empty !", "Plese fill all the information!", "error");
    } else if ((!name.test(String(saleProductName)))) {
      swal("Invalid Sale Product Name !", "Product Name cannot contain numbers ! Please enter a valid sale product name !", "error");
    } else if (saleProductName.length > 30) {
      swal("Invalid Sale Product Name!", "Do not enter more than 20 letters !", "error");
    } else if (saleProductName.length < 4) {
      swal("Invalid Sale Product Name !", "Do not enter less than 4 letters !", "error");
    } else if (discountAmount.length < 2) {
      swal("Invalid Discount Amount !", "Do not enter less than 2 letters or numbers!", "error");
    } else if (discountAsAPercentage.length > 10) {
      swal("Invalid Discount As A Percentage!", "Do not enter more than 10 numbers with percentage symbol !", "error");    
    } else if (previousPrice.length < 2) {
      swal("Invalid Previous Price !", "Do not enter less than 2 letters or numbers!", "error"); 
    } else if (newPrice.length < 2) {
      swal("Invalid New Price !", "Do not enter less than 2 letters or numbers!", "error");   
    } else if (description.length > 50) {
      swal("Invalid Description!", "Do not enter more than 50 letters !", "error");

    } else {

    axios.post("https://furniture-store-backend.herokuapp.com/api/postOffers/save", data).then((res) => {

      if (res.data.success) {

          swal("post insert successfully")

          this.setState(
              {
                saleProductName:"",
                discountAmount:"",
                discountAsAPercentage:"",
                previousPrice:"",
                newPrice:"",
                description:""
          
          }
          )
      }
  })
}
  }
    render() {
      return (
        <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add new Offer</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Sale Product Name</b></label>
            <input type="text"
            className="form-control"
            name="saleProductName"
            placeholder="Enter sale product name"
            value={this.state.saleProductName}
            onChange={this.handleInputChange}/>
          </div>
          

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}><b>Discount Amount</b></label>
            <input type="text"
            className="form-control"
            name="discountAmount"
            placeholder="Enter discount amount"
            value={this.state.discountAmount}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Discount Percentage</b></label>
              <input type="text"
              className="form-control"
              name="discountAsAPercentage"
              placeholder="Enter discount as a percentage"
              value={this.state.discountAsAPercentage}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Previous Price</b></label>
              <input type="text"
              className="form-control"
              name="previousPrice"
              placeholder="Enter the previous price"
              value={this.state.previousPrice}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>New Price</b></label>
              <input type="text"
              className="form-control"
              name="newPrice"
              placeholder="Enter the new price"
              value={this.state.newPrice}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Description</b></label>
              <input type="text"
              className="form-control"
              name="description"
              placeholder="Write a description"
              value={this.state.description}
              onChange={this.handleInputChange}/>
            </div>

              <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>          
            </form>
        </div>
      )
    }
}
export default CreatePostOffers;