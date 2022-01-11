class Department < ApplicationRecord
    validates :department, presence: true

    has_many :department_items,
        foreign_key: :department_id,
        class_name: :DepartmentItem

    has_many :products,
        through: :department_items,
        source: :product
end
