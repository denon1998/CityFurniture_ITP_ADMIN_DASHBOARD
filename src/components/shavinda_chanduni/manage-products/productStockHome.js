import React, { Component } from 'react'


export default class productStockHome extends Component {
    render() {
        return (
            <div>
          
            <br/><br/>
            <div className = "container">
            <header>
    
            <div className="p-5 text-center bg-image" style={{backgroundImage: 'url("https://sebringdesignbuild.com/wp-content/uploads/2017/05/Interesting-Mirror-Ideas-to-Consider-for-Your-Home-8_Sebring-Services.jpg")', backgroundSize:'cover', height:"750px"}}>


                <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', marginTop:"25px"}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white"><br/>
                    <h1 className="mb-3" style={{color:"white"}}>Stock Management</h1>
                    <h4 className="mb-3">Manage Products</h4><br/>
                    <a className="btn btn-outline-light btn-lg" href="/addP" role="button">Add Products</a>&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-outline-light btn-lg" href="/homeP" role="button">Manage Products</a>&nbsp;&nbsp;&nbsp;
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



