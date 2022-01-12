class Api::SearchesController < ApplicationController

    def index
        
        @products = Product
                            .joins(:departments)
                            .where("departments.department = ?", params[:dep])
                            .where("title like ?", "%#{params[:title].downcase}%")
        if @products
            render "/api/products/index"
        else
            render json: ['Products not found'], status: 404
        end 
    end
end
