import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'
import {IoIosAdd, IoIosRemove} from 'react-icons/io'

export default function ChangeQuantity(){
    const context = useContext(FormContext)

    return(
        <>
        <label htmlFor='quantity'>Quantity</label>
         <div id='quantity' className='flex quantity'>
            <IoIosRemove className='quantity-button' onClick={() => context.changeQuantity('minus')} />
                <p>{context.item.order_specs.quantity === 0 ? 0 : context.item.order_specs.quantity}/dozen</p>
            <IoIosAdd className='quantity-button' onClick={() => context.changeQuantity('plus')} />
         </div>

        </>
    )
}