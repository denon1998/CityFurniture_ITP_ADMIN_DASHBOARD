import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Footer from '../Footer/Footer';
import SidebarCustomercare from '../customercare/SidebarCustomercare';


const Customer = props => (
 <tr >
    <td > { props.contact.Username } </td> 
    <td > { props.contact.Phone } </td> 
    <td > { props.contact.Email } </td> 
    <td >
    <Link to = { "/edit/" + props.contact._id } > Edit </Link> | <a href="" onClick={() => {props.deletecontact(props.contact._id) }}>Delete</a > 
    </td >
 </tr> 
)

export default class contactList extends Component {
    constructor(props) {
        super(props);

        this.deletecontact = this.deletecontact.bind(this)
        this.handleSearchArea = this.handleSearchArea.bind(this);

        this.state = { contact: [] };
    }

    componentDidMount() {
        axios.get('http://furniture-store-backend.herokuapp.com/api/contact/')
            .then(response => {
                this.setState({ contact: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://furniture-store-backend.herokuapp.com/api/contact/')
            .then(response => {
                this.setState({ contact: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletecontact(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://furniture-store-backend.herokuapp.com/api/contact/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                contact: this.state.contact.filter(el => el._id !== id)
            })
        }
    }

    contactList() {
        return this.state.contact.map(currentcontact => {
            return <Customer contact = { currentcontact }
            deletecontact = { this.deletecontact }
            key = { currentcontact._id }
            />;
        });
    }


    filterData(Customer, searchKey){

        this.setState({
            contact: this.state.contact.filter(el => el.Username = searchKey),
            /*contact: this.state.contact.filter(el => el.Email = searchKey),
            contact: this.state.contact.filter(el => el.Phone = searchKey)*/
        })
      
    }
      


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get('http://furniture-store-backend.herokuapp.com/api/contact/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>props.Username.includes(searchKey))
            /*const result = resultt.filter((props) => props.Email.includes(searchKey)),
            const result = resultt.filter((props) =>props.Phone.includes(searchKey))*/
        
            this.setState({ exercises: result })

        });

    }

    render() {
        return ( 
            <div >
                <SidebarCustomercare/>
            <h3 > Contact List </h3>

            <div className = "col-lg-3 mt-10 mb-2" >
            <input className = "form-control"
                   type = "search"
                   placeholder = "Search"
                   name = "searchQuery"
                   onChange = { this.handleSearchArea } >
            </input> 
            </div >



            <table className = "table" >
            <thead className = "thead-light" >
            <tr >
            <th > Name </th> 
            <th > Phone </th> 
            <th > Email </th> 
            <th > Actions </th> 
            </tr > 
            </thead> 
            <tbody > {this.contactList() }</tbody> 
            </table >
        
            <br/><br/><br/> <br/><br/><br/>

            {/* <Footer /> */}

            </div>
        )
    }
}