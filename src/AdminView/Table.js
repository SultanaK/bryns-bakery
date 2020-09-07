import React from 'react'

export default function Table(props) {
    console.log(props)
    return(
        
        <tr>
        <th>{props.order.orderNumber}</th>
        <th>{props.order.name}</th>
        <th>{props.order.email}</th>
        <th>{props.order.phone}</th>
        <th>{props.order.readyBy}</th>
        <th>{props.order.order}</th>
        <th>{props.order.completed ? 'true' : 'false'}</th>
        <th><button>Complete</button></th>
        </tr>
    )
}