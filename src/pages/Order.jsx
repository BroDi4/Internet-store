import React, { useState } from 'react'
import Orderuser from '../components/Orderuser'

const Order = ({orders, setOrders, cart, setCart}) => {

  return (
    <>
        <div className='order'>
          <div className="container">
            <div className="order__inner">
              <Orderuser orders = {orders} setOrders = {setOrders} cart = {cart} setCart = {setCart}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Order