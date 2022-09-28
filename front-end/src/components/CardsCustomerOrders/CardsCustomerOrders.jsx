import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function CardsCustomerOrders({ order, role }) {
  return (
    <div>
      <p
        data-testid={
          role === 'customer'
            ? `customer_orders__element-order-id-${order.id}`
            : `seller_orders__element-order-id-${order.id}`
        }
      >
        {order.id}
      </p>

      <p
        data-testid={
          role === 'customer'
            ? `customer_orders__element-delivery-status-${order.id}`
            : `seller_orders__element-delivery-status-${order.id}`
        }
      >
        {order.status}
      </p>

      <p
        data-testid={
          role === 'customer'
            ? `customer_orders__element-order-date-${order.id}`
            : `seller_orders__element-order-date-${order.id}`
        }
      >
        { moment(order.saleDate).format('DD/MM/YYYY') }
      </p>

      <p
        data-testid={
          role === 'customer'
            ? `customer_orders__element-card-price-${order.id}`
            : `seller_orders__element-card-price-${order.id}`
        }
      >
        {order.totalPrice.toString().replace('.', ',')}
      </p>
      { role === 'seller' && (
        <p>
          { order.deliveryAddress }
        </p>
      ) }
    </div>
  );
}

CardsCustomerOrders.propTypes = {
  order: PropTypes.objectOf(PropTypes.string).isRequired,
  role: PropTypes.string.isRequired,
};
