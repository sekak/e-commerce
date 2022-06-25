 import React from 'react'
 import Product from '../product/Product'
import './products.css'

function Products({products,onAddToCart}) {
  return (
 
      <div className='container'>
            {products.map((product)=>(
                <div  className='wrap'  key={product.id}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </div>
            ))}
      </div>
    
  )
}

export default Products
