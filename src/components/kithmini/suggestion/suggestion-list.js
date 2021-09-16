import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Footer from '../Footer/Footer';
import SidebarCustomercare from '../customercare/SidebarCustomercare';


const Customer = props => (
 <tr >
    <td > { props.suggestion.Username } </td> 
    <td > { props.suggestion.Phone } </td> 
    <td > { props.suggestion.Email } </td> 
    <td > { props.suggestion.date.substring(0, 10) } </td> 
    <td > { props.suggestion.suggestionMsg} </td> 
    <td >
   <a href="" onClick={() => {props.deletesuggestion(props.suggestion._id) }}>Delete</a > 
    </td >
 </tr> 
)

export default class suggestionList extends Component {
    constructor(props) {
        super(props);

        this.deletesuggestion = this.deletesuggestion.bind(this)
        this.handleSearchArea = this.handleSearchArea.bind(this);

        this.state = { suggestion: [] };
    }

    componentDidMount() {
        axios.get('http://furniture-store-backend.herokuapp.com/api/suggestion/')
            .then(response => {
                this.setState({ suggestion: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://furniture-store-backend.herokuapp.com/api/suggestion/')
            .then(response => {
                this.setState({suggestion: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

        deletesuggestion(id) {
            if (window.confirm('Are you sure?')) {
                axios.delete('http://furniture-store-backend.herokuapp.com/api/suggestion/' + id)
                    .then(response => { console.log(response.data) });
    
                this.setState({
                    suggestion: this.state.suggestion.filter(el => el._id !== id)
                })
            }
        }

    suggestionList() {
        return this.state.suggestion.map(currentsuggestion => {
            return <Customer suggestion = { currentsuggestion }
            deletesuggestion = { this.deletesuggestion }
            key = { currentsuggestion._id }
            />;
        })
    }

    filterData(Customer, searchKey) {

        this.setState({
            suggestion: this.state.suggestion.filter(el => el.Username = searchKey)
        })

    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get('http://furniture-store-backend.herokuapp.com/api/suggestion/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Username.includes(searchKey)
            )
            this.setState({ suggestion: result })

        });

    }

    render() {
        return ( 
            <div >
                   <SidebarCustomercare/>
            <h3 > Suggestion and Inquiry List </h3>

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
            <th > Date </th> 
            <th > Suggestion and Inquiry Msg </th> 
            <th > Actions </th> 
            </tr > 
            </thead> 
            <tbody > {this.suggestionList() }</tbody> 
            </table >

            <br/><br/><br/> <br/><br/><br/>

            {/* <Footer /> */}

            </div>
        )
    }
}