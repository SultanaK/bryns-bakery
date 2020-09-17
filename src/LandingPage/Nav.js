import React from 'react'
import {Link} from 'react-router-dom'
import ShoppingCart from '../images/shopping-cart.png'
export default function Nav(){

    return(
        <nav className='sticky-top nav'>
        <div className='title'>
                <h1>Bryn's Sweet Creations</h1>
        </div>
        <ul className='nav-menu'>
            <li className='li-button'><Link to='/' className='link'>Home</Link></li> 
            <li className='li-button'><Link to='/products' className='link'>Goodies</Link></li>
            <li className='li-button'><Link to='/order' className='link'>Order</Link></li> 
            <li className='li-button'>
                <Link to='/order/cart' className='link'>
                    Shopping Cart
                </Link>
            </li>
            <li className='li-button'><Link to='/login' className='link'>SignIn</Link></li>
        </ul>
        </nav>
    )
}