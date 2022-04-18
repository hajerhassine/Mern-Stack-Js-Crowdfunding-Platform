import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import Header from "../Header/Header";
import "./CssCalendar/calendar.css";

import LeftSide from "../LeftSide/LeftSide";

const routeGenerator = require('../shared/routeGenerator');

const Event = props => (
    
    <tr>
        {/* <td>{props.event.username}</td> */}
        <td>{props.event.title}</td>
        <td>{props.event.description}</td>
        <td>{props.event.date}</td>
        <td>{props.event.modality}</td>
        <td>{props.event.category}</td>
        <td>{props.event.sponsors}</td>
        <td>{props.event.participant_number}</td>
        <td>{props.event.fee_participation}</td>
        <td>{props.event.program}</td>
        <td>
           <td><tr><Link to={"/edit/event/" + props.event._id}><button className="btn  btn-sm btn-info ">  edit </button></Link></tr>
           <tr><button className="btn btn-sm btn-danger" onClick={() => { props.deleteEvent(props.event._id) }}>delete</button></tr></td>
            
            
        </td>
    </tr>
)


export default class EventList extends Component {

    constructor(props) {
        super(props);

        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);

        this.state = {
            startDate: new Date(moment().startOf('year')),
            endDate: new Date(moment().endOf('month')),
            events: []
        };
    }

    componentDidMount() {
        let api_uri = routeGenerator.getURI("events");
        axios.get(api_uri)
            .then(response => {
                this.setState({ events: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    onChangeStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    onChangeEndDate(date) {
        this.setState({
            endDate: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const startdate = (moment(this.state.startDate).format('YYYY-MM-DD'));
        const enddate = (moment(this.state.enddate).format('YYYY-MM-DD'));
        let api_uri = routeGenerator.getURI(`events/daterange?startdate=${startdate}&enddate=${enddate}`);
        console.log(api_uri);
        axios.get(api_uri)
        .then(response => {
            console.log(response);
            this.setState({ events: response.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    eventList() {
        return this.state.events.map(currentEvent => {
            return <Event event={currentEvent} deleteEvent={this.deleteEvent} key={currentEvent._id} />;
        })
    }

    deleteEvent(id) {
        let api_uri = routeGenerator.getURI("events/delete/" + id);
        axios.delete(api_uri)
            .then(response => { console.log(response.data) });

        this.setState({
            events: this.state.events.filter(el => el._id !== id)
        })
    }

    render() {
        return (
 <div>
 <Header></Header>
            <LeftSide></LeftSide> 



            <div className="main-content">
        <section className="section">
        {/* <section className="section">
        <div className="form-inline">
                        <h3>Events</h3>
                        <Header></Header>
                        <div className="input-group input-group-sm ml-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text">From</span>
                            </div>
                            <DatePicker
                                className="form-control form-control-sm"
                                selected={this.state.startDate}
                                onChange={this.onChangeStartDate}
                            />
                        </div>

                        <div className="input-group input-group-sm ml-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">To</span>
                            </div>
                            <DatePicker
                                className="form-control form-control-sm"
                                selected={this.state.endDate}
                                onChange={this.onChangeEndDate}
                            />
                        </div>

                        <div className="input-group input-group-sm ml-2">
                            <input type="submit" value="Search" className="btn btn-sm btn-secondary" />
                        </div>
                    </div>
       
         
         
        </section> */}
       
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Events</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                 
                        <div className="input-group-btn">
                        <Link to={"/createevent" }><button className="btn btn-sm btn-success">Add</button></Link>
                        {/* 
                         */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Modality</th>
                            <th>Category</th>
                            <th>Sponsors</th>
                            <th>Participant Number</th>
                            <th>Fee Participation</th>
                            <th>Program</th>
                            <th></th>
                        </tr>
                      </thead>
                     
                       
                      <tbody>
                        {this.eventList()}
                    </tbody>
                     
                      
                      
                  
                 
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </section>
      
      </div>
      
    
  
         

            </div>
        )
    }
}














// /////////
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import axios from 'axios';
// import moment from 'moment';

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import {FacebookShareButton} from "react-share";
// import {FacebookIcon} from "react-share";
// import {WhatsappIcon} from "react-share"; 
// import {WhatsappShareButton} from "react-share";
// import { useDispatch, useSelector } from "react-redux";


// const routeGenerator = require('../shared/routeGenerator');

// const Event = props => (
    
//     <tr>
//         {/* <td>{props.event.username}</td> */}
//         <td>{props.event.title}</td>
//         <td>{props.event.description}</td>
//         <td>{props.event.date}</td>
//         <td>{props.event.modality}</td>
//         <td>{props.event.category}</td>
    
//     </tr>
// )
// const shareUrl = 'https://www.youtube.com/watch?v=9WzIACv_mxs';

// export default class EventList extends Component {
// //     <tbody>
// //     {this.eventList()}
// // </tbody>

// constructor(props) {
//     super(props);

//     this.onChangeStartDate = this.onChangeStartDate.bind(this);
//     this.onChangeEndDate = this.onChangeEndDate.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.deleteEvent = this.deleteEvent.bind(this);

//     this.state = {
//         startDate: new Date(moment().startOf('year')),
//         endDate: new Date(moment().endOf('month')),
//         events: []
//     };
// }

// componentDidMount() {
//     let api_uri = routeGenerator.getURI("events");
//     axios.get(api_uri)
//         .then(response => {
//             this.setState({ events: response.data });
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }


// onChangeStartDate(date) {
//     this.setState({
//         startDate: date
//     });
// }

// onChangeEndDate(date) {
//     this.setState({
//         endDate: date
//     });
// }

// onSubmit(e) {
//     e.preventDefault();
//     const startdate = (moment(this.state.startDate).format('YYYY-MM-DD'));
//     const enddate = (moment(this.state.enddate).format('YYYY-MM-DD'));
//     let api_uri = routeGenerator.getURI(`events/daterange?startdate=${startdate}&enddate=${enddate}`);
//     console.log(api_uri);
//     axios.get(api_uri)
//     .then(response => {
//         console.log(response);
//         this.setState({ events: response.data });
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// }

// eventList() {
//     return this.state.events.map(currentEvent => {
//         return <Event event={currentEvent} deleteEvent={this.deleteEvent} key={currentEvent._id} />;
//     })
// }


// render() {
//     return (
//         <div>
//  <section className="page-title-area">
 
//      <div className="container" >
    
//          <div className="row align-items-center justify-content-between"  >
//          <div className="col-lg-8">
//          <h1 className="page-title" >Events</h1>
//          </div>
//      <div className="col-auto">
//          <ul className="page-breadcrumb">
//              <li><a href="index.html">Home</a></li>
//              <li>Events</li>
//          </ul>
//      </div>
//           </div>
//      </div>
//  </section>
//  <section className="event-area section-gap-extra-bottom">














//          <div className="container">
//              <div className="event-items">
//                  <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
//                      <div className="event-thumb">
//                          <img src="assets/img/event/01.jpg" alt="Image"/>
//                      </div>
//                      <div className="event-content">
//                          <ul className="meta">
//                              <li>
//                                  <a  className="category">Education</a> 
//                              </li>
//                              <li>
//                                  <a  className="date"><i className="fal fa-map-marker-alt"></i>Esprit </a>
//                              </li>
//                          </ul>
//                          <h4 className="event-title"><a href="#">Pegasus Road</a></h4>
//                          <p>
//                          As Chris Grosser once said : "Opportunities Don't Happen. You Create Them”, and as the leaders of a newer 
//                          and improved tomorrow, we are pleased to announce that this Wednesday, March 30th at 10:30 A.M, our Student 
//                          Branch is hosting our 1st Annual Pegasus Road Conference.
//                          </p>
//                      </div>
             
//                      <div className="event-button">
//                          <a href="/EventDetails" className="main-btn bordered-btn">For more details <i className="far fa-arrow-right"></i></a>
//                      </div>   
//       <div className="event-button">
//       <FacebookShareButton
// url={shareUrl}
// quote={"heyy join a video streaming noww !!"} hashtag="#React"
// >
// <FacebookIcon size={40} round={true} />
// </FacebookShareButton>
//       <WhatsappShareButton
// url={shareUrl}
// quote={'Title or jo bhi aapko likhna ho'}
// hashtag={'#portfolio...'}
// >
// <WhatsappIcon size={40} round={true} />
// </WhatsappShareButton>
//                      </div> 
                     
//                  </div>
               
              
                
                
                
//                  <div className="view-more-btn text-center mt-80">
//                      <a  className="main-btn bordered-btn">View More Events <i className="far fa-arrow-right"></i></a>
//                  </div>
//              </div>
//          </div>













      


         
     
//      <script src="assets/js/jquery.min.js"></script>
     
//      <script src="assets/js/bootstrap.min.js"></script>
     
//      <script src="assets/js/jquery.inview.min.js"></script>

//      <script src="assets/js/slick.min.js"></script>

//      <script src="assets/js/lity.min.js"></script>
     
//      <script src="assets/js/wow.min.js"></script>
     
//      <script src="assets/js/main.js"></script>
//      </section>
    
//  <Footer/>










//  </div>
// )
//     }


// }