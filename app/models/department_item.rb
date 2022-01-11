class DepartmentItem < ApplicationRecord
    validates :product_id, :department_id, presence: true
    validates :department_id, uniqueness: { scope: :product_id }

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :department,
        foreign_key: :department_id,
        class_name: :Department
end
