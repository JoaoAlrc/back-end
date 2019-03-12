'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockSchema extends Schema {
  up() {
    this.create('stocks', (table) => {
      table.increments()
      table.integer('category_id').unsigned().notNullable()
      table.integer('product_id').unsigned().notNullable()
      table.integer('bar_id').unsigned().notNullable()
      table.integer('stock').defaultTo(0)

      table
        .foreign('category_id')
        .references('id')
        .inTable('categories')
        .onDelete('cascade')
      table
        .foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('cascade')
      table
        .foreign('bar_id')
        .references('id')
        .inTable('bars')
        .onDelete('cascade')

      table.timestamps()
    })
  }

  down() {
    this.drop('stocks')
  }
}

module.exports = StockSchema
