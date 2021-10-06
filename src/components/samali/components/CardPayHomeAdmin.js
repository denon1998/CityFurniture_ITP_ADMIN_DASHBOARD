import React, { Component } from 'react';
import axios from 'axios';



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

  //delete function 
  onDelete = (id) => {
    axios.delete(`https://furniture-store-backend.herokuapp.com/api/cardpost/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievePosts();
    })
    console.log("delete me")
  }




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


        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"> Card Number</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Expire Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>
                  <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }} >
                    {posts.cardnumber}
                  </a>
                </td>
                <td>{posts.customerName}</td>
                <td>{posts.expiry}</td>
                



                <td>
                <a className="btn btn-primary" href="mail">
                    <i className="fas fa-edit"></i>&nbsp;Request

                  </a>
                  &nbsp;
                  &nbsp;
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit

                  </a>
                  &nbsp;

                  <button className="btn btn-danger" onClick={() => { this.onDelete(posts._id) }}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete

                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>
        <button className="btn btn-success"><a href="/payment/report" style={{ textDecoration: 'none', color: 'white' }}>Card Payment Report</a> </button>

      </div>



    )
  }
}

export default PayHome;