import React from 'react'
import Productitem from './Productitem'
const Productlist = ({addCart, products}) => {
  return (
    <>
      <div className="productlist">
        {products.map((product) =>
          <Productitem addCart = {addCart} key = {product.id} product = {product} />
        )}
      </div>
    </>
  )
}

export default Productlist