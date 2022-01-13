export const fetchSearchProducts = (query) => (
    $.ajax({
        method: "GET",
        url: `/api/searches/${query}`
    })
)