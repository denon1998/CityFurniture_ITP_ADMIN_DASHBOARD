import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class HomeProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://furniture-store-backend.herokuapp.com/api/postsProducts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://furniture-store-backend.herokuapp.com/api/postProducts/delete/${id}`).then((res) => {
      swal("delete successfully");
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.productName.toLowerCase().includes(searchKey) ||
      post.itemModelNumber.toLowerCase().includes(searchKey)


    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://furniture-store-backend.herokuapp.com/api/postsProducts").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }
  render() {
    return (

      <div className="container" >
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <br></br>
            <center>
              <h4>All Product Details</h4>
            </center>
            <br></br>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <br></br>
            <input
              className="form-control"
              type="search"
              placeholder="Search by Product Name"
              name="search by sale product name"
              onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>

        <table className="table table-hover" style={{ marginTop: '40px' }} style={{ marginLeft: '1px' }}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Item Model Number</th>
              <th scope="col">Item Height</th>
              <th scope="col">Item Length</th>
              <th scope="col">Item Width</th>
              <th scope="col">Materials Used</th>
              <th scope="col">Colours</th>
              <th scope="col">Price</th>
              <th scope="col">Model Type</th>
              <th scope="col">Included Components</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/postProducts/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.productName}
                    </a>
                  </td>
                  <td>{posts.productName}</td>
                  <td>{posts.itemModelNumber}</td>
                  <td>{posts.itemHeight}</td>
                  <td>{posts.itemLength}</td>
                  <td>{posts.itemWidth}</td>
                  <td>{posts.materialsUsed}</td>
                  <td>{posts.colours}</td>
                  <td>{posts.price}</td>
                  <td>{posts.modelType}</td>
                  <td>{posts.includedComponents}</td>
                  <td>{posts.description}</td>

                  <td>
                    <a className="btn btn-warning" href={`/editProducts/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp; Edit
                    </a>

                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
          <br />

        </table>

        <button className="btn btn-success"><a href="/addProducts" style={{ textDecoration: 'none', color: 'white', }}>Create new post</a></button>
      </div>

    )
  }
}
export default HomeProducts;