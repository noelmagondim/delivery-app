import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function SellerHeader({ sale, changeStatus }) {
  return (
    <>
      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${sale.id};` }
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {' '}
        { moment(sale.saleDate).format('DD/MM/YYYY') }
        {' '}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { sale.status }
      </span>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled={ sale.status !== 'Pendente' }
        onClick={ async () => {
          await changeStatus('Preparando');
        } }
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled={ sale.status !== 'Preparando' }
        onClick={ async () => {
          await changeStatus('Em Trânsito');
        } }
      >
        SAIU PRA ENTREGA
      </button>
    </>
  );
}

SellerHeader.propTypes = {
  sale: PropTypes.objectOf(PropTypes.number).isRequired,
  changeStatus: PropTypes.func.isRequired,
};
