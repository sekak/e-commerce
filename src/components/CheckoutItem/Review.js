import React, { useState,useEffect } from "react";
import "./review.css" 
import {loadStripe} from '@stripe/stripe-js'
import { Elements ,ElementsConsumer,CardElement} from "@stripe/react-stripe-js";
 
const stripePromise = loadStripe('...')
const Review=({cart})=> {
  console.log("aaaaa",cart)
   return (
    <div>
    <h1>Order summary</h1>
     {cart.line_items.map((item)=>(
        <div key={item.id}>
              <div >
              <div className="conreview">
              <h2>{item.name}</h2>
              <span>{item.price.formatted_with_symbol}</span>
                 </div>
                <p>Quantity: {item.quantity}</p>
                
              </div>
             
        </div>

     ))}      <div className="conreview">
                <h2>Total: {cart.subtotal.formatted_with_symbol}</h2>
                <h2>Total Quantity: {cart.total_items}</h2>
              </div>
              <Elements stripe={stripePromise}>
              <ElementsConsumer>{({ elements, stripe }) => (
                <form >
                  <CardElement />
                  <br /> <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <button type="submit" variant="contained" disabled={!stripe} color="primary">
                      Pay {cart.subtotal.formatted_with_symbol}
                    </button>
                  </div>
                </form>
              )}
              </ElementsConsumer>
            </Elements>
    </div>
  );
}

 

export default  (Review);
