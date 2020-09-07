import React, {useState} from 'react'
import UserInfoForm from './UserInfoForm';
import CakeForm from './CakeForm'
import CookieForm from './CookieForm'
import ShoppingCart from './ShoppingCart'
import './orderPage.css'

export default function Order(){
    const [selected, setSelected] = useState('cake')
    const [order, setOrder] = useState({})
    const changeSelected = e => {
        e.preventDefault();
        return setSelected(e.target.value)
    }
    
    const updateOrder = (update) => {
        let orderId = Math.floor(Math.random() * 100)
        return setOrder({...order, [orderId]: update})
    }
    
    return(
    <>
    <header>
        <h1>Order</h1>
         <select value={selected} onChange={e => changeSelected(e)}>
            <option value='cake'>Cake</option>
            <option value='cookies'>Cookies</option>
            <option value='cupcakes'>Cupcakes</option>
            <option value='other'>Other</option>
         </select>
    </header>
    <div className='order-form'>
        {selected === 'cake' && <CakeForm type={selected} updateOrder={updateOrder}/>}
        {selected ==='cupcakes' && <CakeForm type={selected} updateOrder={updateOrder}/>}
        {selected === 'cookies' && <CookieForm updateOrder={updateOrder}/>}

        {/* <UserInfoForm setFormFilled={setFormFilled}/> */}
        <ShoppingCart order={order}/>
    </div>

    </>
    )
}
    