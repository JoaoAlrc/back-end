'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      // custo total dos itens do carrinho
      table.decimal('subtotal', 12, 2).notNullable()
      // valor de desconto aplicado ao pedido
      table.decimal('discount', 12, 2).notNullable().defaultTo(0.00)
      // valor liquido a ser pago pelo cliente (total)
      table.decimal('total', 12, 2).notNullable()
      // status do pedido (aguardando, cancelado, enviado, pago)(padrão: aguardando)
      table
        .enu('status', ['awaiting', 'canceled', 'shipped', 'paid'])
        .defaultTo('awaiting')

      table.integer('cart_id').unsigned()

      table
        .foreign('cart_id')
        .references('id')
        .inTable('carts')
        .onDelete('cascade')

      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
