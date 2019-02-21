'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarSchema extends Schema {
  up() {
    this.create('tables', (table) => {
      table.increments()
      table.integer('bar_id').unsigned()
      table.timestamps()

      table
        .foreign('bar_id')
        .references('id')
        .inTable('bars')
        .onDelete('CASCADE')
    })
  }

  down() {
    this.drop('tables')
  }
}

module.exports = BarSchema
