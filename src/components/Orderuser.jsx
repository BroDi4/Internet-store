import React, { useState } from 'react'
import Input from './UI/input/Input'
import Button from './UI/button/Button'
import Select from './UI/select/Select'
import { Link } from 'react-router-dom'

const Orderuser = ({orders, setOrders, cart, setCart}) => {
    const [currentStage, setCurrentStage] = useState(1)

    const [order, setOrder] = useState({
        id: '', goods: '', name: '', 
        lastname: '', middlename: '', cardnumber: '',
        cardholder: '', cardExpMonth: '', cardExpYear: '', cardcvv: '',
        address: ''  
    })

    function nextStep(e) {
        e.preventDefault();
        setCurrentStage(currentStage + 1);
    }

    function prevStep(e) {
        e.preventDefault();
        setCurrentStage(currentStage - 1);
    }


    function makeOrder(e) {
        e.preventDefault();
        setCurrentStage(1);
        setOrders([...orders, {...order, id: Date.now(), goods:cart}]);

        setOrder({id: '', goods: '', name: '', lastname: '', middlename: '', cardnumber: '', 
            cardholder: '', cardExpMonth: '', cardExpYear: '', cardcvv: '',
            address: ''
        })
        setCart([])
    }

  return (

    <div className='main'>
        {currentStage === 1 
            ?
            <form className='orderuser'>
                <Link to='/cart'>Назад</Link>
                <div className="orderuser__maininfo">
                    <h2>Информация о пользователе</h2>
                    <label htmlFor="name">Имя</label>
                    <Input value = {order.name} onChange = {e => setOrder({...order, name: e.target.value})} id = {'name'}/>
                    <label htmlFor="lastname">Фамилия</label>
                    <Input value = {order.lastname} onChange = {e => setOrder({...order, lastname: e.target.value})} id = {'lastname'}/>
                    <label htmlFor="middlename">Отчество</label>
                    <Input value = {order.middlename} onChange = {e => setOrder({...order, middlename: e.target.value})} id = {'middlename'}/>
                    <Button onClick = {nextStep}>Следующий шаг</Button>
                </div>
            </form>
            
            : currentStage === 2 
            ? 
            <form className='orderuser'>
                <Button onClick={prevStep}>Назад</Button>
                <div className="orderuser__maininfo">
                    <h2>Информация о карте</h2>
                    <label htmlFor="cardnumber">Номер карты</label>
                    <Input value = {order.cardnumber} onChange = {e => setOrder({...order, cardnumber: e.target.value})} id = {'cardholder'}/>
                    <label htmlFor="cardholder">Владелец карты</label>
                    <Input value = {order.cardholder} onChange = {e => setOrder({...order, cardholder: e.target.value})} id = {'cardholder'}/>
                    <div className="orderuser__bottom">
                        
                        <div className="orderuser__expiration">
                            <label>Истекает</label>
                            <div className="orderuser__select">
                                <Select id = "month"
                                    onChange={selectedMonth => setOrder({...order, cardExpMonth: selectedMonth})}
                                    options={[
                                        {value: 1, name: '1'},
                                        {value: 2, name: '2'},
                                        {value: 3, name: '4'},
                                        {value: 4, name: '5'},
                                        {value: 6, name: '7'},
                                        {value: 8, name: '8'},
                                        {value: 9, name: '9'},
                                        {value: 10, name: '10'},
                                        {value: 11, name: '11'},
                                        {value: 12, name: '12'},
                                        ]} 
                                    />
                                <Select id = 'year'
                                    onChange={selectedYear => setOrder({...order, cardExpYear: selectedYear})} 
                                    options={[
                                        {value: 2022, name: '2022'},
                                        {value: 2023, name: '2023'},
                                        {value: 2024, name: '2024'},
                                        {value: 2025, name: '2025'},
                                        {value: 2026, name: '2026'},
                                        {value: 2027, name: '2027'},
                                        {value: 2028, name: '2028'},
                                        {value: 2029, name: '2029'},
                                        {value: 2030, name: '2030'},
                                        {value: 2031, name: '2031'},
                                        {value: 2032, name: '2032'},
                                        {value: 2033, name: '2033'},
                                        {value: 2034, name: '2034'},
                                    ]}
                                />
                            </div>
                            
                        </div>
                        <div className="orderuser__cvv">
                            <label htmlFor="cardcvv">CVV</label>
                            <Input value = {order.cardcvv} onChange = {e => setOrder({...order, cardcvv: e.target.value})} id = {'cardcvv'}/>
                        </div>
                    </div>
                    
                    <Button onClick = {nextStep}>Следующий шаг</Button>
                </div>
                
            </form>
            : 
            <form className='orderuser'>
                <Button onClick={prevStep}>Назад</Button>
                <div className="orderuser__maininfo">
                    <h2>Информация о адресе</h2>
                    <label htmlFor='address'>Полный адрес</label>
                    <Input value = {order.address} onChange = {e => setOrder({...order, address: e.target.value})} id = {'address'}/>
                    <Button onClick = {makeOrder}>Оформить заказ</Button>
                </div>
            </form>
        }
        

    </div>
    
  )
}

export default Orderuser