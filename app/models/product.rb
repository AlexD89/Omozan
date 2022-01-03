class Product < ApplicationRecord

    validates :title, :description, :category, :price, presence: true
    
end
