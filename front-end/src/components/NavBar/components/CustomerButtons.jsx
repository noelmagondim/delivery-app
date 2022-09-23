import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CustomerButtons({ logout, name }) {
  const navigate = useNavigate();

  return (
    <>
      <li>
        <button
          type="button"
          onClick={ navigate('/customer/products') }
        >
          Pedidos
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={ navigate('/customer/orders') }
        >
          Meus Pedidos
        </button>
      </li>
      <li>
        <h1>
          {name}
        </h1>
      </li>
      <li>
        <button
          type="button"
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
