import React, {useContext} from 'react'
import OrderContext from '../../Context/OrderContext'

export default function UserInfoForm(props){
    const context = useContext(OrderContext)
    let user = {}

    const submitUserData = (e) => {
        e.preventDefault()
        context.updateUserInfo(user)
        return props.history.push('/order/confirmation')
    }

    // function formatDate(d) {
    //     return `${d.getMonth()+1}/${d.getDate()/${d.getYear()}`
    //   }

    const updateUser = e => {
        e.preventDefault()
        const {id, value} = e.target
        return user = {...user, [id]: value}
    }

    return(        
<div className='user-info'>
    <form id='user-info' onSubmit={(e) => submitUserData(e)}>
        <label htmlFor="first-name">First Name</label>
        <input type='text' id='first-name' onChange={e => updateUser(e)} required/>

        <label htmlFor='last-name'>Last Name</label>
        <input type='text' id='last-name' onChange={e => updateUser(e)} required/>

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' onChange={e => updateUser(e)} required/>

        <label htmlFor='phone-number'>Phone Number</label>
        <input type='tel' id='phone-number' onChange={e => updateUser(e)} required/>

        <label htmlFor='pickup-date'>Ready By: </label>
        <input type='date' id='pickup-date' onChange={e => updateUser(e)} required/>

        <input type='submit' id='user-info' className='submit' />
    </form>
</div>
)
}

//now() return time and date PG, WHERE date >= '2020-09-10' AND date <= '2020-09-15'
//WHERE date >= now() - '3 days'::INTERVAL


