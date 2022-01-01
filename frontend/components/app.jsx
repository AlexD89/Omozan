import React from "react";
import { Route, useLocation } from "react-router";
import { AuthRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./signup/login_form_container";
import SplashContainer from "./splash/splash_container";

const App = () => {
    const location = useLocation().pathname;

    return <div>

        <header>
            {location === "/login" || location === "/signup" ? "" : <NavbarContainer />}
        </header>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route exact path='/' component={SplashContainer}/>
    </div>

}

export default App;