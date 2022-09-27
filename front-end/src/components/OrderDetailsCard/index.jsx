import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerHeader from './components/CustomerHeader';
import ProductsTable from './components/ProductsTable';
import { requestOrderDetails, setToken } from '../../services/requests';
import SellerHeader from './components/SellerHeader';

export default function OrderDetailsCard() {
  const [saleInfo, setSaleInfo] = useState({});
  const [role, setRole] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [sellerInfo, setSellerInfo] = useState({});

  const { orderId } = useParams();

  const getDetails = async () => {
    setToken(localStorage.getItem('token'));

    const { data } = await requestOrderDetails(orderId);
    const { products, seller } = data;
    delete data.products;
    delete data.seller;

    setProductsList(products);
    setSellerInfo(seller);
    setSaleInfo(data);
  };

  useEffect(() => {
    getDetails();
    const value = localStorage.getItem('role');

    setRole(value);
  }, []);

  return (
    <div>
      { role === 'customer'
        ? (<CustomerHeader sale={ saleInfo } seller={ sellerInfo } />)
        : (<SellerHeader sale={ saleInfo } />)}
      <ProductsTable products={ productsList } role={ role } />
    </div>
  );
}
