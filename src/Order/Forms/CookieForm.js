import React, { useState, useContext } from 'react'
import ChangeQuantity from '../ChangeQuantity'
import DATA from '../../DATA'
import {Link} from 'react-router-dom'
import OrderContext from '../../Context/OrderContext'

export default function CookieForm(props){ 

    const context = useContext(OrderContext)  

    const [cookieOrder, setCookieOrder] = useState({ 
            type: 'cookies',
            quantity: 0,
            cookieFlavor: '',
            theme: '',   
            cost: 0
    })

    const submitOrder = (e) => {
        e.preventDefault()
        return context.updateOrder(cookieOrder)
    }
    
    const changeQuantity = e => {
        e.preventDefault()
        let quantity
        let cost

        if(e.target.id === 'plus'){ 
            quantity = cookieOrder.quantity + 0.5
        }

        if(e.target.id === 'minus'){ 
            if(cookieOrder.quantity === 0){
                return null
            }
            quantity = cookieOrder.quantity - 0.5
        }

        cost = quantity * 10
        return setCookieOrder({...cookieOrder, quantity, cost})

    }
    
    const updateOrder = e => {
        e.preventDefault();
        const {id, value} = e.target
       return setCookieOrder({...cookieOrder, [id]: value})
    }
    
    console.log(context)
   return(
     <form onSubmit={e => submitOrder(e)} className='cookie-order-form'>
        <Link to='/order'>Back</Link>

         <legend>Cookie</legend>
        
        <ChangeQuantity changeQuantity={changeQuantity} quantity={cookieOrder.quantity}/>

         <label htmlFor='cookieFlavor'>Cookie Flavor</label>
         <input type='text' id='cookieFlavor'onChange={e => updateOrder(e)}/>
    
         <legend>Design</legend>
            
         <label htmlFor='theme'>Theme</label>
         <select id='theme' onChange={e => updateOrder(e)}>
            {DATA.themes.map((x, i) => <option value={x.key}>{x.name}</option>)}
         </select>
    
         <label htmlFor='notes'>Notes</label>
         <textarea name='notes' id='notes' form='cookie-order-form' className='text-box' onChange={e => updateOrder(e)}></textarea>
    
         <input type='submit' id='cake-order-form' className='submit'/>
     </form>
    
    )
}
