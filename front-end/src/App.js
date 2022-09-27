import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Customer from './page/Customer';
import Seller from './page/Seller';
import Admin from './page/Admin';
import OrderDetails from './page/OrderDetails';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Customer /> } />
      <Route exact path="/seller/orders" element={ <Seller /> } />
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
    </Routes>
  );
}

export default App;
