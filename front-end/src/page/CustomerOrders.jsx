import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CardsCustomerOrders from '../components/CardsCustomerOrders/CardsCustomerOrders';
import { requestCustomerOrders, setToken } from '../services/requests';

export default function CostumerOrders() {
  const [orders, setOrders] = useState([]);

  const getCustomerOrders = async () => {
    setToken(localStorage.getItem('token'));

    const orderId = localStorage.getItem('id');
    const { data } = await requestCustomerOrders(orderId);
    console.log(data);
    setOrders(data);
  };

  useEffect(() => {
    getCustomerOrders();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Pedidos</h1>
      <div>
        {
          orders && orders.map((order, index) => (
            <CardsCustomerOrders order={ order } key={ index } />
          ))
        }
      </div>
      <Footer />
    </div>
  );
}
