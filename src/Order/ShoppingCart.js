import React, {useContext} from 'react'
import OrderContext from '../Context/OrderContext'

export default function ShoppingCart(){
    const context = useContext(OrderContext)

    let orderArray = Object.keys(context.order)
    const removeItem = (item) => {
        console.log(item)
    }

    const items = () => {
    return orderArray.map(x => <li><p>{context.order[x].type}</p> {context.order[x].type === 'cake' ? <p>1</p> : <p>{context.order[x].quantity}/doz</p>} <p>${context.order[x].cost}</p> <button onClick={() => removeItem(x)}> X </button></li>)
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
            <h4>$50</h4>
        
        <button>Place Order</button>
     </section>

        </>
    )
}