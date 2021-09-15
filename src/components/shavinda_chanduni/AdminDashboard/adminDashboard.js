import React, { Component } from 'react';
import Footer from '../Footer/Footer';

export default class dashboard extends Component{

  render(){

    return(

      
      <div className="jumbotron">
        <br/><br/>

 
     <div className>

      
 <h1 className="text-center" style = {{backgroundColor:'cyan'}}><font face = "Comic sans MS" size ="9"><b>City Furniture</b></font></h1><br/>
 <h2 className="text-center" ><font face = "Comic sans MS" size ="6"><b>Admin Dashboard</b></font></h2>

        
        <br/><br/><br/>
  <div class="row">
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg")'}}>
          <div className="card-body text-white">
            <h5 className="text-center"><b>Stock Management</b></h5>
            <p className="text-center">
        
            </p>
            <p>
              <br/>
            <div class="text-center">
      <div className="row">
        <div className="col-sm">
        <a className="btn btn-primary btn-lg" href="/stockHome" role="button">Manage Stock</a><br /><br />
        </div>
      </div>
    </div>
        </p>

          </div>
          </div>
    </div>&nbsp;

    
    <div className="col-sm">

    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg" )'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Staff Management</h5>
    
            <p>
            <br/>
            <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="#" role="button">Manage Staff</a><br /><br />
        </div>
      </div>
    </div>
        </p>

          </div>
          </div>
          

          <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg" )'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Order Management</h5>
    
            <p>
            <br/>
            <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="/order" role="button">Manage Orders</a><br /><br />
        </div>
      </div>
    </div>
        </p>

          </div>
          </div>

          <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg" )'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Category Management(Web pages)</h5>
    
            <p>
            <br/>
            <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="/category" role="button">Manage Categories</a><br /><br />
        </div>
      </div>
    </div>
        </p>

          </div>
          </div>
    </div>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg")'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Delivary Management</h5>
            <p className="text-center">
            </p>
        <p>
         
        <br/>
    <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="#" role="button">Manage Delivaries</a><br /><br />
        </div>
      </div>
    </div>
                    
        </p> 

  </div>
  </div>


  <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg")'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Customer care Management</h5>
            <p className="text-center">
            </p>
        <p>
         
        <br/>
    <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="#" role="button">Manage Customer care</a><br /><br />
        </div>
      </div>
    </div>
                    
        </p> 

  </div>
  </div>

  <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg")'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Payment Management</h5>
            <p className="text-center">
            </p>
        <p>
         
        <br/>
    <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="#" role="button">Manage Payments</a><br /><br />
        </div>
      </div>
    </div>
                    
        </p> 

  </div>
  </div>

  <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg")'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Web page Management</h5>
            <p className="text-center">
            </p>
        <p>
         
        <br/>
    <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="#" role="button">Manage web page</a><br /><br />
        </div>
      </div>
    </div>
                    
        </p> 

  </div>
  </div>

  </div>
  </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
</div>


    )
  }
}