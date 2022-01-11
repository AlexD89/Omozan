json.extract! department, :id, :department
json.product_ids department.products.map{|prod| prod.id}