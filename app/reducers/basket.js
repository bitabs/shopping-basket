import {
    ADD_TO_BASKET,
    BASKET_LOADED,
} from '../actions/basket';

function basketReducer(state={ items: {} }, action) {
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
        default:
            return state;
    }

}

export default basketReducer;
