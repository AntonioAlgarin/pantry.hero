require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  it 'should validate a name' do
  ingredient = Ingredient.create
  expect(ingredient.errors[:name]).to_not be_empty
  end
  it 'validates food id' do
    ingredient = Ingredient.create(name:"apple")
    expect(ingredient.errors[:food_id]).to_not be_empty
  end
  it 'validates an image' do
    ingredient = Ingredient.create
    expect(ingredient.errors[:image]).to_not be_empty
  end
  it 'validates quantity' do
    ingredient = Ingredient.create
    expect(ingredient.errors[:quantity]).to_not be_empty
  end
  it 'validates user_id' do
    ingredient = Ingredient.create
    expect(ingredient.errors[:user_id]).to_not be_empty
  end
end
