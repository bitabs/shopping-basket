import React from 'react';

/**
 * Our Basket that will list out the products that we added
 * @param basket
 * @param products
 * @returns {*}
 * @constructor
 */
const Basket = ({ basket, products }) => {
  return (
    <div className="mr-4">
      <h2>Baskets</h2>
      <ul className="list-group">
        {
          basket.items && Object.values(basket.items).map(({itemId, quantity}) => {
            const findProduct = products.filter(({id}) => itemId === id)[0]
            const { name, price } = findProduct
            return (
              <li className="list-group-item d-flex justify-content-between" key={itemId}>
                <span>Product: <b>{name}</b></span>
                <span>Price: <b>£{price}</b></span>
                <span>Quantity: <b>{quantity}</b></span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default Basket;
