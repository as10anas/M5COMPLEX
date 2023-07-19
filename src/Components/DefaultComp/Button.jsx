import React from 'react'

function Button(props) {
  return (
      <div>
      <button type="button" className="rounded-0 w-75 btn btn-lg btn-dark mt-3">{props.btn}
      </button>
      </div>
  )
}

export default Button