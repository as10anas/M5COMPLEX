import React from 'react'
import {Link} from 'react-router-dom'
function PayCard(props) {
  return (
         <Link className="text-decoration-none text-dark mb-3 border border-2 border-dark ps-3 pb-2 pt-2 d-flex align-items-start" to="/detail">
            <div className=" flex-shrink-0">
                {props.icon}
            </div>
            <div className='ms-3'>
              <h2 className='fs-3 fw-bold'>{props.CardName}</h2>
            </div>
         </Link>    
  )
}

export default PayCard