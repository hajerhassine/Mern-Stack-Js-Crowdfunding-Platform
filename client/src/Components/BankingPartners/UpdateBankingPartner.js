import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatedBankingPartners } from '../../api'

import { Validation } from '../Forms/BankingPartnerForm/AddBankingPartner/Validations/validation'
function updateBankingPartner(props) {
    const dispatch= useDispatch()


  const formik = useFormik({
    initialValues: {
      bank_name: "",
      // description: "",
    },
    validationSchema: Validation,
    onSubmit: async (values) => {
      // e.preventDefault();
    
    
      dispatch(updatedBankingPartners(props.bankingpartner._id,values))
  
    }
  });
    return (<>
 <div>
               <form onSubmit={formik.handleSubmit }>
              
                <input
                  name="bank_name"
                  type="text"
                  placeholder="Bank Name"
                  value={formik.values.bank_name}
                  onChange={formik.handleChange}
                />
                {/* <input
                  name="description"
                  type="text"
                  placeholder="category Name"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                /> */}


              <button  type="submit" >
                Submit
                </button>

            </form>
        </div>

        </>
    )
}

export default updateBankingPartner