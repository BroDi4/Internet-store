import React from 'react'

const Checkbox = ({filter, ...props}) => {
  return (
    <div className="checkbox__body">
        <input {...props} type="checkbox" value={filter.value}/>
        <label>{filter.tittle}</label>
    </div> 
  )
}

export default Checkbox