import * as departmentsApiUtils from "../util/departments_api_utils"

export const RECEIVE_ALL_DEPARTMENTS = 'RECEIVE_ALL_DEPARTMENTS';
export const RECEIVE_DEPARTMENT_PRODUCTS = 'RECEIVE_DEPARTMENT_PRODUCTS'

const receiveAllDepartments = (departments) => ({
    type: RECEIVE_ALL_DEPARTMENTS,
    departments
}) 

const receiveDepartment = departmentProducts => ({
    type: RECEIVE_DEPARTMENT_PRODUCTS,
    departmentProducts
})

export const requestDepartments = () => dispatch => (
    departmentsApiUtils.fetchAllDepartments()
        .then((departments) => dispatch(receiveAllDepartments(departments)))
)

export const requestDepartmentProducts = (departmentName) => dispatch => (
    departmentsApiUtils.fetchDepartment(departmentName)
        .then(departmentProducts => dispatch(receiveDepartment(departmentProducts)))
)