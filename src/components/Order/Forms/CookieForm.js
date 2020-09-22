import React, { useContext } from 'react'
import ChangeQuantity from '../ChangeQuantity'
import DATA from '../../../services/DATA'
import {Link} from 'react-router-dom'
import FormContext from '../../../context/FormContext'
import ConfirmSubmit from '../ConfirmSubmit'

export default function CookieForm(){ 
    const context = useContext(FormContext)
    
    const confirmSubmit = e => {
        e.preventDefault()
        return context.changeModal()
    }
    
   return(
    <>
    {context.modal &&  <ConfirmSubmit />}
     <form onSubmit={e => confirmSubmit(e)} className='order-form'>
        <Link onClick={() => context.clearOrder()} to='/order'>Back</Link>

         <legend>Cookie</legend>
        
        <ChangeQuantity />

         <label htmlFor='cookieFlavor'>Cookie Flavor</label>
         <input type='text' id='cookieFlavor'onChange={e => context.updateItemSpecs(e)}/>
    
         <legend>Design</legend>
            
         <label htmlFor='theme'>Theme</label>
         <select id='theme' onChange={e => context.updateItem(e)}>
            {DATA.themes.map((x, i) => <option value={x.key}>{x.name}</option>)}
         </select>
    
         <label htmlFor='notes'>Notes</label>
         <textarea name='notes' id='notes' form='cookie-order-form' className='text-box' onChange={e => context.updateItem(e)}></textarea>
    
         <input type='submit' id='cake-order-form' className='submit'/>
     </form>
    </>
    
    )
}
