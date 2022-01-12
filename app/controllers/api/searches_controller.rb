class Api::SearchesController < ApplicationController

    def index
        @search_products = Product
                            .joins(:departments)
                            .where("departments.department = ?", params[:dep])
                            .where("title like ?", "%#{params[:title].downcase}%")
        if @search_products
            render json: @search_products
        else
            render json: ['Product not found'], status: 404
        end 
    end
end
