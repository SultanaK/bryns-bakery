import React, { useContext } from 'react'
import './orderPage.css'
import FormContext from '../Context/FormContext'
import DATA from '../DATA'

export default function Order(props){
    const context = useContext(FormContext)
    return(
    <>
    <section className='order'>
        <h1>Order</h1> 
    </section>

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
    </>
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
        <div className={classType}>
            <button onClick={e => orderChoice(e)} id={props.type.name}>{props.type.name}</button>
        </div>
    )
}
    