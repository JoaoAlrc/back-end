'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BarTable extends Model {
    bar() {
        return this.belongsTo('App/Models/Bar')
    }
    order() {
        return this.hasMany('App/Models/Order')
    }
}

module.exports = BarTable
