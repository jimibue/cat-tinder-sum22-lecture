# frozen_string_literal: true

class User < ActiveRecord::Base
  # liked_cats is stored as text in my DB.
  # by serilaing it I can treat like an array in rails
  serialize :liked_cats, Array
  
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.unliked_cats(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked_cats(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where("id IN (?)", ids).order("RANDOM()")
  end
end
