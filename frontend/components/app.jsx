import React, {useState} from "react";
import { Route, useLocation, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import Footer from "./footer/footer";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./signup/login_form_container";
import SplashContainer from "./splash/splash_container";
import ProductsIndexContainer from "./products/products_index_container";
import ProductsShowContainer from "./products/products_show_container";
import cartIndexContainer from "./cart/cart_index_container";

const App = () => {
    const location = useLocation().pathname;
    return <div>
        <header>
            {location === "/login" || location === "/signup" ? "" : <NavbarContainer />}
        </header>
        
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <Route path="/products/:productId" component={ProductsShowContainer}/>
            <Route path="/products" component={ProductsIndexContainer}/>
            <ProtectedRoute path="/cart" component={cartIndexContainer}/>
            <Route path='/' component={SplashContainer}/>
        </Switch>

        <footer>
            {location === "/login" || location === "/signup" ? "" : <Footer />}
        </footer>
        
    </div>

}

export default App;