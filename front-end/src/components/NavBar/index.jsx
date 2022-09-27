import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerButtons from './components/CustomerButtons';
import AdminButtons from './components/AdminButtons';
import SellerButtons from './components/SellerButtons';

export default function NavBar() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const getUserInfo = () => {
    const { name, role } = JSON.parse(localStorage.getItem('user'));

    setUser({ name, role });
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const tokenNotFound = () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    if (!token) navigate('/login');
  };

  useEffect(getUserInfo, []);

  useEffect(tokenNotFound, [navigate]);

  return (
    <header>
      <nav>
        <ul>
          {user.role === 'administrator' && (
            <AdminButtons logout={ logout } name={ user.name } />
          )}
          {user.role === 'customer' && (
            <CustomerButtons logout={ logout } name={ user.name } />
          )}
          {user.role === 'seller' && (
            <SellerButtons logout={ logout } name={ user.name } />
          )}
        </ul>
      </nav>
    </header>
  );
}
