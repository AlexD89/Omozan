import * as departmentsApiUtils from "../util/departments_api_utils"

export const RECEIVE_ALL_DEPARTMENTS = 'RECEIVE_ALL_DEPARTMENTS';
export const RECEIVE_DEPARTMENT = 'RECEIVE_DEPARTMENT'

const receiveAllDepartments = (departments) => ({
    type: RECEIVE_ALL_DEPARTMENTS,
    departments
}
) 

const receiveDepartment = department => ({
    type: RECEIVE_DEPARTMENT,
    department
})

export const requestDepartments = () => dispatch => (
    departmentsApiUtils.fetchAllDepartments()
        .then((departments) => dispatch(receiveAllDepartments(departments)))
)

export const requestDepartment = (departmentName) => dispatch => (
    departmentsApiUtils.fetchDepartment(departmentName)
        .then(department => dispatch(receiveDepartment(department)))
)