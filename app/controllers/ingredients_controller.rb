class IngredientsController < ApplicationController
    def index
    #  if user_signed_in?
        user = User.find(params[:id])
        pantry = user.ingredients.all
        render json: pantry
    #    else
    #     render json: 'please log-in you are not authorized'
    #    end
    end
    def create
    #     if user_signed_in?
            user = User.find(params[:id])
            ingredient = user.ingredients.create(ingredient_params)
            render json: ingredient
    #     else
    #         render json: 'please log-in you are not authorized'
    #     end
    end
    def update
    #     if user_signed_in?
            user = User.find(params[:user_id])
            ingredients = user.ingredients
            ingredients.update(quantity: params[:quantity])
            render json: ingredients.where(["id=?",params[:id]])

            # User.where(["name = ? and email = ?", "Joe", "joe@example.com"])
    #     else
    #         render json: 'please log-in you are not authorized'
    #     end
    end
    def destroy
    #     if user_signed_in?
            user = User.find(params[:id])
            ingredient = user.ingredients.find(params[:food_id].to_i)
            ingredient.destroy
            render json: ingredient
    #         else
    #         render json: 'please log-in you are not authorized'
    #     end
    end


    private
    def ingredient_params
        params.require(:ingredient).permit(:id, :food_id, :name, :image, :quantity)
    end
end
