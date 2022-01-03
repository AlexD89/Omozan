class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        if @products
            render :index
        else
            render json: ["No products"], status: 404
        end
    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product
            render :show
        else
            render json: ["Product is not found"], status: 404
        end
    end
end
