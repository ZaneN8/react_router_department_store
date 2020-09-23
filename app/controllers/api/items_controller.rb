class Api::ItemsController < ApplicationController
  before_action :set_item
  
  def index
    render json: @department.items
  end

  def show
  end

  def create

  end

  def update
 
  end

  def destroy
  end

  private

  def item_params
    params.require(:review).permit(:text, :department_id)
  end

  def set_item
    @department = Department.find(params[:department_id])
  end

    
end