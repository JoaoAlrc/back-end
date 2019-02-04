'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    // relacionamento entre o produto e as imagens

    images() {
        return this.belongsToMany('App/Models/Image')
    }

    // relacionamento entre Products e Category

    categories() {
        return this.belongsToMany('App/Models/Category')
    }

    // relacionamento entre produtos e cupons de desconto

    coupons() {
        return this.belongsToMany('App/Models/Coupon')
    }
}

module.exports = Product
