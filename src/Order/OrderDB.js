import React, {useState} from 'react'
import OrderContext from '../Context/OrderContext'
import cuid from 'cuid'

export default function OrderDB(props){
    const [order, setOrder] = useState({})
    const [modal, setModal] = useState(false)
    let userInfo = {}
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
        let newOrder = order
        delete newOrder[item]
        return setOrder(newOrder)
    }

    const updateUserInfo = (info) => {
        userInfo = info
        console.log(userInfo)
    }

    const updateOrder = (update) => {
        const id = cuid();
        return setOrder({...order, [id]: update})
    }

    const changeModal = () => {
        setModal(!modal)
    }



    const values = {
        updateOrder,
        order,
        modal,
        changeModal,
        deleteItem,
        updateUserInfo,
        userInfo,
        compareCreds
    }
    
    return(
        <OrderContext.Provider value={values}>
            {props.children}
        </OrderContext.Provider>
    )
    
}