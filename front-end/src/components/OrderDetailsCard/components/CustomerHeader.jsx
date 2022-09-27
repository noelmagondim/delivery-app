import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { requestSaleChangeStatus } from '../../../services/requests';

export default function CustomerHeader({ sale, seller }) {
  return (
    <>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${sale.id};` }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P.Vend:${seller.name}`}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {' '}
        { moment(sale.saleDate).format('DD/MM/YYYY') }
        {' '}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { sale.status }
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        onClick={ async () => {
          await requestSaleChangeStatus(sale.id, 'Entregue');
        } }
      >
        MARCAR COMO ENTREGUE
      </button>
    </>
  );
}

CustomerHeader.propTypes = {
  sale: PropTypes.objectOf(PropTypes.number).isRequired,
  seller: PropTypes.objectOf(PropTypes.string).isRequired,
};
