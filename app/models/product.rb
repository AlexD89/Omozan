class Product < ApplicationRecord

    validates :title, :description, :price, presence: true
    
    has_one_attached :image

    has_many :carts,
        foreign_key: :product_id,
        class_name: :Product

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

    has_many :department_items,
        foreign_key: :product_id,
        class_name: :DepartmentItem

    has_many :departments,
        through: :department_items,
        class_name: :Department

end
