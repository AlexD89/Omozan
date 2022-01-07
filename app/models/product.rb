class Product < ApplicationRecord

    validates :title, :description, :category, :price, presence: true
    
    has_one_attached :image

    has_many :carts,
        foreign_key: :product_id,
        class_name: :Product

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

end
