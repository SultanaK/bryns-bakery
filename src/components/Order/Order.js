import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'
import DATA from '../../services/DATA'

export default function Order(props){
    const context = useContext(FormContext)
    return(

    <div className='select-product-type'>
        {DATA.type.map((x, i) => {
            return <OrderChoices 
                key={i}
                clearOrder={context.clearOrder}
                updateType={context.updateType}
                history={props.history}
                type={x}
            />
        })}
    </div>
    )
}

const OrderChoices = (props) => {
    
    const orderChoice = () => {
        props.clearOrder()
        props.updateType(props.type.name)   
        return props.history.push(props.type.link)
    }

    const classType= 'product ' + props.type.name
    return(
        
            <button className={classType} onClick={e => orderChoice(e)} id={props.type.name}>
                <div className='order-option'>
                {props.type.name}
               </div>     
            </button>
    )
}
    