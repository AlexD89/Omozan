export const fetchSearchProducts = (dep, title) => (
    $.ajax({
        method: "GET",
        url: `/api/searches/?dep=${dep}&title=${title}`
    })
)