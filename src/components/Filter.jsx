import React from 'react'
import Checkbox from './UI/checkbox/Checkbox'
import Button from './UI/button/Button'

const Filter = ({filters, onChange}) => {


  return (
    <div className="sidebar">
        <h2 className='sidebar__tittle'>Категории товаров</h2>
        {filters.map((filter) =>
          <Button value = {filter.value} key = {filter.value} onClick = {e => onChange(e.target.value)} >{filter.tittle}</Button>
        )}
    </div>
  )
}
 
export default Filter