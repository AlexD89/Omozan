@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :buyer_id, :product_id, :product_qty
    end
end