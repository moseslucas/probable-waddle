Rails.application.routes.draw do
  root to: "home#index"

  namespace :api do
    namespace :v1 do
      resources :users
      resources :messages
      resources :channels do 
        collection do 
          get :public
          get :private
          get :group
        end
      end
    end
  end
end
