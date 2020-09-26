import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'

export default function NavMenuMobile(props){
    const [menu, showMenu] = useState(false)

    const menuAnimation = useSpring({
        // display: menu ? 'block': 'none',
        opacity: menu ? 1 : 0,
        transform: menu ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    })

    return(
        <>
        <div className='mobile-menu-container'>
        <FiMenu className='menu-icon' onClick={() => showMenu(!menu)} />
        <animated.ul style={menuAnimation} className='mobile-menu'>
            <li className='menu-button'>
                <Link to='/' onClick={() => showMenu(false)} className='link'>Home</Link>
            </li> 
            <li className='menu-button'>
                <Link to='/products' onClick={() => showMenu(false)} className='link'>Goodies</Link>
            </li>
            <li className='menu-button'>
                <Link to='/order' onClick={() => showMenu(false)} className='link'>Order</Link>
            </li> 
            <li className='menu-button'>
                <Link to='/order/cart' onClick={() => showMenu(false)} className='link'>Shopping Cart</Link>
            </li>
            <li className='menu-button'>
                <Link to='/login' onClick={() => showMenu(false)} className='link'>{props.token ? 'Account' : 'SignIn'}</Link>
            </li>
        </animated.ul>
        </div>
        </>
    )
}