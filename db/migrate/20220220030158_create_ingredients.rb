class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :food_id
      t.string :name
      t.string :image
      t.integer :quantity
      t.integer :user_id

      t.timestamps
    end
  end
end
