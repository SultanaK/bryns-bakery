import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import FormContext from '../../context/FormContext'

export default function ConfirmSubmit(){
    const context = useContext(FormContext)

    const checkOut = () => {
        context.changeModal()
        return context.updateCart()
    }

    return(
        <div className='confirm-submit'>
            <p>Would you like to keep shopping?</p>
            <Link onClick={() => checkOut()} to='/order'>Yes</Link>
            <Link onClick={() => checkOut()} to='/order/cart'>No, Checkout</Link>
        </div>
    )
}