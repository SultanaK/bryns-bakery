import React from 'react'

export default function UserInfoForm(props){

    const submitUserData = () => {
        console.log('submited')
        props.setFormFilled(true)
    }

    // function formatDate(d) {
    //     return `${d.getMonth()+1}/${d.getDate()/${d.getYear()}`
    //   }
      
    return(        
<div className='user-info'>
    <form id='user-info' onSubmit={() => submitUserData()}>
        <label for="first-name">First Name</label>
        <input type='text' id='first-name' required/>

        <label for='last-name'>Last Name</label>
        <input type='text' id='last-name' required/>

        <label for='email'>Email</label>
        <input type='email' id='email' required/>

        <label for='phone-number'>Phone Number</label>
        <input type='tel' id='phone-number' required/>

        <label for='pickup-date'>Ready By: </label>
        <input type='date' id='pickup-date' required/>

        <input type='submit' id='user-info' className='submit' />
    </form>
</div>
)
}

//now() return time and date PG, WHERE date >= '2020-09-10' AND date <= '2020-09-15'
//WHERE date >= now() - '3 days'::INTERVAL


