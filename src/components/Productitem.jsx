import React from 'react'
import Button from './UI/button/Button'
import favorite from '../img/favorite.svg'
import cart from '../img/cart-shopping-solid.svg'

const Productitem = ({addCart, product}) => {

function addNewCart() {
    addCart(product)
}  

  return (
    <>
    <div className="productitem">
        <div className="productitem__column">
            <div className="productitem__block">
                <div className="productitem__inner">
                    <div className="productitem__img">
                        <img src={product.img} alt="" />
                    </div>

                    <div className="productitem__content">
                        <div className="productitem__tittle">{product.tittle}</div>
                        <div className="productitem__cost-block">
                            <div className="productitem__cost">{product.cost}р</div>
                            <div className="productitem__btns">
                                <Button disabled>
                                    <img src={favorite} alt="" />
                                </Button>
                                <Button onClick = {addNewCart}>
                                    <img src={cart} alt="" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        
    </>
  )
}

export default Productitem