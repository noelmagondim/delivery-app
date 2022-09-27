import React, { useEffect, useState } from 'react';
// import CartButton from '../components/CartButton';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
import { requestProducts } from '../services/requests';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalcart] = useState(0);

  const navigate = useNavigate();

  const getProducts = async () => {
    const response = await requestProducts();

    const withQuant = response.map((product) => ({ ...product, quantity: 0 }));

    setProducts(withQuant);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleQuantityChange = (value, product) => {
    const currentProduct = cart.find((item) => item.id === product.id);
    console.log(currentProduct);

    if (!currentProduct) {
      const newProduct = { ...product, quantity: value };
      console.log(newProduct);
      setCart([...cart, newProduct]);
      return;
    }

    const newCart = cart.filter((item) => item.id !== product.id);

    const newQuantity = { ...currentProduct,
      quantity: value };

    console.log(newCart, newQuantity);

    setCart([...newCart, newQuantity]);
  };

  const totalPriceCart = () => {
    const cartValue = cart.reduce((acc, { price, quantity }) => {
      const subTotal = price * quantity;
      return acc + subTotal;
    }, 0).toFixed(2);

    setTotalcart(cartValue);
  };

  useEffect(() => {
    totalPriceCart();
  }, [cart]);

  const redirectToCheckout = () => {
    localStorage.setItem('cart', JSON.stringify(cart));

    navigate('/customer/checkout');
  };

  return (
    <div>
      <NavBar />
      <section>
        { products.map((product) => (
          <ProductCard
            product={ product }
            key={ `${product.name}-${product.id}` }
            handleInput={ handleQuantityChange }
            cart={ cart.find((item) => item.id === product.id) }
          />
        )) }
        <button
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ redirectToCheckout }
          disabled={ cart.length === 0 }
        >
          Ver Carrinho:
          R$
          {' '}
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { totalCart.toString().replace('.', ',') }
          </span>
        </button>
      </section>
    </div>
  );
}
