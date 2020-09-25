import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import OrderContext from '../context/OrderContext'

export default function FormDB(props){
    const context = useContext(OrderContext)
    const [modal, setModal] = useState(false)
    const [item, setItem] = useState({
        "type": '',
        "order_specs": {
            "quantity": 0
        },
        "theme": '',
        "notes": '',
        "cost": 0,    
})

    const changeQuantity = (type) => {

        let cost
        let quantity

        if(type === 'plus'){ 
            quantity = item.order_specs.quantity + 0.5
        }

        if(type === 'minus'){ 
            if(item.order_specs.quantity === 0){
                return null
            }

            quantity = item.order_specs.quantity - 0.5
        }
        
        cost = quantity * 10
        return setItem({...item, cost, order_specs: {...item.order_specs, quantity}})
    }
    const updateItem = e => {
        e.preventDefault();
        const {id, value} = e.target
        return setItem({...item, [id]: value})
    }
    const updateItemSpecs = e => {
        e.preventDefault()
        const {id, value} = e.target
        return setItem({...item, "order_specs": {...item.order_specs, [id]: value}})
    }
    const updateType = (type) => {
        return type === 'Cake' ? setItem({...item, "type": type, "cost": 10}) : setItem({...item, "type": type})
    }
    const confirmSubmit = e => {
        e.preventDefault()
        return changeModal()
    }
    const changeModal = () => {
        setModal(!modal)
    }
    
    const updateCart = () => {
        context.updateItems(item)
        return clearOrder()
    }

    const clearOrder = () => {
        return setItem({
            "type": '',
            "order_specs": {
                "quantity": 0
            },
            "theme": '',
            "notes": '',
            "cost": 0,    
        })
    }

    const values={
        changeQuantity,
        updateItem,
        updateItemSpecs,
        updateType,
        confirmSubmit,
        changeModal,
        updateCart,
        clearOrder,
        item,
        modal
    }

    return(
        <FormContext.Provider value={values}>
            {props.children}
        </FormContext.Provider>
    )


}

