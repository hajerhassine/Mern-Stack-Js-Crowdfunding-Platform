import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
// import moment from 'moment';
import LeftSide from "../LeftSide/LeftSide";
import Header from "../Header/Header";
const routeGenerator = require('../shared/routeGenerator');

export default class EditExercise extends Component {
    constructor(props) {
        super(props);

        // this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);

        this.state = {
            
            name: '',
            description: '',
            date: new Date()
            // ,
            // users: []
        }
    }

    componentDidMount() {
        let api_uri = routeGenerator.getURI("events/" + this.props.match.params.id);
        axios.get(api_uri)
            .then(response => {
                this.setState({
                    // username: response.data.username,
                    name: response.data.name,
                    description: response.data.description,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        // api_uri = routeGenerator.getURI("users/");
        // axios.get(api_uri)
        //     .then(response => {
        //         this.setState({ users: response.data.map(user => user.username) });
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

    onChangeName(e) {
        this.setState({
            name: e.target.value
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

        const event = {
            // username: this.state.username,
            name: this.state.name,
            description: this.state.description,
            date: this.state.date,
        };
        
        let api_uri = routeGenerator.getURI('events/update/' + this.props.match.params.id);
        axios.post(api_uri, event)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    deleteEvent(e) {
        e.preventDefault();

        let api_uri = routeGenerator.getURI("events/delete/" + this.props.match.params.id);
        axios.delete(api_uri)
            .then(response => { console.log(response.data) });

        window.location = '/';
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
          <h4>Edit Event</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
          <label>Event Name: </label>
          <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
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
            <tr>
                <td  align ="right">
          <input type="submit" value="Edit" className="btn btn-primary "/>
          </td>

          <td  align ="left">
         
          <input type="reset" value="Delete" className="btn btn-danger ml-1" onClick={this.deleteEvent}/>
          </td>
          </tr>
          {/* <button className="btn btn-danger ml-1" onClick={this.deleteEvent}>Delete Event</button> */}
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