import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <header className='sticky-top nav'>
        <h1>Bryn's Sweet Creations</h1>
        <nav className='nav'>
            <li className='li-button'><Link to='/'>Home</Link></li> 
            <li className='li-button'><Link to='/products'>Goodies</Link></li>
            <li className='li-button'><Link to='/order'>Order</Link></li> 
            <li className='li-button'>Contact</li>
            <li className='li-button'><Link to='/login'>SignIn</Link></li>
        </nav>
    </header>

    )
}