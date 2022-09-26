import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestCustomerOrders, setToken } from '../../services/requests';

export default function CardsCustomerOrders() {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const getCustomerOrders = async () => {
    setToken(localStorage.getItem('token'));

    const orderId = localStorage.getItem('id');
    const data = await requestCustomerOrders(orderId);
    console.log(data);

    if (data.status >= Number('400')) {
      setMessage(data.data.message);
      return;
    }

    setOrders(data);
  };

  useEffect(() => {
    getCustomerOrders();
  }, []);

  return (
    <div>
      {
        (orders.length === 0)
          ? <p>{ message }</p>
          : orders.map((order, index) => (
            <button
              key={ index }
              type="button"
              onClick={ navigate`/customer/orders/:${order.id}` }
            >
              <p data-testid="customer_orders__element-order-id-<id>">
                {order.orderId}
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
          ))
      }
    </div>
  );
}
