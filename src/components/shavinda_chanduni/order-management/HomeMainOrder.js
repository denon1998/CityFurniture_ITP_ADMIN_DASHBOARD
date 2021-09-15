import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import SidebarOrder from '../Sidebar-Order/SidebarOrder';


class HomeMainOrder extends Component {
 state = {}
 render() {
  return(
    <div>
      <SidebarOrder/>
   <div className="text-center">
     <br/>
     {/* modified */}
     <h1 className="adminletter">Order Management</h1>
     <img src="https://cdn.dribbble.com/users/291221/screenshots/2026983/server-guy.gif" className="rounded-circle"/>
     
     <br/>
     <br/>
     <Footer/>
   </div>
   </div>
    )
   }
 }



export default HomeMainOrder