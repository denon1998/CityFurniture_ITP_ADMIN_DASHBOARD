import React, { Component } from 'react';
import axios from 'axios';
//import Footer from '../../shavinda_chanduni/Footer/Footer';

//import SidebarCustomercare from '../customercare/SidebarCustomercare';


const Customer = props => (
 <tr >
    <td > { props.FAQs.fname } </td> 
    <td > { props.FAQs.lname } </td> 
    <td > { props.FAQs.Phone } </td> 
    <td > { props.FAQs.Email } </td> 
    <td > { props.FAQs.date.substring(0, 10) } </td> 
    <td > { props.FAQs.orderNo } </td> 
    <td > { props.FAQs.category } </td> 
    <td > { props.FAQs.FAQsMsg} </td> 
    <td >
    <a href="" onClick={() => { props.deleteFAQs(props.FAQs._id) }}>Delete</a > 
    </td >
 </tr> 
)

export default class FAQsList extends Component {
    constructor(props) {
        super(props);

        this.deleteFAQs = this.deleteFAQs.bind(this)
        this.handleSearchArea = this.handleSearchArea.bind(this);

        this.state = { FAQs: [] };
    }

    componentDidMount() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/FAQs/')
            .then(response => {
                this.setState({ FAQs: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('https://furniture-store-backend.herokuapp.com/api/FAQs/')
            .then(response => {
                this.setState({ FAQs: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteFAQs(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('https://furniture-store-backend.herokuapp.com/api/FAQs/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                FAQs: this.state.FAQs.filter(el => el._id !== id)
            })
        }
    }


    FAQsList() {
        return this.state.FAQs.map(currentFAQs => {
            return <Customer FAQs = { currentFAQs }
            deleteFAQs = { this.deleteFAQs }
            key = { currentFAQs._id }
            />;
        })
    }


    filterData(FAQs,searchKey){

        this.setState({
            FAQs: this.state.FAQs.filter(el => el.fname = searchKey),
            FAQs: this.state.FAQs.filter(el => el.Email = searchKey),
            FAQs: this.state.FAQs.filter(el => el.category = searchKey)
            })
       
    }
      

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;
        axios.get('https://furniture-store-backend.herokuapp.com/api/FAQs/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>props.fname.includes(searchKey))
           // const result = resultt.filter((props) =>props.Email.includes(searchKey)),
            //const result = resultt.filter((props) =>props.category.includes(searchKey)),
            this.setState({ FAQs: result })
        });
    }

    render() {
        return ( 
            <div >
                 <div className = "container">
                
                  <br/><br/>
                  <center> 
            <h3 > FAQs List </h3>
            </center> 
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
            <th > First Name </th> 
            <th > Last Name </th> 
            <th > Phone </th> 
            <th > Email </th> 
            <th > Date </th> 
            <th > Order No </th> 
            <th > Category </th> 
            <th > Message </th> 
            <th > Actions </th> 
            </tr > 
            </thead> 
            <tbody > { this.FAQsList() }</tbody> 
            </table >

            <br/><br/><br/> <br/><br/><br/>

          

            </div>
            
            </div>

        )
    }
}