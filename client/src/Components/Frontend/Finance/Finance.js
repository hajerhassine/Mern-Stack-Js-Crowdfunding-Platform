
import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Finance(props){
        return(
        <div>
          <Header/>
           

           
                        {/* <!-- Contact Info End --> */}
                        <div className="contact-from-area">
                            <div className="row no-gutters">
                                
                                <div className="col-lg-7">
                                    <div className="contact-form">
                                        <form action="#">
                                            <h3 className="form-title">Banking Offers</h3>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="name">Your Name</label>
                                                        <input type="text" id="name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="phone-number">Phone Number</label>
                                                        <input type="text"id="phone-number"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="email">Email Address</label>
                                                        <input type="text" id="email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="subject">Loan type</label>
                                                        <input type="text"  id="subject"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-field mb-30">
                                                        <label for="message">Write Message</label>
                                                        <textarea id="message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-field">
                                                        <button className="main-btn">demande credit <i className="far fa-arrow-right"></i></button>
                                                    </div>
                                                </div>
                                                <div class="view-more-btn text-center mt-80">
                                                <a href="project-1.html" class="main-btn bordered-btn"><i class="far fa-arrow-right"></i></a>
                                            </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                <Footer/>
    </div>
    )
}

export default Finance;
