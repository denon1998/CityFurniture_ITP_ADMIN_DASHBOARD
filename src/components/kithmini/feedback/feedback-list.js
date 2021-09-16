import React, { Component } from 'react';
import axios from 'axios';
// import Footer from '../Footer/Footer';
import SidebarCustomercare from '../customercare/SidebarCustomercare';


const Customer = props => (
 <tr >
    <td > { props.feedback.Username } </td> 
    <td > { props.feedback.Phone } </td> 
    <td > { props.feedback.Email } </td> 
    <td > { props.feedback.date.substring(0, 10) } </td> 
    <td > { props.feedback.feedbackMsg} </td> 
    <td >
    <a href="" onClick={() => {props.deleteFeedback(props.feedback._id) }}>Delete</a > 
    </td >
 </tr> 
)

export default class FeedbackList extends Component {
    constructor(props) {
        super(props);

        this.deleteFeedback = this.deleteFeedback.bind(this)
        this.handleSearchArea = this.handleSearchArea.bind(this);

        this.state = { feedback: [] };
    } 

    componentDidMount() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/feedback/')
            .then(response => {
                this.setState({ feedback: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/feedback/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteFeedback(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('https://furniture-store-backend.herokuapp.com/api/feedback/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                feedback: this.state.feedback.filter(el => el._id !== id)
            })
        }
    }

    feedbackList() {
        return this.state.feedback.map(currentfeedback => {
            return <Customer feedback = { currentfeedback }
            deleteFeedback = { this.deleteFeedback }
            key = { currentfeedback._id }
            />;  
        });
    }

    filterData(Customer, searchKey) {

        this.setState({
           feedback: this.state.feedback.filter(el => el.Username = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('https://furniture-store-backend.herokuapp.com/api/feedback/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Username.includes(searchKey)
            )

            this.setState({ feedback: result })

        });

    }



    render() {
        return ( 
            <div>
                <SidebarCustomercare/>
                 <center>
            <h3> Feedback List </h3>
            </center>

            <div className = "col-lg-3 mt-10 mb-2">
            <input className = "form-control"
                   type = "search"
                   placeholder = "Search"
                   name = "searchQuery"
                   onChange = { this.handleSearchArea }>
            </input> 
            </div>



            <table className = "table">
            <thead className = "thead-light">
            <tr>
            <th> Name </th> 
            <th> Phone </th> 
            <th> Email </th> 
            <th> Date </th> 
            <th> FeedbackMsg </th> 
            <th> Actions </th> 
            </tr> 
            </thead> 
            <tbody>{this.feedbackList()}</tbody> 
            </table >

            <br/><br/><br/> <br/><br/><br/>

            {/* <Footer /> */}

            </div>
        )
    }
}