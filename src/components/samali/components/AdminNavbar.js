import React, { Component } from 'react';



class NavBar extends Component {
    render() {
        return (
                            <ul className="navbar navbar-dark bg-dark">
                <li className= "navbar navbar-dark bg-dark">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item"  >
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Payments</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/payDisplay">PayPals</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
        )
    }
}

export default NavBar;