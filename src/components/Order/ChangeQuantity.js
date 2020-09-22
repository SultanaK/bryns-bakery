import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'

export default function ChangeQuantity(){
    const context = useContext(FormContext)

    return(
        <>
        <label htmlFor='quantity'>Quantity</label>
         <div id='quantity' className='flex'>
            <button id='minus' onClick={(e) => context.changeQuantity(e)}>-</button>
                <p>{context.item.order_specs.quantity === 0 ? 0 : context.item.order_specs.quantity}/dozen</p>
            <button id='plus' onClick={(e) => context.changeQuantity(e)}>+</button>
         </div>

        </>
    )
}