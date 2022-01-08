import { combineReducers } from "redux";
import cartItemsReducer from "./cart_items_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cartItems: cartItemsReducer,
    reviews: reviewsReducer
})

export default entitiesReducer;
