import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
