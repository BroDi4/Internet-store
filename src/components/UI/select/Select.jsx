import React from 'react'
import classes from './Select.module.css'

const Select = ({options, value, onChange, ...props}) => {
  return (
    <select 
        {...props}
        value={value}
        onChange={e => onChange(e.target.value)}
    >
        <option disabled value="">По</option>
        {options.map((option) =>
            <option key={option.value} value={option.value}>{option.name}</option>
        )}
    </select>
  )
}

export default Select