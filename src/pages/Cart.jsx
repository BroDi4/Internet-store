import React from 'react'
import Cartlist from '../components/Cartlist'

const Cart = ({cart, deleteCart}) => {
  return (
    <>
        <div className="cart">
          <div className="container">
            <div className="cart__inner">
              <Cartlist deleteCart = {deleteCart} cart = {cart}/>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Cart