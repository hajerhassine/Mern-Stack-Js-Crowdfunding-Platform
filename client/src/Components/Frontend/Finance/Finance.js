
import React, { Component  ,  useState, useEffect  } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./finance.css";

const Finance = () => {
    const [LoanData , setLoanData]= useState({
        FirstName:'', LastName : '' , PhoneNumber:'', EmailAdress:'', LoanType:'' , Amount:'', RepayementDeadline:''
    });
    const handleSubmit = () => {

    }



        return(
        <>
          <Header/>
           
                        {/* <!-- Contact Info End --> */}
                        <div className="contact-from-area">
                            <div className="row no-gutters">   
                                <div className="col-lg-7">
                                    <div className="loan-form">
                                        <form onSubmit={handleSubmit}>
                                            <h3 className="form-title">Loan request</h3>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                    <label for="name">First Name</label>
                                                        <input
                                                            class="my-2"
                                                            name="FirstName"
                                                            type="text"
                                                            placeholder="Enter your first name"
                                                            value={LoanData.FirstName}
                                                            onChange={(e)=> setLoanData({ ...LoanData , FirstName: e.target.value})}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="name">Last Name</label>
                                                        <input
                                                            class="my-2"
                                                            name="LastName"
                                                            type="text"
                                                            placeholder="Enter your last name"
                                                            value={LoanData.LastName}
                                                            onChange={(e)=> setLoanData({ ...LoanData , LastName: e.target.value})}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="phone-number">Phone Number</label>
                                                        <input
                                                            class="my-2"
                                                            name="PhoneNumber"
                                                            type="text"
                                                            placeholder="Enter your phone number"
                                                            value={LoanData.PhoneNumber}
                                                            onChange={(e)=> setLoanData({ ...LoanData , PhoneNumber: e.target.value})}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="email">Email Address</label>
                                                        <input
                                                            class="my-2"
                                                            name="EmailAdress"
                                                            type="text"
                                                            placeholder="Enter your email adress"
                                                            value={LoanData.EmailAdress}
                                                            onChange={(e)=> setLoanData({ ...LoanData , EmailAdress: e.target.value})}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="subject">Loan type</label>
                                                        <input
                                                            class="my-2"
                                                            name="LoanType"
                                                            type="text"
                                                            placeholder="Enter your loan's type "
                                                            value={LoanData.LoanType}
                                                            onChange={(e)=> setLoanData({ ...LoanData , LoanType: e.target.value})}
                                                            />
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="subject">Amount</label>
                                                        <input
                                                            class="my-2"
                                                            name="Amount"
                                                            type="text"
                                                            placeholder="Enter your amount"
                                                            value={LoanData.Amount}
                                                            onChange={(e)=> setLoanData({ ...LoanData , Amount: e.target.value})}
                                                            />
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label for="subject">Repayement deadline </label>
                                                        <input
                                                            class="my-2"
                                                            name="RepayementDeadline"
                                                            type="text"
                                                            placeholder="Enter your repayment deadline"
                                                            value={LoanData.RepayementDeadline}
                                                            onChange={(e)=> setLoanData({ ...LoanData , RepayementDeadline: e.target.value})}
                                                            />
                                                    </div>
                                                    
                                                </div>
                                               
                                                <div className="col-12">
                                                    <div className="form-field">
                                                        <button className="main-btn"> Submit <i className="far fa-arrow-right"></i></button>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                <Footer/>
    </>
    )
}

export default Finance;
