export const BASKET_LOADING = 'BASKET_LOADING';
export const BASKET_LOADED = 'BASKET_LOADED';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY';
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY';

export function loadBasket() {
    return async (dispatch, _, config) => {
        dispatch({ type: BASKET_LOADING });

        const response = await fetch(config.cartApi, { method: 'POST', body: JSON.stringify({}) });
        const basket = await response.json();

        dispatch({
            type: BASKET_LOADED,
            ...basket,
        })
    };
}

/**
 * When called, will make a POST request to add the item to the cart
 * @param cartId
 * @param itemId
 * @returns {Function}
 */
export function addAnItemToACart(cartId, itemId) {
    return async (dispatch, _, config) => {

        // post request for adding an item to a given cart
        const response = await fetch(`${config.cartApi}/${cartId}/item/${itemId}`, {
            method: 'POST',
            body: JSON.stringify({"quantity": 1})
        });
        const basket = await response.json();

        dispatch({
            type: ADD_TO_BASKET,
            ...basket
        })
    };
}

/**
 * Increments the quantity of a given item
 * @param cartId
 * @param itemId
 * @returns {Function}
 */
export function incItemQuantity(cartId, itemId) {
    return async (dispatch, _, config) => {

        // post request for adding an item to a given cart
        const response = await fetch(`${config.cartApi}/${cartId}/item/${itemId}/increment`, {
            method: 'POST',
            body: JSON.stringify({})
        });
        const basket = await response.json();

        dispatch({
            type: INCREMENT_ITEM_QUANTITY,
            ...basket
        })
    };
}

/**
 * Decrements the quantity of a given item
 * @param cartId
 * @param itemId
 * @returns {Function}
 */
export function decItemQuantity(cartId, itemId) {
    return async (dispatch, _, config) => {

        // post request for adding an item to a given cart
        const response = await fetch(`${config.cartApi}/${cartId}/item/${itemId}/decrement`, {
            method: 'POST',
            body: JSON.stringify({})
        });
        const basket = await response.json();

        dispatch({
            type: INCREMENT_ITEM_QUANTITY,
            ...basket
        })
    };
}
