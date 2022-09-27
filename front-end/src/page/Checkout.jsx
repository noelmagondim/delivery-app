import React from 'react';
import CheckoutAddressForm from '../components/CheckoutAddressForm';
import CheckoutTable from '../components/CheckoutTable';
import NavBar from '../components/NavBar';

export default function Checkout() {
  return (
    <div>
      <NavBar />
      <CheckoutTable />
      <CheckoutAddressForm />
    </div>
  );
}
