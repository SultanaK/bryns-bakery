import React from 'react'
import logo from '../images/bblogo.jpg';
import Carousel from './Carousel'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'


export default function LandingPage(){

    return(
    <>

    <section className='intro window-height'>
        <div className='textbox'>
            <h1>Speciality Bakery</h1>
            <h3>Sweets Specifically For You</h3>
        </div>
    </section>
    <section className='window-height'>
        <Carousel />
    </section>

    <section className='window-height description'>
        <img src={logo} alt='logo' />
        <h1>About the Goods</h1>
        <p>Home </p>
    </section>

    <footer>
            <a href='#' target="_blank" className='icon' rel='noopener noreferrer'>
                <FaFacebookSquare/>
            </a>
            <a href='#' target="_blank" className='icon' rel='noopener noreferrer'>    
                <FaInstagram/>
            </a>
            <a href='#' target="_blank" className='icon' rel='noopener noreferrer'>    
                <HiOutlineMail />
            </a>
    </footer>

</>)
}