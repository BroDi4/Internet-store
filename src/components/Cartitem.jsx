import React, { useState } from 'react'
import Button from './UI/button/Button'

const Cartitem = ({item, deleteCart}) => {

  return (
    <div className='cartitem'>
        <div className="cartitem__img">
            <img src={item.img} alt="" />
        </div>
        <div className="cartitem__tittle">
            <h2>Наименование товара</h2>
            <span>{item.tittle}</span>
        </div>
        <div className="cartitem__cost-block">
            <div className="cartitem__cost">
                <h2>Цена:</h2>
                <span>{item.cost}р</span>
            </div>
            <div className="cartitem__btns">
                <Button onClick = {() => deleteCart(item)}>Удалить</Button>
            </div>
            
        </div>
    </div>
  )
}

export default Cartitem