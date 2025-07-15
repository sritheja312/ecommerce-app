import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // 🧠 Find current quantity
  const itemInCart = cartItems.find(item => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div>
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      {quantity > 0 ? (
        <div>
          <button onClick={() => removeFromCart(product.id)}>-</button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
}
