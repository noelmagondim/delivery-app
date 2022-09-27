import React from 'react';

export default function CheckoutTable({ products }) {
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
        { products && products.map((product) => {
          const { id, name, SalesProducts: { quantity }, price } = product;
          const subTotal = quantity * price;
          return (
            <tr key={ id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
              >
                { id }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${id}` }
              >
                { name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
              >
                { quantity }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
              >
                { price }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
              >
                { subTotal }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
              >
                <button
                  type="button"
                  onClick={ () => removeProduct(id) }
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
        {products && products.reduce((acc, { price, SalesProducts: { quantity } }) => {
          const subTotal = price * quantity;
          return acc + subTotal;
        }, 0)}
      </span>
    </div>
  );
}

CheckoutTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
