import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from "../Header/Header";

import LeftSide from "../LeftSide/LeftSide";
const routeGenerator = require('../shared/routeGenerator');

export default class CreateEvent extends Component {

    constructor(props) {
        super(props);

        // this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // username: '',
            title: '',
            description: '',
            date: new Date()
            // ,
            // users: []
        }
    }

    componentDidMount() {
        // var urlParams = new URLSearchParams(window.location.search);
        // console.log(urlParams.get('date'));
        let eventDate = new URLSearchParams(window.location.search).get('date');
        // if (localStorage && localStorage.getItem('eventDate')) {
        //     eventDate = JSON.parse(localStorage.getItem('eventDate'));
        // }
        this.setState({ date: new Date(eventDate) });
        
        // let api_uri = routeGenerator.getURI("users");
        // axios.get(api_uri)
        //     .then(response => {
        //         if (response.data.length > 0) {
        //             this.setState({
        //                 users: response.data.map(user => user.username),
        //                 username: response.data[0].username
        //             })
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }

    // onChangeUsername(e) {
    //     this.setState({
    //         username: e.target.value
    //     });
    // }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        const newEvent = {
            // username: this.state.username,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
        };

        let api_uri = routeGenerator.getURI("events/add");
        axios.post(api_uri, newEvent).then(res => console.log(res.data));

        //window.location = '/';
    }

    render() {
        return (

<div>

            <Header></Header>
            <LeftSide></LeftSide>
            <div>
     <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                <form onSubmit={this.onSubmit}>
                    <div className="card-header">
                      <h4>Create New Event</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                      <label>Title: </label>
                      <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                      </div>
                      <div className="form-group">
                      <label>Description: </label>
                      <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                      </div>
                      <div className="form-group">
                      <label>Date: </label>
                      <div>
                            <DatePicker
                                className="form-control"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                showTimeSelect
                                dateFormat="Pp"
                            />
                        </div>
                      </div>
                     
                    </div>
                    <div className="card-footer text-right">
                      <input type="submit" value="Create Event" className="btn btn-primary"/>
                    </div>
                  </form>
                </div>
                
              </div>
        
            </div>
          </div>
        </section>
        
      </div>
      </div>
      </div>
        )
    }
}