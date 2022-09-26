import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CardsCustomerOrders from '../components/CardsCustomerOrders/CardsCustomerOrders';

export default function CostumerOrders() {
  return (
    <div>
      <NavBar />
      <h1>Pedidos</h1>
      <CardsCustomerOrders />
      <Footer />
    </div>
  );
}
