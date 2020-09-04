import React from 'react'
import './LandingPage.css'
import logo from '../images/bblogo.jpg';
import Carousel from './Carousel'
import Products from '../Products/Products';

export default function LandingPage(){

    return(
    <>
        <header className='sticky-top nav'>
            <h1>Bryn's Sweet Creations</h1>
            <nav className='nav'>
                <li className='li-button'>Home</li> 
                <li className='li-button'>Goodies</li>
                <li className='li-button'>Order</li> 
                <li className='li-button'>Contact</li>
                <li className='li-button'>Sign Up/Login</li>
            </nav>
        </header>
    <section className='window-height'>
        <Carousel />
    </section>

    <section className='window-height description'>
        <h2>About the Goods</h2>
        <img src={logo} alt='logo' />
        <p>Description about Business</p>
    </section>

    <Products />
    <footer>
        <a href='#' className='icon'>facebook icon</a>
        <a href='#' className='icon'>instagram icon</a>
        <a href='#' className='icon'>email icon</a>
    </footer>

</>)
}