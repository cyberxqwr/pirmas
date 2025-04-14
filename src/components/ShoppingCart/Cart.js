function Cart({ cartItems, removeFromCart }) {
    return (
      <div>
        <h2>Krepšelis</h2>
        {cartItems.length === 0 ? (
          <p>Krepšelis tuščias</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}> {}
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>Pašalinti iš krepšelio</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  export default Cart;