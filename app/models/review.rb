class Review < ApplicationRecord
    validates :title, :body, :score, :author_id, :product_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
