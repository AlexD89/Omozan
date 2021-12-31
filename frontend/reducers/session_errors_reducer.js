import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type){
        case RECEIVE_ERRORS:
            nextState = action.errors;
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState = [];
            return nextState;
        default:
            return state;
    }
}

export default sessionErrorsReducer;