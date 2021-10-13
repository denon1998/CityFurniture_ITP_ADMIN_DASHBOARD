import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class EditPostOffers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saleProductName: "",
      discountAmount: "",
      discountAsAPercentage: "",
      previousPrice: "",
      newPrice: "",
      description: ""

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

    const { saleProductName, discountAmount, discountAsAPercentage, previousPrice, newPrice, description } = this.state;

    const data = {
      saleProductName: saleProductName,
      discountAmount: discountAmount,
      discountAsAPercentage: discountAsAPercentage,
      previousPrice: previousPrice,
      newPrice: newPrice,
      description: description

    }

    console.log(data)

    axios.put(`https://furniture-store-backend.herokuapp.com/api/postOffers/update/${id}`, data).then((res) => {
      if (res.data.success) {
        swal("Post updated successfully")
        this.setState(
          {
            saleProductName: "",
            discountAmount: "",
            discountAsAPercentage: "",
            previousPrice: "",
            newPrice: "",
            description: ""
          }
        )
      }
    })
  }

  componentDidMount() {

    const id = this.props.match.params.id;

    //post/${id}/
    axios.get(`https://furniture-store-backend.herokuapp.com/api/postOffers/${id}`).then((res) => {
      if (res.data.success) {

        this.setState({
          saleProductName: res.data.post.saleProductName,
          discountAmount: res.data.post.discountAmount,
          discountAsAPercentage: res.data.post.discountAsAPercentage,
          previousPrice: res.data.post.previousPrice,
          newPrice: res.data.post.newPrice,
          description: res.data.post.description
        });

        console.log(this.state.post);
      }
    });

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
          <center>
            <h1 className="h3 mb-3 font-weight-normal">Edit New Offer Form</h1>
          </center>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }} ><b>Sale Product Name</b></label>
              <input type="text"
                className="form-control"
                name="saleProductName"
                placeholder="Enter sale product name"
                value={this.state.saleProductName}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}><b>Discount Amount</b></label>
              <input type="text"
                className="form-control"
                name="discountAmount"
                placeholder="Enter discount amount"
                value={this.state.discountAmount}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}><b>Discount Percentage</b></label>
              <input type="text"
                className="form-control"
                name="discountAsAPercentage"
                placeholder="Enter discount as a percentage"
                value={this.state.discountAsAPercentage}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}><b>Previous Price</b></label>
              <input type="text"
                className="form-control"
                name="previousPrice"
                placeholder="Enter the previous price"
                value={this.state.previousPrice}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}><b>New Price</b></label>
              <input type="text"
                className="form-control"
                name="newPrice"
                placeholder="Enter the new price"
                value={this.state.newPrice}
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

            <button className="btn btn-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>

          </form>
        </div>
      </div>
    )
  }
}