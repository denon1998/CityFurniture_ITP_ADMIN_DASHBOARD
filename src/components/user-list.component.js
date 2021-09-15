import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';


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
        axios.get('https://furniture-store-backend.herokuapp.com/api0/users/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteUser(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('https://furniture-store-backend.herokuapp.com/api0/users/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                users: this.state.users.filter(el => el._id !== id)
            })
        }
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('https://furniture-store-backend.herokuapp.com/api0/users/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ user: result })

        });

    }



    render() {
        return ( <
            div className = "container" >
            
            <div style = {
                { float: 'none' }
            } >
            <Link to = "/users/" > <Button variant = "primary" > User </Button> 
            </Link >
            <Link to = "/main" > <Button variant = "primary" > Customer </Button> 
            </Link >
            </div>
            
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > User List </h4> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>

            <
            table className = "table" >
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
                    Link to = { "/user/Edit/" + props._id } > Edit </Link> | <a href="" onClick={() => { this.deleteUser(props._id) }}>Delete</a > </
                    td >

                    </tr>
                )

            }

            </tbody>

            </table>

            <
            div style = {
                { float: 'right' }
            } >

            <
            Link to = "/user/add" >
            <Button variant = "primary" > New User </Button> 
            </
            Link >
            </
            div>

            </div>
        )
    }
}