import React from "react";
import { Route, useLocation, Switch } from "react-router";
import { AuthRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import Footer from "./footer/footer";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./signup/login_form_container";
import SplashContainer from "./splash/splash_container";
import ProductsContainer from "./products/products_container";

const App = () => {
    const location = useLocation().pathname;

    return <div>

        <header>
            {location === "/login" || location === "/signup" ? "" : <NavbarContainer />}
        </header>
        
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <Route path="/products" component={ProductsContainer}/>
            <Route path='/' component={SplashContainer}/>
        </Switch>

        <footer>
            {location === "/login" || location === "/signup" ? "" : <Footer />}
        </footer>
        
    </div>

}

export default App;