import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>{item.title} - ${item.price}</div>
      ))}
    </div>
  );
}
