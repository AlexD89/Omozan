import { CLEAR_REVIEW_ERRORS, RECEIVE_REVIEW_ERRORS } from "../actions/reviews_actions";

const reviewsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            nextState = action.errors;
            return nextState;
        case CLEAR_REVIEW_ERRORS:
            nextState = [];
            return nextState;
        default:
            return state;
    }
}

export default reviewsErrorsReducer;