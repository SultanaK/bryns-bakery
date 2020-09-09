import React, {useState} from 'react'
import DATA from '../DATA';
import Table from './Table'

export default function AdminView(){
    const [orders, setOrders] = useState(DATA.orders)
    const [selected, setSelected] = useState('New')
    const filterBy = (type) => {
        
        if(type === 'all'){
            setSelected('All')
            return setOrders(DATA.orders)
        }
        if(type === 'new'){
            let newOrders = DATA.orders.sort((a, b) => a - b ) //need help with dates theData.sort((a, b) => a.theDate < b.theDate);
                                                            //orders.filter(o => new Date(2020,9,10) <= o.date && o.date <= new Date(2020,9,15))
            setSelected('New')
            return setOrders(newOrders)
        }
        if(type === 'unfinished'){
            let unfinished = DATA.orders.filter(x => x.completed === false)
            setSelected('Unfinished')
            return setOrders(unfinished)
        }
        if(type === 'finished'){
            let completed = DATA.orders.filter(x => x.completed === true)
            setSelected('Completed')
            return setOrders(completed)
        }
    }

    return(
        <>
        <nav>
            <ul>
                <li ><button onClick={() => filterBy('all')}>All Orders</button></li>
                <li ><button onClick={() => filterBy('new')}>New Orders</button></li>
                <li ><button onClick={() => filterBy('unfinished')}>Unfinished Orders</button></li>
                <li ><button onClick={() => filterBy('finished')}>Finished Orders</button></li>
                <li>Sign Out</li>
            </ul>
        </nav>
        <h1>Welcome Admin</h1>
        <table>
        <th>{selected} Orders</th>
        <tr>
            <th>Order#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Ready By</th>
            <th>Order</th>
            <th>Completed</th>
        </tr>

        {orders.map((x, i) => {
        return <Table order={x} key={i}/> 
            })
        }
        </table>
        </>
    )
}

