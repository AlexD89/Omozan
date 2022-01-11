class CreateDepartments < ActiveRecord::Migration[6.1]
  def change
    create_table :departments do |t|
      t.string :department, null: false
      t.timestamps
    end

    add_index :departments, :department, unique: true
  end
end
