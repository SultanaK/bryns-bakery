import React, {useContext} from 'react'
import OrderContext from '../Context/OrderContext'
import {Link} from 'react-router-dom'

export default function ShoppingCart(){
    const context = useContext(OrderContext)

    let orderArray = Object.keys(context.order)

    const items = () => {
        return orderArray.map(x => <li><p>{context.order[x].type}</p> {context.order[x].type === 'cake' ? <p>1</p> : <p>{context.order[x].quantity}/doz</p>} <p>${context.order[x].cost}</p> <button onClick={() => context.deleteItem(x)}> X </button></li>)
    }

    //NEED HELP WITH THIS FUNCTION 
    const calculateTotal = () => {
       return orderArray.map(x => {
            let total = 0;
            return total = Number(context.order[x].cost) + Number(total)     
        })
    }

    return(
        <>
        <section className='shopping-cart'>
            <h2>Order</h2>
            <h3>Items</h3>
            <ul>
                {items()}
            </ul>
            <h3>Expected PickUp</h3>
            <p>PickUp Date</p>
            <h3>Expected Total</h3>
            <p>*Pay At Pickup*</p>
            <h4>{calculateTotal()}</h4>
        
        <Link to='/order/userform'>Place Order</Link>
        <button>Edit Order</button>
     </section>

    </>
    )
}