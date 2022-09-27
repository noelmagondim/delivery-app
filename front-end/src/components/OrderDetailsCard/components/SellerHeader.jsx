import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { requestSaleChangeStatus } from '../../../services/requests';

export default function SellerHeader({ sale }) {
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
        onClick={ async () => {
          await requestSaleChangeStatus(sale.id, 'Preperando');
        } }
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        onClick={ async () => {
          await requestSaleChangeStatus(sale.id, 'Em Trânsito');
        } }
      >
        SAIU PRA ENTREGA
      </button>
    </>
  );
}

SellerHeader.propTypes = {
  sale: PropTypes.objectOf(PropTypes.number).isRequired,
};
