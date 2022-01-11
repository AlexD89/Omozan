export const fetchAllDepartments = () => (
    $.ajax({
        method: "GET",
        url: "/api/departments"
    })
)

export const fetchDepartment = (departmentName) => (
    $.ajax({
        method: "GET",
        url: `/api/departments/${departmentName}`
    })
)

