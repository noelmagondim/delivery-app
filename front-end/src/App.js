import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Customer from './page/Customer';
import Admin from './page/Admin';
import OrderDetails from './page/OrderDetails';
import CostumerOrders from './page/CustomerOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Customer /> } />
      <Route exact path="/admin/manage" element={ <Admin /> } />
      <Route
        exact
        path="/customer/orders/:orderId"
        element={
          <OrderDetails />
        }
      />
      <Route
        exact
        path="/seller/orders/:orderId"
        element={
          <OrderDetails />
        }
      />
      <Route exact path="/customer/orders" element={ <CostumerOrders /> } />
      <Route exact path="/seller/orders" element={ <CostumerOrders /> } />
    </Routes>
  );
}

export default App;
