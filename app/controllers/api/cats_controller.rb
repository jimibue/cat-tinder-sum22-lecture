class Api::CatsController < ApplicationController
  # is before each api call validate token
  before_action :authenticate_user!
 
  def index
    # current user? so when I do authenticate_user! before action
    # devise_token auth will check the token.  if it is valid
    # it will set this current_user variable (the logged in user
   # whom is making the request)
    render json: User.unliked_cats(current_user.liked_cats)
  end

  def update
    # add id of like cat to liked_cat field
    current_user.liked_cats.push(params[:id])
    # save to db
    current_user.save
    render json: current_user
  end

  def my_cats
    render json: User.liked_cats(current_user.liked_cats)
  end
end
