import React, { useState } from 'react'
import ChangeQuantity from './ChangeQuantity'

export default function CookieForm(props){    
    const [cookieOrder, setCookieOrder] = useState({ 
            type: 'cookies',
            quantity: 0,
            cookieFlavor: '',
            theme: '',   
            cost: 0
    })

    const submitOrder = (e) => {
        e.preventDefault()
        props.updateOrder(cookieOrder)
    }
    
    const changeQuantity = e => {
        e.preventDefault()
        let quantity

        if(e.target.id === 'plus'){ 
            quantity = cookieOrder.quantity + 0.5

            return setCookieOrder({...cookieOrder, quantity})
        }

        if(e.target.id === 'minus'){ 
            if(cookieOrder.quantity === 0){
                return null
            }
            quantity = cookieOrder.quantity - 0.5

            return setCookieOrder({...cookieOrder, quantity})
        }
    }
    
    const updateOrder = e => {
        e.preventDefault();
        const {id, value} = e.target
       return setCookieOrder({...cookieOrder, [id]: value})
    }
    
    return(
     <form onSubmit={e => submitOrder(e)} className='cookie-order-form'>
         <legend>Cookie</legend>
        
        <ChangeQuantity changeQuantity={changeQuantity} quantity={cookieOrder.quantity}/>

         <label htmlFor='cookieFlavor'>Cookie Flavor</label>
         <input type='text' id='cookieFlavor'onChange={e => updateOrder(e)}/>
    
         <legend>Design</legend>
            
         <label htmlFor='theme'>Theme</label>
         <select id='theme' onChange={e => updateOrder(e)}>
             <option value="">--Please choose an option--</option>
             <option value='kid-birthday-theme'>Kids Birthday</option>
             <option value='adult-birthday-theme'>Adult Birdthday</option>
             <option value='wedding-theme'>Wedding</option>
             <option value='bachelor-theme'>Bachelor/Bachelorette</option>
             <option value='baby-shower-theme'>Baby Shower</option>
             <option value='other-theme'>other</option>
         </select>
    
         <label htmlFor='notes'>Notes</label>
         <textarea name='notes' id='notes' form='cookie-order-form' className='text-box' onChange={e => updateOrder(e)}></textarea>
    
         <input type='submit' id='cake-order-form' className='submit'/>
     </form>
    
    )
}
