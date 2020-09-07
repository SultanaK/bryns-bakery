import React from 'react'

export default function ChangeQuantity(props){
    return(
        <>
                 <label htmlFor='quantity'>Quantity</label>
         <div id='quantity' className='flex'>
            <button id='minus' onClick={(e) => props.changeQuantity(e)}>-</button>
                <p>{props.quantity}/dozen</p>
            <button id='plus' onClick={(e) => props.changeQuantity(e)}>+</button>
         </div>

        </>
    )
}