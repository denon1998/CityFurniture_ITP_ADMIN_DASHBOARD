import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';

/**
* @author
* @class HomeMainCategory
**/

class HomeMainCategory extends Component {
    state = {}
    render() {
        return (
            <div>
             <SidebarOrder/>
            <div className="text-center">
                <h1 className="adminletter">Category Management</h1>
                <br />
                <br />
                <img src="https://thumbs.gfycat.com/LimpFrayedAnemoneshrimp-size_restricted.gif" />
                <br />
                <br />
                <br />
                <Footer />
            </div>
            </div>
        )
    }
}



export default HomeMainCategory