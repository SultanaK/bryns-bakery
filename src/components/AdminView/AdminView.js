import React, {useState} from 'react'
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
    const [order, setOrder] = useState([])
    const [items, setItems] = useState([])

    const exposeOrder = (id) => {
        ServiceFunctions.getItemsInAnOrder(id)
        .then(data => setItems(data))
    }

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


    const getOrder = () => {
        switch (selected) {
        case 'finished':
          return ServiceFunctions.getCompleted();
      
        case 'unfinished':
          return ServiceFunctions.getUnfinished();
      
        default:
          return ServiceFunctions.getAllOrders();
        }
      }

    getOrder().then(setOrder);
    return(
        <>
        <nav className='orders-nav'>
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
        <section className='orders'>
            <h1>Hey Girl</h1>
                <h2>
                {selected} Orders
                </h2>
            <table className='orders-table'>
                <thead>
                <tr>
                    {order.length !== 0 && Object.keys(order[0]).map((x, i) => {
                        return <TableHead key={i} value={x} />
                    })}   
                </tr>
                </thead>
                <tbody>
                    {order.map((x, i) => {
                        return <Table key={i} completeOrder={completeOrder}  exposeOrder={exposeOrder} order={x} />
                    })}
                </tbody>
            </table>
        </section>
        <section className='order-items'>
            <h1>Items in Order</h1>
            {items.map((x, i) => <OrderDetails key={i} item={x} />)}     
        </section>
        </>
    )
}

AdminView.propTypes = {
    history: PropTypes.object.isRequired
}

TableHead.propTypes = {
    value: PropTypes.string
}

