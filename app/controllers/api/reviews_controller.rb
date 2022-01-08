class Api::ReviewsController < ApplicationController
    def index 
        @product = Product.find_by(id: params[:product_id])
        @reviews = @product.reviews
        if @reviews
            render :index
        else
            render json: ["No reviews found"], status: 404
        end
    end
    
    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render :show
        else
            render json: ["Can't delete this review"], status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :score, :author_id, :product_id)
    end
end
