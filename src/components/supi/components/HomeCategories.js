import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


class HomeCategories extends Component {
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
    axios.get("http://furniture-store-backend.herokuapp.com/api/postsCategory").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://furniture-store-backend.herokuapp.com/api/postCategory/delete/${id}`).then((res) => {
      swal("Deleted successfully");
      this.retrievePosts();
    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.categoryName.toLowerCase().includes(searchKey)||
      post.categoryId.toLowerCase().includes(searchKey)
     
    )

    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://furniture-store-backend.herokuapp.com/api/postsCategory").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }
  render() {    
    return (

<div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <br></br>
            <center>
            <h4>All Category Details</h4>
            </center>
            <br></br> <br></br>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
          <br></br>
            <input
              className="form-control"
              type="search"
              placeholder="Search by Category Name"
              onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>


        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Id</th>
              <th scope="col">Subcategory Type</th>
              <th scope="col">Subcategory Id</th>
              <th scope="col">Included Components</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/postCategory/${posts._id}`} style={{ textDecoration: 'none' }}>
                    {posts.categoryName}
                  </a>
                </td>

                <td>{posts.categoryId}</td>
                <td>{posts.subcategoryType}</td>
                <td>{posts.subcategoryId}</td>
                <td>{posts.includedComponents}</td>
                <td>{posts.description}</td>

                <td>
                  <a className="btn btn-warning" href={`/editCategory/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <br />
          </table>
          <div className="text-center">
            <button className="btn btn-success"><a href="/addCategory" style={{ textDecoration: 'none', color: 'white' }}>Create new post</a></button>
          </div>
        

      </div>
    )
  }
}
export default HomeCategories;