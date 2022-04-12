import React , { useState} from "react";
// import { textField, Button, Typoghraphy, Paper } from '@material-ui/core';
import { useFormik } from "formik";
import { Validation } from "./Validations/validation";

import { useDispatch } from 'react-redux';
import { createBankingPartner } from '../../../../redux/slices/bankingpartners'
import Header from "../../../BackOffice/Header/Header";
import LeftSide from "../../../BackOffice/LeftSide/LeftSide";

const Form = () => {
 


  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      bank_name: "",
      description: "",
      offer:"",
      email:"",
      image:""
    },
    validationSchema: Validation,
    onSubmit: async (values) => {
      // e.preventDefault();
      dispatch(createBankingPartner(values))
      window.location = '/finallist';
  
    }
  });

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
                <form onSubmit={formik.handleSubmit}>
                    <div className="card-header">
                      <h4>New Bank Partner</h4>
                    </div>
                    <div className="card-body">
                    <div className="form-group">
                        <label>Bank Name</label>
                        <input
                  className="my-2"
                  name="bank_name"
                  type="text"
                  placeholder="Bank Name"
                  value={formik.values.bank_name}
                  onChange={formik.handleChange}
                />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <input
                  className="my-2"
                  name="description"
                  type="text"
                  placeholder="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                      </div>
                      <div className="form-group">
                        <label>Offer</label>
                        <input
                  className="my-2"
                  name="offer"
                  type="text"
                  placeholder="Bank Name"
                  value={formik.values.offer}
                  onChange={formik.handleChange}
                />
                      </div>
                     
                      <div className="form-group">
                        <label>Email</label>
                        <input
                  className="my-2"
                  name="email"
                  type="text"
                  placeholder="Bank Name"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input
                  className="my-2"
                  name="image"
                  type="text"
                  placeholder="Bank Name"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                />
                
                      </div>
                      
                      
                    </div>
                    <div className="card-footer text-right">
                      <input type="submit" value="Add New Partner" className="btn btn-primary"/>
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
  );
};

export default Form;

