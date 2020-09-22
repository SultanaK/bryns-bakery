import React from 'react'
export default function ProductGrid(props){

return(	
    <div className="item">
            <img src={props.product.src} alt={props.product.alt}/>
    </div>
)
}