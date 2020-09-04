import React from 'react'

export default function CakeForm(props){

    const submitOrder = () => {
        console.log(subitted)
    }
    
    return(
    <form onSubmit={() => submitOrder()} className='cake-order-form'>
        <legend>{props.type}</legend>
            
        <label for='serving-size'>Serving-size</label>
        <input type='number' id='serving-size' required/>
    
        <label for='cake-flavor'>{props.type} Flavor</label>
        <select value>
            <option value='chocolate-cake'>Chocolate</option>
            <option value='vanilla-cake'>Vanilla</option>
            <option value='red-velevet-cake'>Red Velvet</option>
            <option value='strawberry-cake'>Strawberry</option>
            <option value='lemon-cake'>Lemon</option>
            <option value='german-chocolate-cake'>German Chocolate</option>
            <option value='other-cake'>other</option>
    
        </select>
    
        <legend>Frosting</legend>
        <label for='frosting-flavor'>Frosting Flavor</label>
        <select value='cake-flavor'>
            <option value='chocolate-frosting'>Chocolate</option>
            <option value='vanilla-frosting'>Vanilla</option>
            <option value='cream-cheese-frosting'>Cream Cheese</option>
            <option value='strawberry-frosting'>Strawberry</option>
            <option value='lemon-frosting'>Lemon</option>
            <option value='buttermilk-frosting'>Buttermilk</option>
            <option value='other-frosting'>other</option>
    
        </select>
    
        <label for='frosting-color'>Frosting Color</label>
        <select id='cake-flavor'>
            <option value='red-frosting'>Red</option>
            <option value='pink-frosting'>Pink</option>
            <option value='blue-frosting'>Blue</option>
            <option value='yellow-frosting'>Yellow</option>
            <option value='green-frosting'>Green</option>
            <option value='purple-frosting'>Purple</option>
            <option value='german-chocolate-cake'>other</option>
    
        </select>
    
        <legend>Design</legend>
        <label for='cake-theme'>Theme</label>
        <select id='cake-theme'>
            <option value='kid-birthday-theme'>Kids Birthday</option>
            <option value='adult-birthday-theme'>Adult Birdthday</option>
            <option value='wedding-theme'>Wedding</option>
            <option value='bachelor-theme'>Bachelor/Bachelorette</option>
            <option value='baby-shower-theme'>Baby Shower</option>
            <option ivalued='other-theme'>other</option>
        </select>
    
        <label for='notes'>Notes</label>
        <textarea name='notes' id='notes' form='cake-order-form' className='text-box'></textarea>
    
        <input type='submit' id='cake-order-form' className='submit'/>
    </form>
    )
}    

