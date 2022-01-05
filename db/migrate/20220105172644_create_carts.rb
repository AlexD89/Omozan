class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :product_qty, null: false
      t.integer :buyer_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end

    add_index :carts, :buyer_id
    add_index :carts, :product_id
  end
end
