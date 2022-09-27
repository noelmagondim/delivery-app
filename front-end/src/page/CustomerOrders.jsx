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
    setToken(JSON.parse(localStorage.getItem('user')).token);

    const { id } = JSON.parse(localStorage.getItem('user'));
    const { data } = await requestCustomerOrders(id);
    setOrders(data);
  };

  const getSellerOrders = async () => {
    setToken(JSON.parse(localStorage.getItem('user')).token);

    const { id } = JSON.parse(localStorage.getItem('id'));
    const { data } = await requestSellerOrders(id);
    setOrders(data);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user')).role;

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
