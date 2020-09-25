import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoIosClose } from 'react-icons/io'
import FormContext from '../../context/FormContext'

export default function ConfirmSubmit(){
    const context = useContext(FormContext)

    const checkOut = () => {
        context.changeModal()
        return context.updateCart()
    }

    return(
        <div className='confirm-submit'>
            <IoIosClose className='exit-button' onClick={() => context.changeModal()}/>
            <p>Would you like to keep shopping?</p>
            <div className='confirm-buttons'>
                <Link className='link submit' onClick={() => checkOut()} to='/order'>Yes</Link>
                <Link className='link submit' onClick={() => checkOut()} to='/order/cart'>No, Checkout</Link>
            </div>
        </div>
    )
}