import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CardsCustomerOrders from '../components/CardsCustomerOrders/CardsCustomerOrders';
import {
  requestCustomerOrders,
  requestSellerOrders,
  setToken } from '../services/requests';

export default function CostumerOrders() {
  const [orders, setOrders] = useState([]);
  const [role, setRole] = useState('');

  const getCustomerOrders = async () => {
    setToken(localStorage.getItem('token'));

    const orderId = localStorage.getItem('id');
    const { data } = await requestCustomerOrders(orderId);
    setOrders(data);
  };

  const getSellerOrders = async () => {
    setToken(localStorage.getItem('token'));

    const orderId = localStorage.getItem('id');
    const { data } = await requestSellerOrders(orderId);
    setOrders(data);
  };

  useEffect(() => {
    const data = localStorage.getItem('role');

    setRole(data);

    return data === 'customer'
      ? getCustomerOrders()
      : getSellerOrders();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Pedidos</h1>
      <div>
        {
          orders.length > 0 && orders.map((order, index) => (
            <Link
              style={ {
                textDecoration: 'none',
              } }
              to={ role === 'customer'
                ? `/customer/orders/${order.id}`
                : `/seller/orders/${order.id}` }
              key={ index }
            >
              <CardsCustomerOrders
                order={ order }
                role={ role }
                key={ index }
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}
