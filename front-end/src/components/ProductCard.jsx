import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const { id, name, urlImage, price } = product;

  const [quantity, setQuantity] = useState(() => {
    if (!cart || cart.length === 0) return 0;

    const productInCart = cart.find(({ id: productId }) => productId === id);
    return productInCart ? productInCart.qty : 0;
  });

  const addCart = () => {
    setQuantity(quantity + 1);
  };

  const removeCart = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      <img
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </span>
      <p>
        R$
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price }
        </span>
      </p>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        value={ quantity }
      />
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ removeCart }
        >
          -
        </button>
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ addCart }
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
  }).isRequired,
};
