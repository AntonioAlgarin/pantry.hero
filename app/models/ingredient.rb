class Ingredient < ApplicationRecord
  belongs_to :user
  validates :name, :food_id, :image, :user_id, presence: true
end
