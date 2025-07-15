import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} style={{ marginBottom: '10px' }}>
                    <strong>{item.title}</strong> - ${item.price} × {item.quantity} = ${item.price * item.quantity}
                    </div>
                ))}

                <hr />
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>

)}
    </div>
  );
}