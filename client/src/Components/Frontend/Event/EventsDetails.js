import React , { useState, useEffect }from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useDispatch, useSelector } from "react-redux";

const EventsDetails = (props) => {
  const eventId = window.location.pathname.split("/EventsDetails/")[1];
  console.log(
    "window.location.pathname id : " +
      window.location.pathname.split("/EventsDetails/")[1]
  );
  console.log("props.match.params.value: " + props.match.params.value);

  const event = useSelector(
    state =>
      state.event.event[
        state.event.event.findIndex(event => event._id === eventId+"")
      ]
  );

  console.log("prod" + JSON.stringify(event));
  console.log("props.location.event._id" + JSON.stringify(props.location.event?._id));






  return (
    
    <>
   <Header></Header>
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
                                                <h4 className="description-title">{event.title}</h4>
                                                <p>
                                               {event.description}
                                                </p>
                                                <img className="mt-50 mb-50" src="assets/img/event/01.jpg" alt="Image"/>
                                                <h4 className="description-title">Program</h4>
              <p>
                {event.program}
              </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-10">
                                            <div className="rewards-box mt-md-50">
                                            <a  className="main-btn">Join Event <i className="far fa-arrow-right"></i></a>
                                            <div className="delivery-date">
                                                    <span>Fee Participation</span>
                                                    30 Dt
                                                    {/* {event.fee_participation} */}
                                                </div>
                                                
                                               
                                                <div className="delivery-date">
                                                    <span>Date</span>
                                                     25 Jul 2022  
                                                     {/* {event.date} */}
                                                </div>
                                                
                                                <ul className="rewards-info">
                                                    <li>
                                                        <i className="far fa-user-circle"></i> 10 Participant
                                                        {/* {event.participant_number} */}
                                                    </li>
                                                    <li>
                                                        <i className="far fa-handshake"></i> 10 sponsors
                                                         {/* {event.sponsors} */}
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
    
    </>
  
  )
}

export default EventsDetails