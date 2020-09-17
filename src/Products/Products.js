import React, {useState} from 'react'
import DATA from '../DATA';
import ProductGrid from './ProductGrid'
import { useSpring, animated } from 'react-spring'
export default function Products(){

    let productsArray = DATA.products

    const [selectedProduct, setSelectedProduct] = useState('all')
    const [hidden, setHidden] = useState(false)

    const changeSelected = e => {
        e.preventDefault();
        return setSelectedProduct(e.target.id)
    }
    
    const dropdown = useSpring({
        transform: hidden ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
        opacity: hidden ? 1 : 0
    })
    const pFilter = {
        'Cakes': p => p.type === 'cake',
        'Cookies': p => p.type === 'cookie',
        'Cupcakes': p => p.type === 'cupcake',
        'all': () => true
    };
      
    console.log(hidden)
    return(
        <div className='goodies'>
        <section className="Modal">
        <section className='selected'>
            <h2>{selectedProduct.toUpperCase()}</h2>
        </section>

        <button className='dropdown' onClick={() => setHidden(!hidden)}>Options</button>  
        <animated.ul style={dropdown} className='dropdown-menu'>
            <li>
                <button id='all' className={'dropdown-button'} onClick={e => changeSelected(e)}>All</button>
            </li>
            <li>
                <button id='Cakes' className={'dropdown-button'} onClick={e => changeSelected(e)}>Cakes</button>
            </li>
            <li>
                <button id='Cookies' className={'dropdown-button'} onClick={e => changeSelected(e)}>Cookies</button>
            </li>
            <li>
                <button id='Cupcakes' className={'dropdown-button'} onClick={e => changeSelected(e)}>Cupcakes</button>
            </li>

        </animated.ul>


    </section>

    <section className="grid">	
    {productsArray.filter(pFilter[selectedProduct])
        .map((x, i) => <ProductGrid product={x} key={i} />)}
    </section>
    </div>
   )
}


