import React, {useState} from 'react'
import OrderContext from '../context/OrderContext'

export default function OrderDB(props){
    const [order, setOrder] = useState({
        total: 0
    })
    const [items, setItems] = useState([])
    const [user, setUser] = useState({})

    const deleteItem = (item) => {
        const newItem = [...items]
        newItem.splice(item, 1)
        return setItems(newItem)
    }
    const updateItems = (update) => {
        setItems([...items, update])
        return setOrder({...order, total: order.total + update.cost})   
    }
    const updateUser = (e) => {
        e.preventDefault()
        const {id, value} = e.target
        return id === 'pickup-date' ? 
            setOrder({...order, ready_date: value}) : 
            setUser({...user, [id]: value})
    }
    const clearOrder = () => {
        setItems([])
        setUser({})
        return setOrder({total: 0})
    }

    const values = {
        updateItems,
        deleteItem,
        clearOrder,
        updateUser,
        order,
        items,
        user
    }
    
    return(
        <OrderContext.Provider value={values}>
            {props.children}
        </OrderContext.Provider>
    )
    
}