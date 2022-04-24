import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useState } from "react";


class Header extends React.Component{
    logout() {
        sessionStorage.clear();
          
    }

    render(){
      
        return(
        <div>
           {/* <!--====== Header Start ======--> */}
           <header className="site-header sticky-header">
           <div className="header-topbar d-none d-sm-block">
               <div className="container">
                   <div className="row justify-content-between align-items-center">
                       <div className="col-auto">
                           <ul className="contact-info">
                               <li><a href="#"><i className="far fa-envelope"></i> support@gmail.com</a></li>
                               <li><a href="#"><i className="far fa-map-marker-alt"></i> 250 Main Street, 2nd Floor, USA</a></li>
                           </ul>
                       </div>
                       <div className="col-auto d-none d-md-block">
                           <ul className="social-icons">
                               <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                               <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                               <li><a href="#"><i className="fab fa-behance"></i></a></li>
                               <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
           <div className="navbar-wrapper">
               <div className="container">
                   <div className="navbar-inner">
                       <div className="site-logo">
                           <a href="index.html"><img src="assets/img/logo.png" alt="Funden" width={130}/></a>
                       </div>
                       <div className="nav-menu">
                           <ul>
                           
                        <li>
                        <Link to="/Home">Home</Link> 
                        
                    </li>
                               
                               <li>
                               <Link to="/myProfile">Profile</Link> 
                                  
                               </li>
                               <li>
                               <Link to="/project">Projects</Link> 
                                  
                               </li>
                               <li>
                               <Link to="/Event">Events</Link> 
                               </li>
                               
                               <li >
                               <Link to="/FAQ">FAQ</Link>
                                
                               </li>
                               <li >
                               <Link to="/Chats">Chat</Link>
                                
                               </li>
                               <li >
                               <Link to="/ContactUs">Contact</Link>
                                
                               </li>
                           </ul>
                       </div>
                       <div className="navbar-extra d-flex align-items-center">
                       <Link to='/loginInvestor' className="main-btn nav-btn d-none d-sm-inline-block" onClick={this.logout()}>LOGOUT</Link>
                       
                           <a href="#" className="nav-toggler">
                               <span></span>
                           </a>
                       </div>
                   </div>
               </div>
           </div>
         
       </header>
       
        </div>
        )
    }
}
export default Header;