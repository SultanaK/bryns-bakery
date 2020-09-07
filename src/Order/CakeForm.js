import React, {useState} from 'react'
import ChangeQuantity from './ChangeQuantity';


export default function CakeForm(props){

    const submitOrder = (e) => {
        e.preventDefault();
       return props.updateOrder(cakeOrder)
    }

    const changeQuantity = e => {
        e.preventDefault()
        let quantity

        if(e.target.id === 'plus'){ 
            quantity = cakeOrder.quantity + 0.5

            return setCakeOrder({...cakeOrder, quantity})
        }

        if(e.target.id === 'minus'){ 
            if(cakeOrder.quantity === 0){
                return null
            }
            quantity = cakeOrder.quantity - 0.5

            return setCakeOrder({...cakeOrder, quantity})
        }
    }

    const [cakeOrder, setCakeOrder] = useState({
        type: props.type,
        quantity: props.type === 'cake' ? null : 0,
        servingSize: props.type === 'cupcakes' ? null : '',
        cakeFlavor: '',
        frostingFlavor: '',
        frostingColor: '',
        theme: '',
        notes: '',
        cost: 0

    })

    const updateOrder = e => {
        e.preventDefault();
        const {id, value} = e.target
        return setCakeOrder({...cakeOrder, [id]: value})
    }

    return(
    <form onSubmit={e => submitOrder(e)} className='cake-order-form'>
        <legend>{props.type.toUpperCase()}</legend>

        {props.type === 'cake' && <label htmlFor='servingSize'>Serving-size</label>}
        {props.type === 'cake' && <input type='number' id='servingSize' onChange={e => updateOrder(e)} required/>}  

        {props.type === 'cupcakes' && <ChangeQuantity changeQuantity={changeQuantity} quantity={cakeOrder.quantity}/>}
         
        <label htmlFor='cakeFlavor'>{props.type.toUpperCase()} Flavor</label>
        <select id='cakeFlavor' onChange={e => updateOrder(e)} >
            <option value="">--Please choose an option--</option>
            <option value='chocolate-cake'>Chocolate</option>
            <option value='vanilla-cake'>Vanilla</option>
            <option value='red-velevet-cake'>Red Velvet</option>
            <option value='strawberry-cake'>Strawberry</option>
            <option value='lemon-cake'>Lemon</option>
            <option value='german-chocolate-cake'>German Chocolate</option>
            <option value='other-cake'>other</option>
    
        </select>
    
        <legend>Frosting</legend>
        <label htmlFor='frostingFlavor'>Frosting Flavor</label>
        <select id='frostingFlavor' onChange={e => updateOrder(e)}>
            <option value="">--Please choose an option--</option>
            <option value='chocolate-frosting'>Chocolate</option>
            <option value='vanilla-frosting'>Vanilla</option>
            <option value='cream-cheese-frosting'>Cream Cheese</option>
            <option value='strawberry-frosting'>Strawberry</option>
            <option value='lemon-frosting'>Lemon</option>
            <option value='buttermilk-frosting'>Buttermilk</option>
            <option value='other-frosting'>other</option>
    
        </select>
    
        <label htmlFor='frostingColor'>Frosting Color</label>
        <select id='frostingColor' onChange={e => updateOrder(e)}>
            <option value="">--Please choose an option--</option>
            <option value='red-frosting'>Red</option>
            <option value='pink-frosting'>Pink</option>
            <option value='blue-frosting'>Blue</option>
            <option value='yellow-frosting'>Yellow</option>
            <option value='green-frosting'>Green</option>
            <option value='purple-frosting'>Purple</option>
            <option value='german-chocolate-cake'>other</option>
    
        </select>
    
        <legend>Design</legend>
        <label htmlFor='theme'>Theme</label>
        <select id='theme' onChange={e => updateOrder(e)}>
            <option value="">--Please choose an option--</option>
            <option value='kid-birthday-theme'>Kids Birthday</option>
            <option value='adult-birthday-theme'>Adult Birdthday</option>
            <option value='wedding-theme'>Wedding</option>
            <option value='bachelor-theme'>Bachelor/Bachelorette</option>
            <option value='baby-shower-theme'>Baby Shower</option>
            <option ivalued='other-theme'>other</option>
        </select>
    
        <label htmlFor='notes'>Notes</label>
        <textarea name='notes' id='notes' form='cake-order-form' className='text-box' onChange={e => updateOrder(e)}></textarea>
    
        <input type='submit' id='cake-order-form' className='submit'/>
    </form>
    )
}    

