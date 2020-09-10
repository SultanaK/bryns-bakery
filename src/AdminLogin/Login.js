import React, {useState, useContext} from 'react'
import './loginPage.css'
import OrderContext from '../Context/OrderContext'

export default function Login(props){
	const context = useContext(OrderContext)
	const [creds, setCreds] = useState({})

    const submitCredentials = (e) => {
		e.preventDefault()
		return context.compareCreds(creds) === true ? props.history.push('/adminView') : null
    }
	
    return(
        <>
	<form onSubmit={(e) => submitCredentials(e)} id='admin-login'>
		<h1>Admin Login</h1>

		<label htmlFor='username'>Username</label>
		<input type='text' name='username' id='username' onChange={e => setCreds({...creds, [e.target.id]: e.target.value})} required/>

		<label htmlFor='password'>Password</label>
		<input type='password' name='password' id='password' onChange={e => setCreds({...creds, [e.target.id]: e.target.value})} required/>
		<input type='submit' id='admin-login' />

	</form>

        </>
    )
}