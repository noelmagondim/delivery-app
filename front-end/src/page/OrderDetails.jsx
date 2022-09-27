import React from 'react';
import NavBar from '../components/NavBar';
import OrderDetailsCard from '../components/OrderDetailsCard';

export default function OrderDetails() {
  return (
    <div>
      <NavBar />
      <h1> Detalhes do Pedido </h1>
      <OrderDetailsCard />
    </div>
  );
}
