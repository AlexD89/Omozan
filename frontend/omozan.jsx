import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
//Testing
import { login, logout, signup } from "./actions/session_actions";
import { requestProduct, requestAllProducts } from "./actions/products_actions"
import { fetchAllCartItems, addCartItem, updateCartItem, deleteCartItem } from "./util/cart_api_utils"
//testing

document.addEventListener("DOMContentLoaded",()=>{

    let store;
    if (window.currentUser) {
        const preLoadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //Testing Area
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.fetchAllCartItems = fetchAllCartItems;
    window.addCartItem = addCartItem;
    window.updateCartItem = updateCartItem;
    window.deleteCartItem = deleteCartItem;

    window.requestAllProducts = requestAllProducts;
    window.requestProduct = requestProduct;
    //Testing Area

    ReactDOM.render(<Root store={store} />, document.getElementById("root"));
})