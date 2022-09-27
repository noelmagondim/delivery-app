import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CardsCustomerOrders({ order }) {
  const navigate = useNavigate();
  console.log(order);
  return (
    <div>
      <button
        type="button"
        onClick={ navigate`/customer/orders/:${order.id}` }
      >
        <p data-testid="customer_orders__element-order-id-<id>">
          {order.id}
        </p>

        <p data-testid="customer_orders__element-delivery-status-<id>">
          {order.status}
        </p>

        <p data-testid="customer_orders__element-order-date-<id>">
          {order.saleDate}
        </p>

        <p data-testid="customer_orders__element-card-price-<id>">
          {order.totalPrice}
        </p>
      </button>
    </div>
  );
}

CardsCustomerOrders.propTypes = {
  order: PropTypes.objectOf(PropTypes.string).isRequired,
};
