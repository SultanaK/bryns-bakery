import React from 'react'
import {Link} from 'react-router-dom'
import './orderPage.css'


export default function Order(){
        
    return(
    <>
    <header>
        <h1>Order</h1> 
    </header>

    <div className='select-product-type'>
        <div className='product'>
            <Link to='/order/cake'>Cakes</Link>
        </div>
        <div className='product'>
            <Link to='/order/cupcakes'>Cupcakes</Link>
        </div>
        <div className='product'>
            <Link to='/order/cookies'>Cookies</Link>
        </div>
    </div>
    </>
    )
}

/* <div className='order-form'>
    {selected && <Form selected={selected}/>}
</div> */
    