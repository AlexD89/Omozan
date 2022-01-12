scoresArr = (product.reviews.map {|review| review.score})

json.extract! product, :id, :title, :description, :price
#json.imageURL url_for(@product.image)
json.imageURL url_for("https://m.media-amazon.com/images/I/41R0JzQ1JLL.jpg")
json.avgScore (scoresArr.size == 0 ? 0 : scoresArr.sum / scoresArr.size).round(2)