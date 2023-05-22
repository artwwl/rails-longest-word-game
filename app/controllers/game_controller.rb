require 'open-uri'
require 'json'

class GameController < ApplicationController
  def home
    @start_time = Time.now.to_f
  end

  def score
    start_time = params[:start_time].to_f
    @attempt = params[:word]
    response_hash = JSON.parse(URI.open("https://wagon-dictionary.herokuapp.com/#{@attempt}").read)
    end_time = Time.now.to_f
    @elapsed_time = end_time - start_time
    @score = ((@attempt.length * 10) / (@elapsed_time / 10)) if response_hash['found']

    # @score = @attempt.length if response_hash['found']
    @score = 0 unless response_hash['found']
  end
end
