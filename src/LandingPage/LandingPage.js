import React from 'react'
import './LandingPage.css'
import logo from '../images/bblogo.jpg';
import Carousel from './Carousel'

export default function LandingPage(){

    return(
    <>
    <section className='window-height'>
        <Carousel />
    </section>

    <section className='window-height description'>
        <h2>About the Goods</h2>
        <img src={logo} alt='logo' />
        <p>Description about Business</p>
    </section>

    <footer>
        <a href='#' className='icon'>facebook icon</a>
        <a href='#' className='icon'>instagram icon</a>
        <a href='#' className='icon'>email icon</a>
    </footer>

</>)
}