import React, { useEffect, useState } from 'react';
import CheckoutAddressForm from '../components/CheckoutAddressForm';
import CheckoutTable from '../components/CheckoutTable';
import NavBar from '../components/NavBar';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = (items) => {
    const total = items.reduce((acc, { price, quantity }) => {
      const subTotal = price * quantity;
      return acc + subTotal;
    }, 0).toFixed(2);

    setTotalPrice(Number(total));
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));

    setCart(cartData);
    getTotalPrice(cartData);
  }, []);

  const removeItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div>
      <NavBar />
      <CheckoutTable
        products={ cart }
        removeItem={ removeItem }
      />
      <CheckoutAddressForm
        products={ cart }
        totalPrice={ totalPrice }
      />
    </div>
  );
}
