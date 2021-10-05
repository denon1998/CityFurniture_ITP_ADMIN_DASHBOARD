import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
//import down from '../img/down.jpg';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';
import Footer from '../Footer/Footer';

export default class EditCatPost extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      parentId: "",
      type: ""

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

    const { name, parentId, type } = this.state;

    const data = {
      name: name,
      parentId: parentId,
      type: type

    }

    console.log(data)

    axios.put(`https://furniture-store-backend.herokuapp.com/api/admincat/update/${id}`, data).then((res) => {
      if (res.data.success) {
        //alert("Post updated Successfully")
        swal("Update Successful", "Update is recorder", "success");
        this.setState(
          {
            name: "",
            parentId: "",
            type: ""


          }
        )
      }
    })
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`https://furniture-store-backend.herokuapp.com/api/admincat/${id}`).then((res) => {

      if (res.data.success) {
        this.setState({

          name: res.data.post.name,
          parentId: res.data.post.parentId,
          type: res.data.post.type

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (
      <div>
       <SidebarOrder/>
       <br/>
       <br/>
       <br/>
       <br/>
      <div className="container">
        <div class="row">
          <div class="col-6">
            <br />
            <div class="list-group" style={{ width: "80%" }}>
              <li class="list-group-item list-group-item-primary">
                <div className="text-center"><b><h3>Main Category List</h3></b></div></li>
              <ul className="list-group">
                <div className="adminletter">
                  <li className="list-group-item" ><b>Sofa </b>- 613ce8a4e8e40c670078db6f </li>
                  <li className="list-group-item"><b>Indoor Furniture</b> - 613ce865e8e40c670078db6d</li>
                  <li className="list-group-item"><b>Outdoor Furniture</b> - 613cf25dc0492711981fd06a </li>
                  <li className="list-group-item"><b>Mirrors and Hangers</b> -  613ce930e8e40c670078db73 </li>
                  <li className="list-group-item"><b>Office Furniture</b>  - 613ce90ae8e40c670078db71</li>
                  <li className="list-group-item"><b>Stainless Steel and Plywood Furniture </b> - 613ce98ee8e40c670078db75</li>
                </div>
              </ul>
              
            </div>
           
          </div>
          <div className="col-6">
            <div className="card"
              style={{ width: "80%" }}
            // style={{marginRight:"5%"}}
            >
              <div className="cardmy">
                <div className="col-md-8 mt-4 mx-auto">
                  <h1 className="h3 mb-3 font-weight-normal adminletter text-center">Category Edit Form </h1>
                  <form className="needs-validation" >
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }} >Category/Sub category Name: </label>
                      <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Category/Sub Category"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                    </div>


                    <label style={{ marginBottom: '5px' }} >Parent ID: </label>
                    <div class="row">
                      <div class="col">
                        <input type="text"
                          className="form-control"
                          name="parentId"
                          placeholder="parent ID"
                          value={this.state.parentId}
                          onChange={this.handleInputChange} />
                      </div>
                    </div>

                    <label style={{ marginBottom: '5px' }} >Parent Type: </label>
                    <div class="row">
                      <div class="col">
                        <input type="text"
                          className="form-control"
                          name="type"
                          placeholder="parent type"
                          value={this.state.type}
                          onChange={this.handleInputChange} />
                      </div>
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
                    <br />
                    <br />
                 
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Footer />
      </div>


    )
  }
}

