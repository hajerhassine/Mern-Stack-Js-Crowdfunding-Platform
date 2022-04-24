import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

   function EventDetails(props){
     
         return(
                
           <div>
           <Header/>
         
     
        <section className="project-details-area section-gap-extra-bottom">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    
                  
                    <div className="col-12">
                        <div className="project-details-tab">
                    
                            <div className="tab-content" id="projectTabContent">
                                <div className="tab-pane fade show active" id="description" role="tabpanel">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="description-content">
                                                <h4 className="description-title">Pegasus Road</h4>
                                                <p>
                                                As Chris Grosser once said : "Opportunities Don't Happen. You Create Them”, and as the leaders of a newer and improved tomorrow, 
                                                we are pleased to announce that this Wednesday, March 30th at 10:30 A.M, our Student Branch is hosting our 1st Annual Pegasus Road Conference.
                                                </p>
                                                <img className="mt-50 mb-50" src="assets/img/event/01.jpg" alt="Image"/>
                                                <h4 className="description-title">Program</h4>
              <p>This Conference will take place at Amphi G 🏢. And for it is OUR future, all is welcome ❤️ , IEEE or non-IEEE members, this might be your chance to build your future with a plethora of highly renowned International 🌎 and national speakers and leaders as this conference will feature :
Prof. Taher Belakhdher, President and Founder of Esprit
Prof. Antonio Luque, IEEE Region 8 Director
Prof. Magdalena Salazar Palma, IEEE Region 8 Past-Director
Prof. Edmundo Tovar, IEEE Education Society President
Prof. Ilhem Kallel, IEEE Tunisia Section Chairwoman, IEEE Education Society - Tunisia Chapter Chairwoman
And many surprises to come ✌️
📍REGISTRATION LINK: https://forms.gle/7ZDnuwS2HcP4LwbE8
Be the change you want to create , Join us this Wednesday! ❤️💙🤍</p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-10">
                                            <div className="rewards-box mt-md-50">
                                            <a  className="main-btn">Join Event <i className="far fa-arrow-right"></i></a>
                                            <div className="delivery-date">
                                                    <span>Fee Participation</span>
                                                    30 Dt
                                                </div>
                                                
                                               
                                                <div className="delivery-date">
                                                    <span>Start Date</span>
                                                     25 Jul 2022
                                                </div>
                                                <div className="delivery-date">
                                                    <span>End Date</span>
                                                     30 Jul 2022
                                                </div>
                                                <ul className="rewards-info">
                                                    <li>
                                                        <i className="far fa-user-circle"></i> 10 Participant
                                                    </li>
                                                    <li>
                                                        <i className="far fa-handshake"></i> 10 Sponsors
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
	<script src="assets/js/bootstrap.min.js"></script>

	<script src="assets/js/jquery.inview.min.js"></script>

	<script src="assets/js/slick.min.js"></script>

	<script src="assets/js/lity.min.js"></script>
	
	<script src="assets/js/wow.min.js"></script>

	<script src="assets/js/main.js"></script>
    <Footer/>
        </div>
    )
}

    export default EventDetails;
