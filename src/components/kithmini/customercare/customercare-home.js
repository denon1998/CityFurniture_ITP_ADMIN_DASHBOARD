import React, { Component } from 'react'
// import Footer from '../Footer/Footer';
import SidebarCustomercare from '../customercare/SidebarCustomercare';

export default class CustomercareHome extends Component {
    render() {
        return (
            <div>
            {/* <SidebarCustomercare/> */}
           
      
            <div className = "container" style={{marginTop:"40px"}}>
        
            <header>
            
            <div className="p-5 text-center bg-image" style={{backgroundImage: 'url("https://static1.bigstockphoto.com/3/0/2/large1500/203502559.jpg")', backgroundSize:'cover',height:"100%"}}>
                <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white"><br/>
                    <h1 className="mb-3">City Furniture</h1>
                    <h4 className="mb-3">Customer Care Management</h4><br/>
                    <a className="btn btn-outline-light btn-lg" href="/FAQs/" role="button">FAQs</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/suggestion/" role="button">Suggestions</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/feedback/" role="button">Feedbacks</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/contact/" role="button">Contact Us</a>
                    <br/><br/><br/>
                    </div>
                </div>
                </div>
            </div>
            </header>
            <br/><br/><br/>

            

            </div>
                {/* <Footer /> */}
            </div>

        )
    }
}


