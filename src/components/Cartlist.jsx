import React, { useMemo, useState } from 'react'
import Cartitem from './Cartitem'
import Button from './UI/button/Button'
import { Link } from 'react-router-dom'

const Cartlist = ({cart, deleteCart}) => {

  return (
    <div className="cartlist">
        <h1 className='cartlist__tittle'>Корзина</h1>
        <div className="cartlist__order">
            {cart.length !== 0 
            ? cart.map((item) =>
                <Cartitem deleteCart = {deleteCart} key = {item.id} item = {item}/>
            )
            : <div className="cartlist__nothing">
                <span>Корзина пуста</span>
                
              </div>           
            }
        </div>
        {cart.length !== 0
            ? <div className="cartlist__makeorder">
                <Link to='/order'>Оформить заказ</Link>
              </div>
            : <div className='cartlist__nothing-button'><Link to='/'>Вернуться в каталог</Link></div>
        }
        
        
    </div>

    
  )
}

export default Cartlist