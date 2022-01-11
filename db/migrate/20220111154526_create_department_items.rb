class CreateDepartmentItems < ActiveRecord::Migration[6.1]
  def change
    create_table :department_items do |t|
      t.integer :department_id, null:false
      t.integer :product_id, null: false
      t.timestamps
    end

    add_index :department_items, [:department_id, :product_id], unique: true
    add_index :department_items, :product_id
  end
end
