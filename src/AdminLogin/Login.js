import React from 'react'
import './loginPage.css'

export default function Login(){

    const submitCredentials = () => {
        console.log('submitted')
    }
    
    return(
        <>
	<form onSubmit={() => submitCredentials()} id='admin-login'>
		<h1>Admin Login</h1>

		<label for='email'>Email</label>
		<input type='email' name='email' id='email' required/>

		<label for='password'>Password</label>
		<input type='password' name='password' id='password' required/>
		<input type='submit' id='admin-login' />

	</form>

        </>
    )
}