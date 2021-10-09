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
            </div> <br/>
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > Details of all Users </h4> <br/>
            <button type="button" title="Report generation" class="btn btn-outline-primary btn-sm" 
            onClick={this.jsPdfGenerator} > Download as a PDF </button> 
            
            </div > 
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
            th scope = "col" > Email </th> <
            th scope = "col" > Type </th> <
            th scope = "col" > Password </th> </
            tr > </
            thead> <
            tbody > {
                this.state.user.map(props =>
                    <
                    tr key = { props.id } >
                    <
                    td > { props.username } </td> <
                    td > { props.email } </td> <
                    td > { props.Type } </td>  < 
                    td > { props.password } </td> 

                    </tr>
                )

            }

            </tbody>

            </table>
            
            
            <br/><br/><br/><br/>
            </div>
            
        )
    }
}