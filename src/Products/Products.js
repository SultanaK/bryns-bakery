import React, {useState} from 'react'
import DATA from '../DATA';
import ProductGrid from './ProductGrid'
import './ProductPage.css'

export default function Products(){

    let productsArray = DATA.products

    const [selectedProduct, setSelectedProduct] = useState('all')

    const changeSelected = e => {
        e.preventDefault();

        return setSelectedProduct(e.target.value)
    }
    
    const pFilter = {
        'cake': p => p.type === 'cake',
        'cookie': p => p.type === 'cookie',
        'cupcake': p => p.type === 'cupcake',
        'all': () => true
      };
      

    return(
        <>
        <section className="Modal">
		<h1>Filter: </h1>
		<select value={selectedProduct} onChange={e => changeSelected(e)}>
			<option value='all'>All</option>
			<option value='cake'>Cakes</option>
			<option value='cookie'>Cookies</option>
			<option value='cupcake'>Cupcakes</option>
			{/* <option value='other'>other</option> */}
		</select>	

	</section>
	
    <h2>{selectedProduct.toUpperCase()}</h2>
    <section className="grid">	
    {productsArray.filter(pFilter[selectedProduct])
        .map((x, i) => <ProductGrid product={x} key={i} />)}
    </section>
    </>
   )
}


