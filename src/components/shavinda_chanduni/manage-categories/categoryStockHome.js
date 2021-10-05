import React, { Component } from 'react'




export default class categoryStockHome extends Component {
    render() {
        return (
            <div>
          
            <br/><br/>
            <div className = "container">
            <header>
    
            <div className="p-5 text-center bg-image" style={{backgroundImage: 'url("https://www.wvnstv.com/wp-content/uploads/sites/76/2017/06/14149975_G_27992067_ver1.0.jpg")', backgroundSize:'cover', height:"700px" ,marginTop: '50px'}}>


                <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)' ,marginTop:"6%"}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white"><br/>
                    <h1 className="mb-3" style={{color:"white"}}>Stock Management</h1>
                    <h4 className="mb-3">Category Management</h4><br/>
                   
                    <a className="btn btn-outline-light btn-lg" href="/addC" role="button">Add Categories</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/homeC" role="button">Manage Categories</a>&nbsp;&nbsp;&nbsp;
                   
                    <br/><br/><br/>
                    </div>

                </div>
                </div>
            </div>
            {/* Background image */}
            </header>

            <br/><br/><br/><br/>

            </div>
        </div>

        )
    }
}



