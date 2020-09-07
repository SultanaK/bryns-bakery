import React from 'react'

export default function ShoppingCart(props){
    // const [order, setOrder] = useState()
    console.log(props)
    let orderArray = Object.keys(props.order)

    const items = () => {
    return orderArray.map(x => <li><p>{props.order[x].type}</p> {props.order[x].type === 'cake' ? <p>1</p> : <p>{props.order[x].quantity}/doz</p>} <p>${props.order[x].cost}</p></li>)
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