import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import jsPdf from 'jspdf';
import 'jspdf-autotable';


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
    axios.get("https://furniture-store-backend.herokuapp.com/api/postsCategory").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  // onDelete = (id) => {
  //   axios.delete(`https://furniture-store-backend.herokuapp.com/api/postCategory/delete/${id}`).then((res) => {
  //     swal("Deleted successfully");
  //     this.retrievePosts();
  //   })
  // }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.categoryName.toLowerCase().includes(searchKey)||
      post.categoryId.toLowerCase().includes(searchKey)
     
    )

    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("https://furniture-store-backend.herokuapp.com/api/postsCategory").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }

  jsPdfGenerator = () => {

    //new document in jspdf
    var doc = new jsPdf('l', 'pt', 'a3');

    doc.text(600, 20, 'Category Details Report', { align: 'center' },);
    doc.autoTable({ html: '#categoryDetails-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Category Details Summary.pdf");
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


        <table Id = "categoryDetails-table" className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Id</th>
              <th scope="col">Subcategory Type</th>
              <th scope="col">Subcategory Id</th>
              <th scope="col">Included Components</th>
              <th scope="col">Description</th>

            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>

                    {posts.categoryName}
                  
                </td>

                <td>{posts.categoryId}</td>
                <td>{posts.subcategoryType}</td>
                <td>{posts.subcategoryId}</td>
                <td>{posts.includedComponents}</td>
                <td>{posts.description}</td>

              </tr>
            ))}
          </tbody>
          <br />
          </table>

          <button className="btn-primary" onClick={this.jsPdfGenerator}>Generate Report PDF</button>
          

      </div>
    )
  }
}
export default HomeCategories;