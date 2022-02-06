class Api::SearchesController < ApplicationController

    def index
        if (params[:titles])
            @titles = Product.all.pluck('title')
            render json: @titles
        else
            @products = Product
                                .joins(:departments)
                                .where("departments.department = ?", params[:dep])
                                .where("title ILIKE ?", "%#{params[:title].downcase}%")
            if @products
                render "/api/products/index"
            else
                render json: ['Products not found'], status: 404
            end 
        end      
    end
end
