import React, {useContext} from 'react'
import ChangeQuantity from '../ChangeQuantity';
import DATA from '../../../services/DATA'
import ConfirmSubmit from '../ConfirmSubmit'
import FormContext from '../../../context/FormContext'
import PropTypes from 'prop-types'

export default function CakeForm(props){

    const context = useContext(FormContext)


    const confirmSubmit = e => {
        e.preventDefault()
        return context.changeModal()
    }

    return(
    <div className={props.type}>
    {context.modal &&  <ConfirmSubmit />}

    <form onSubmit={e => confirmSubmit(e) } className={`order-form ${props.type}-color`}>

        <legend>{props.type.toUpperCase()}</legend>

        {props.type === 'cake' && <label htmlFor='servingSize'>Serving-size</label>}
        {props.type === 'cake' && <input type='number' id='servingSize' onChange={e => context.updateItemSpecs(e)} required/>}  

        {props.type === 'cupcakes' && <ChangeQuantity />}
         
        <label htmlFor='cakeFlavor'>{props.type.toUpperCase()} Flavor</label>
        <select id='cakeFlavor' onChange={e => context.updateItemSpecs(e)} required>
            {DATA.cakeFlavors.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>

        <legend>Frosting</legend>
        <label htmlFor='frostingFlavor'>Frosting Flavor</label>
        <select id='frostingFlavor' onChange={e => context.updateItemSpecs(e)} required>
            {DATA.frostingFlavors.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>
    
        <label htmlFor='frostingColor'>Frosting Color</label>
        <select id='frostingColor' onChange={e => context.updateItemSpecs(e)}>
            {DATA.colors.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>
    
        <legend>Design</legend>
        <label htmlFor='theme'>Theme</label>
        <select id='theme' onChange={e => context.updateItem(e)}>
            {DATA.themes.map((x, i) => <option value={x.key}>{x.name}</option>)}
        </select>
    
        <label htmlFor='notes'>Notes</label>
        <textarea name='notes' id='notes' form='cake-order-form' className='text-box' onChange={e => context.updateItem(e)}></textarea>
    
    <div className='flex'>
        <button className='submit back-link' onClick={() => props.history.push('/order')}>Back</button>
        <input type='submit' id='cake-order-form' className='submit'/>
    </div>
    </form>
    </div>
    )
}    

CakeForm.propTypes = {
    type: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
}

