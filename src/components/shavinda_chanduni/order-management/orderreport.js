import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';
import Footer from '../Footer/Footer';
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import letterhead from '../../images/letterhead.png'

class OrderHomeOrder extends Component {
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
        axios.get("https://furniture-store-backend.herokuapp.com/api/posts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        });
    }



    // onDelete=(id)=>{
    //   swal({
    //     title: "Are you sure?",
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   })
    //   .then((willDelete) => {

    //     if (willDelete) {
    //   axios.delete(`https://furniture-store-backend.herokuapp.com/api/post/delete/${id}`).then((res)=>{
    //     swal("Deleted Successful", "Order is removed", "success");


    //     this.retrievePosts();
    //   })
    // } else {
    //   swal("Your imaginary file is safe!");
    // }
    // }); 
    // }



    filterData(posts, searchKey) {
        const result = posts.filter((post) =>
            post.name.toLowerCase().includes(searchKey) ||
            post.town.toLowerCase().includes(searchKey)


        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("https://furniture-store-backend.herokuapp.com/api/posts").then(res => {
            if (res.data.success) {

                this.filterData(res.data.existingPosts, searchKey)
            }
        });
    }

    //Report pdf generating
    jsPdfGenerator = () => {

        //new document in jspdf
        var doc = new jsPdf('l', 'pt', 'a3');

        doc.text(600, 20, 'Order Details Report', { align: 'center' }, ) ;
        doc.autoTable({ html: '#order-table' })

        doc.autoTable({
            columnStyles: { europe: { halign: 'center' } },
            margin: { top: 10 },
        })

        //save the pdf
        doc.save("Order Details.pdf");
    }


    render() {
        return (
            <div >
                <SidebarOrder />
                <div className="container">
                    <div className="text-center">
                        <br />
                        <br />
                        <h2 className="adminletter"> Order Details Report - City Furniture </h2>
                        <br />
                        <br />

                    </div>
                    <div className="col-md-6 mb-4">
                        <form class="form-inline">
                            <i class="fas fa-search" aria-hidden="true"></i>
                            <input
                                className="form-control form-control-sm ml-3 w-75"
                                type="search"
                                placeholder="search"
                                name="searchQuery"
                                onChange={this.handleSearchArea}>
                            </input>
                        </form>
                    </div>



                    <table id="order-table" className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Order Index</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">PostalNo</th>
                                <th scope="col">Street</th>
                                <th scope="col">Town</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Order Total(LKR)</th>

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
                                        <td>{posts.postalNo}</td>
                                        <td>{posts.street}</td>
                                        <td>{posts.town}</td>
                                        <td>{posts.contactNo}</td>
                                        <td>{posts.orderDate}</td>
                                        <td>{posts.status}</td>
                                        <td>{posts.cartTotal}</td>



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
                            <div class="col"><h5>Checked on: ....-....-....-</h5></div>
                        </div>
                    </div>
                 
                


                  
                    <br />
                    <button className="btn-primary" onClick={this.jsPdfGenerator}>Generate Report PDF</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    


                </div>
              
              
            </div>
        )
    }
}
export default OrderHomeOrder;
