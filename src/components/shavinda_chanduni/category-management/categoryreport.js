import axios from 'axios';
import React, { Component } from 'react';
import swal from 'sweetalert';
import Footer from '../Footer/Footer';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';
import jsPdf from 'jspdf';
import 'jspdf-autotable';


class categoryreport extends Component {
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
    axios.get("https://furniture-store-backend.herokuapp.com/api/admincat").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }
 
  
//search function 

  filterData(admincat, searchKey) {
    const result = admincat.filter((post) =>
      post.name.toLowerCase().includes(searchKey)



    )
    this.setState({ admincat: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("admincat").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
        // console.log(e.currentTarget.value);
      }
    });
  }

  //Report pdf generating
  jsPdfGenerator = () => {

    //new document in jspdf
    var doc = new jsPdf('l', 'pt', 'a3');

    doc.text(600, 20, 'Category Details Report', { align: 'center' },);
    doc.autoTable({ html: '#category-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Category Details.pdf");
  }

  render() {
    return (
      <div>
        <SidebarOrder />
        <br />
        <br />
        <div className="container">
          <div className="text-center">
            <h3 className="adminletter"> Category / SubCategory Summary </h3>
          </div>
          <br />
          <br />
          <table id="category-table" class="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Category ID</th>
                <th scope="col">Category/Sub Category Name</th>
                <th scope="col">Parent ID</th>
                <th scope="col">Parent Type</th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.posts.map((posts, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>

                      {posts.name}

                    </td>

                    <td>{posts.parentId}</td>
                    <td>{posts.type}</td>


                  </tr>
                ))}
            </tbody>
            <br />
            <br />

          </table>

          <div class="container">
            <div class="row">
              <div class="col">   <h5>Generated by: ........................ </h5></div>
              <div class="col">    <h5>Generated on: ....-....-....</h5></div>
              <div class="w-100"></div>
              <div class="col"> <h5>Checked by: ........................ </h5></div>
              <div class="col"> <h5>Checked on: ....-....-....-</h5></div>
            </div>
          </div>
          <br />
          <br />
          <button className="btn-primary" onClick={this.jsPdfGenerator}>Generate Report PDF</button>

        </div>


      
      
      </div>
    )
  }
}


export default categoryreport;