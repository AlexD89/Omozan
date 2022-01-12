import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
//Testing
import { login, logout, signup } from "./actions/session_actions";
import { requestProduct, requestAllProducts } from "./actions/products_actions"
import { addCartItem, deleteCartItem, requestCartItems, updateCartItem } from "./actions/cart_items_actions";
import { requestReviews, createReview, updateReview, deleteReview } from "./actions/reviews_actions"
import { requestDepartments, requestDepartment } from './actions/departments_actions'
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

    window.requestCartItems = requestCartItems;
    window.addCartItem = addCartItem;
    window.updateCartItem = updateCartItem;
    window.deleteCartItem = deleteCartItem;

    window.requestAllProducts = requestAllProducts;
    window.requestProduct = requestProduct;

    window.requestReviews = requestReviews;
    window.createReview = createReview;
    window.updateReview = updateReview;
    window.deleteReview = deleteReview;

    window.requestDepartments =requestDepartments;
    //Testing Area

    ReactDOM.render(<Root store={store} />, document.getElementById("root"));
})