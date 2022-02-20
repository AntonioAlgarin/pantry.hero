class AddUsernameToUser < ActiveRecord::Migration[6.1]
  def change
    # add_column :table, :column_name, :data_type
    add_column :users, :username, :string
  end
end
