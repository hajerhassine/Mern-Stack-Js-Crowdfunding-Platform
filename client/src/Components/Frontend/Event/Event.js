import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import {FacebookShareButton} from "react-share";
import {FacebookIcon} from "react-share";
import {WhatsappIcon} from "react-share"; 
import {WhatsappShareButton} from "react-share";
import ReactPaginate from "react-paginate";

const Events =  (props) => {
const [events, setEvent] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [eventsPerPage] = useState(2);
const event = useSelector(state => state.event.event);

  console.log(event);
  const shareUrl = 'https://www.youtube.com/watch?v=9WzIACv_mxs';
  return (
    <>
    <Header/>
   
    <section className="event-area section-gap-extra-bottom">
    <div className="event-button" >
                                <Link className="nav-link" to={`/stream`}>  <a href="project-details.html" className="main-btn bordered-btn">
                                    Navigate to Streaming <i className="far fa-arrow-right"></i></a></Link>
                          
                                </div>
                                <div className="event-button" >
                                <Link className="nav-link" to={`/SendStreamId`}>  <a href="project-details.html" className="main-btn bordered-btn">
                                    Send Stream Id <i className="far fa-arrow-right"></i></a></Link>
                          
                                </div>
                    <div className="container">
                    {event.map((event ,id)=>(
                        <div className="event-items" key = {id}>
                            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                            <div className="event-thumb">
                                    <img src="assets/img/event/01.jpg" alt="Image"/>
                                </div>
                                
                                <div className="event-content">
                                    <ul className="meta">
                                        <li>
                                            <a href="project-details.html" className="category">{event.category}</a>
                                        </li>
                                       
                                    </ul>
                                    <h4 className="event-title"><a href="#">{event.title}</a></h4>
                                    <p>
                                    {event.description}
                                    </p>
                                </div>
                                
                                <div className="event-button">
                                <Link className="nav-link" to={`/EventsDetails/${event._id}`}>  <a href="project-details.html" className="main-btn bordered-btn">
                                    More Details <i className="far fa-arrow-right"></i></a></Link>
                          
                                </div>
                                <div className="event-button">
                 <FacebookShareButton
          url={shareUrl}
          quote={"heyy join a video streaming noww !!"} hashtag="#React"
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
                 <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
                                </div> 
                                
                            </div>
    
                            
                        </div>
                        ))}
                    </div>
                
                <script src="assets/js/jquery.min.js"></script>
                
                <script src="assets/js/bootstrap.min.js"></script>
                
                <script src="assets/js/jquery.inview.min.js"></script>

                <script src="assets/js/slick.min.js"></script>

                <script src="assets/js/lity.min.js"></script>
                
                <script src="assets/js/wow.min.js"></script>
                
                <script src="assets/js/main.js"></script>
                </section>
                <Footer/>
    </>
  )
}

export default Events