import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = {currentUserId: null}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            nextState.currentUserId = action.user.id
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState.currentUserId = null;
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer;