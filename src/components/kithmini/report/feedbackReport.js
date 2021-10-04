import React, { Component } from 'react';
import axios from 'axios';
// import Footer from '../Footer/Footer';
//import SidebarCustomercare from '../customercare/SidebarCustomercare';
import jsPdf from 'jspdf'
import 'jspdf-autotable'


const Customer = props => (
 <tr >
    <td > { props.feedback.Username } </td> 
    <td > { props.feedback.Phone } </td> 
    <td > { props.feedback.Email } </td> 
    <td > { props.feedback.date.substring(0, 10) } </td> 
    <td > { props.feedback.feedbackMsg} </td> 
    
    
 </tr> 
)

export default class FeedbackList extends Component {
    constructor(props) {
        super(props);

       
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

    //pdf generating
    jsPdfGenerator = () =>{

        //new document in jspdf
        var doc = new jsPdf('p','pt');

        doc.text(210,30,"Feedbacks of Customers");
        doc.autoTable({  html:'#feedback-table'})

        doc.autoTable({
            columnStyles: {europe: { halign: 'center'}},
            margin: { top: 10},
        })

        //save the pdf
        doc.save("feedbacks.pdf");
    }   

    render() {
        return ( 
            <div>
                 <div className = "container">
                  {/* <SidebarCustomercare/> */}
                  <br/><br/>
                 <center>  
            <h3> Feedback Report Generating Table </h3>
            </center>

            <div className = "col-lg-3 mt-10 mb-2">
            <input className = "form-control"
                   type = "search"
                   placeholder = "Search"
                   name = "searchQuery"
                   onChange = { this.handleSearchArea }>
            </input> 
            </div>



            <table class="table table-bordered table-white" id="feedback-table">
            <thead className = "thead-light">
            <tr>
            <th> Name </th> 
            <th> Phone </th> 
            <th> Email </th> 
            <th> Date </th> 
            <th> FeedbackMsg </th> 
            </tr> 
            </thead> 
            <tbody>{this.state.feedback.map(props =>
                    <tr key = { props.id } >
                    <td > { props.Username } </td>  
                    <td > { props.Phone } </td>  
                    <td > { props.Email } </td>
                    <td > { props.date.substring(0, 10) } </td>  
                    <td > { props.feedbackMsg} </td> 
                    
                    </tr>
                )

            }</tbody> 
            </table >

            <button type="button" title="Report generation" class="btn btn-outline-primary btn-sm" 
            onClick={this.jsPdfGenerator} > Download as a PDF </button>
            

            <br/><br/><br/> 

            {/* <Footer /> */}

            </div>
            </div>
        )
    }
}