import React from 'react'
import PropTypes from 'prop-types'

export default function OrderDetails(props){

    return(
        <section className='order-details'>
            <div className='details'>
                <h2>{props.item.type}</h2>
                <p>theme: {props.item.theme}</p>
                <p>{props.item.order_specs}</p>
                <p>notes: {props.item.notes}</p>
                <p>cost: {props.item.cost}</p>     
            </div>
        </section>
    )
}

OrderDetails.propTypes = {
    item: PropTypes.object
}