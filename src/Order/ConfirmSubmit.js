import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import OrderContext from '../Context/OrderContext'

export default function ConfirmSubmit(props){
    const context = useContext(OrderContext)

    const submitOrder = (order) => {
        context.changeModal()
        return context.updateOrder(order)
    }

    return(
        <div className='confirm-submit'>
            <p>Would you like to keep shopping?</p>
            <Link onClick={() => submitOrder(props.order)} to='/order'>Yes</Link>
            <Link onClick={() => submitOrder(props.order)} to='/order/cart'>No, Checkout</Link>
        </div>
    )
}