import React from 'react'
import {Link} from 'react-router-dom'
import ShoppingCart from '../images/shopping-cart.png'
export default function Nav(){

    return(
        <header className='sticky-top nav'>
        <h1>Bryn's Sweet Creations</h1>
        <nav className='nav'>
            <li className='li-button'><Link to='/' className='link'>Home</Link></li> 
            <li className='li-button'><Link to='/products' className='link'>Goodies</Link></li>
            <li className='li-button'><Link to='/order' className='link'>Order</Link></li> 
            <li className='li-button'>Contact</li>
            <li className='li-button'><Link to='/login' className='link'>SignIn</Link></li>
            <li className='li-button'>
                <Link to='/order/cart' className='link'>
                    <img src={ShoppingCart} className='shopping-cart-icon' alt='shopping-cart'/>    
                </Link>
            </li>
        </nav>
    </header>

    )
}