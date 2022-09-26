import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardsCustomerOrders() {
  const navigate = useNavigate();

  return data.map((element, index) => (
    <button
      key={ index }
      type="button"
      onClick={ navigate('/customer/orders/:orderId') }
    >
      <p data-testid="customer_orders__element-order-id-<id>">
        {element.oderId}
      </p>

      <p data-testid="customer_orders__element-delivery-status-<id>">
        {element.status}
      </p>

      <p data-testid="customer_orders__element-order-date-<id>">
        {element.sale_data}
      </p>

      <p data-testid="customer_orders__element-card-price-<id>">
        {element.total_price}
      </p>
    </button>
  ));
}
