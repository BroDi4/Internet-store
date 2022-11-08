import React from 'react'
import Productlist from '../components/Productlist'

import Searchblock from '../components/Searchblock'
import Filter from '../components/Filter'
const Products = ({filter, setFilter, products, onChange, addCart}) => {
  const filters = [
    {value: '', tittle: 'Все'},
    {value: 'phone', tittle: 'Телефоны'},
    {value: 'laptop', tittle: 'Ноутбуки'},
    {value: 'tablet', tittle: 'Планшеты'}
  ]
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="products__inner">
            <Filter
              onChange={onChange}
              filters = {filters}
            />
            <div className="products__content">
              <Searchblock filter = {filter} setFilter = {setFilter}/>
              {products.length !== 0 
                ? <Productlist addCart = {addCart} products = {products}/>
                : <div className='products__nothing'>Ничего не найдено!</div>
              }
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products