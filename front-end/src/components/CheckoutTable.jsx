import React from 'react';
import PropTypes from 'prop-types';

export default function CheckoutTable({ products, removeItem }) {
  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <table>
        <tr>
          <th>item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub total</th>
        </tr>
        { products && products.map((product, i) => {
          const { id, name, quantity, price } = product;
          const subTotal = quantity * price;
          return (
            <tr key={ id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                { i + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                { name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                { quantity }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                { price.replace('.', ',') }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                { subTotal.toFixed(2).replace('.', ',') }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                  onClick={ () => removeItem(id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {' '}
        {products && products.reduce((acc, { price, quantity }) => {
          const subTotal = price * quantity;
          return acc + subTotal;
        }, 0).toFixed(2).toString().replace('.', ',')}
      </span>
    </div>
  );
}

CheckoutTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeItem: PropTypes.func.isRequired,
};
