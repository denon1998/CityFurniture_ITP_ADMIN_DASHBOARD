import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';



class Home extends Component {

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
    axios.get("https://furniture-store-backend.herokuapp.com/api/paypalposts").then(res => {

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

    swal({
      title:"Are you sure?",
      text:"Once deleted, you will not be able to recover this category details !",
      icon : "warning",
      buttons:true,
      dangerMode:true,
    }).then((willDelete)=>{
      if(willDelete){
        axios.delete(`https://furniture-store-backend.herokuapp.com/api/paypalpost/delete/${id}`).then((res) => {
        swal("Deleted Successfully");
        this.retrievePosts();
      })
      swal("Done! Payment Details has been Deleted!",{
        icon:"success",
      });
    }else{
      swal("Not Deleted! Your Payment details are Safe!");
    }
    
    })
    console.log("delete me")
  }




  //search function start here

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.cname.toLowerCase().includes(searchKey)||
      post.cemail.toLowerCase().includes(searchKey)
     
    )

    this.setState({ posts: result })
  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("https://furniture-store-backend.herokuapp.com/api/paypalposts").then(res => {

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
            <h4>Search Paypal details</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Customer Name and Email"
              onChange={this.handleSearchArea}>


            </input>
          </div>
        </div>


        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"> Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Customer Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>
                  <a href={`/palEdit/${posts._id}`} style={{ textDecoration: 'none' }} >
                    {posts.cname}
                  </a>
                </td>
                <td>{posts.cemail}</td>
                <td>{posts.cpassword}</td>


                <td>
                <a className="btn btn-primary" href="mail">
                    <i className="fas fa-edit"></i>&nbsp;Request

                  </a>
                  &nbsp;
                  &nbsp;
                  <a className="btn btn-warning" href={`/palUpdate/${posts._id}`}>
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
        <button className="btn btn-primary"><a href="/payment/paypal/report" style={{ textDecoration: 'none', color: 'white' }}>Create New Report Paypal</a> </button>

      </div>



    )
  }
}

export default Home;