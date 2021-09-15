import React, { Component } from 'react';

export default class dashboard extends Component{

  render(){

    return(

      
      <div className="jumbotron">
        <br/><br/>

 
     <div className="container">

      
 <h1 className="text-center">Stock Management</h1>

        
        <br/><br/><br/><br/><br/><br/><br/><br/>
  <div class="row">
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg")'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Manage Products</h5>
            <p className="text-center">
            Create Update Retrieve Delete Products
            </p>
            <p>
              <br/>
            <div class="text-center">
      <div className="row">
        <div className="col-sm">
        <a className="btn btn-primary btn-lg" href="/addP" role="button">Add</a><br /><br />
        </div>
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="/homeP" role="button">Manage</a>
        </div>
      </div>
    </div>
        </p>

          </div>
          </div>
    </div>
    <div className="col-sm">

    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/003.jpg" )'}}>
          <div className="card-body text-white">
            <h5 className="text-center">Manage Categories</h5>
            <p className="text-center">
            Create Update Retrieve Delete Categories
            </p>
            <p>
            <br/>
            <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="/addC" role="button">Add</a><br /><br />
        </div>
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="/homeC" role="button">Manage</a>
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
            <h5 className="text-center">Manage Suppliers</h5>
            <p className="text-center">
            Create Update Retrieve Delete Suppliers
            </p>
        <p>
         
        <br/>
    <div class="text-center">
      <div class="row">
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="/addS" role="button">Add</a><br /><br />
        </div>
        <div class="col-sm">
        <a className="btn btn-primary btn-lg" href="/homeS" role="button">Manage</a>
        </div>
      </div>
    </div>
                    
        </p> 

  </div>
  </div>
    </div>
  </div>
</div>

   </div>


    
     
    )
  }
}