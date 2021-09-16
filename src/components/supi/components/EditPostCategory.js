import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class EditPostCategory extends Component {


  constructor(props) {
    super(props);
    this.state = {
      categoryName:"",
      categoryId:"",
      subcategoryType:"",
      subcategoryId:"",
      includedComponents:"",
      categoryName:"",
      description:""
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
    const id = this.props.match.params.id;

    const {categoryName, categoryId, subcategoryType, subcategoryId, includedComponents, description} = this.state;

    const data = {
      categoryName: categoryName,
      categoryId: categoryId,
      subcategoryType: subcategoryType,
      subcategoryId: subcategoryId,
      includedComponents: includedComponents,
      description: description

    }

    console.log(data)    

    axios.put(`https://furniture-store-backend.herokuapp.com/api/postCategory/update/${id}`, data).then((res) => {
      if (res.data.success) {
        swal("Post updated Successfully")
        this.setState(
          {
            categoryName:"",
            categoryId:"",
            subcategoryType:"",
            subcategoryId:"",
            includedComponents:"",
            description:""

          }
        )
      }
    })
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`https://furniture-store-backend.herokuapp.com/api/postCategory/${id}`).then((res) => {

      if (res.data.success) {
        this.setState({

          categoryName: res.data.post.categoryName,
          categoryId: res.data.post.categoryId,
          subcategoryType: res.data.post.subcategoryType,
          subcategoryId: res.data.post.subcategoryId,
          includedComponents: res.data.post.includedComponents,
          description: res.data.post.description

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (

      <div className="container border"

      style={{

          marginTop: "50px",

          width: '50%',

          backgroundImage: `url('https://previews.123rf.com/images/pospelowa/pospelowa1703/pospelowa170300023/73692302-dry-flowers-on-a-white-wooden-background-wallpaper.jpg')`,

          backgroundPosition: 'center',

          backgroundSize: 'cover',

      }}>

      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal adminletter text-center">Edit Category Details</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }} ><b>Category Name: </b></label>
            <input type="text"
              className="form-control"
              name="categoryName"
              placeholder="Enter Category Name"
              value={this.state.categoryName}
              onChange={this.handleInputChange} />
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }} ><b>Category Id: </b></label>
          <div class="row">
            <div class="col">
              <input type="text"
                className="form-control"
                name="categoryId"
                placeholder="Enter category Id"
                value={this.state.categoryId}
                onChange={this.handleInputChange} />
            </div>
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>subcategory Type</b></label>
            <input type="text"
              className="form-control"
              name="subcategoryType"
              placeholder="Enter Subcategory Type"
              value={this.state.subcategoryType}
              onChange={this.handleInputChange} />
          </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Subcategory Id</b></label>
              <input type="text"
                className="form-control"
                name="subcategoryId"
                placeholder="Enter Subcategory Id"
                value={this.state.subcategoryId}
                onChange={this.handleInputChange} />
            </div>
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Included Components</b></label>
            <input type="text"
              className="form-control"
              name="includedComponents"
              placeholder="Enter included components"
              value={this.state.includedComponents}
              onChange={this.handleInputChange} />
          </div>


          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}><b>Description</b></label>
            <input type="text"
              className="form-control"
              name="description"
              placeholder="Write a description"
              value={this.state.description}
              onChange={this.handleInputChange} />
          </div>

          <br />
          <br />
      <div className="text-center">
          <button className="btn btn-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </div>
        </form>
        </div>
      </div>
    )
  }
}