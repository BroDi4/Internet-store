import React, { useMemo, useState } from 'react';
import './styles/app.css'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Order from './pages/Order';
import Products from './pages/Products';
import Layout from './components/Layout';

import xiaomi11s from './img/products/xiaominote11s.jpg'
import xiaomi10 from './img/products/xiaominote10.jpg'
import irbis from './img/products/irbis.jpg'
import tablet from './img/products/tabletwebp.webp'

function App() {
  const [products, setProducts] = useState([
    {id: 1, tittle: 'Xiaomi Redmi Note 11S 128 ГБ серый [8x(2.05 ГГц), 6 Гб, 2 SIM, AMOLED, 2400x1080, камера 108+8+2+2 Мп, NFC, 4G, GPS, 5000 мА*ч]', cost: 22999, img: xiaomi11s, type: 'phone'},
    {id: 2, tittle: 'Xiaomi Redmi Note 10 Pro 128 ГБ фиолетовый [8x(2.3 ГГц, 1.8 ГГц), 8 Гб, 2 SIM, AMOLED, 2400x1080, камера 108+8+5+2 Мп, NFC, 4G, GPS, 5020 мА*ч]', cost: 23999, img: xiaomi10, type: 'phone'},
    {id: 3, tittle: 'Irbis NB77 черный [HD (1366x768), TN+film, Intel Atom Z3735F, ядра: 4 х 1.33 ГГц, RAM 2 ГБ, eMMC 32 ГБ, Intel HD Graphics , Windows 10 Home Single Language]', cost: 19000, img: irbis, type: 'laptop'},
    {id: 4, tittle: 'Samsung Galaxy Tab S6 Lite 2022 128 ГБ голубой [2000x1200, TFT PLS, 8x2.3 ГГц, 1.8 ГГц, 4 ГБ, BT, GPS, 7040 мА*ч, Android 12.x]', cost: 32999, img: tablet, type: 'tablet'},
    {id: 5, tittle: 'HUAWEI MatePad 11 256 ГБ зеленый [2560x1600, IPS, 8x2.84 ГГц, 2.4 ГГц, 1.8 ГГц, 6 ГБ, BT, GPS, 7250 мА*ч, HarmonyOS 2]', cost: 34000, img: tablet, type: 'tablet'},
    {id: 6, tittle: 'Lenovo Yoga Tab 11 256 ГБ 3G, LTE серый [2000x1200, IPS, 8x2.05 ГГц, 8 ГБ, BT, GPS, 7700 мА*ч, Android 11.x]', cost: 45000, img: tablet, type: 'tablet'}

  ]);

  const [orders, setOrders] = useState([])

  const [filter, setFilter] = useState({sort: 'tittle', query: '', types: ''})

  const [cart, setCart] = useState([])


 
  const sortedProducts = useMemo(() => {
    if (filter.sort !== 'cost') {
      return [...products].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return [...products].sort((a, b) => a[filter.sort] - b[filter.sort])
    }
  }, [filter.sort, products]);

  const sortedAndSearchedProducts = useMemo(() => {
    return sortedProducts.filter((product) => product.tittle.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedProducts])

  const filtredProducts = useMemo(() => {
    if (filter.types !== '') {
      return sortedAndSearchedProducts.filter((product) => product.type === filter.types)
    } else {
      return sortedAndSearchedProducts
    }
    
  }, [filter.types, sortedAndSearchedProducts])

  function setTypes(type) {
    setFilter({...filter, types: type})
  }

  function addCart(product) {
    setCart([...cart, {...product, buyid: Date.now()}])
  }

  function deleteCart(product) {
    setCart(cart.filter((cartitem) => cartitem.buyid !== product.buyid))
  }


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element=
          {<Products
            addCart = {addCart}
            onChange = {setTypes}
            filter = {filter}
            setFilter = {setFilter}
            products = {filtredProducts}/>
          }/>
          <Route path='/cart' element=
          {<Cart 
            deleteCart = {deleteCart}
            cart = {cart}
          />} />
          <Route path='/order' element=
          {<Order
            orders = {orders}
            setOrders = {setOrders} 
            cart = {cart}
            setCart = {setCart}
          />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
