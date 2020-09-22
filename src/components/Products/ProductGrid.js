import React from 'react'
import PropTypes from 'prop-types'

export default function ProductGrid(props){

return(	
    <div className="item">
            <img src={props.product.src} alt={props.product.alt}/>
    </div>
)
}

ProductGrid.propTypes ={
    product: PropTypes.object.isRequired
}