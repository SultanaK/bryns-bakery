import React, {useState, useContext} from 'react'
import ChangeQuantity from '../ChangeQuantity';
import DATA from '../../DATA'
import {Link} from 'react-router-dom'
import OrderContext from '../../Context/OrderContext'
import ConfirmSubmit from '../ConfirmSubmit'

export default function CakeForm(props){
    const context = useContext(OrderContext)

    const [cakeOrder, setCakeOrder] = useState({
        type: props.type,
        quantity: props.type === 'cake' ? null : 0,
        servingSize: props.type === 'cupcakes' ? null : '',
        cakeFlavor: '',
        frostingFlavor: '',
        frostingColor: '',
        theme: '',
        notes: '',
        cost: 10 

    })

    // const submitOrder = (e) => {
    //     e.preventDefault();
    //     return context.updateOrder(cakeOrder)
    // }

    const changeQuantity = e => {
        e.preventDefault()
        let quantity
        let cost
        if(e.target.id === 'plus'){ 
            quantity = cakeOrder.quantity + 0.5
        }

        if(e.target.id === 'minus'){ 
            if(cakeOrder.quantity === 0){
                return null
            }
            quantity = cakeOrder.quantity - 0.5
        }
        
        cost = quantity * 10
        return setCakeOrder({...cakeOrder, quantity, cost})
    }

    const updateOrder = e => {
        e.preventDefault();
        const {id, value} = e.target
        return setCakeOrder({...cakeOrder, [id]: value})
    }

    const confirmSubmit = e => {
        e.preventDefault()
        return context.changeModal()
    }

    return(
    <>
    {context.modal &&  <ConfirmSubmit order={cakeOrder}/>}

    <form onSubmit={e => confirmSubmit(e) } className='cake-order-form'>
        <Link to='/order'>Back</Link>

        <legend>{props.type.toUpperCase()}</legend>

        {props.type === 'cake' && <label htmlFor='servingSize'>Serving-size</label>}
        {props.type === 'cake' && <input type='number' id='servingSize' onChange={e => updateOrder(e)} required/>}  

        {props.type === 'cupcakes' && <ChangeQuantity changeQuantity={changeQuantity} quantity={cakeOrder.quantity}/>}
         
        <label htmlFor='cakeFlavor'>{props.type.toUpperCase()} Flavor</label>
        <select id='cakeFlavor' onChange={e => updateOrder(e)} >
            {DATA.cakeFlavors.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>

        <legend>Frosting</legend>
        <label htmlFor='frostingFlavor'>Frosting Flavor</label>
        <select id='frostingFlavor' onChange={e => updateOrder(e)}>
            {DATA.frostingFlavors.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>
    
        <label htmlFor='frostingColor'>Frosting Color</label>
        <select id='frostingColor' onChange={e => updateOrder(e)}>
            {DATA.colors.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>
    
        <legend>Design</legend>
        <label htmlFor='theme'>Theme</label>
        <select id='theme' onChange={e => updateOrder(e)}>
            {DATA.themes.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>
    
        <label htmlFor='notes'>Notes</label>
        <textarea name='notes' id='notes' form='cake-order-form' className='text-box' onChange={e => updateOrder(e)}></textarea>
    
        <input type='submit' id='cake-order-form' className='submit'/>
    </form>
    </>
    )
}    

