import React from "react";
import ReactDOM from "react-dom";
//Testing
import { login, logout, signup } from "./util/session_api_utils";
//testing

document.addEventListener("DOMContentLoaded",()=>{

    //Testing Area
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    //Testing Area

    ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"));
})