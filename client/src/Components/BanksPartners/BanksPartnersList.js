import * as api from "../../api/index";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Header from "../BackOffice/Header/Header";
import {updateBankingPartners,editBankingPartner} from '../../redux/slices/bankingpartners'
import {deletBankingPartner,selectBankingPartner,deselectBankingPartner} from '../../redux/slices/bankingpartners'
import { useFormik } from 'formik'
import LeftSide from "../BackOffice/LeftSide/LeftSide";

const BanksPartnersList = (props) => {
    const dispatch= useDispatch()

    const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners);
   
    
      
 


  return (
   <>
   <div>
            <Header></Header>
            <LeftSide></LeftSide> 



            <div className="main-content">
        <section className="section">

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Events</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                 
                        <div className="input-group-btn">
                         <Link className="nav-link" to={"/addbank"} ><button className="btn btn-sm btn-primary">Add</button></Link> 
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
                          <th>Bank Name </th>
                          <th>Description</th>
                          <th>Offers</th>
                          <th>Email</th>
                          <th>Image</th>
                          <th>Action</th>
                            <th></th>
                        </tr>
                      </thead>
                     
                       
                      <tbody>
                      {bankingpartners.map((bankingpartners)=>(
                            <tr>
                                <td>{bankingpartners.bank_name}</td>
                                <td>{bankingpartners.description}</td>
                                <td>{bankingpartners.offer}</td>
                                <td>{bankingpartners.email}</td>
                                <td>{bankingpartners.image}</td>
                                <td>
                                 <button className="btn btn-sm btn-primary">edit</button>
          
                                 <button className="btn btn-sm btn-danger ml-1" onClick={()=>{  dispatch(deletBankingPartner(props.bankingpartner._id))}}>delete</button>
                                 </td>
                            </tr>
                        ))}
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
   </>
  )
}

export default BanksPartnersList