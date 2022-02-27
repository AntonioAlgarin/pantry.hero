class IngredientsController < ApplicationController
    def index
    #  if user_signed_in?
        user = User.find(params[:user_id])
        pantry = user.ingredients.all
        render json: pantry
    #    else
    #     render json: 'please log-in you are not authorized'
    #    end
    end
    def create
        if user_signed_in?
            user = User.find(params[:user_id])
            ingredient = user.ingredients.create(ingredient_params)
            render json: ingredient
        else
            render json: 'please log-in you are not authorized'
        end
    end
    def update
        # if user_signed_in?
            user = User.find(params[:user_id])
            ingredient = user.ingredients.find(params[:id])
            ingredient.update(ingredient_params)
            render json: ingredient
        # else
        #     render json: 'please log-in you are not authorized'
        # end
    end
    def destroy
        if user_signed_in?
            user = User.find(params[:user_id])
            ingredient = user.ingredients.find(params[:id])
            ingredient.destroy
            render json: ingredient
            else
            render json: 'please log-in you are not authorized'
        end
    end


    private
    def ingredient_params
        params.require(:ingredient).permit(:id, :food_id, :name, :image, :quantity, :user_id)
    end
end
