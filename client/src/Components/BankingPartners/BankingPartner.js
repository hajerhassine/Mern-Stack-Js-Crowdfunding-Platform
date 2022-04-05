import * as api from "../../api/index";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Validation } from '../Forms/BankingPartnerForm/AddBankingPartner/Validations/validation'
import {updateBankingPartners,editBankingPartner} from '../../redux/slices/bankingpartners'
import {deletBankingPartner,selectBankingPartner,deselectBankingPartner} from '../../redux/slices/bankingpartners'
import { useFormik } from 'formik'
import './style.css';



function BankingPartner(props) {
    const dispatch= useDispatch()
const [update, setUpdate] = useState(false)
const [bank_name, setBankName] = useState(props.bankingpartner.bank_name);

  const formik = useFormik({
    initialValues: {
      bank_name: "",
    },
    validationSchema: Validation,
    onSubmit: async (values) => {
      // e.preventDefault();
          setUpdate(false)
      try {
    const  data = await api.updateBankingPartners(props.bankingpartner._id, values);

const datas = {"_id": props.bankingpartner._id, ...data.data}
console.log(datas)
setBankName(datas.bank_name)
    dispatch(editBankingPartner(datas));
  } catch (error) {
    console.log(error.response);
  }
    }
  });
 
const handle=()=>{
setUpdate(!update)
}
    return (<>

        {update===true || <div><div className="kl"  >
            <div onClick={()=>{  handle()}}>{bank_name}</div>
                <button className="btn btn-danger" onClick={()=>{  dispatch(deletBankingPartner(props.bankingpartner._id))}}>delete</button>
                </div>
        </div>}
          {update===false || <div>
               <form onSubmit={formik.handleSubmit }>
              
                <input
                  name="categoryName"
                  type="text"
                  placeholder="category Name"
                  value={formik.values.bank_name}
                  onChange={formik.handleChange}
                />

              <button  type="submit" >
                Submit
                </button>

            </form>
        </div>}

        </>
    )
}

export default BankingPartner