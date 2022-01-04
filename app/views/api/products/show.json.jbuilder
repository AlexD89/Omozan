json.set! @product.id do
    json.partial! "product", product: @product
end