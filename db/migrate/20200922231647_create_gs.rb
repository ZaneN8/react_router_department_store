class CreateGs < ActiveRecord::Migration[6.0]
  def change
    create_table :gs do |t|
      t.string :Department
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
