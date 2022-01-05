class Cart < ApplicationRecord
    validates :buyer_id, :product_id, :product_qty, presence: true

    belongs_to :buyer,
        foreign_key: :buyer_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
