class Ingredient < ApplicationRecord
  belongs_to :user
  validates :name, :food_id, :image, :quantity, :user_id, presence: true
end
