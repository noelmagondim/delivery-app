import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Products from './page/Products';
import Seller from './page/Seller';
import Admin from './page/Admin';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/seller/orders" element={ <Seller /> } />
      <Route exact path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
