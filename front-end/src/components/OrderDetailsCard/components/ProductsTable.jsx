import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsTable({ products, role }) {
  return (
    <>
      <table>
        <tr>
          <th>item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub total</th>
        </tr>
        { products && products.map((product) => {
          const { id, name, SalesProducts: { quantity }, price } = product;
          const subTotal = quantity * price;
          return (
            <tr key={ id }>
              <td
                data-testid={ role === 'customer'
                  ? `customer_orders__element-order-table-item-number-${id}`
                  : `seller_order_details__element-order-table-item-number-${id}` }
              >
                { id }
              </td>
              <td
                data-testid={ role === 'customer'
                  ? `customer_orders__element-order-table-name-${id}`
                  : `seller_order_details__element-order-table-name-${id}` }
              >
                { name }
              </td>
              <td
                data-testid={ role === 'customer'
                  ? `customer_orders__element-order-table-quantity-${id}`
                  : `seller_order_details__element-order-table-quantity-${id}` }
              >
                { quantity }
              </td>
              <td
                data-testid={ role === 'customer'
                  ? `customer_orders__element-order-table-unit-price-${id}`
                  : `seller_order_details__element-order-table-unit-price-${id}` }
              >
                { price }
              </td>
              <td
                data-testid={ role === 'customer'
                  ? `customer_orders__element-order-table-sub-total-${id}`
                  : `seller_order_details__element-order-table-sub-total-${id}` }
              >
                { subTotal }
              </td>
            </tr>
          );
        })}
      </table>
      <span
        data-testid={ role === 'customer'
          ? 'customer_order_details__element-order-total-price'
          : 'seller_order_details__element-order-total-price' }
      >
        Total: R$
        {' '}
        {products && products.reduce((acc, { price, SalesProducts: { quantity } }) => {
          const subTotal = price * quantity;
          return acc + subTotal;
        }, 0)}
      </span>
    </>
  );
}

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
  role: PropTypes.string.isRequired,
};
