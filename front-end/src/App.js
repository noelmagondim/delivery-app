import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Admin from './page/Admin';
import OrderDetails from './page/OrderDetails';
import CostumerOrders from './page/CustomerOrders';
import Products from './page/Products';
import Checkout from './page/Checkout';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
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
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
