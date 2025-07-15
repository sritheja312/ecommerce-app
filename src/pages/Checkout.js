import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.map((item, index) => (
        <div key={index}>{item.title} - ${item.price}</div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
