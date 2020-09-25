import React, {useContext} from 'react'
import OrderContext from '../../context/OrderContext'
import PropTypes from 'prop-types'
import { IoIosClose }from 'react-icons/io';

export default function ShoppingCart(props){
    const context = useContext(OrderContext)
    
    const items = () => {
        return context.items.map((x, i) => 
        <li className='shopping-cart-item'>
        <p>{x.type}</p> {x.type === 'Cake' ? <p>1</p> : <p>{x.order_specs.quantity}/doz</p>}
         <p>${x.cost}</p> 
        <IoIosClose className='exit-button' onClick={() => context.deleteItem(i)}/>
        </li>)
    }

    const total = context.items.reduce((acc, val)=> val.cost + acc, 0);


    return(
        <div className='cart'>
        <section className='shopping-cart'>
            <div className='title'>
                <h3>Your Order</h3>
            </div>
            <ul className='items'>
                {context.items.length === 0 ? <li className='no-items'> <p>Looks like nothing is here</p> </li> : items()}
            </ul>
        
            <h3>Expected Total</h3>
            <p>* Pay At Pickup *</p>
            <h3>${total}</h3>
        
        <button className='submit' onClick={() => props.history.push('/order/userform')} disabled={context.items.length === 0} >Place Order</button>
     </section>

    </div>
    )
}

ShoppingCart.propTypes = {
    history: PropTypes.object.isRequired
}