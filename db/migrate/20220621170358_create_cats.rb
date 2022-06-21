class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :registry
      t.string :avatar

      t.timestamps
    end
  end
end
