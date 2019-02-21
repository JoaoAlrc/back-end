'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarSchema extends Schema {
  up () {
    this.create('bars', (table) => {
      table.increments()
      table.string('barname', 80).notNullable().unique()
      table.string('cnpj', 18).notNullable().unique()
      table.string('address', 200).notNullable()
      table.string('addressNum', 30).notNullable()
      table.string('neighborhood', 50).notNullable()
      table.string('city', 50).notNullable()
      table.string('state', 2).notNullable()
      table.string('zipCode', 9).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bars')
  }
}

module.exports = BarSchema
