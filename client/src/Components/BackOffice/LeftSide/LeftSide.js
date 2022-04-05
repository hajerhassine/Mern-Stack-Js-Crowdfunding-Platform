import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LeftSide extends React.Component{
    render(){
        return(
        <>
        <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html"> 
            <img alt="image" src="assets/img/lancini.png" className="header-logo" /> 
            </a>
          </div>
          <ul className="sidebar-menu">
            
            <li className="dropdown active">
              <a href="index.html" className="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
            </li>
            <li className="dropdown">
              <a href="#" ><i data-feather="briefcase"></i><li><Link to="/Banks">Banks</Link></li></a>  
            </li>
            <li className="dropdown">
              <a href="#" ><i data-feather="command"></i><span>Apps</span></a>
            
            </li>
            <li className="dropdown">
              <a href="#"><i data-feather="mail"></i><span>Email</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="email-inbox.html">Inbox</a></li>
                <li><a className="nav-link" href="email-compose.html">Compose</a></li>
                <li><a className="nav-link" href="email-read.html">read</a></li>
              </ul>
            </li>
            
          </ul>
        </aside>
           
      </div>
        </>
        )
    }
}
export default LeftSide;