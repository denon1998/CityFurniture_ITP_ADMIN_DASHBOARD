import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><b>Home</b></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/homeP"><b>Products</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/homeC"><b>Categories</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/homeS"><b>Suppliers</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><b>Reports</b></a>
            </li>
          </ul>
        </div>
      </nav>

            </div>
        )
    }
}
