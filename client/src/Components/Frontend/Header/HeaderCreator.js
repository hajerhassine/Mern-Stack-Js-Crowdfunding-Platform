import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useState } from "react";


class HeaderCreator extends React.Component{
 
    logout() {
        localStorage.clear();
          
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
                               <Link to="/HomeCreator">Home</Link> 
                                   <ul className="submenu">
                                      
                                   </ul>
                               </li>
                               <li>
                               <Link to="/myProfileCreator">Profile</Link> 
                                  
                               </li>
                               <li>
                               <Link to="/EventCreator">Events</Link> 
                               </li>
                             
                               <li >
                               <Link >Banks</Link>
                                   <ul className="submenu">
                                       <li> <Link to="/Partners">Our partners</Link></li>
                                       <li><Link to="/converter">converter</Link></li>
                                      
                                   </ul>
                               </li>
                               <li>
                           
                                </li>
                                <li className="current">
                                <Link to="/project">Projects</Link>
                                <ul className="submenu">
                                    <li> <Link to="/addproject">Add project</Link></li>
                                   
                                   
                                </ul>
                            </li>

                                   
                               
                               <ul className="submenu">
                               <li> <Link to="/bankings">Banks</Link> </li>
                                       <li><a href="company-overview.html">Company Overview</a></li>
                                      
                                   </ul>
                              
                                   <li><Link to="/FAQ">FAQ</Link></li>
                                   <li><Link to="/ContactUs">Contact</Link></li>
                                   
                           </ul>

                       </div>
                       <div className="navbar-extra d-flex align-items-center">
                       <Link to='/loginCreator' className="main-btn nav-btn d-none d-sm-inline-block" onClick={this.logout()}>LOGOUT</Link>
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
export default HeaderCreator;