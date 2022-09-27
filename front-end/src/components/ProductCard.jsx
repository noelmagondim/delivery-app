import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export default function ProductCard({
  product,
  handleInput }) {
  const [input, setInput] = useState(0);

  useEffect(() => input > 0 && handleInput(input, product), [input]);

  return (
    <div>
      <img
        alt={ product.name }
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
      />
      <span
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        { product.name }
      </span>
      <p>
        R$
        <span
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          { product.price.toString().replace('.', ',') }
        </span>
      </p>
      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ input }
        type="number"
        onChange={ ({ target }) => setInput(Number(target.value)) }
      />
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          type="button"
          onClick={ () => input > 0 && setInput(input - 1) }
        >
          -
        </button>
        <button
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
          type="button"
          onClick={ () => setInput(input + 1) }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  cart: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
};
