import React from 'react';

export default function CheckoutAddressForm() {
  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="seller-name">
          {' '}
          P. Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            name="seller-name"
          >
            <option value="nice">NICE</option>
          </select>
        </label>
        <label htmlFor="address">
          {' '}
          Endereço
          <input
            type="text"
            name="address"
            data-testid="customer_checkout__input-address"
            onChange={ () => {} }
          />
        </label>
        <label htmlFor="number">
          {' '}
          Número
          <input
            type="text"
            name="number"
            data-testid="customer_checkout__input-address-number"
            onChange={ () => {} }
          />
        </label>
      </form>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => {} }
      >
        {' '}
        FINALIZAR PEDIDO
        {' '}

      </button>
    </div>
  );
}
