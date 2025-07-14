import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Latest Products</h2>
      {products.slice(0, 4).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
