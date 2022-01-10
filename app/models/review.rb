class Review < ApplicationRecord
    validates :body, :author_id, :product_id, presence: true
    validates :title, presence: true
    validates :score, presence: true, numericality: { greater_than: 0} 

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
