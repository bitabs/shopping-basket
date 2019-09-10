import {
    ADD_TO_BASKET,
    BASKET_LOADED, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY
} from '../actions/basket';

function basketReducer(state={ items: {} }, action) {
    console.log(state, action)
    switch(action.type) {
        case BASKET_LOADED:
            return {
                ...state,
                id: action.cartId,
                items: action.cartItems,
            }
        case ADD_TO_BASKET:
            return {
                ...state,
                items: {...action.cartItems}
            }
        case INCREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: {...action.cartItems}
            }

        case DECREMENT_ITEM_QUANTITY:
            return {
                ...state,
                items: {...action.cartItems}
            }
        default:
            return state;
    }

}

export default basketReducer;
