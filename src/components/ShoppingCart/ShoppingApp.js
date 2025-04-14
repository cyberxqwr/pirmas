import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function ShoppingApp() {
    const [products] = useState([
      { id: 1, name: 'Duona', price: 1.5 },
      { id: 2, name: 'Pienas', price: 0.9 },
      { id: 3, name: 'Sūris', price: 3.0 },
    ]);
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (productToAdd) => {
      
      setCartItems([...cartItems, productToAdd]);
    };
  
    const removeFromCart = (indexToRemove) => {
      setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
    };
  
    // **Props Drilling:**
    // 'addToCart' ateina per ShoppingApp -> ProductList -> ProductItem
    // 'cartItems' ir 'removeFromCart' pareina per ShoppingApp -> Cart
  
    return (
      <div>
        <h1>Parduotuvė</h1>
        <ProductList products={products} addToCart={addToCart} />
        <hr />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    );
  }
  
  export default ShoppingApp;