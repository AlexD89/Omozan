import React from "react";
import { Route, useLocation, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import Footer from "./footer/footer";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./signup/login_form_container";
import SplashContainer from "./splash/splash_container";
import ProductsIndexContainer from "./products/products_index_container";
import ProductsShowContainer from "./products/products_show_container";
import CartIndexContainer from "./cart/cart_index_container";
import CreateReviewContainer from "./reviews/create_review_container";
import EditReviewContainer from "./reviews/edit_review_container";
import SearchIndexContainer from "./searchbar/search_index_container";

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
            <Route path="/departments/:departmentName" component={ProductsIndexContainer}/>
            <Route path="/search/:query" component={SearchIndexContainer}/>
            <ProtectedRoute path="/cart" component={CartIndexContainer}/>
            <ProtectedRoute path="/reviews/create-review/:productId" component={CreateReviewContainer}/>
            <ProtectedRoute path="/reviews/edit-review/:productId" component={EditReviewContainer}/>
            <Route path='/' component={SplashContainer}/>
        </Switch>

        <footer>
            {location === "/login" || location === "/signup" ? "" : <Footer />}
        </footer>
        
    </div>

}

export default App;