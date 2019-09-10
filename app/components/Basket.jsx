import React from 'react';

/**
 * Our Basket that will list out the products that we added
 * @param basket
 * @param products
 * @param incrementItemQuantity
 * @returns {*}
 * @constructor
 */
const Basket = ({ basket, products, incrementItemQuantity, decrementItemQuantity }) => {
  return (
    <div className="mr-4">
      <h2>Basket</h2>
      <ul className="list-group">
        {
          basket.items && Object.values(basket.items).map(({itemId, quantity}) => {
            const findProduct = products.filter(({id}) => itemId === id)[0]
            const { id, name, price } = findProduct
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={itemId}>
                <span>Product: <b>{name}</b></span>
                <span>Price: <b>£{price}</b></span>
                <span>Quantity: <b>{quantity}</b></span>
                <div className="counter__cta">
                  <button type="button" className="btn btn-success btn-circle btn-sm mr-2" onClick={() => incrementItemQuantity(basket.id, id)}>+</button>
                  <button type="button" className="btn btn-danger btn-circle btn-sm" onClick={() => decrementItemQuantity(basket.id, id)}>-</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

export default Basket;
