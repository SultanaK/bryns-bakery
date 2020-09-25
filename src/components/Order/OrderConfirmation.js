import React from 'react'

export default function OrderConfirmation(){


    return(
        <div className='confirmation'>
            <div className='title'>
                <h1>Thank you!</h1>
            </div>
        <section className='confirmation-text'>
            <p>Your order has been placed with us!</p>
            <p>You should recieve an email with an order confirmation soon.</p>
            <p>If you have any questions about your order feel free to reach out to us <a href='mailto:brynssweetcreations@gmail.com'>here</a>!</p>
        </section>
        </div>
    )
}