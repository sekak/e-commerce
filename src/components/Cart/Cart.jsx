import React from 'react'
import { Link } from 'react-router-dom';
import CardItem from './CardItem/CardItem';
 
const Cart = ({cart,handleRemoveCartQty,
    handleEmptyCart,
    handleUpdateCartQty}) => {
    const  isEmpty = !cart.line_items.length;

    const FilledCart = () => ( 
        <div>Your card is empty</div>
    )

   const EmptyCard = () => (
    <div>
    <div>
         {cart.line_items.map((item)=>(
            <div key={item.id} className='wra' >
                <CardItem  item={item} onRemoveFromQty={handleRemoveCartQty}
                onUpdateCartQty={handleUpdateCartQty}/>
            </div>
        ))}
    </div>
    <div>
    <span>Subtotal: {cart.subtotal.formatted_with_symbol}</span>

        <button onClick={handleEmptyCart}>Empty item</button>
        <Link to="/checkout">
        <button>Checkout</button>
        </Link>
    </div>
    </div>
   )
            console.log("hay",cart.line_items)
  return (
    <div>
        <div>
        <h2>Your Shopping Cart</h2>
        {isEmpty ? <FilledCart/> : <EmptyCard/>}
        </div>
    </div>
  )
}

export default Cart