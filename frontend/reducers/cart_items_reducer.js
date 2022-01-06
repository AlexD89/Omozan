import { 
    RECEIVE_CART_ITEMS, 
    RECEIVE_CART_ITEM, 
    REMOVE_CART_ITEM 
} from "../actions/cart_items_actions";
import {
    LOGOUT_CURRENT_USER
} from "../actions/session_actions"

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem;
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default cartItemsReducer