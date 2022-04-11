import React from 'react'
import { useSelector } from 'react-redux'
import BankingPartner from './BankingPartner'
import AddBankingPartner from '../Forms/BankingPartnerForm/AddBankingPartner/AddBankingPartnerForm'
import Header from '../BackOffice/Header/Header'
import LeftSide from '../BackOffice/LeftSide/LeftSide'
import './style.css';
function BankingPartners() {
      const bankingpartners = useSelector((state) => state.bankingpartners.bankingpartners)

    return (
        <>
        <Header/>
        <LeftSide></LeftSide>
        <div >
            
        
            <section className='banks'>
               
                
            <AddBankingPartner/>
            
            {bankingpartners.map((bankingpartner,index)=>{
                return<BankingPartner key={index} bankingpartner={bankingpartner} ></BankingPartner>
            })}
            </section>
           
        </div>
        </>
    )
}

export default  BankingPartners;
