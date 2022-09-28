import React, { useEffect, useState } from 'react';
import CheckoutAddressForm from '../components/CheckoutAddressForm';
import CheckoutTable from '../components/CheckoutTable';
import NavBar from '../components/NavBar';

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));

    setCart(cartData);
  }, []);

  const removeItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div>
      <NavBar />
      <CheckoutTable products={ cart } removeItem={ removeItem } />
      <CheckoutAddressForm />
    </div>
  );
}
