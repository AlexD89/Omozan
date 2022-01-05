class Product < ApplicationRecord

    validates :title, :description, :category, :price, presence: true
    
    has_one_attached :image
end
