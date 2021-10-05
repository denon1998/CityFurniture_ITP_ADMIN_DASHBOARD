import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import jsPdf from 'jspdf'
import 'jspdf-autotable'


export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);

        this.state = { user: [], posts: [] };
    }

    componentDidMount() {
        this.retrievePosts();
    }


    retrievePosts() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/users/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteUser(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('https://furniture-store-backend.herokuapp.com/api/users/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                users: this.state.users.filter(el => el._id !== id)
            })
        }
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('https://furniture-store-backend.herokuapp.com/api/users/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ user: result })

        });

    }

      //pdf generating
      jsPdfGenerator = () => {

        //new document in jspdf
        var doc = new jsPdf('p','pt');

        doc.text(210,30,"Details of Users")
        doc.autoTable({  html:'#my-pdf' })

        doc.autoTable({
          columnStyles: { europe: { halign: 'center' } }, 
          margin: { top: 10 },
        })

        //save the pdf
        doc.save("Details of Users.pdf");
      }

    render() {
        return ( <
            div className = "container" >
            <br/>
            <div style = {
                { float: 'none' }
            } >
            <Link to = "/main" > <Button variant = "info" title="Swith to the list of consumers" > Customer </Button>
            </Link >
            <Link to = "/users/" >  <button type="button" title="You are now on the user list" 
            class="btn btn-secondary" variant = "primary"> User </button>
            </Link >
            </div> <br/>
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > Details of all Users </h4> </
            div > 
            
            <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search"
            placeholder = "Search by User Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>

            <
            table class="table table-bordered table-white" id="my-pdf" >
            <
            thead className = "thead-light" >
            <
            tr >

            <
            th scope = "col" > Name </th> <
            th scope = "col" > Type </th> <
            th scope = "col" > Password </th> <
            th scope = "col" > Action </th> </
            tr > </
            thead> <
            tbody > {
                this.state.user.map(props =>
                    <
                    tr key = { props.id } >
                    <
                    td > { props.username } </td> <
                    td > { props.Type } </td>  < 
                    td > { props.password } </td>  <  

                    td >
                    <
                    Link to = { "/user/Edit/" + props._id } > <Button variant = "warning btn-sm"> Edit </Button>  </Link> 
                    <a href="" onClick={() => { this.deleteUser(props._id) }}> <Button variant = "danger btn-sm"> Delete </Button></a > </
                    td >

                    </tr>
                )

            }

            </tbody>

            </table>
            <button type="button" title="Report generation" class="btn btn-outline-primary btn-sm" 
            onClick={this.jsPdfGenerator} > Download as a PDF </button>
            
            <
            div style = {
                { float: 'right' }
            } >
            
            <
            Link to = "/user/add" >
            <button type="button" class="btn btn-success" variant = "primary" > New User </button>
            </
            Link >
            
            
            </div>

            </div>
        )
    }
}