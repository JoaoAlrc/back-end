'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('name', 80).notNullable()
      table.string('surname', 200).notNullable()
      table.date('birthdate').notNullable()
      table.string('cpf', 14).notNullable().unique()
      table.string('email', 200).notNullable().unique()
      table.string('password', 80).notNullable()
      table.string('address', 200).notNullable() //endereço completo
      table.string('addressNum', 30).notNullable() //complemento e número
      table.string('neighborhood', 50).notNullable() //bairro
      table.string('city', 50).notNullable()
      table.string('state', 2).notNullable()
      table.string('zipCode', 9).notNullable()
      // table.integer('total_purchases').defaultTo(0).unsigned()
      // table.decimal('total_spent', 12, 2).defaultTo(0.0).unsigned()
      table.integer('image_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
