import React from "react";
// import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { deletBankingPartner } from "../../../redux/slices/bankingpartners";
// import { fa, faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../BackOffice/Header/Header";
import LeftSide from "../../BackOffice/LeftSide/LeftSide";
const BankingPartners = () => {

  const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners);

  console.log(bankingpartners);

  // const handleDelete = (id)=>{
  //   if(window.confirm("are you sure wanted to delete it ?")){
  //     dispatch(deletBankingPartner(id));
      
  //   }

  // }

  return (
    <>
    <section>

        <div className="main-content">
        <section className="section">
       
       
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Our Banking Partners</h4>
                  <div className="card-header-form">
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                    <thead>
                    
                      <tr>
                        
                      <th>Bank Name</th>
          
                      <th>Description</th>
                      
                      <th> Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      {bankingpartners.map((bankingpartners)=>(
              
                <tr >
               
                <td> {bankingpartners.bank_name}</td>
              
                <td> {bankingpartners.description}</td>
                
                <td> 
                {/* <button  className="btn btn-outline-primary" onClick={()=> handleDelete(bankingpartners.id)} >Delete</button> */}
                <button  className="btn btn-sm btn-primary" >Delete</button>
                <button  className="btn btn-sm btn-danger ml-1" >Update</button>
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
          <div className="row">
       
          </div>
        </section>
     
      </div>
      
</section>
     
    </>
  );
};

export default BankingPartners;
