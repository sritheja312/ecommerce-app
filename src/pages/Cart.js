import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: '16px',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '6px',
              }}
            >
              <strong>{item.title}</strong>
              <p>Price: ${item.price}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}

          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
