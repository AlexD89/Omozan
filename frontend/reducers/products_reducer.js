import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../actions/products_actions";

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            return nextState[action.product.id] = action.product
        default:
            return state;
    }
}

export default productsReducer;