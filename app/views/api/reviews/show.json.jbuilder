json.set! @review.id do 
    json.extract! @review, :id, :title, :body, :score, :author_id, :product_id
end