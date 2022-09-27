import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function SellerButtons({ logout, name }) {
  const navigate = useNavigate();

  return (
    <>
      <li>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ navigate('/seller/orders') }
        >
          Pedidos
        </button>
      </li>
      <li>
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
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

SellerButtons.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
