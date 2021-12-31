import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
//Testing
import { login, logout, signup } from "./actions/session_actions";
//testing

document.addEventListener("DOMContentLoaded",()=>{

    const store = configureStore();

    //Testing Area
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    //Testing Area

    ReactDOM.render(<Root store={store} />, document.getElementById("root"));
})