import React, {useContext} from 'react'
import OrderContext from '../../context/OrderContext'

export default function ShoppingCart(props){
    const context = useContext(OrderContext)
    
    const items = () => {
        return context.items.map((x, i) => 
        <li>
        <p>{x.type}</p> {x.type === 'Cake' ? <p>1</p> : <p>{x.order_specs.quantity}/doz</p>}
         <p>${x.cost}</p> 
        <button onClick={() => context.deleteItem(i)}> X </button>
        </li>)
    }

    const total = context.items.reduce((acc, val)=> val.cost + acc, 0);


    return(
        <>
        <section className='shopping-cart'>
            <h2>Order</h2>
            <h3>Items</h3>
            <ul>
                {context.items.length === 0 ? <li>Looks like nothing is here</li> : items()}
            </ul>
            <h3>Expected PickUp</h3>
            <p>PickUp Date</p>
            <h3>Expected Total</h3>
            <p>*Pay At Pickup*</p>
            <h4>${total}</h4>
        
        <button onClick={() => props.history.push('/order/userform')} disabled={context.items.length === 0} >Place Order</button>
     </section>

    </>
    )
}