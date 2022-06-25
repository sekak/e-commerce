 import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import './product.css'
 
const Product = ({ product ,onAddToCart}) => {
 
     return (
        <div className='container'>
            <div className='wrapp'> 
            <img className='image'  src={product.image.url} alt="d" />
            <div className='items'>
            <div className='nameprice'>
                <h2>{product.name}</h2>
                <span>{product.price.formatted_with_symbol}</span>
            </div>
            <div className='desc'>
                  <p className='pp' dangerouslySetInnerHTML={{ __html:product.description}} variant='body2' color='textSocandary'/>
            </div>
            </div>
            <div className='logo '>
                <MdAddShoppingCart  onClick={() => onAddToCart(product.id,1)}/>
            </div>
            </div>
        </div>

    )
}

export default Product