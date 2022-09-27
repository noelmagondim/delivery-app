import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function totalPrice(cart) {
  const price = cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);

  return price;
}

export default function CartButton() {
  const [total, setTotal] = useState('0');

  const navigate = useNavigate();

  useEffect(() => {
    const getTotalPrice = () => {
      const price = totalPrice(cart);
      setTotal(price);
    };

    getTotalPrice();
  }, []);

  return (
    <button
      data-testid="customer_products__button-cart"
      disabled={ cart.length === 0 }
      onClick={ () => navigate('/customer/checkout') }
      type="button"
    >
      Ver Carrinho: R$
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { total }
      </span>
    </button>
  );
}
