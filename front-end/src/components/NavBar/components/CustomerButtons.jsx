import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CustomerButtons({ logout, name }) {
  const navigate = useNavigate();

  const handleRedirect = (route) => {
    navigate(route);
  };

  return (
    <>
      <li>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => handleRedirect('/customer/products') }
        >
          Produtos
        </button>
      </li>
      <li>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => handleRedirect('/customer/orders') }
        >
          Meus Pedidos
        </button>
      </li>
      <li>
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {name}
        </h1>
      </li>
      <li>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </li>
    </>
  );
}

CustomerButtons.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
