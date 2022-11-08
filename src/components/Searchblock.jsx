import React from 'react'
import Input from './UI/input/Input'
import Select from './UI/select/Select'

const Searchblock = ({filter, setFilter}) => {

  return (
    <div className="products__search-block">
      <Input 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск по товарам"
      />
      <div className="products__select">
        <span>Сортировка:</span>
        <Select 
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'tittle', name: 'по названию'},
            {value: 'cost', name: 'по цене'}
          ]}
        />
      </div>
    </div>
  )
}

export default Searchblock