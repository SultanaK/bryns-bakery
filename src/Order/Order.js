import React from 'react'

export default function Order(){
    const [selected, setSelected] = useState('cake')

    const changeSelected = e => {
        e.preventDefault();
        return setSelected(e.target.value)
    }

    return(
    <>
    <header>
        <h1>Order</h1>
         <select value={selected} onChange={e => changeSelected(e)}>
            <option value='cake'>Cake</option>
            <option value='cookies'>Cookies</option>
            <option value='cupcakes'>Cupcakes</option>
            <option value='other'>Other</option>
         </select>
    </header>
    <div className='order-form-container'>
        <div className='user-info'>
            <label for="first-name">First Name</label>
            <input type='text' id='first-name' required/>

            <label for='last-name'>Last Name</label>
            <input type='text' id='last-name' required/>

            <label for='email'>Email</label>
            <input type='email' id='email' required/>

            <label for='phone-number'>Phone Number</label>
            <input type='tel' id='phone-number' required/>

            <label for='pickup-date'>Ready By: </label>
            <input type='date' id='pickup-date' required/>
        </div>
    </div>

    </>
    )
}
    // <header>
    //     <h1>Order</h1>
    //     <select>
    //         <option>Cake</option>
    //         <option>Cookies</option>
    //         <option>Cupcakes</option>
    //         <option>Other</option>
    //     </select>
    
    //     </header>
        
    // <div className='order-form'>
    
    // <div className='product-forms'>
    // <div className='user-info'>
    //   <label for="first-name">First Name</label>
    // <input type='text' id='first-name' required/>
        
    // <label for='last-name'>Last Name</label>
    // <input type='text' id='last-name' required/>
    
    // <label for='email'>Email</label>
    // <input type='email' id='email' required/>
    
    // <label for='phone-number'>Phone Number</label>
    // <input type='tel' id='phone-number' required/>
    
    // <label for='pickup-date'>Ready By: </label>
    // <input type='date' id='pickup-date' required/>
    
    // <input type='submit' class='submit'/>
    // </div>
    
    
    // <form className='cake-order-form'>
    //     <legend>Cake</legend>
            
    //     <label for='serving-size'>Serving-size</label>
    //     <input type='number' id='serving-size' required/>
    
    //     <label for='cake-flavor'>Cake Flavor</label>
    //     <select id='cake-flavor'>
    //         <option id='chocolate-cake'>Chocolate</option>
    //         <option id='vanilla-cake'>Vanilla</option>
    //         <option id='red-velevet-cake'>Red Velvet</option>
    //         <option id='strawberry-cake'>Strawberry</option>
    //         <option id='lemon-cake'>Lemon</option>
    //         <option id='german-chocolate-cake'>German Chocolate</option>
    //         <option id='other-cake'>other</option>
    
    //     </select>
    
    //     <legend>Frosting</legend>
    //     <label for='frosting-flavor'>Frosting Flavor</label>
    //     <select id='cake-flavor'>
    //         <option id='chocolate-frosting'>Chocolate</option>
    //         <option id='vanilla-frosting'>Vanilla</option>
    //         <option id='cream-cheese-frosting'>Cream Cheese</option>
    //         <option id='strawberry-frosting'>Strawberry</option>
    //         <option id='lemon-frosting'>Lemon</option>
    //         <option id='buttermilk-frosting'>Buttermilk</option>
    //         <option id='other-frosting'>other</option>
    
    //     </select>
    
    //     <label for='frosting-color'>Frosting Color</label>
    //     <select id='cake-flavor'>
    //         <option id='red-frosting'>Red</option>
    //         <option id='pink-frosting'>Pink</option>
    //         <option id='blue-frosting'>Blue</option>
    //         <option id='yellow-frosting'>Yellow</option>
    //         <option id='green-frosting'>Green</option>
    //         <option id='purple-frosting'>Purple</option>
    //         <option id='german-chocolate-cake'>other</option>
    
    //     </select>
    
    //     <legend>Design</legend>
    //     <label for='cake-theme'>Theme</label>
    //     <select id='cake-theme'>
    //         <option id='kid-birthday-theme'>Kids Birthday</option>
    //         <option id='adult-birthday-theme'>Adult Birdthday</option>
    //         <option id='wedding-theme'>Wedding</option>
    //         <option id='bachelor-theme'>Bachelor/Bachelorette</option>
    //         <option id='baby-shower-theme'>Baby Shower</option>
    //         <option id='other-theme'>other</option>
    //     </select>
    
    //     <label for='notes'>Notes</label>
    //     <textarea name='notes' id='notes' form='cake-order-form' className='text-box'></textarea>
    
    //     <input type='submit' id='cake-order-form' className='submit'>
    // </form>
        
    // <form className='cookie-order-form'>
    //     <legend>Cookie</legend>
        
    //     <label for='serving-size'>Serving-size</label>
    //     <input type='number' id='serving-size' required/>
    
    //     <label for='cookie-flavor'>Cookie Flavor</label>
    //     <input type='text' id='cookie-flavor'/>
    
    //     <label for='cookie-design'>Design</label>
    //     <input type='text' id='cookie-design'>
    
    //     <input type='submit' id='cookie-order-form'/>
    
    //     <label for='frosting-color'>Frosting Color</label>
    //     <select id='cake-flavor'>
    //         <option id='red-frosting'>Red</option>
    //         <option id='pink-frosting'>Pink</option>
    //         <option id='blue-frosting'>Blue</option>
    //         <option id='yellow-frosting'>Yellow</option>
    //         <option id='green-frosting'>Green</option>
    //         <option id='purple-frosting'>Purple</option>
    //         <option id='german-chocolate-cake'>other</option>
    
    //     </select>
    
    //     <legend>Design</legend>
    //     <label for='cake-theme'>Theme</label>
    //     <select id='cake-theme'>
    //         <option id='kid-birthday-theme'>Kids Birthday</option>
    //         <option id='adult-birthday-theme'>Adult Birdthday</option>
    //         <option id='wedding-theme'>Wedding</option>
    //         <option id='bachelor-theme'>Bachelor/Bachelorette</option>
    //         <option id='baby-shower-theme'>Baby Shower</option>
    //         <option id='other-theme'>other</option>
    //     </select>
    
    //     <label for='notes'>Notes</label>
    //     <textarea name='notes' id='notes' form='cookie-order-form' className='text-box'></textarea>
    
    //     <input type='submit' id='cake-order-form' className='submit'>
    // </form>
    
    // <form class='cupcake-order-form'>
    //     <legend>Cupcake</legend>
        
    //     <label for='serving-size'>Serving-size</label>
    //     <input type='number' id='serving-size' required/>
    
    //     <label for='cupcake-flavor'>Cupcake Flavor</label>
    //     <select id='cupcake-flavor'>
    //         <option id='chocolate-cake'>Chocolate</option>
    //         <option id='vanilla-cake'>Vanilla</option>
    //         <option id='red-velevet-cake'>Red Velvet</option>
    //         <option id='strawberry-cake'>Strawberry</option>
    //         <option id='lemon-cake'>Lemon</option>
    //         <option id='german-chocolate-cake'>German Chocolate</option>
    //         <option id='other-cake'>other</option>
    
    //     </select>
    
    //     <legend>Frosting</legend>
    //     <label for='frosting-flavor'>Frosting Flavor</label>
    //     <select id='frosting-flavor'>
    //         <option id='chocolate-frosting'>Chocolate</option>
    //         <option id='vanilla-frosting'>Vanilla</option>
    //         <option id='cream-cheese-frosting'>Cream Cheese</option>
    //         <option id='strawberry-frosting'>Strawberry</option>
    //         <option id='lemon-frosting'>Lemon</option>
    //         <option id='buttermilk-frosting'>Buttermilk</option>
    //         <option id='other-frosting'>other</option>
    //     </select>
    
    //     <label for='frosting-color'>Frosting Color</label>
    //     <select id='cupcake-frosting-color'>
    //         <option id='red-frosting'>Red</option>
    //         <option id='pink-frosting'>Pink</option>
    //         <option id='blue-frosting'>Blue</option>
    //         <option id='yellow-frosting'>Yellow</option>
    //         <option id='green-frosting'>Green</option>
    //         <option id='purple-frosting'>Purple</option>
    //         <option id='german-chocolate-cake'>other</option>
    //     </select>
    
    //     <legend>Design</legend>
    //     <label for='cupcake-theme'>Theme</label>
    //     <select id='cupcake-theme'>
    //         <option id='kid-birthday-theme'>Kids Birthday</option>
    //         <option id='adult-birthday-theme'>Adult Birdthday</option>
    //         <option id='wedding-theme'>Wedding</option>
    //         <option id='bachelor-theme'>Bachelor/Bachelorette</option>
    //         <option id='baby-shower-theme'>Baby Shower</option>
    //         <option id='other-theme'>other</option>
    //     </select>
    
    //     <label for='notes'>Notes</label>
    //     <textarea name='notes' id='notes' form='cupcake-order-form' className='text-box'></textarea>
    
    //     <input type='submit' id='cupcake-order-form' className='submit'>
    // </form>
                
    // <form id='other-order-form'>
    //     <label for='special-request'>Special Request</label>
    //     <p>Do you have a special request? Reach out to us and we will contact you shortly!</p>
    //     <textarea name='special-request' id='special-request' form='other-order-form' className='text-box'></textarea>
    
    //     <input type='submit' id='other-order-form' className='submit'/>
    // </form>
    // </div>
    
    // <section class='shopping-cart'>
    //     <h2>Order</h2>
    //     <h3>Items</h3>
    //     <ul>
    //         <li><p>Cake</p> <p>x1</p> <p>$20</p></li>
    //         <li><p>Cookie</p> <p>x12</p> <p>$20</p></li>
    //         <li><p>Cupcakes</p> <p>x6</p> <p>$10</p></li>
    //     </ul>
    //     <h3>Expected PickUp</h3>
    //     <p>PickUp Date</p>
    //     <h3>Expected Total</h3>
    //     <p>*Pay At Pickup*</p>
    //     <h4>$50</h4>
        
    //     <button>Place Order</button>
    // </section>
    // </div>
    