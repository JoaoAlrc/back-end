'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    // relacionamento entre o pedidos e os items do pedido
    items() {
        return this.hasMany('App/Models/OrderItem')
    }
}

module.exports = Order
