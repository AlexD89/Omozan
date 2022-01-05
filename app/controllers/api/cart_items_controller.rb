class Api::CartItemsController < ApplicationController

    def index
        @cart_items  = current_user.products
        if @cart_items
            render :index
        else
            render json: ["Products are not found"], status: 404
        end
    end

    def create
        @cart_item = Cart.new(cart_params)
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = Cart.find_by(id: params[:id])
        if @cart_item.update
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = Cart.find_by(id: params[:id])
        if @cart_item.destroy
            render :image
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    private
    def cart_params
        params.require(:cart).permit(:buyer_id, :product_id, :product_qty)
    end

end
