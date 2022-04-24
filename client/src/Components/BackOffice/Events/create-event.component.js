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
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        // this.onChangeModality = this.onChangeModality.bind(this);
        // this.onChangeCategory = this.onChangeCategory.bind(this);
        // this.onChangeSponsors = this.onChangeSponsors.bind(this);
        // this.onChangeParticipant_Number = this.onChangeParticipant_Number.bind(this);
        // this.onChangeFee_Participation = this.onChangeFee_Participation.bind(this);
        // this.onChangeProgram = this.onChangeProgram.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // username: '',
            title: '',
            // description: '',
            date: new Date(),
            // modality: '',
            // category: '', 
            // sponsors: '',
            // participant_number: '',
            // fee_participation:'',
            // program:'',
            // ,,
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
        
      
    }

  

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

  //   onChangeDescription(e) {
  //       this.setState({
  //           description: e.target.value
  //       });
  //   }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
  //   onChangeModality(e) {
  //     this.setState({
  //         modality: e.target.value
  //     });
  // }
//   onChangeCategory(e) {
//     this.setState({
//         category: e.target.value
//     });
// }
// onChangeSponsors(e) {
//   this.setState({
//       sponsors: e.target.value
//   });
// }
// onChangeParticipant_Number(e) {
//   this.setState({
//       participant_number: e.target.value
//   });
// }
// onChangeFee_Participation(e) {
//   this.setState({
//       fee_participation: e.target.value
//   });
// }
// onChangeProgram(e) {
//   this.setState({
//       program: e.target.value
//   });
// }

    onSubmit(e) {
        e.preventDefault();
        
        const newEvent = {
            // username: this.state.username,
            title: this.state.title,
            // description: this.state.description,
            date: this.state.date,
            // modality: this.state.modality,
            // category: this.state.category,
            // sponsors: this.state.sponsors,
            // participant_number: this.state.participant_number,
            // fee_participation: this.state.fee_participation,
            // program: this.state.program
        };

        let api_uri = routeGenerator.getURI("events/add");
        axios.post(api_uri, newEvent).then(res => console.log(res.data));

        window.location = '/listevent';
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
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle} placeholder='Enter a title'
                        />
                      </div>
                      {/* <div className="form-group">
                      <label>Description: </label>
                      <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} placeholder='Enter a description'
                        />
                      </div> */}
                      <div className="form-group">
                      <label>Date: </label>
                     
                            <DatePicker
                                className="form-control"
                                required
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                showTimeSelect
                                dateFormat="Pp" placeholder='Enter the date of the event'
                            />
                        
                      </div>
{/*                      
                      <div className="form-group">
                      <label>Modality: </label>
               
                          <select className="custom-select form-select-sm"   aria-label=".form-select-sm example"value={this.state.modality}
                            onChange={this.onChangeModality}  required> 
                            <option value="" > </option>
                            <option value="presential"> Presential</option>
                            <option value="online"> Online</option>
                          

                          </select>
                     
                     
                      </div> */}
                      {/* <div className="form-group">
                      <label>Category: </label>
                
                          <select className="custom-select form-select-sm"   aria-label=".form-select-sm example"value={this.state.category}
                            onChange={this.onChangeCategory} placeholder='choose the category' required>  
                            <option value=""> </option>
                            <option value="Education"> Education</option>
                            <option value="Commercial"> Commercial</option>
                            <option value="Art"> Art</option>
                            <option value="Technlogy"> Technlogy</option>
                            <option value=" Health"> Health</option>
                            <option value="Design"> Design</option>
                            <option value="Agriculture"> Agriculture</option>
                            <option value="Liberal"> Liberal</option>
                            
                            
                          

                          </select>
                     
                     
                      </div>
                      <div className="form-group">
                      <label>Sponsors: </label>
                      <input type="text"
                           
                            className="form-control"
                            value={this.state.sponsors}
                            onChange={this.onChangeSponsors} placeholder='Enter list of sponsors' required
                        />
                      </div>
                      <div className="form-group">
                      <label>Participant Number: </label>
                      <input type="text"
                            required
                            className="form-control"
                            value={this.state.participant_number}
                            onChange={this.onChangeParticipant_Number} placeholder='Enter the participant number'
                        />
                      </div>
                      <div className="form-group">
                      <label>Fee Participation: </label>
                      <input type="text"
                        
                            className="form-control"
                            required
                            value={this.state.fee_participation}
                            onChange={this.onChangeFee_Participation} placeholder='Enter the fee participation'
                        />
                      </div>
                      <div className="form-group">
                      <label>Program: </label>
                      <textarea 
                           
                            className="form-control"
                            required
                            value={this.state.program}
                            onChange={this.onChangeProgram} placeholder='Enter the program'
                        />
                      </div> */}
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