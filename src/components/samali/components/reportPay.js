import React, { Component } from 'react';
import axios from 'axios';
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import swal from 'sweetalert';

class PayHome extends Component {

  constructor(props) {

    super(props);

    this.state = {
      posts: []
    };

  }

  //call the link
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("https://furniture-store-backend.herokuapp.com/api/cardposts").then(res => {

      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }

//   //delete function 
//   onDelete = (id) => {
//     axios.delete(`https://furniture-store-backend.herokuapp.com/api/cardpost/delete/${id}`).then((res) => {
//       alert("Deleted Successfully");
//       this.retrievePosts();
//     })
//     console.log("delete me")
//   }




  //search function start here

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.customerName.toLowerCase().includes(searchKey)||
      post.expiry.toLowerCase().includes(searchKey)
     
    )

    this.setState({ posts: result })
  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("https://furniture-store-backend.herokuapp.com/api/cardposts").then(res => {

      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }

  jsPdfGenerator = () => {

    swal("Done!", "Your Report is Downloding!", "success")

    //new document in jspdf
    var doc = new jsPdf('l', 'pt', 'a3');

    doc.text(600, 20, 'Payment Details Report', { align: 'center' },);
    doc.autoTable({ html: '#payment-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Payments Details.pdf");
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Search Payment details</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Customer Name"
              onChange={this.handleSearchArea}>


            </input>
          </div>
        </div>


        <table id ="payment-table" className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"> Card Number</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Expire Date</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>
                 
                    {posts.cardnumber}
                
                </td>
                <td>{posts.customerName}</td>
                <td>{posts.expiry}</td>
                



               
              </tr>
            ))}

          </tbody>

        </table>
        <button className="btn btn-outline-primary" onClick={this.jsPdfGenerator}><b>Generate Report PDF</b></button>

      </div>



    )
  }
}

export default PayHome;