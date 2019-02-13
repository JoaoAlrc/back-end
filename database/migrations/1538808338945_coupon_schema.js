'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
    up() {
        this.create('coupons', table => {
            table.increments()
            table.string('code', 100).notNullable()
            table.decimal('discount', 12, 2).notNullable()
            table.dateTime('valid_from').defaultTo(this.fn.now())
            table.dateTime('valid_until')
            // limite de  uso
            table.integer('quantity').defaultTo(1)

            // tipo ('gratis', porcentagem ou moeda)
            table
                .enu('type', ['free', 'percent', 'currency'])
                .defaultTo('currency')
            // pode ser utilizado junto com outros cupons?
            table.boolean('recursive').defaultTo(false)

            table.timestamps()
        })
    }

    down() {
        this.drop('coupons')
    }
}

module.exports = CouponSchema
