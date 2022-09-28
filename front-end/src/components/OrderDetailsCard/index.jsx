import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerHeader from './components/CustomerHeader';
import ProductsTable from './components/ProductsTable';
import { requestOrderDetails,
  requestSaleChangeStatus, setToken } from '../../services/requests';
import SellerHeader from './components/SellerHeader';

export default function OrderDetailsCard() {
  const [saleInfo, setSaleInfo] = useState({});
  const [role, setRole] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [sellerInfo, setSellerInfo] = useState({});

  const { orderId } = useParams();

  const getDetails = async () => {
    setToken(JSON.parse(localStorage.getItem('user')).token);

    const { data } = await requestOrderDetails(orderId);
    const { products, seller } = data;
    delete data.products;
    delete data.seller;

    setProductsList(products);
    setSellerInfo(seller);
    setSaleInfo(data);
  };

  const changeStatus = async (status) => {
    await requestSaleChangeStatus(orderId, status);
    getDetails();
  };

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('user')).role;

    setRole(value);
  }, [role]);

  return (
    <div>
      { role === 'customer'
        ? (
          <CustomerHeader
            sale={ saleInfo }
            changeStatus={ changeStatus }
            seller={ sellerInfo }
          />)
        : (
          <SellerHeader
            changeStatus={ changeStatus }
            sale={ saleInfo }
          />)}
      <ProductsTable products={ productsList } role={ role } />
    </div>
  );
}
