import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import Header from "../Header/Header";

import LeftSide from "../LeftSide/LeftSide";

const routeGenerator = require('../shared/routeGenerator');

const Event = props => (
    
    <tr>
        {/* <td>{props.event.username}</td> */}
        <td>{props.event.title}</td>
        <td>{props.event.description}</td>
        <td>{props.event.date}</td>
        <td>
            <Link to={"/edit/event/" + props.event._id}><button className="btn btn-sm btn-primary">edit</button></Link>
            <button className="btn btn-sm btn-danger ml-1" onClick={() => { props.deleteEvent(props.event._id) }}>delete</button>
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
                        <input type="text" className="form-control" placeholder="Search"/>
                        <div className="input-group-btn">
                          <button className="btn btn-primary"><i className="fas fa-search"></i></button>
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
          <div className="row">
       
          </div>
        </section>
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle"> <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
            
          
             
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label className="m-b-0">
                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                      id="mini_sidebar_setting"/>
                    <span className="custom-switch-indicator"></span>
                    <span className="control-label p-l-10">Mini Sidebar</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label className="m-b-0">
                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                      id="sticky_header_setting"/>
                    <span className="custom-switch-indicator"></span>
                    <span className="control-label p-l-10">Sticky Header</span>
                  </label>
                </div>
              </div>
              <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a href="#" className="btn btn-icon icon-left btn-primary btn-restore-theme">
                  <i className="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
  
         

            </div>
        )
    }
}