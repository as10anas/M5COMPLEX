import React from 'react'

function AmountDetails(props) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="fw-bold fs-6">{props.ItemName}<span className="badge bg-dark rounded-0">{props.Dis}</span></p>
        <p className="fs-6 fw-bold">{props.Pri}</p>
      </div>
    </>
  )
}

export default AmountDetails