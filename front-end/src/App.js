import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="login" replace /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
