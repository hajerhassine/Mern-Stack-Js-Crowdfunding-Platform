import React, { Component } from 'react';


class Header extends React.Component{
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
                                   <a href="index.html">Home</a>
                                   <ul className="submenu">
                                      
                                   </ul>
                               </li>
                               <li>
                                   <a href="project-1.html">Project</a>
                                   <ul className="submenu">
                                       <li><a href="project-1.html">Project One</a></li>
                                       <li><a href="project-2.html">Project Two</a></li>
                                       
                                   </ul>
                               </li>
                               <li>
                                   <a href="/Event">Events</a>
                               </li>
                               <li>
                                   <a href="project-1.html">Bank</a>
                                   <ul className="submenu">
                                       <li><a href="project-1.html">Bank Offers</a></li>
                                       <li><a href="project-2.html">Loan</a></li>
                                       <li><a href="project-2.html">Your Loan</a></li>
                                       
                                   </ul>
                               </li>
                               
                              
                               <li><a href="contact.html">Contact</a></li>
                           </ul>
                       </div>
                       <div className="navbar-extra d-flex align-items-center">
                           <a href="project-1.html" className="main-btn nav-btn d-none d-sm-inline-block">
                               Donate Now <i className="far fa-arrow-right"></i>
                           </a>
                           <a href="#" className="nav-toggler">
                               <span></span>
                           </a>
                       </div>
                   </div>
               </div>
           </div>
           <div className="mobile-menu-panel">
               <div className="panel-logo">
                   <a href="index.html"><img src="assets/img/logo-white.png" alt="Funden"/></a>
               </div>
               <ul className="panel-menu">
                   <li>
                       <a href="index.html">Home</a>
                       <ul className="submenu">
                           <li><a href="index.html">Home One</a></li>
                           <li><a href="index-2.html">Home Two</a></li>
                       </ul>
                   </li>
                   <li>
                       <a href="project-1.html">Project</a>
                       <ul className="submenu">
                           <li><a href="project-1.html">Project One</a></li>
                           <li><a href="project-2.html">Project Two</a></li>
                           <li><a href="project-3.html">Project Three</a></li>
                           <li><a href="project-details.html">Project Details</a></li>
                       </ul>
                   </li>
                   <li>
                       <a href="events.html">Events</a>
                   </li>
                   <li>
                       <a href="/Event">News</a>
                       <ul className="submenu">
                           <li><a href="news-standard.html">News Standard</a></li>
                           <li><a href="news-details.html">News Details</a></li>
                       </ul>
                   </li>
                   <li>
                       <a href="project-1.html">Banks</a>
                       <ul className="submenu">
                           <li><a href="project-1.html">Offers</a></li>
                           <li><a href="project-2.html">Loans</a></li>
                           <li><a href="project-3.html">Your Loan</a></li>
                           
                       </ul>
                   </li>
                   <li className="current">
                       <a href="#">Pages</a>
                       <ul className="submenu">
                           <li><a href="about.html">About</a></li>
                           <li><a href="company-overview.html">Company Overview</a></li>
                           <li><a href="team-member.html">Team Member</a></li>
                           <li><a href="pricing.html">Pricing</a></li>
                           <li><a href="faq.html">FAQ</a></li>
                       </ul>
                   </li>
                   <li><a href="contact.html">Contact</a></li>
               </ul>
               <div className="panel-extra">
                   <a href="#" className="main-btn btn-white">
                       Donate Now <i className="far fa-arrow-right"></i>
                   </a>
               </div>
               <a href="#" className="panel-close">
                   <i className="fal fa-times"></i>
               </a>
           </div>
       </header>
       
        </div>
        )
    }
}
export default Header;