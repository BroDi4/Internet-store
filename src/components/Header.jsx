import React from 'react'
import { Link } from 'react-router-dom'

import cart from '../img/cart-shopping-solid.svg'
import shop from '../img/shop-solid.svg'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">Logo</div>
            <nav className="header__nav">
              <div className="header__link">
                <img src={shop} alt="" />
                <Link to='/'>Catalog</Link>
              </div>
              <div className="header__link">
                <img src={cart} alt="" />
                <Link to='/cart'>Cart</Link>
              </div>
              
            </nav>
          </div>
        </div>
    </header>  
    </>
  )
}

export default Header