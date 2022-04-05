import React from "react";
// import { textField, Button, Typoghraphy, Paper } from '@material-ui/core';
import { useFormik } from "formik";
import { Validation } from "./Validations/validation";

import { useDispatch } from 'react-redux';
import { createBankingPartner } from '../../../../redux/slices/bankingpartners'
import LeftSide from "../../../BackOffice/LeftSide/LeftSide";
import Header from "../../../BackOffice/Header/Header";

const Form = () => {


  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      bank_name: "",
      description: "",
    },
    validationSchema: Validation,
    onSubmit: async (values) => {
      // e.preventDefault();
      dispatch(createBankingPartner(values))
  
    }
  });

  return (

    <>

      <section className="section"style={{padding:"15%"}}> 
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="card-header">
                      <h4>Default Validation</h4>
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
                      
                      
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                
              </div>
        
            </div>
          </div>
        </section>
       
    </>
  );
};

export default Form;

