class Api::SamplesController < ApplicationController
    before_action :set_sample, only: [:show, :update, :destroy]
  
    def index
      render json: Sample.all
    end
  
    def show
      render json: @sample
    end
  
    def create
      sample = Sample.new(sample_params)
      if sample.save
        render json: sample
      else
        render json: sample.errors, status: 422
      end
    end
  
    def update
      if @sample.update(sample_params)
        render json: @sample
      else
        render json: @sample.errors, status: 422
      end
    end
  
    def destroy
      @sample.destroy
    end
  
    private
  
      def set_sample
        @sample = Sample.find(params[:id])
      end
  
      def sample_params
        params.require(:sample).permit(:name, :description, :price, :department)
      end
      
  end