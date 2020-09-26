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
    <div className={context.item.type.toLowerCase()}>
    {context.modal &&  <ConfirmSubmit />}

    <form onSubmit={e => confirmSubmit(e) } className={`order-form ${context.item.type.toLowerCase()}-color`}>

        <legend>{context.item.type}</legend>

        {context.item.type === 'Cake' && <label htmlFor='servingSize'>Serving-size</label>}
        {context.item.type === 'Cake' && <input type='number' id='servingSize' onChange={e => context.updateItemSpecs(e)} required/>}  

        {context.item.type === 'cupcakes' && <ChangeQuantity />}
         
        <label htmlFor='cakeFlavor'>{context.item.type} Flavor</label>
        <select id='cakeFlavor' onChange={e => context.updateItemSpecs(e)} required>
            {DATA.cakeFlavors.map((x, i) => <option key={i} value={x.key}>{x.name}</option>)}
        </select>

        <legend>Frosting</legend>
        <label htmlFor='frostingFlavor'>Frosting Flavor</label>
        <select id='frostingFlavor' onChange={e => context.updateItemSpecs(e)} required>
            {DATA.frostingFlavors.map((x, i) => <option key={i} value={x.key}>{x.name}</option>)}
        </select>
    
        <label htmlFor='frostingColor'>Frosting Color</label>
        <select id='frostingColor' onChange={e => context.updateItemSpecs(e)}>
            {DATA.colors.map((x, i) => <option key={i} value={x.key}>{x.name}</option>)}
        </select>
    
        <legend>Design</legend>
        <label htmlFor='theme'>Theme</label>
        <select id='theme' onChange={e => context.updateItem(e)}>
            {DATA.themes.map((x, i) => <option key={i} value={x.key}>{x.name}</option>)}
        </select>
    
        <label htmlFor='notes'>Notes</label>
        <textarea name='notes' id='notes' form='cake-order-form' className='text-box' onChange={e => context.updateItem(e)}></textarea>
    
    <div className='flex'>
        <button className='submit back-link' onClick={() => props.history.push('/order')}>Back</button>
        <button type='submit' id='cake-order-form' className='submit'>Submit </button>
    </div>
    </form>
    </div>
    )
}    

CakeForm.propTypes = {
    history: PropTypes.object.isRequired
}

