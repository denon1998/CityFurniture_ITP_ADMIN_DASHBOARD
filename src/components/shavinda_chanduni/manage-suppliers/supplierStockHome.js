import React, { Component } from 'react'
import Footer from '../Footer/Footer';


export default class supplierStockHome extends Component {
    render() {
        return (
            <div>
            <br/><br/>
            <div className = "container">
            <header>
    
            <div className="p-5 text-center bg-image" style={{backgroundImage: 'url("https://cdn.vox-cdn.com/thumbor/FE3Oq-g9H9KskXoIuMygiPPZqWw=/0x270:5184x3186/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/53912465/IMG_1126.0.jpg")', backgroundSize:'cover', height:"720px"}}>


                <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)' ,marginTop:"6%"}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white"><br/>
                    <h1 className="mb-3" style={{color:"white"}}>Stock Management</h1>
                    <h4 className="mb-3">Manage Suppliers</h4><br/>
                    <a className="btn btn-outline-light btn-lg" href="/addS" role="button">Add Supplier</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/homeS" role="button">Manage Supplier</a>&nbsp;&nbsp;&nbsp;
                    <br/><br/><br/>
                    </div>

                </div>
                </div>
            </div>
            {/* Background image */}
            </header>

            <br/><br/><br/><br/>

            </div>
        <Footer />
        </div>

        )
    }
}



