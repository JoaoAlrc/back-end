'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('brand', 80).notNullable()
      table.string('name', 200).notNullable()
      table.text('description')
      table.integer('stock').unsigned().defaultTo(0)
      table.decimal('price', 12, 2).notNullable()
      table.integer('total_orders').unsigned().defaultTo(0)
      table.decimal('total_earnings', 12, 2).unsigned().defaultTo(0.0)
      table.integer('image').unsigned()
      table.timestamps()
    })

    this.create('image_product', table => {
      table.increments()
      table.integer('image_id').unsigned()
      table.integer('product_id').unsigned()

      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade')

      table
        .foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('cascade')

    })
  }

  down () {
    this.drop('image_product')
    this.drop('products')
  }
}

module.exports = ProductSchema
