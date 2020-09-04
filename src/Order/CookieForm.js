import React from 'react'

export default function CookieForm(){

    return(
     <form className='cookie-order-form'>
         <legend>Cookie</legend>
        
         <label for='serving-size'>Serving-size</label>
         <input type='number' id='serving-size' required/>
    
         <label for='cookie-flavor'>Cookie Flavor</label>
         <input type='text' id='cookie-flavor'/>
    
         <label for='cookie-design'>Design</label>
         <input type='text' id='cookie-design'>
    
         <input type='submit' id='cookie-order-form'/>
    
         <label for='frosting-color'>Frosting Color</label>
         <select id='cake-flavor'>
             <option id='red-frosting'>Red</option>
             <option id='pink-frosting'>Pink</option>
             <option id='blue-frosting'>Blue</option>
             <option id='yellow-frosting'>Yellow</option>
             <option id='green-frosting'>Green</option>
             <option id='purple-frosting'>Purple</option>
             <option id='german-chocolate-cake'>other</option>
    
         </select>
    
         <legend>Design</legend>
         <label for='cake-theme'>Theme</label>
         <select id='cake-theme'>
             <option id='kid-birthday-theme'>Kids Birthday</option>
             <option id='adult-birthday-theme'>Adult Birdthday</option>
             <option id='wedding-theme'>Wedding</option>
             <option id='bachelor-theme'>Bachelor/Bachelorette</option>
             <option id='baby-shower-theme'>Baby Shower</option>
             <option id='other-theme'>other</option>
         </select>
    
         <label for='notes'>Notes</label>
         <textarea name='notes' id='notes' form='cookie-order-form' className='text-box'></textarea>
    
         <input type='submit' id='cake-order-form' className='submit'/>
     </form>
    
    )
}
