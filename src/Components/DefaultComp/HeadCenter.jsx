import React from 'react'

function HeadCenter(props) {
  return (
            <div className=" mt-4 mb-0.5 pricing-header p-3 pb-md-4 mx-auto text-center">
             <h1 className="display-6 fw-bold">{props.centerheading}</h1>
            </div>
  )
}

export default HeadCenter