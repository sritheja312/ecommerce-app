import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2 className='text-4xl font-bold mb-6 mt-6 text-center'>Latest Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.slice(0, 5).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}
