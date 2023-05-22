Rails.application.routes.draw do
  get 'game/home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'game#home'

  get '/score', to: 'game#score'
end
