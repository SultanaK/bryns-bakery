import React from 'react'
import ServiceFunctions from '../services/ServiceFunctions'
export default function Table(props) {

    const orderValues = Object.keys(props.order)
    
    const evaluateValue = (x) => {
        if(props.order[x] === true){
            return 'true'
        }
        if(props.order[x] === false){
            return 'false'
        }
        if(x === 'readydate'){
            var strDate = props.order[x];
            return strDate.substring(0, 10);
        }

        return props.order[x]
    }
    return(
        
        <tr onClick={() => props.exposeOrder(props.order.id)}>
            {orderValues.map((x, i) => {
                return (
                    <TableBody key={i} 
                    value={evaluateValue(x)}
                    />
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