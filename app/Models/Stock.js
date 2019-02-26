'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Stock extends Model {
    product() {
        return this.belongsTo('App/Models/Product')
    }

    bar() {
        return this.belongsTo('App/Models/Bar')
    }
}

module.exports = Stock
