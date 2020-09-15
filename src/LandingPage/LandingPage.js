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
        <img src={logo} alt='logo' />
        <h1>About the Goods</h1>
        <p>Home </p>
    </section>

    <footer>
        <a href='#' className='icon'>facebook icon</a>
        <a href='#' className='icon'>instagram icon</a>
        <a href='#' className='icon'>email icon</a>
    </footer>

</>)
}