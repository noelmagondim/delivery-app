import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function AdminButtons({ logout, name }) {
  const navigate = useNavigate();

  return (
    <>
      <li>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ navigate('/admin/manage') }
        >
          Gerenciar Usuarios
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

AdminButtons.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
