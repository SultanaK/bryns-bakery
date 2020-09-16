import React from 'react'
import ServiceFunctions from '../services/ServiceFunctions'
export default function Table(props) {

    const orderValues = Object.keys(props.order)
    const exposeOrder = (id) => {
        ServiceFunctions.getItemsInAnOrder(id)
        .then(data => console.log(data))
    }
    return(
        
        <tr onClick={() => exposeOrder(props.order.id)}>
            {orderValues.map((x, i) => {
                return (
                    <TableBody key={i} value={props.order[x] === false ? 'false' : props.order[x]}/>
                )
            })}
            <button onClick={() => ServiceFunctions.complete(props.order.id)}>completed</button>
        </tr>
    )
}

const TableBody = (props) => {
   
    return (
        <td>{props.value}</td> 
    )
}