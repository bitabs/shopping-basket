export const BASKET_LOADING = 'BASKET_LOADING';
export const BASKET_LOADED = 'BASKET_LOADED';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

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
