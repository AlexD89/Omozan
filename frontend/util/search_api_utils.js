export const fetchSearchProducts = (query) => (
    $.ajax({
        method: "GET",
        url: `/api/searches/${query}`
    })
)

export const fetchTitles = () => (
    $.ajax({
        method: "GET",
        url:`/api/searches/?titles=true`
    })
)