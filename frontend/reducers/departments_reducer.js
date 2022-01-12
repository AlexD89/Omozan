import { RECEIVE_ALL_DEPARTMENTS, RECEIVE_DEPARTMENT_PRODUCTS } from "../actions/departments_actions";

const departmentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, nextState);

    switch (action.type){
        case RECEIVE_ALL_DEPARTMENTS:
            return action.departments;
        default:
            return state;
    }
}

export default departmentsReducer;