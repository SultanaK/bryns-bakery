import React from 'react'
import CakeForm from './CakeForm'

export default function ProductForm(props){
    const orderName = props.selected

      return( 
          <>  
            {orderName === 'cake' || 'cupcake' && <CakeForm type={orderName} />}
            {orderName === 'cookies' && <CookieForm />}
          </>
      )

    
}
    
