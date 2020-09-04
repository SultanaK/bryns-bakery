import React, {useState, useEffect} from 'react'
import DATA from '../DATA';
import ProductGrid from './ProductGrid'
import './ProductPage.css'
export default function Products(){

    let productsArray = DATA.products

    const [selectedProduct, setSelectedProduct] = useState('All')
    const [products, setProducts] = useState(productsArray)

    useEffect(() => {
       if(selectedProduct === 'all'){
            return setProducts(productsArray)
      }    
       if(selectedProduct === 'cakes'){
        return setProducts(productsArray.filter(x => x.type === 'cake'))
       }
       if(selectedProduct === 'cookies'){
        return setProducts(productsArray.filter(x => x.type === 'cookie'))
       }
       if(selectedProduct === 'cupcakes'){
        return setProducts(productsArray.filter(x => x.type === 'cupcake'))
       }
    }, [selectedProduct, productsArray])

    const changeSelected = e => {
        e.preventDefault();

       return setSelectedProduct(e.target.value)
    }

    return(
        <>
        	<section className="Modal">
		<h1>Filter: </h1>
		<select value={selectedProduct} onChange={e => changeSelected(e)}>
			<option value='all'>All</option>
			<option value='cakes'>Cakes</option>
			<option value='cookies'>Cookies</option>
			<option value='cupcakes'>Cupcakes</option>
			{/* <option value='other'>other</option> */}
		</select>	

	</section>
	
    <h2>{selectedProduct.toUpperCase()}</h2>
    <section className="grid">	
    {products.map((x, i) => {
        return (
            <ProductGrid product={x} key={i} />
        )
    })}
    </section>
    </>
   )
}