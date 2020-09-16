import React, {useState} from 'react'
import OrderContext from '../Context/OrderContext'

export default function OrderDB(props){
    const [order, setOrder] = useState({
        total: 0
    })
    const [items, setItems] = useState([])
    const [user, setUser] = useState({})
    const creds = {username: 'admin', password: 'admin'}

    const compareCreds = (info) => {
        let username = false
        let password = false
       creds.username == info.username ? username = true : username = false 
       creds.password == info.password ? password = true : password = false 

       if(username === true && password === true){
           return true
       }
       return false
    }
    const deleteItem = (item) => {
        const newOrder = [...order]
        newOrder.splice(item, 1)
        return setOrder(newOrder)
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
        compareCreds,
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