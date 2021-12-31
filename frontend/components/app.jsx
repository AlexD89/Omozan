import React from "react";
import { Route } from "react-router";
import NavbarContainer from "./navbar/navbar_container";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./signup/login_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
    </div>

)

export default App;