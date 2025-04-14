import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function ShoppingApp() { // Rename to App if using App.js
    const [products] = useState([ // Usually fetched from an API
      { id: 1, name: 'Duona', price: 1.5 },
      { id: 2, name: 'Pienas', price: 0.9 },
      { id: 3, name: 'Sūris', price: 3.0 },
    ]);
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (productToAdd) => {
      // Could add logic here to handle quantity or check if item already exists
      setCartItems([...cartItems, productToAdd]);
    };
  
    const removeFromCart = (indexToRemove) => {
      setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
    };
  
    // **Props Drilling Example:**
    // 'addToCart' is passed from ShoppingApp -> ProductList -> ProductItem
    // 'cartItems' and 'removeFromCart' are passed from ShoppingApp -> Cart
  
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