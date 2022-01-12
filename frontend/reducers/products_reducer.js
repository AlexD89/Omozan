import { RECEIVE_DEPARTMENT_PRODUCTS } from "../actions/departments_actions";
import { CLEAR_PRODUCTS, RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../actions/products_actions";
import { RECEIVE_SEARCH_PRODUCTS } from "../actions/search_actions";

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SEARCH_PRODUCTS:
            return action.searchProducts
        case RECEIVE_DEPARTMENT_PRODUCTS:
            return action.departmentProducts;
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case CLEAR_PRODUCTS:
            return {};
        case RECEIVE_PRODUCT:
            return nextState[action.product.id] = action.product
        default:
            return state;
    }
}

export default productsReducer;