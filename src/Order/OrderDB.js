import React, {useState} from 'react'
import OrderContext from '../Context/OrderContext'
import cuid from 'cuid'

export default function OrderDB(props){
    const [order, setOrder] = useState({})

    const updateOrder = (update) => {
        const id = cuid();
        return setOrder({...order, [id]: update})
    }

    const values = {
        updateOrder,
        order
    }

    console.log(order)
    return(
        <OrderContext.Provider value={values}>
            {props.children}
        </OrderContext.Provider>
    )
    
}