import { RECEIVE_ALL_DEPARTMENTS, RECEIVE_DEPARTMENT } from "../actions/departments_actions";

const departmentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, nextState);

    switch (action.type){
        case RECEIVE_ALL_DEPARTMENTS:
            return action.departments;
        case RECEIVE_DEPARTMENT:
            nextState[action.department.department] = action.department
            return nextState;
        default:
            return state;
    }
}

export default departmentsReducer;