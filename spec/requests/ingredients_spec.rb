require 'rails_helper'

RSpec.describe "Ingredients", type: :request do
  describe "GET ingredients#index" do
      it "should get ingredients" do
        user_signed_in=true
        get '/ingredients?user_id=1'
         expect(response).to have_http_status(200)
     end
  end
end
