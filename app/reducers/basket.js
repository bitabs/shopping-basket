import {
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
        default:
            return state;
    }

}

export default basketReducer;
