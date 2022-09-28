import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { requestCreateOrder, requestSellers, setToken } from '../services/requests';

export default function CheckoutAddressForm({ totalPrice, products }) {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const navigate = useNavigate();

  const getSellers = async () => {
    setToken(JSON.parse(localStorage.getItem('user')).token);

    const sellersData = await requestSellers();

    setSellers(sellersData);
    setSelectedSeller(sellersData[0].id);
  };

  const createOrder = async () => {
    const { id, token } = JSON.parse(localStorage.getItem('user'));

    setToken(token);

    const orderPayload = {
      userId: id,
      sellerId: selectedSeller,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      products: products.map((item) => ({ productId: item.id, quantity: item.quantity })),
    };

    const data = await requestCreateOrder(orderPayload);

    if (data) {
      return navigate(`/customer/orders/${data.id}`);
    }
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="seller-name">
          {' '}
          P. Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            value={ selectedSeller }
            onChange={ (e) => setSelectedSeller(Number(e.target.value)) }
            name="seller-name"
          >
            { sellers.length > 0 && sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {
                  seller.name
                }
              </option>))}
          </select>
        </label>
        <label htmlFor="address">
          {' '}
          Endereço
          <input
            type="text"
            name="address"
            value={ address }
            data-testid="customer_checkout__input-address"
            onChange={ (e) => setAddress(e.target.value) }
          />
        </label>
        <label htmlFor="number">
          {' '}
          Número
          <input
            type="text"
            name="number"
            value={ addressNumber }
            data-testid="customer_checkout__input-address-number"
            onChange={ (e) => setAddressNumber(e.target.value) }
          />
        </label>
      </form>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => createOrder() }
      >
        {' '}
        FINALIZAR PEDIDO
        {' '}

      </button>
    </div>
  );
}

CheckoutAddressForm.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
