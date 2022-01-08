json.set! @product.id do
    json.partial! "product", product: @product
    # json.imageURL url_for(@product.image)
    json.imageURL url_for("https://m.media-amazon.com/images/I/41R0JzQ1JLL.jpg")
end