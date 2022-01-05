json.set! @product.id do
    json.partial! "product", product: @product
    json.imageURL url_for(@product.image)
end