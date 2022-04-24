import React, { Component, useState } from 'react'
// import Footer from '../Footer/Footer'
// import HeaderCreator from '../Header/HeaderCreator'
import { saveAs } from 'file-saver';
import axios from 'axios'

class Request extends Component {
    state = {
        subject: '',
        firstname: '',
        lastname: '',
        phone: '',
      }
    
 handleChange = ({ target: { value, subject }}) => this.setState({ [subject]: value })
    
 createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('fetch-document', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }
    

   
   


  render(){
  return (
   <>
  
   <div class="container">
   <div className="contact-from-area">
                <div className="row no-gutters">
                    <div className="col-lg-7">
                        <div className="contact-form">
                            <form  >
                                <h3 className="form-title">Send Us Message</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="name">Your Name</label>
                                            <input type="text" placeholder="Name" name="firstname" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="phone-number">Phone Number</label>
                                            <input type="text" placeholder="Willie M. Stanley"  name = "phone"/>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="email">Name</label>
                                            <input type="text" placeholder="Name" name="lastname" onChange={this.handleChange}/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="subject">Subject</label>
                                            <input type="text" placeholder="Name" name="subject" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-field mb-25">
                                            <label for="subject">Subject</label>
                                            <input type="text" placeholder="Name" name="phone" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        <div className="form-field mb-30">
                                            <label for="message">Write Message</label>
                                            <textarea name="message" placeholder="name"
                                             value={message}
                                             onChange={e => setMessage(e.target.value)}></textarea>
                                        </div>
                                    </div> */}
                                    <div className="col-12">
                                        <div className="form-field">
                                            <button className="main-btn" onClick={this.createAndDownloadPdf}>Download PDF <i className="far fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                  </div>  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
            <div class="container">    
            </div>
           
   </>
  );
                                }
}

export default Request