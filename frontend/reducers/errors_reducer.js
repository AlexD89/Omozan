import { combineReducers } from "redux";
import reviewsErrorsReducer from "./reviews_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviews: reviewsErrorsReducer
})

export default errorsReducer;