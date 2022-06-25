import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/products/Products";
import { commerce } from "./lib/commerce";
import "./index.css";
import Cart from "./components/Cart/Cart";
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import Checkout from "./components/CheckoutItem/Checkout/Checkout";
import Review from "./components/CheckoutItem/Review";

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<null | object>(null);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleUpdateCartQty = async (productId, quantity) =>{
    const response = await commerce.cart.update(productId, {quantity})
    setCart(response.cart)
  }

  const handleRemoveCartQty = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart)
  }

  const handleEmptyCart = async () =>{
    const response = await commerce.cart.empty()
    setCart(response.cart)
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  const test=true;
  return (
    <div className="app">
      <Router>
        {cart ? (
          <div>
            <Navbar cart={cart} />
            {!test ? <Review cart={cart}/> : ""}
            <Switch>
              <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart}/>
              </Route>
              <Route exact path="/cart">
                <Cart cart={cart}
                handleRemoveCartQty={handleRemoveCartQty}
                handleEmptyCart={handleEmptyCart}
                handleUpdateCartQty={handleUpdateCartQty}
                />
              </Route>
              <Route>
                <Checkout cart={cart}/>
              </Route>
            </Switch>
          </div>
        ) : null}
      </Router>
    </div>
  );
}

export default App;
