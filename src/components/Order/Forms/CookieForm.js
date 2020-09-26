import React, { useContext } from 'react'
import ChangeQuantity from '../ChangeQuantity'
import DATA from '../../../services/DATA'
import FormContext from '../../../context/FormContext'
import ConfirmSubmit from '../ConfirmSubmit'

export default function CookieForm(props){ 
    const context = useContext(FormContext)
    
    const confirmSubmit = e => {
        e.preventDefault()
        return context.changeModal()
    }
    
   return(
    <div className='cookies'>
    {context.modal &&  <ConfirmSubmit />}
     <form onSubmit={e => confirmSubmit(e)} className='order-form cookies-color'>

         <legend>Cookie</legend>
        
        <ChangeQuantity />

         <label htmlFor='cookieFlavor'>Cookie Flavor</label>
         <input type='text' id='cookieFlavor'onChange={e => context.updateItemSpecs(e)} required/>
    
         <legend>Design</legend>
            
         <label htmlFor='theme'>Theme</label>
         <select id='theme' onChange={e => context.updateItem(e)}>
            {DATA.themes.map((x, i) => <option key={i} value={x.key}>{x.name}</option>)}
         </select>
    
         <label htmlFor='notes'>Notes</label>
         <textarea name='notes' id='notes' form='cookie-order-form' className='text-box' onChange={e => context.updateItem(e)}></textarea>
    
         <div className='flex'>
          <button className='submit back-link' onClick={() => props.history.push('/order')}>Back</button>
            <input type='submit' id='cake-order-form' className='submit'/>
         </div>
     </form>
    </div>
    
    )
}
