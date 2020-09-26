import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import withSizes from 'react-sizes'
import NavMenuMobile from './NavMenuMobile'
import TokenService from '../../services/token-service'

function Nav({ isMobile }){
    const [hasToken, setToken] = useState(TokenService.hasAuthToken())

    return(
        <nav className='sticky-top nav'>
            { isMobile ? <NavMenuMobile token={hasToken} /> : <NavDesktopMenu token={hasToken} /> }
        </nav>
    )
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width <= 500,
})


const NavDesktopMenu = (props) => {
    return (
        <>
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
    <li className='li-button'><Link to='/login' className='link'>{ props.token ? 'Account' : 'SignIn'}</Link></li>
    </ul>
    </>
    )
}

export default withSizes(mapSizesToProps)(Nav)