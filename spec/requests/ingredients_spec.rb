require 'rails_helper'

RSpec.describe "Ingredients", type: :request do
  describe "GET ingredients#index" do
      it "should get ingredients" do
        user_signed_in=true
        get '/ingredients?user_id=1'
         expect(response).to have_http_status(200)
     end
     # it 'creates a new ingredient' do
     #   ingredient_params = { user_signed_in:true, ingredient: {
     #     food_id: '465',
     #     name: 'pineapple',
     #     image: 'pineapple.jpg',
     #     quantity: '1',
     #     user_id: '1',
     #   }}
     #   post '/ingredients', :params => ingredient_params.to_json, :headers => { "Content-Type": "application/json" }
     #   json = JSON.parse(response.body)
     #   expect(response).to have_http_status(201)
     # end
  end
end
