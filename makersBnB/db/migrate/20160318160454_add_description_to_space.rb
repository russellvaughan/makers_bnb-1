class AddDescriptionToSpace < ActiveRecord::Migration
  def change
    add_column :spaces, :description, :string
  end
end
