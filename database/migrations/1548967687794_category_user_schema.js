'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryUserSchema extends Schema {
  up () {
    this.create('category_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('category_id').unsigned()
      table.timestamps()

      table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      
      table
      .foreign('category_id')
      .references('id')
      .inTable('categories')
      .onDelete('cascade')
    })
  }

  down () {
    this.drop('category_users')
  }
}

module.exports = CategoryUserSchema
