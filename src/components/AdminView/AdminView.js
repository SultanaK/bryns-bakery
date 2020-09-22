import React, {useState, useEffect} from 'react'
import Table from './Table'
import ServiceFunctions from '../../services/ServiceFunctions'
import OrderDetails from './OrderDetails'
import TokenService from '../../services/token-service'
import PropTypes from 'prop-types'

const TableHead = (props) => {
    return (
        <th>{props.value}</th>
    )
}

export default function AdminView(props){
    const [selected, setSelected] = useState('new')
    const [order, setOrder] = useState([0])
    const [items, setItems] = useState([0])

    const exposeOrder = (id) => {
        ServiceFunctions.getItemsInAnOrder(id)
        .then(data => setItems(data))
    }


    useEffect(() => {
        if(selected === 'new'){
            ServiceFunctions.getAllOrders()
           .then(res => {
               console.log(res)
               if(res === undefined){
                   return setOrder([0])
               }
               return setOrder(res)
            })
        }
        if(selected === 'finished'){
            ServiceFunctions.getCompleted()
            .then(res => {
                if(res === null){
                    return setOrder([0])
                }
                return setOrder(res)
            })
        }
        if(selected === 'unfinished'){
            ServiceFunctions.getUnfinished()
            .then(res => {
                if(res === null){
                    return setOrder([0])
                }
                return setOrder(res)
            })
        }
    }, [selected, setOrder])

    const handleLogoutClick = () => {
        TokenService.clearAuthToken()
        return props.history.push('/')
    }

    const completeOrder = (id) => {
        ServiceFunctions.completeOrder(id, selected)
        .then(res => {
            if(res === undefined){
               return setOrder([0])
            }
            return setOrder(res)
        })
    }

    return(
        <>
        <nav>
            <ul>
                <li >
                    <button onClick={() => setSelected('new')}>New Orders</button>
                </li>
                <li >
                    <button onClick={() => setSelected('unfinished')}>Unfinished Orders</button>
                </li>
                <li >
                    <button onClick={() => setSelected('finished')}>Finished Orders</button>
                </li>
                <li>
                    <button onClick={() => handleLogoutClick()}>SignOut</button>
                </li>
            </ul>
        </nav>
        <h1>Hey Girl</h1>
            <h2>
               {selected} Orders
            </h2>
        <table>
            <thead>
            <tr>
                {order.length !== 0 && Object.keys(order[0]).map((x, i) => {
                    return <TableHead key={i} value={x} />
                })}   
            </tr>
            </thead>
            <tbody>
                {order.map((x, i) => {
                    return <Table key={i} completeOrder={completeOrder} exposeOrder={exposeOrder} order={x} />
                })}
            </tbody>
        </table>
        <h1>Items in Order</h1>
        {items.map((x, i) => <OrderDetails key={i} item={x} />)}
        </>
    )
}

AdminView.propTypes = {
    history: PropTypes.object.isRequired
}

TableHead.propTypes = {
    value: PropTypes.string
}

