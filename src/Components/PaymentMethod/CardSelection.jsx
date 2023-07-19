import React from 'react'
import PayCard from './PayCard'
import { BsCreditCard2Front } from "react-icons/bs";
import { SiMastercard,SiCashapp } from "react-icons/si";


function CardSelection() {
   
      const Cardicon = <BsCreditCard2Front style={{fontSize:'40px'}} />
      const Cardicon1 = <SiMastercard style={{fontSize:'40px'}} />
      const Cardicon2 = <SiCashapp style={{fontSize:'40px'}} />
      
      

    return (
        <div class="col">
              <PayCard icon={Cardicon1} CardName='MasterCard' />
              <PayCard icon={Cardicon} CardName='Visa' />
              <PayCard icon={Cardicon2} CardName='Interac / Debit card' />
                      
        </div>
  )
}

export default CardSelection