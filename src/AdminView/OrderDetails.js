import React from 'react'

export default function OrderDetails(props){
    console.log(props)
    return(
        <section className='order-details'>
            <h2>{props.item.type}</h2>
            <p>theme: {props.item.theme}</p>
            <p>{props.item.order_specs}</p>
            <p>notes: {props.item.notes}</p>
            <p>cost: {props.item.cost}</p>     
        </section>
    )
}