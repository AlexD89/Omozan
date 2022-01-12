Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :cart_items, only: [:index, :create, :update, :destroy]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :departments, only: [:index, :show]
    resources :searches, only: [:index, :show]
  end

  root "static_pages#root"
end
