import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return ( <
            nav className = "navbar navbar-dark bg-dark navbar-expand-lg" >
            <
            Link to = "/admindashboard"
            className = "navbar-brand" ><font face = "Comic sans MS" size ="4"> City Furniture </font></Link> <
            div className = "collpase navbar-collapse" >
            <
            ul className = "navbar-nav mr-auto" >
            
            
            <
            li className = "navbar-item" >
            <
            Link to = "/cuslog"
            className = "nav-link" > Customer login </Link> </
            li >
            

            <
            li className = "navbar-item" >
            <
            Link to = "/"
            className = "nav-link" > User login </Link> </
            li >
            
            </ul >
            </div > </nav>
        );
    }
}