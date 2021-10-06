import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './ProductsAdmin.css';

export default class CreatePostProducts extends Component {

  constructor(props){
    super(props);
    this.state={
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

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {productName, itemModelNumber, itemHeight, itemLength, itemWidth, materialsUsed, colours, price, modelType, includedComponents, description} = this.state;

    const data ={

        productName:productName,
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

    //Validation 
    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    
   if(productName.length === 0 || itemModelNumber.length === 0 || itemHeight.length === 0 || itemLength.length === 0 || itemWidth.length === 0 || materialsUsed.length === 0 || colours.length === 0 || price.length === 0 || modelType.length === 0 || includedComponents.length === 0 || description.length === 0){
     swal("Fields cannot be empty !", "Plese fill all the information!", "error");
   }else if((!name.test(String(productName)))){
     swal("Invalid Product Name !", "Product Name cannot contain numbers ! Please enter a valid product name !", "error");   
   }else if(productName.length > 50 ){
     swal("Invalid product Name!", "Do not enter more than 50 letters !", "error");
   }else if(productName.length < 3){
     swal("Invalid Product Name !", "Do not enter less than 3 letters !", "error");
   }else if(itemModelNumber.length < 4){
     swal("Invalid Model Number !", "Do not enter less than 4 letters !", "error");
   }else if(itemHeight.length < 2 ){
     swal("Invalid Item Height!", "Do not enter less than 2 letters or numbers !", "error");
   }else if(itemLength.length < 2 ){
     swal("Invalid Item Length!", "Do not enter less than 2 letters or numbers !", "error");
   }else if(itemWidth.length < 2 ){
     swal("Invalid Item Width!", "Do not enter less than 2 letters or numbers !", "error");
   }else if(materialsUsed.length > 30 ){
     swal("Invalid input!", "Do not enter more than 30 letters or numbers !", "error");
   }else if((!name.test(String(colours)))){
     swal("Invalid Colour !", "Colour cannot contain Numbers ! Please enter valid colour name !", "error");
   }else if((!name.test(String(modelType)))){
     swal("Invalid Model Type !", "Colour cannot contain Numbers ! Please enter valid colour name !", "error");
   }else if(price.length > 20 ){
     swal("Invalid Price!", "Do not enter more than 20 letters or numbers !", "error");
   }else if((!name.test(String(includedComponents)))){
     swal("Invalid Input !", "Components cannot contain numbers ! Please enter valid input !", "error");
   }else if(description.length > 100 ){
     swal("Invalid Description!", "Do not enter more than 100 letters !", "error"); 
        
   }else{

    axios.post("https://furniture-store-backend.herokuapp.com/api/postProducts/save",data).then((res) =>{
      if(res.data.success){

      
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
    swal("Your data is successfully inserted");

  }
 }

      //Demo button
      demo =() => { 
       
      this.setState( {
        ...this.state,
        productName:"Wardrobe",
        itemModelNumber:"AP05120",
        itemHeight:"210cm",
        itemLength:"160cm",
        itemWidth:"152cm",
        materialsUsed:"Teak",
        colours:"Brown",
        price:"Rs.105,000.00",
        modelType:"Antique",
        includedComponents:"A wardrobe with two keys",
        description:"Opulent Bed Room Furniture"
        })
      }


  render() {
    return (

      <div className="container border"

        style={{
  
            marginTop: "50px",
  
            width: '50%',
  
            backgroundImage: `url('https://i.pinimg.com/originals/b5/f0/1d/b5f01d69d348ab40a5d68e4feb48f28e.jpg')`,
  
            backgroundPosition: 'center',
  
            backgroundSize: 'cover',
  
        }}>

        <div className="row">


        <div className="col-md-8 mt-4 mx-auto">
           <center>
          <h1 className="h3 mb-3 font-weight-normal " style = {{backgroundColor:'peachpuff'}} style={{ color: 'purple'}}>Products Details Form</h1></center>
          <form className="needs-validation" noValidate>
            <div className="form" style={{marginBottom:'15px'}} >
           
              <label style={{marginBottom:'5px'}} ><b>Product Name: </b></label>
              <input type="text"
              className="form-control"
              name="productName"
              placeholder="Enter Product Name"
              value={this.state.productName}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Item Model Number: </b></label>
              <input type="text"
              className="form-control"
              name="itemModelNumber"
              placeholder="Enter the model number"
              value={this.state.itemModelNumber}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Item Height: </b></label>
              <input type="text"
              className="form-control"
              name="itemHeight"
              placeholder="Enter the item height"
              value={this.state.itemHeight}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Item Length: </b></label>
              <input type="text"
              className="form-control"
              name="itemLength"
              placeholder="Enter the item Length"
              value={this.state.itemLength}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Item Width: </b></label>
              <input type="text"
              className="form-control"
              name="itemWidth"
              placeholder="Enter the item Width"
              value={this.state.itemWidth}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Materials Used </b></label>
              <input type="text"
              className="form-control"
              name="materialsUsed"
              placeholder="Enter the materials Used"
              value={this.state.materialsUsed}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Colours: </b></label>
              <input type="text"
              className="form-control"
              name="colours"
              placeholder="Enter the available colours"
              value={this.state.colours}
              onChange={this.handleInputChange}/>
            </div>

                        
            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Price: </b></label>
              <input type="text"
              className="form-control"
              name="price"
              placeholder="Enter the price"
              value={this.state.price}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Model Type: </b></label>
              <input type="text"
              className="form-control"
              name="modelType"
              placeholder="Enter the model Type"
              value={this.state.modelType}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Included Components: </b></label>
              <input type="text"
              className="form-control"
              name="includedComponents"
              placeholder="Enter the included Components"
              value={this.state.includedComponents}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}} ><b>Description: </b></label>
             <input type="text"
              className="form-control"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleInputChange}/>
            </div>

          </form>
          </div>
            <center>
            <button className="btn btn-primary" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>  
              &nbsp; &nbsp; Save &nbsp;
            </button>
            </center>
            <br></br> <br></br> <br></br>
            <center>

            <button className ="btn btn-danger" onClick={() => {
              this.setState( {                
                  ...this.state,
                  productName:"Wardrobe",
                  itemModelNumber:"AP05120",
                  itemHeight:"210cm",
                  itemLength:"160cm",
                  itemWidth:"152cm",
                  materialsUsed:"Teak",
                  colours:"Brown",
                  price:"Rs.105,000.00",
                  modelType:"Antique",
                  includedComponents:"A wardrobe with two keys",
                  description:"Opulent Bed Room Furniture"
                  })            
            }}>  &nbsp; Demo</button> &nbsp;
          
          </center>
          <br></br>
        </div>
        </div>
              
          
               
    )
  }
}