'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up() {
    this.create('payments', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('order_id').unsigned()
      table.integer('payment_method_id').unsigned()
      table.string('ip', 100)
      table.decimal('amount', 12, 2)
      // cartão de crédito, email do user, id da transação...
      table.json('details')
      // status => aguardando, aprovado e cancelado
      table
        .enu('status', ['awaiting', 'aproved', 'refused'])
        .defaultTo('awaiting')
      // moeda
      table
        .string('currency', 10)
        .notNullable()
        .defaultTo('BRL')

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')
      table
        .foreign('order_id')
        .references('id')
        .inTable('orders')
        .onDelete('cascade')
      table
        .foreign('payment_method_id')
        .references('id')
        .inTable('payment_methods')
        .onDelete('cascade')

      table.timestamps()
    })
  }

  down() {
    this.drop('payments')
  }
}

module.exports = PaymentSchema
