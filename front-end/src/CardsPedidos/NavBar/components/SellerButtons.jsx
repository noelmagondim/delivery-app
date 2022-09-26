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
          onClick={ navigate('/seller/orders') }
        >
          Pedidos
        </button>
      </li>
      <li>
        <h1>
          { name }
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

SellerButtons.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
