import React from 'react'

function Headings(props) {
  return (
    <div className=" mt-4 mb-4 pricing-header pb-md-4">
      <h1 className="display-6 fw-bold">{props.heading}</h1>
</div>
  )
}

export default Headings