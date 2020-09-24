class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:update, :destroy]
  
  def index
    render json: @department.items
  end

  def all_item
    render json: Item.all
  end

  def show
  end

  def create
    item = @department.items.new(item_params)
    if (item.save)
      render json: item
    else
      render json: item.errors, status: 422
    end
  end

  # TODO
  def update
    if(@item.update(item_params))
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
    itm = @item.destroy
    render json: item
  end

  private

  def set_item
    @item = @department.items.find(params[:id])
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

  def item_params
    params.require(:item).permit(:name, :price, :department_id)
  end

end