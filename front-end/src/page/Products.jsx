import React, { useState } from 'react';
// import CartButton from '../components/CartButton';
import ProductCard from '../components/ProductCard';
// import NavBar from '../components/NavBar';
// import { requestProducts } from '../services/requests';

export default function Products() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <section>
        { products.map((product) => (
          <ProductCard product={ product } key={ `${product.name}-${product.id}` } />
        )) }
      </section>
    </div>
  );
}
