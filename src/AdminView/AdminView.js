import React, {useState} from 'react'
import Table from './Table'
import ServiceFunctions from '../services/ServiceFunctions'
import OrderDetails from './OrderDetails'

export default function AdminView(){
    const [order, setOrder] = useState([0])
    const [selected, setSelected] = useState('all')
    const [items, setItems] = useState([0])

    const exposeOrder = (id) => {
        ServiceFunctions.getItemsInAnOrder(id)
        .then(data => setItems(data))
    }

    const table = (type) => {
        setSelected(type)

        if(type === 'new'){
           ServiceFunctions.getAllOrders()
           .then(res => {
               console.log(res)
              return setOrder(res)
            })
        }
        if(type === 'unfinished'){
            ServiceFunctions.getUnfinished()
            .then(data =>  data.length === 0 ? setOrder([0]) : setOrder(data))
        }

        if(type === 'finished'){
            ServiceFunctions.getCompleted()
            .then(data => data.length === 0 ? setOrder([0]) : setOrder(data))
        }
    }
    return(
        <>
        <nav>
            <ul>
                <li ><button onClick={() => table('all')}>All Orders</button></li>
                <li ><button onClick={() => table('new')}>New Orders</button></li>
                <li ><button onClick={() => table('unfinished')}>Unfinished Orders</button></li>
                <li ><button onClick={() => table('finished')}>Finished Orders</button></li>
                <li>Sign Out</li>
            </ul>
        </nav>
        <h1>Welcome Admin</h1>
            <h2>
               {selected} Orders
            </h2>
        <table>
            <thead>
            <tr>
                {Object.keys(order[0]).map((x, i) => {
                    return <TableHead key={i} value={x} />
                })}
            </tr>
            </thead>
            <tbody>
                {order.map((x, i) => {
                    return <Table key={i} exposeOrder={exposeOrder} order={x} />
                })}
            </tbody>
        </table>
        <h1>Items in Order</h1>
        {items.map((x, i) => <OrderDetails key={i} item={x} />)}
        </>
    )
}

const TableHead = (props) => {
    return (
        <th>{props.value}</th>
    )
}

